import { v4 as uuid } from 'uuid';
import { FetchedUserData, MessageProps } from '../types';

export const createMessage = (author: FetchedUserData, content: string): MessageProps => {
  return {
    id: uuid(),
    content: content,
    author_id: author.id,
    author_name: author.name,
    timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    status: "sent",
  }
}

