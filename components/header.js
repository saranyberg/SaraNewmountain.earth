import Link from 'next/link'

import { BLOG_NAME, BLOG_TAGLINE } from '../lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
    return (
        <header className="w-full mb-8 md:mb-12 bg-green-500 shadow-lg text-white">
            <div className="container text-center flex items-center justify-between mx-auto p-4">
                <Link href="/">
                    <a className="text-5xl -mt-4">🏔</a>
                </Link>
                <div>
                    <h2 className="text-3xl md:text-4xl font-thin tracking-wide">
                        <Link href="/">
                            <a className="hover:underline">{BLOG_NAME}</a>
                        </Link>
                    </h2>
                    <p className="mt-2 text-xs md:text-sm lg:text-md italic font-thin tracking-widest">
                        {BLOG_TAGLINE}
                    </p>
                </div>
                <MobileMenu />
            </div>
        </header>
    )
}
