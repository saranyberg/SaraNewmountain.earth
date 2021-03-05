import Link from 'next/link'

import { BLOG_NAME, BLOG_TAGLINE } from '../lib/constants'

export default function Header() {
    return (
        <header className="mt-8 mb-4 md:mt-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
                <Link href="/">
                    <a className="hover:underline">{BLOG_NAME}</a>
                </Link>
            </h2>
            <p className="mt-2">{BLOG_TAGLINE}</p>
        </header>
    )
}
