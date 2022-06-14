import styles from '../../styles/Home.module.css';
import AppHeader from './AppHeader';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>{children}</main>
    </>
  );
}
