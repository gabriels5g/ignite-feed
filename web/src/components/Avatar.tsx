import s from "./Avatar.module.css"

interface AvatarProps {
  src: string
  hasBorder: boolean
}

export function Avatar({ hasBorder = true, src}: AvatarProps) {

  return (
    <img className={hasBorder ? s.avatarWithBorder : s.avatar} src={src} />
  )
}