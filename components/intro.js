import { BLOG_TAGLINE, BLOG_NAME } from '../lib/constants'

export default function Intro() {
    return (
        <section className="flex-col md:flex-row flex md:justify-between md:items-center my-8 md:my-12 h-20 items-center">
            <h1 className="text-3xl md:text-2xl lg:text-4xl mb-4 md:mb-0 font-bold tracking-tighter leading-tight md:mr-8 bg-gradient-to-bl p-2 lg:p-4 rounded-md">
                {BLOG_NAME}
            </h1>
            <p className="text-center md:text-left text-md xl:text-lg md:ml-8">
                {BLOG_TAGLINE}
            </p>
        </section>
    )
}
