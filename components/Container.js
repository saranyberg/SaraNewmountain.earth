import classNames from 'classnames'

const Container = ({ children, className }) => (
    <div className={classNames('container mx-auto px-4', className)}>
        {children}
    </div>
)

export default Container
