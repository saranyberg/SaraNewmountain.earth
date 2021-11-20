import Container from './Container'
import Layout from './Layout'
import Header from './Header'

export default function PageLayout({ children }) {
    return (
        <Layout>
            <Header />
            <Container class="prose lg:prose-xl mx-auto">{children}</Container>
        </Layout>
    )
}
