import RecurrenceOptions from './RecurrenceOptions';
import FrequencySelector from './FrequencySelector';
import WeekdaySelector from './WeekdaySelector';
import MonthlyPatternSelector from './MonthlyPatternSelector';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';


export default function RecurringDatePicker() {
  return (
    <div className="card p-4 shadow-sm">
      <RecurrenceOptions />
      <FrequencySelector />
      <WeekdaySelector />
      <MonthlyPatternSelector />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}
