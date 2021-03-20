export default function PostTitle({ children }) {
    return (
        // <h1 className="p-4 text-2xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-tight md:leading-none mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
            {/* <h1 className="p-4 text-2xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-tight md:leading-none mb-8"> */}
            {children}
        </h1>
    )
}
