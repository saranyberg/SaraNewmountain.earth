import Link from 'next/link'
import Image from 'next/image'

import DateFormatter from './DateFormatter'

const Post = ({ title, coverImage, date, excerpt, slug }) => (
    <section className="bg-white p-8 rounded-md">
        <h3 className="mb-8 text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
            </Link>
        </h3>
        <div className="md:grid md:grid-cols-2 md:gap-4 items-start relative">
            <Image
                src={coverImage}
                width={1280}
                height={720}
                layout="intrinsic"
                objectFit="contain"
            />

            <div className="max-w-prose grid text-lg h-full items-start">
                <DateFormatter dateString={date} className="my-4 md:mt-0" />
                <p>{excerpt}</p>
                <Link href={`/posts/${slug}`}>
                    <a className="mt-4 md:place-self-end text-center bg-gradient-to-r from-accent-500 to-accent-400 text-white rounded-sm hover:shadow-lg font-bold py-3 px-12 lg:px-8">
                        Read more &rarr;
                    </a>
                </Link>
            </div>
        </div>
    </section>
)

export default Post
