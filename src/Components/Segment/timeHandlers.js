export const flightDuration = (duration) => `${Math.trunc(duration / 60)}ч ${duration % 60}м`;

export const departure = (date) => {

  const hoursFromDate = (new Date(date)).getHours();
  const minutesFromDate = (new Date(date)).getMinutes();

  const hours = hoursFromDate > 9 ? `${hoursFromDate}` : `0${hoursFromDate}`;
  const minutes = minutesFromDate > 9 ? `${minutesFromDate}` : `0${minutesFromDate}`;

  return `${hours} : ${minutes}`;
};

export const arrival = (date, duration) => {
  const departureTimestamp = (new Date(date)).getTime();
  const arrivalTimestamp = departureTimestamp + duration * 60000;

  const arrivalDate = {
    hours: (new Date(arrivalTimestamp)).getHours(),
    minutes: (new Date(arrivalTimestamp)).getMinutes()
  };

  const hours = arrivalDate.hours > 9 ? `${arrivalDate.hours}` : `0${arrivalDate.hours}`;
  const minutes = arrivalDate.minutes > 9 ? `${arrivalDate.minutes}` : `0${arrivalDate.minutes}`;

  return `${hours} : ${minutes}`;
};