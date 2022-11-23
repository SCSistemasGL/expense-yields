export const newDate = (date) => {
  const oldDate = new Date(date)

  return `${oldDate.getDay()}/${oldDate.getMonth()}/${oldDate.getFullYear()} - ${oldDate.getHours()} : ${oldDate.getMinutes()}`
}