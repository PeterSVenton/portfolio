export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="prose text-xs sm:text-sm md:text-base mx-auto px-6 sm:px-0 max-w-[75ch] prose-h1:text-center prose-h1:text-6xl py-18">
        {children}
      </div>
    )
  }