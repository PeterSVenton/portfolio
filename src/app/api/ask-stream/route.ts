// app/api/ask-stream/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  BedrockAgentRuntimeClient,
  RetrieveAndGenerateCommand,
} from "@aws-sdk/client-bedrock-agent-runtime";

const client = new BedrockAgentRuntimeClient({
  region: process.env.BEDROCK_REGION,
});

export async function POST(req: NextRequest) {
  const { question } = await req.json();

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
            textPromptTemplate: process.env.BEDROCK_SYSTEM_PROMPT,
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

  const answer =
    resp.output?.text ??
    (typeof (resp as any).output?.message === "string"
      ? (resp as any).output?.message
      : "");

  // citations has a lot of info so filter it, its okay to have internal documents will put a header that warns the user the document they're on is solely for knowledge base
  const citations =
    resp.citations
      ?.flatMap((c) => c.retrievedReferences || [])
      ?.map((r) => ({
        title: r.metadata?.title ?? "A document which Peter forgot to title",
        url: r.metadata?.url ?? null, //create a custom page for when this happens it should be impossible
      })) ?? [];

  return NextResponse.json({ answer, citations });
}
