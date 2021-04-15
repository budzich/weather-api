import {days} from './constants';

export const formatDate = (time) => {
  const date = new Date(time);
  const arr = date.toString().toLowerCase().split(' ');

  return `${arr[0]}, ${arr[2][0] === '0' ? arr[2][1] : arr[2]} ${arr[1]} ${arr[4].slice(0, -3)}`;
};

export const sliceHours = (arr, arr2, difference) => {
  const hour = new Date().getHours() + +difference;
  const hoursToday = 23 - hour;

  return [...arr.slice(hour, hour + hoursToday), ...arr2.slice(0, 23 - hoursToday)];
};

export const formatDay = time => {
  const date = new Date(time * 1000).getDay();

  return date === new Date().getDay() ? 'Today' : days[date];
};
