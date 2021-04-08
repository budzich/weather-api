import {days} from './constants';

export const formatDate = (time, timeStr) => {
  const date = new Date(time * 1000);
  const arr = date.toString().toLowerCase().split(' ');

  return `${arr[0]}, ${arr[2][0] === '0' ? arr[2][1] : arr[2]} ${arr[1]} ${timeStr}`;
};

export const sliceHours = (arr, arr2, time) => {
  const hour = time.split(':')[0];
  const hoursToday = 23 - hour;

  return [...arr.slice(hour, hour + hoursToday), ...arr2.slice(0, 23 - hoursToday)];
};

export const formatDay = time => {
  const date = new Date(time * 1000).getDay();

  return date === new Date().getDay() ? 'Today' : days[date];
};
