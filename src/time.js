/* eslint-disable require-jsdoc */
import {format, fromUnixTime} from 'date-fns'

function dateConverter(dt) {
    const result = fromUnixTime(dt)
    const date = format(new Date(result), "iii MMM do HH:mm")
    return date
}

export {dateConverter}