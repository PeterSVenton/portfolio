import { Callout } from "@/components/callouts";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="prose text-xs sm:text-sm md:text-base mx-auto px-6 sm:px-0 max-w-[75ch] prose-h1:text-center prose-h1:text-6xl py-18">
        <Callout kind="danger" className="mb-18">
        <p><strong>You’ve reached an internal document from PETER’s knowledge base</strong></p>

        <p>This article isn’t designed for broad interest or general readership.  
        It exists primarily so the knowledge base has accurate reference information for contextual understanding.</p>

        <p>You’re welcome to read it, just keep in mind its purpose is internal reference rather than a polished or topic focused guide.</p>
        </Callout>      
    {children}
      </div>
    )
  }