import { useRecurrenceStore } from '../../store/recurrenceStore';

export default function MonthlyPatternSelector() {
  const frequency = useRecurrenceStore(state => state.frequency);
  const pattern = useRecurrenceStore(state => state.pattern);
  const setPattern = useRecurrenceStore(state => state.setPattern);

  if (frequency !== 'monthly') return null;

  return (
    <div className="mb-3">
      <label className="form-label">Pattern:</label>
      <select
        className="form-select"
        value={pattern || ''}
        onChange={(e) => setPattern(e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="2nd_tuesday">The second Tuesday of every month</option>
        <option value="last_friday">The last Friday of every month</option>
        {/* Add more patterns here */}
      </select>
    </div>
  );
}
