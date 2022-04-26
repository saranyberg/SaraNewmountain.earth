import Link from 'next/link'
// import Image from 'next/image'

import { cx } from '../lib/utils'

const CoverImage = ({
    title,
    src,
    slug,
    height,
    width,
    layout = 'responsive',
}) => {
    const image = (
        // <Image
        //     src={src}
        //     alt={`Cover Image for ${title}`}
        //     className={cn('shadow-lg rounded-md', {
        //         'hover:shadow-xl transition-shadow duration-200': slug,
        //     })}
        //     layout={layout}
        //     width={width}
        //     height={height}
        // />
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            className={cx(
                'shadow-lg rounded-md w-full',
                slug ? 'hover:shadow-xl transition-shadow duration-200' : '',
            )}
        />
    )
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage
