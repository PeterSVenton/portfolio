// app/api/ask-stream/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  BedrockAgentRuntimeClient,
  RetrieveAndGenerateCommand,
} from "@aws-sdk/client-bedrock-agent-runtime";
import fs from "fs";
import path from "path";

const client = new BedrockAgentRuntimeClient({
  region: "eu-central-1"
});

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  const promptPath = path.join(process.cwd(), "bedrock_system_prompt.txt");
  const bedrockSystemPrompt = fs.readFileSync(promptPath, "utf8");

  const cmd = new RetrieveAndGenerateCommand({
    input: { text: question },
    retrieveAndGenerateConfiguration: {
      type: "KNOWLEDGE_BASE",
      knowledgeBaseConfiguration: {
        knowledgeBaseId: process.env.BEDROCK_KB_ID!,
        modelArn: process.env.BEDROCK_MODEL_ARN!,
        generationConfiguration: {
          promptTemplate: {
            // Send in the system prompt
            textPromptTemplate: bedrockSystemPrompt,
          },
          // inferenceConfig: { temperature: 0.3 }
        },
        retrievalConfiguration: {
          vectorSearchConfiguration: { numberOfResults: 6 },
        },
      },
    },
  });

  const resp = await client.send(cmd);

  const answer = resp.output?.text

  // citations has a lot of info so filter it, its okay to have internal documents will put a header that warns the user the document they're on is solely for knowledge base
  const citationsMap =
  resp.citations
    ?.flatMap((c) => c.retrievedReferences || [])
    ?.reduce((acc, r) => {
      const url = r.metadata?.url ?? "/bedrock/missing"; //add a special route for when this happens
      const title = r.metadata?.title ?? "A document which Peter forgot to title";

      const existing = acc.get(url);
      if (existing) {
        existing.count += 1;
      } else {
        acc.set(url, { title, url, count: 1 });
      }
      return acc;
    }, new Map());

const citations = citationsMap
  ? Array.from(citationsMap.values())
  : [];

  return NextResponse.json({ answer, citations });
}
