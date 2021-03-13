import Head from 'next/head'

import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { BLOG_TITLE } from '../lib/constants'

export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{BLOG_TITLE}</title>
                </Head>
                <Container>
                    <Header />
                    <h1>Action</h1>
                </Container>
            </Layout>
        </>
    )
}
