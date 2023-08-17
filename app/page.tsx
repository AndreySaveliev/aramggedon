import styles from './page.module.css';
import { getNeoData } from '@/src/api/fetchNeoData';
import { Dates } from '@/src/types/types';
import { ConditionalComponent } from './components/ConditionalComponent/ConditionalComponent';
import { BinProvider } from './components/Context/BinContext';

export default async function Home() {
  const dates: Dates = await getNeoData(new Date());

  return (
    <BinProvider>
      <main className={styles.main}>
        <section className={styles.section}>
          <ConditionalComponent dates={dates} />
        </section>
      </main>
    </BinProvider>
  );
}
