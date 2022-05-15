import Head from 'next/head'

import { getAllPosts } from '../lib/api'
import { BLOG_TITLE } from '../lib/constants'

import Container from '../components/Container'
import Post from '../components/Post'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Welcome from '../components/Welcome'

const Index = ({ allPosts }) => {
    return (
        <Layout>
            <Head>
                <title>{BLOG_TITLE}</title>
            </Head>
            <Header />
            <Container>
                <Welcome className="my-16" />
                <div className="grid gap-16 max-w-6xl mx-auto">
                    <h2 className="text-6xl font-bold tracking-tighter text-white drop-shadow-2xl">
                        Latest posts
                    </h2>
                    {Boolean(allPosts.length) &&
                        allPosts.map((post) => (
                            <Post {...post} key={post.title} />
                        ))}
                </div>
            </Container>
        </Layout>
    )
}

export default Index

export const getStaticProps = () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}
