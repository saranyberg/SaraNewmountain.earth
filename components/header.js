import Link from 'next/link'

import { BLOG_NAME, BLOG_TAGLINE } from '../lib/constants'
import MobileMenu from './MobileMenu'

const backgrounds = {
    green: 'bg-gradient-to-bl from-green-200 to-green-500',
    transparent: '',
}

export default function Header({ bg = 'green' }) {
    const background = backgrounds[bg]
    return (
        <header className={`w-full mb-8 md:mb-12 ${background} shadow-lg`}>
            <div className="container text-center flex items-center justify-between mx-auto p-4">
                <span className="text-5xl -mt-4">🏔</span>
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
                        <Link href="/">
                            <a className="hover:underline">{BLOG_NAME}</a>
                        </Link>
                    </h2>
                    <p className="mt-2 text-sm md:text-md lg:text-lg italic">
                        {BLOG_TAGLINE}
                    </p>
                </div>
                <MobileMenu />
            </div>
        </header>
    )
}
