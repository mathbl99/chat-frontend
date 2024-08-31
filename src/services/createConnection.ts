import { io, Socket } from 'socket.io-client';

export function createConnection(url: string, token: string | null) {
  const socket: Socket = io(url, {
    auth: {
      token: token
    }
  });

  socket.on('connect_error', (err) => {
    console.error('Connection error:', err);
  });

  return socket;
}