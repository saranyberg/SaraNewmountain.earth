import { LOCALE } from '../lib/constants'

export default function DateFormatter({ dateString }) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(dateString)
    const americanDate = new Intl.DateTimeFormat(LOCALE, options).format(date)
    return (
        <time
            dateTime={dateString}
            className="uppercase tracking-wider text-sm">
            {americanDate}
        </time>
    )
}
