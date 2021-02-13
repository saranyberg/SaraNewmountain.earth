import Link from 'next/link'

import { BLOG_NAME } from '../lib/constants'

export default function Header() {
    return (
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8 mb-4 md:mt-8 md:mb-12">
            <Link href="/">
                <a className="hover:underline">{BLOG_NAME}</a>
            </Link>
        </h2>
    )
}
