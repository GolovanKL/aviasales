export const flightDuration = (duration) => `${Math.trunc(duration / 60)}ч ${duration % 60}м`;

export const departure = (date) => {

  const hours = (new Date(date)).getHours() > 9 ?
    `${(new Date(date)).getHours()}` :
    `0${(new Date(date)).getHours()}`;

  const minutes = (new Date(date)).getMinutes() > 9 ?
    `${(new Date(date)).getMinutes()}` :
    `0${(new Date(date)).getMinutes()}`;

  return hours + ':' + minutes
};

export const arrival = (date, duration) => {
  const departureTimestamp = (new Date(date)).getTime();
  const arrivalTimestamp = departureTimestamp + duration * 60000;
  const arrivalDate = new Date(arrivalTimestamp);

  const hours = arrivalDate.getHours() > 9 ?
    `${arrivalDate.getHours()}` :
    `0${arrivalDate.getHours()}`;

  const minutes = arrivalDate.getMinutes() > 9 ?
    `${arrivalDate.getMinutes()}` :
    `0${arrivalDate.getMinutes()}`;

  return hours + ':' + minutes
};