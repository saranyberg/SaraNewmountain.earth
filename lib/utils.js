import { LOCALE } from '../lib/constants'

export const cx = (...classes) => classes.filter(Boolean).join(' ').trim()

const options = { month: 'long', day: 'numeric', year: 'numeric' }
const { format } = new Intl.DateTimeFormat(LOCALE, options)

export const formatDate = (dateString) => format(new Date(dateString))
