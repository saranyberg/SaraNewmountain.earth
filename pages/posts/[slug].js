import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Image from 'next/image'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import { BLOG_TITLE } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

import Header from '../../components/Header'
import Layout from '../../components/Layout'
import DateFormatter from '../../components/DateFormatter'

const Post = ({ post }) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Header />
            {router.isFallback ? (
                <h1 className="text-2xl lg:text-5xl font-bold tracking-tighter leading-tight text-center">
                    Loading…
                </h1>
            ) : (
                <div className="max-w-max bg-white mx-auto rounded-md p-4 sm:p-8 md:p-12 mb-32">
                    <article className="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl">
                        <Head>
                            <title>
                                {post.title} | {BLOG_TITLE}
                            </title>
                            <meta
                                property="og:image"
                                content={post.ogImage.url}
                            />
                        </Head>
                        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-tight !mb-4">
                            {post.title}
                        </h1>
                        <DateFormatter
                            dateString={post.date}
                            className="mb-8"
                        />
                        <Image
                            src={post.coverImage}
                            width={1280}
                            height={720}
                            layout="intrinsic"
                            objectFit="contain"
                            className="mb-8"
                        />
                        <section
                            className="max-w-prose mx-auto marker:text-black"
                            dangerouslySetInnerHTML={{
                                __html: post.content,
                            }}
                        />
                    </article>
                </div>
            )}
        </Layout>
    )
}

export default Post

export const getStaticProps = async ({ params }) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export const getStaticPaths = () => {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
