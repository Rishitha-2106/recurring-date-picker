import { useRecurrenceStore } from '../../store/recurrenceStore';

export default function RecurrenceOptions() {
  const frequency = useRecurrenceStore(state => state.frequency);
  const setFrequency = useRecurrenceStore(state => state.setFrequency);

  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="mb-3">
      <label className="form-label">Recurrence:</label>
      <div className="btn-group">
        {options.map(opt => (
          <button
            key={opt}
            className={`btn btn-${frequency === opt ? 'primary' : 'outline-primary'}`}
            onClick={() => setFrequency(opt)}
          >
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
