import styles from './styles.module.css'

export default function Layout({ children }: { children: React.ReactNode}) {
  return <div className={styles.shops}>
    <h2>Handelaars en Horeca</h2>
    {children}
  </div>
}