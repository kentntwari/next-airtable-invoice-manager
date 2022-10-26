export function formatDate(date) {
  const event = new Date(date);

  const formatted_date = {
    day: event.toLocaleDateString('en-ca', { day: 'numeric' }),
    month: event.toLocaleDateString('en-ca', { month: 'long' }).slice(0, 3),
    year: event.toLocaleDateString('en-ca', { year: 'numeric' }),
  };

  return formatted_date.day + ' ' + formatted_date.month + ' ' + formatted_date.year;
}
