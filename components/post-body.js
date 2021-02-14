export default function PostBody({ content }) {
    return (
        <article
            className="max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}
