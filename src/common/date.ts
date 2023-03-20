import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from 'date-fns';

const curDate = new Date();
format(curDate, 'yyyy-MM-dd HH:mm:ss.SSS'); // 2021-10-11 10:30:25.495

export const getElapsedTime = (prevTime: string) => {
  console.log(prevTime);
  prevTime = prevTime.replace('T', ' ').split('+')[0];
  const prevDate = new Date(prevTime);
  format(prevDate, 'yyyy-MM-dd HH:mm:ss.SSS'); // 2020-04-08 13:25:30.000

  const diffInYear = differenceInYears(curDate, prevDate);
  const diffInMonths = differenceInMonths(curDate, prevDate);
  const diffInWeeks = differenceInWeeks(curDate, prevDate);
  const diffInDays = differenceInDays(curDate, prevDate);
  const diffInHours = differenceInHours(curDate, prevDate);
  const diffInMinutes = differenceInMinutes(curDate, prevDate);
  const diffInSeconds = differenceInSeconds(curDate, prevDate);
  let result = '';
  if (diffInYear > 0) {
    result = `${diffInYear}년`;
  } else if (diffInMonths > 0) {
    result = `${diffInMonths}달`;
  } else if (diffInWeeks > 0) {
    result = `${diffInWeeks}주`;
  } else if (diffInDays > 0) {
    result = `${diffInDays}일`;
  } else if (diffInHours > 0) {
    result = `${diffInHours}시간`;
  } else if (diffInMinutes > 0) {
    result = `${diffInMinutes}분`;
  } else if (diffInSeconds > 0) {
    result = `${diffInSeconds}초`;
  }
  return result;
};

export const getCreateDate = (data: string) => {
  return data.split('T')[0].split('-').join('.') + '.';
};
