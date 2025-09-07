export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="prose mx-auto max-w-[75ch] prose-h1:text-center prose-h1:text-6xl py-18">
        {children}
      </div>
    )
  }