import Link from 'next/link'

import Container from './Container'

const Footer = () => (
    <footer className="bg-accent-1 border-t border-accent-2">
        <Container>
            <div className="py-28 flex flex-col lg:flex-row items-center">
                <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-white">
                    Let's take action together.
                    <br />
                    What's your next move?
                </h3>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                    <Link href="/take-action">
                        <a className="mx-4 bg-white hover:bg-gradient-to-r hover:from-accent-500 hover:to-accent-400 text-black hover:text-white rounded-sm font-bold py-3 px-12 lg:px-8 mb-6 lg:mb-0">
                            I want to take action
                        </a>
                    </Link>
                    <Link href="/learn-more">
                        <a className="mx-4 font-bold text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-sm py-3 px-12 lg:px-8">
                            I want to learn more
                        </a>
                    </Link>
                </div>
            </div>
        </Container>
    </footer>
)

export default Footer
