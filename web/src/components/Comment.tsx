import { Avatar } from "./Avatar"
import s from "./Comment.module.css"
import { ThumbsUp, Trash } from '@phosphor-icons/react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}


export function Comment({onDeleteComment, content}: CommentProps) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={s.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/89154785?v=4" />
      <div className={s.commentBox}>
        <div className={s.commentContent}>
          <header>
            <div className={s.authorAndTime}>
              <strong>Karol</strong>
              <time title="09 de maio às 01:45" dateTime="2023/05/09 08:13:44">Cerca de 2h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>

          <button onClick={handleDeleteComment} title="Deletar comentario">
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}