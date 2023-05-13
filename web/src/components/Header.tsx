import s from './Header.module.css'
import igniteLogo from '../assets/Ignite-logo.svg' 

export function Header() {
  return (
    <header className={s.header}>
      <img src={igniteLogo} alt="" />
    </header>
  )
}