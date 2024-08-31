import { MessageProps } from '../types'
import './styles/Message.css'

export default function Message({ author_name, content, timestamp, status }: MessageProps) {
  return (
    <span className={`message ${status}`}>
      <p className='author'>{author_name}</p>
      <p className='content'>{content}</p>
      <p className='time'>{timestamp}</p>
    </span>
  )
}