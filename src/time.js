/* eslint-disable require-jsdoc */
import { format } from "date-fns";

function dateConverter(dt, tz) {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const newTime = utc + 1000 * tz;
  const realTime = new Date(newTime);

  const date = format(realTime, "iii MMM do HH:mm");
  return date;
}

export { dateConverter };
