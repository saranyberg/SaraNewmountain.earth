import { use100vh } from 'react-div-100vh'
import Image from 'next/image'

import '../styles/index.css'
import bgImage from '../public/assets/images/bg.jpg'

const App = ({ Component, pageProps }) => {
    const height = use100vh()
    return (
        <>
            <div
                className="fixed top-0 left-0 -z-10 w-screen bg-[#6b6a53]"
                style={{ height: height ? height + 'px' : '100vh' }}
            >
                <Image
                    src={bgImage}
                    alt="Green hills with sunshine and person with backpack enjoying the view"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    quality={80}
                />
            </div>
            <Component {...pageProps} />
        </>
    )
}

export default App
