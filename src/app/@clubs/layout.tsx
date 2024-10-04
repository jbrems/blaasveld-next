import styles from './styles.module.css'

export default function Layout({ children }: { children: React.ReactNode}) {
  return <div className={styles.clubs}>
    <h2>Verenigingen</h2>
    {children}
  </div>
}