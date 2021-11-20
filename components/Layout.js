import Head from 'next/head'

import Footer from './Footer'
import Meta from './Meta'

import { BLOG_TITLE } from '../lib/constants'

const Layout = ({ children, title = '' }) => (
    <>
        <Head>
            <title>
                {title ? title + ' | ' : ''}
                {BLOG_TITLE}
            </title>
        </Head>
        <Meta />
        <main className="min-h-screen">{children}</main>
        <Footer />
    </>
)

export default Layout
