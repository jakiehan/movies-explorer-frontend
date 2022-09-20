export const refactorDuration = (duration) => {
  if (duration >= 60) {
    const hour = Math.trunc(duration / 60);
    const minutes = duration % 60;

    if (minutes === 0) {
      return `${hour}ч`
    }
    return `${hour}ч ${minutes}м`
  }
  let n = duration;
  n %= 60;
  if (n >= 5 && n <= 20) {
    return `${duration} минут`;
  }
  n %= 10;
  if (n === 1) {
    return `${duration} минута`;
  }
  if (n >= 2 && n <= 4) {
    return `${duration} минуты`;
  }
  return `${duration} минут`;
}