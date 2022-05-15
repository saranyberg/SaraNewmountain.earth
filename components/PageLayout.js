import Container from './Container'
import Layout from './Layout'
import Header from './Header'

export default function PageLayout({ children }) {
    return (
        <Layout>
            <Header />
            <Container className="max-w-max bg-white bg-opacity-90 mx-auto rounded-md p-4 sm:p-8 md:p-12">
                <article className="prose prose-lg xl:prose-xl 2xl:prose-2xl marker:text-black">
                    {children}
                </article>
            </Container>
        </Layout>
    )
}
