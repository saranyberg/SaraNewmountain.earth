import Image from 'next/image'
import Link from 'next/link'

import { SARA_IMAGE } from '../lib/constants'
import { cx } from '../lib/utils'

const Welcome = ({ className }) => (
    <section
        className={cx(
            'bg-white grid md:grid-cols-[max-content_1fr] py-4 px-8 md:p-8 max-w-max rounded-md mx-auto gap-4 md:gap-8 items-center justify-items-center',
            className,
        )}
    >
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-48 md:h-48 rounded-full relative overflow-hidden shadow-xl">
            <Image
                src={SARA_IMAGE}
                alt="Sara Nyberg"
                layout="fill"
                objectFit="cover"
                quality={80}
            />
        </div>
        <div className="max-w-prose text-lg">
            <h2 className="text-4xl font-bold tracking-tighter pb-4 md:pb-2 text-center md:text-left">
                Welcome!
            </h2>
            <p className="max-w-prose text-lg">
                My name is Sara Nyberg. I want to do everything I can, and as
                long as I can, to reduce the emissions of greenhouse gases which
                are contributing to the climate crisis we are in. I have been
                active for ten years in different environmental and climate
                organisations and have a degree in environmental and energy
                systems engineering.{' '}
                <Link href="/about-me">
                    <a className="underline">Read more</a>
                </Link>
            </p>
        </div>
    </section>
)

export default Welcome
