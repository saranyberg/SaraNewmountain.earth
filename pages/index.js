import Head from 'next/head'

import { getAllPosts } from '../lib/api'
import { BLOG_TITLE } from '../lib/constants'

import Container from '../components/Container'
import MoreStories from '../components/MoreStories'
import HeroPost from '../components/HeroPost'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Index = ({ allPosts }) => {
    const [heroPost, ...morePosts] = allPosts
    return (
        <Layout>
            <Head>
                <title>{BLOG_TITLE}</title>
            </Head>
            <Header />
            <Container>
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
