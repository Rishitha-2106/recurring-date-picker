# 📅 Recurring Date Picker Component

A reusable **Recurring Date Picker** component built with **Next.js**, **Bootstrap**, and **Zustand**. Inspired by apps like **TickTick**, this component allows users to select recurring dates with advanced customization options.

---

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Date Utility**: [date-fns](https://date-fns.org/)

---

## 🚀 Features

✅ Recurring selection types:
- Daily  
- Weekly  
- Monthly  
- Yearly

✅ Customization:
- Repeat every X days/weeks/months/years
- Select specific weekdays (e.g., Mon, Wed, Fri)
- Monthly patterns (e.g., "Second Tuesday of every month")

✅ Date Range:
- Select a **start date**
- Optionally select an **end date**

✅ Calendar Preview:
- See the upcoming recurring dates (limited to 20 for display)

✅ State Management:
- Managed using **Zustand**, ensuring clear and reactive logic

---

## 🗂️ Folder Structure

src/
├── components/
│ └── RecurringDatePicker/
│ ├── CalendarPreview.jsx
│ ├── DateRangePicker.jsx
│ ├── FrequencySelector.jsx
│ ├── MonthlyPatternSelector.jsx
│ ├── RecurrenceOptions.jsx
│ ├── RecurringDatePicker.jsx
│ └── WeekdaySelector.jsx
├── pages/
│ └── index.js
├── store/
│ └── recurrenceStore.js


---

## 📦 Installation & Running

```bash
# Clone the repo
git clone https://github.com/your-username/recurring-date-picker.git

# Navigate into the project
cd recurring-date-picker

# Install dependencies
npm install

# Start the dev server
npm run dev
Visit: http://localhost:3000

