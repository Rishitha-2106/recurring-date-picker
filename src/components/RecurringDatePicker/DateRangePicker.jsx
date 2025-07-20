import { useRecurrenceStore } from '../../store/recurrenceStore';

export default function DateRangePicker() {
  const startDate = useRecurrenceStore(state => state.startDate);
  const endDate = useRecurrenceStore(state => state.endDate);
  const setStartDate = useRecurrenceStore(state => state.setStartDate);
  const setEndDate = useRecurrenceStore(state => state.setEndDate);

  return (
    <div className="mb-3">
      <label className="form-label">Date Range:</label>
      <div className="d-flex gap-3">
        <input
          type="date"
          value={startDate || ''}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-control"
        />
        <input
          type="date"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-control"
          placeholder="(Optional)"
        />
      </div>
    </div>
  );
}
