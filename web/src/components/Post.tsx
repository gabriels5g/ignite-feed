import { format, formatDistanceToNow } from "date-fns";
import ptBR from  'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import s from "./Post.module.css";
import { useState } from "react";

interface PostProps {
  author: {
    avatarURL: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}



export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["oi"])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    includeSeconds: true,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event?.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleCreateNewChange(event: any) {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <Avatar src={author.avatarURL} hasBorder={true} />
          <div className={s.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={s.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index} >{line.content}</p>
          } return <p key={index}><a href="#">{line.content}</a></p>
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={s.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Escreva um comentário..."
          onChange={handleCreateNewChange} 
          value={newCommentText} 
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={s.commentList}>
        {comments.map((comments, index) => {
          return (
          <Comment
            key={index}
            content={comments}
            />
          )
        })}
      </div>
    </article>
  );
}
