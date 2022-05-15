import Link from 'next/link'

import DateFormatter from './DateFormatter'
import CoverImage from './CoverImage'

const Post = ({ title, coverImage, date, excerpt, slug }) => (
    <section>
        <div className="mb-8 md:mb-16 max-w-3xl mx-auto p-2 bg-white rounded-md">
            <CoverImage
                title={title}
                src={coverImage}
                slug={slug}
                height={620}
                width={1240}
            />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 bg-white p-8 rounded-md">
            <div>
                <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a className="hover:underline">{title}</a>
                    </Link>
                </h3>
                <DateFormatter dateString={date} className="mb-4 md:mb-0" />
            </div>
            <div>
                <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            </div>
        </div>
    </section>
)

export default Post
