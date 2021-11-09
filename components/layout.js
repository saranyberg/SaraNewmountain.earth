import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ children }) => (
    <>
        <Meta />
        <main className="min-h-screen bg-transparent">{children}</main>
        <Footer />
    </>
)

export default Layout
