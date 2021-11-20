import Container from './Container'
import Layout from './Layout'
import Header from './Header'

export default function PageLayout({ children }) {
    return (
        <Layout>
            <Header />
            <Container className="max-w-max bg-white bg-opacity-80 mx-auto rounded-md p-4 sm:p-8 md:p-16 mb-32">
                <article className="prose lg:prose-lg 2xl:prose-xl">
                    {children}
                </article>
            </Container>
        </Layout>
    )
}
