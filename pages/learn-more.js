import Head from 'next/head'

import { BLOG_TITLE } from '../lib/constants'

import Container from '../components/Container'
import Header from '../components/Header'
import Layout from '../components/Layout'

const LearnMore = () => (
    <Layout>
        <Head>
            <title>{BLOG_TITLE}</title>
        </Head>
        <Header />
        <Container>
            <article className="mb-32 prose lg:prose-xl mx-auto">
                <h1>Learn more about climate change</h1>
                <p>very informative, indeed.</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </article>
        </Container>
    </Layout>
)

export default LearnMore
