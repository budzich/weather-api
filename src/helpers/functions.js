import {days} from './constants';

export const formatDate = time => {
  const date = new Date(time*1000);
  const arr = date.toString().toLowerCase().split(' ');

  return `${arr[0]}, ${arr[2][0] === '0' ? arr[2][1] : arr[2]} ${arr[1]} ${arr[4].slice(0,5)}`;
}

export const sliceHours = (arr, time) => {
  const hour = new Date(time*1000).getHours();

  return arr.slice(hour, hour+5);
}

export const formatDay = time => {
  const date = new Date(time*1000).getDay();

  return date === new Date().getDay() ? 'Today' : days[date];
}
