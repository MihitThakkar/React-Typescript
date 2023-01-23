import { format } from "date-fns";

const dateFormat = (
  dateString: any,
  formatType?: string,
  parseToSeconds?: boolean,
  isLastDayOfMonth?: boolean
) => {
  if (parseToSeconds && !isLastDayOfMonth) {
    var utcSeconds = dateString;
    var d = new Date(0);
    dateString = d.setUTCSeconds(utcSeconds);
  }
  if (isLastDayOfMonth) {
    dateString = new Date(dateString * 1000);
    dateString = new Date(
      dateString.getFullYear(),
      dateString.getMonth() + 1,
      0
    );
    dateString = dateString.getTime() - dateString.getMilliseconds();
  }
  if (!dateString) return;
  dateString =
    dateString.toString().length === 10 ? dateString * 1000 : dateString;
  return format(dateString, formatType || "dd MMM, yy");
};

export default dateFormat;
