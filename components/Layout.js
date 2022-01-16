import Head from 'next/head'

import Footer from './Footer'

import { BLOG_TITLE, HOME_OG_IMAGE_URL, BLOG_TAGLINE } from '../lib/constants'

const Layout = ({ children, title = '' }) => (
    <>
        <Head>
            <title>
                {title ? title + ' | ' : ''}
                {BLOG_TITLE}
            </title>
            <meta name="theme-color" content="#000" />
            <meta name="description" content={BLOG_TAGLINE} />
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <main className="min-h-screen">{children}</main>
        <Footer />
    </>
)

export default Layout
