import Link from 'next/link'

import DateFormatter from '../components/DateFormatter'
import CoverImage from './CoverImage'

const MoreStories = ({ posts }) => (
    <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {posts.map(({ slug, title, coverImage, date, excerpt }) => (
                <div key={slug}>
                    <div className="mb-6">
                        <CoverImage
                            slug={slug}
                            title={title}
                            src={coverImage}
                            height={278}
                            width={556}
                        />
                    </div>
                    <h3 className="text-3xl mb-4 leading-snug">
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4">
                        <DateFormatter dateString={date} />
                    </div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                </div>
            ))}
        </div>
    </section>
)

export default MoreStories
