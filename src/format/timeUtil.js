import moment from 'moment';

export function getUnixTime(dateStr) {
  let newstr = dateStr.replace(/-/g, '/');
  let date = new Date(newstr);
  let time_str = date.getTime().toString();
  return time_str.substr(0, 13);
}

/**
 * 计算两个日期之间的天数
 *  date1  开始日期 yyyy-MM-dd
 *  date2  结束日期 yyyy-MM-dd
 *  如果日期相同 返回一天 开始日期大于结束日期，返回0
 */
export function getDaysBetween(date1, date2) {
  const startDate = moment(date1).format('YYYY-MM-DD');
  const endDate = moment(date2).format('YYYY-MM-DD');
  return moment(endDate).diff(startDate, 'day');
}

// 返回格式为xx天xx小时xx分钟xx秒xx毫秒
export function getDayHourMinute(faultDate, completeTime) {
  let stime = Date.parse(new Date(faultDate));
  let etime = Date.parse(new Date(completeTime));
  // 两个时间戳相差的毫秒数
  let usedTime = etime - stime;
  // 计算相差的天数
  let days = Math.floor(usedTime / (24 * 3600 * 1000));
  // 计算天数后剩余的毫秒数
  let leave1 = usedTime % (24 * 3600 * 1000);
  // 计算出小时数
  let hours = Math.floor(leave1 / (3600 * 1000));
  // 计算小时数后剩余的毫秒数
  let leave2 = leave1 % (3600 * 1000);
  // 计算相差分钟数
  let minutes = Math.floor(leave2 / (60 * 1000));
  ///计算相差秒数
  let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  let seconds = Math.round(leave3 / 1000);
  let leave4 = leave3 % (60 * 1000); //计算分钟数后剩余的毫秒数
  let minseconds = Math.round(leave4 / 1000);
  let time =
    '耗时：' +
    days +
    ' 天 ' +
    hours +
    ' 小时 ' +
    minutes +
    ' 分钟 ' +
    seconds +
    ' 秒 ';
  // +
  // minseconds +
  // '毫秒';
  return time;
}
export const getFormatTime = (dateString, type) => {
  let date = new Date(dateString);

  let year = date.getFullYear(); // 获取年份
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 获取月份，注意要加1，并补齐两位数
  let day = date.getDate().toString().padStart(2, '0'); // 获取日期，并补齐两位数
  let hour = date.getHours().toString().padStart(2, '0'); // 获取小时，并补齐两位数
  let minute = date.getMinutes().toString().padStart(2, '0'); // 获取分钟，并补齐两位数
  let second = date.getSeconds().toString().padStart(2, '0'); // 获取秒钟，并补齐两位数

  if (type === 'dateType') {
    return `${year}年${month}月${day}日`;
  } else {
    return `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`;
  }
};
