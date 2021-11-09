import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ children }) => (
    <>
        <Meta />
        <main className="min-h-screen">{children}</main>
        <Footer />
    </>
)

export default Layout
