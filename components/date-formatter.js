import { LOCALE } from '../lib/constants'

export default function DateFormatter({ dateString }) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const formatted = new Intl.DateTimeFormat(LOCALE, options).format(
        new Date(dateString),
    )
    return (
        <time
            dateTime={dateString}
            className="uppercase tracking-wider text-sm"
        >
            {formatted}
        </time>
    )
}
