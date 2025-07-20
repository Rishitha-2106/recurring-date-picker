import { useRecurrenceStore } from '../../store/recurrenceStore';
import { format, addDays, addMonths, addYears } from 'date-fns';

function getDailyPreviewDates(startDate, interval, endDate) {
  if (!startDate) return [];

  const results = [];
  let currentDate = new Date(startDate);
  const maxDates = 20;

  while (results.length < maxDates) {
    if (!endDate || !(currentDate > new Date(endDate))) {
      results.push(format(currentDate, 'yyyy-MM-dd'));
    } else {
      break;
    }
    currentDate = addDays(currentDate, interval);
  }

  return results;
}

function getWeeklyPreviewDates(startDate, selectedWeekdays = [], endDate) {
  const daysOfWeekMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  if (!startDate || selectedWeekdays.length === 0) return [];

  const start = new Date(startDate);
  const maxDates = 20;
  let currentDate = start;
  const results = [];

  while (results.length < maxDates) {
    const day = currentDate.getDay();
    const weekday = Object.keys(daysOfWeekMap).find(key => daysOfWeekMap[key] === day);

    if (selectedWeekdays.includes(weekday)) {
      if (!endDate || !(currentDate > new Date(endDate))) {
        results.push(format(currentDate, 'yyyy-MM-dd'));
      }
    }

    currentDate = addDays(currentDate, 1);
  }

  return results;
}

function getMonthlyPreviewDates(startDate, interval, monthlyPattern, endDate) {
  if (!startDate) return [];

  const results = [];
  let currentDate = new Date(startDate);
  const maxDates = 20;

  // For simplicity, assume monthlyPattern = { day: number } meaning the day of month

  while (results.length < maxDates) {
    if (!endDate || !(currentDate > new Date(endDate))) {
      results.push(format(currentDate, 'yyyy-MM-dd'));
    } else {
      break;
    }
    currentDate = addMonths(currentDate, interval);
  }

  return results;
}

function getYearlyPreviewDates(startDate, interval, endDate) {
  if (!startDate) return [];

  const results = [];
  let currentDate = new Date(startDate);
  const maxDates = 20;

  while (results.length < maxDates) {
    if (!endDate || !(currentDate > new Date(endDate))) {
      results.push(format(currentDate, 'yyyy-MM-dd'));
    } else {
      break;
    }
    currentDate = addYears(currentDate, interval);
  }

  return results;
}

export default function CalendarPreview() {
  const {
    frequency = 'daily',
    interval = 1,
    weekdays = [],
    monthlyPattern,
    startDate,
    endDate,
  } = useRecurrenceStore();

  // Debug logs to check current state values
  console.log({ frequency, interval, weekdays, startDate, endDate });

  // Lowercase frequency to normalize input for switch
  const freq = frequency.toLowerCase();

  let previewDates = [];

  switch (freq) {
    case 'daily':
      previewDates = getDailyPreviewDates(startDate, interval, endDate);
      break;
    case 'weekly':
      previewDates = getWeeklyPreviewDates(startDate, weekdays, endDate);
      break;
    case 'monthly':
      previewDates = getMonthlyPreviewDates(startDate, interval, monthlyPattern, endDate);
      break;
    case 'yearly':
      previewDates = getYearlyPreviewDates(startDate, interval, endDate);
      break;
    default:
      previewDates = [];
  }

  return (
    <div className="mt-4">
      <h5>Upcoming Recurring Dates</h5>
      {previewDates.length === 0 ? (
        <p>No recurring dates selected.</p>
      ) : (
        <ul className="list-group">
          {previewDates.map(date => (
            <li key={date} className="list-group-item">
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
