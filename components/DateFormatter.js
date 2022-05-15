import { LOCALE } from '../lib/constants'
import { cx } from '../lib/utils'

const DateFormatter = ({ dateString, className }) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const formatted = new Intl.DateTimeFormat(LOCALE, options).format(
        new Date(dateString),
    )
    return (
        <time
            dateTime={dateString}
            className={cx('uppercase tracking-wider text-sm', className)}
        >
            {formatted}
        </time>
    )
}

export default DateFormatter
