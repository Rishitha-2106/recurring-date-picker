import Head from 'next/head';
import RecurringDatePicker from '../components/RecurringDatePicker/RecurringDatePicker';

export default function Home() {
  return (
    <>
      <Head>
        <title>Recurring Date Picker</title>
        <meta name="description" content="Recurring date picker component assignment" />
      </Head>
      <main className="container mt-5">
        <h1 className="mb-4">Recurring Date Picker</h1>
        <RecurringDatePicker />
      </main>
    </>
  );
}
