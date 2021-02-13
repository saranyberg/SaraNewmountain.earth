export default function PostTitle({ children }) {
    return (
        <h1 className="p-4 text-2xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center bg-gradient-to-bl from-green-200 to-green-500 rounded-md shadow-md">
            {children}
        </h1>
    )
}
