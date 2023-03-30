import { format, parseISO } from 'date-fns'

export function getTimeInSeconds(time?: string) {
  if (time) {
    const hour = Number(format(parseISO(time), 'H'))
    const minute = Number(format(parseISO(time), 'm'))
    const timeInSeconds = (hour * 60 + minute) * 60

    return timeInSeconds
  } else {
    const hour = Number(format(new Date(), 'H'))
    const minute = Number(format(new Date(), 'm'))
    const timeInSeconds = (hour * 60 + minute) * 60

    return timeInSeconds
  }
}
