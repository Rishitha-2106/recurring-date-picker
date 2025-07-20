import { useRecurrenceStore } from '../../store/recurrenceStore';

export default function FrequencySelector() {
  const interval = useRecurrenceStore(state => state.interval);
  const setInterval = useRecurrenceStore(state => state.setInterval);
  const frequency = useRecurrenceStore(state => state.frequency);

  return (
    <div className="mb-3">
      <label className="form-label">
        Every
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="form-control d-inline-block mx-2"
          style={{ width: '80px' }}
        />
        {frequency}
      </label>
    </div>
  );
}
