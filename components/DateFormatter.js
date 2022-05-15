import { cx, formatDate } from '../lib/utils'

const DateFormatter = ({ dateString, className }) => {
    return (
        <time
            dateTime={dateString}
            className={cx(
                'uppercase tracking-wider text-base block',
                className,
            )}
        >
            {formatDate(dateString)}
        </time>
    )
}

export default DateFormatter
