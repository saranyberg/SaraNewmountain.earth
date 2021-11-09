import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import { BLOG_TITLE } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import CoverImage from '../../components/CoverImage'
import DateFormatter from '../../components/DateFormatter'

const Post = ({ post }) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Header />
            <Container>
                {router.isFallback ? (
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                        Loading…
                    </h1>
                ) : (
                    <>
                        <article className="mb-32 prose lg:prose-xl mx-auto bg-white p-8 rounded-md">
                            <Head>
                                <title>
                                    {post.title} | {BLOG_TITLE}
                                </title>
                                <meta
                                    property="og:image"
                                    content={post.ogImage.url}
                                />
                            </Head>
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                                {post.title}
                            </h1>
                            <div className="mb-8 sm:mx-0 shadow-xl">
                                <CoverImage
                                    title={post.title}
                                    src={post.coverImage}
                                />
                            </div>
                            <div className="max-w-2xl mx-auto">
                                <div className="mb-6 text-lg">
                                    <DateFormatter dateString={post.date} />
                                </div>
                            </div>
                            <article
                                className="max-w-2xl mx-auto"
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />
                        </article>
                    </>
                )}
            </Container>
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
