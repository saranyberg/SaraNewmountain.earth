import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Let's take action together.
                        <br />
                        What's your next move?
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        <a
                            href="https://nextjs.org/docs/basic-features/pages"
                            className="mx-4 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                            I want to take action
                        </a>
                        <a
                            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                            className="mx-4 font-bold hover:underline">
                            I want to learn more
                        </a>
                        {/* TODO:
                        
                        - add page for "take action"
                        - add page for "learn more"
                        - add intro about me
                        tudelinoodlez@tuta.io

                        - remove post author
                        - move up date above main post image

                        */}
                    </div>
                </div>
            </Container>
        </footer>
    )
}
