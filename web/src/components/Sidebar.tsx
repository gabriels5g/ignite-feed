import { Avatar } from "./Avatar"
import s from "./Sidebar.module.css"
import { PencilLine } from '@phosphor-icons/react'
export function SideBar() {
  return (
    <aside className={s.sidebar}>
      <img
        className={s.cover}
        src="https://images.unsplash.com/photo-1615788237070-92eacd9b785e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" alt="" 
      />
      <div className={s.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/102326117?v=4" />
        <strong>Gabriel Silva</strong>
        <span>Desing Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine  size={20} />
          Editar seu perfil
        </a>
      </footer>    
    </aside>
  )
}