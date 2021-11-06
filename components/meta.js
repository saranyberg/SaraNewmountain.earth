import Head from 'next/head'

import { HOME_OG_IMAGE_URL, BLOG_TAGLINE } from '../lib/constants'

const Meta = () => (
    <Head>
        <meta name="theme-color" content="#000" />
        <meta name="description" content={BLOG_TAGLINE} />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
)

export default Meta
