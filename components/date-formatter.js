import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
    const date = parseISO(dateString)
    return (
        <time
            dateTime={dateString}
            className="uppercase tracking-wider text-sm">
            {format(date, 'LLLL	d, yyyy')}
        </time>
    )
}
