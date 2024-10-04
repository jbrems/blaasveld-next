import styles from './styles.module.css'

export default function Layout({ children }: { children: React.ReactNode}) {
  return <div className={styles.events}>
    <h2>Activiteiten</h2>
    {children}
  </div>
}