import Head from 'next/head'

import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { BLOG_TITLE } from '../lib/constants'

export default function LearnMore() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{BLOG_TITLE}</title>
                </Head>
                <Container>
                    <Header />
                    <article className="mb-32 prose lg:prose-xl mx-auto">
                        <h1>About me</h1>
                        <p>
                            My name is Sara Nyberg. (Start in a more exciting
                            way!)
                        </p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </article>
                </Container>
            </Layout>
        </>
    )
}
