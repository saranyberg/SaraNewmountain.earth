import { cx } from '../lib/utils'

const Container = ({ children, className }) => (
    <div className={cx('container mx-auto px-4', className)}>{children}</div>
)

export default Container
