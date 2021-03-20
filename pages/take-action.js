import Head from 'next/head'

import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { BLOG_TITLE } from '../lib/constants'

export default function TakeAction() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{BLOG_TITLE}</title>
                </Head>
                <Header />
                <Container>
                    <article className="prose lg:prose-xl mx-auto">
                        <h1>Take action!</h1>
                        <p>very informative, indeed.</p>
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
