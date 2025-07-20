import { useRecurrenceStore } from '../../store/recurrenceStore';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function WeekdaySelector() {
  const frequency = useRecurrenceStore(state => state.frequency);
  const weekdaysState = useRecurrenceStore(state => state.weekdays);
  const setWeekdays = useRecurrenceStore(state => state.setWeekdays);

  if (frequency !== 'weekly') return null;

  const toggleDay = (day) => {
    const updated = weekdaysState.includes(day)
      ? weekdaysState.filter(d => d !== day)
      : [...weekdaysState, day];
    setWeekdays(updated);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Select weekdays:</label>
      <div className="d-flex gap-2">
        {weekdays.map((day, i) => (
          <button
            key={day}
            className={`btn btn-sm ${weekdaysState.includes(i) ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => toggleDay(i)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

