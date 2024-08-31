import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AuthRoute } from './routes/AuthRoute';
import ChatPage from './routes/ChatPage';
import { AuthProvider } from './hooks/useAuth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignupPage from './routes/SignupPage';
import SigninPage from './routes/SigninPage';

const client = new QueryClient()

function App() {

  return (
    <div className='App'>
      <AuthProvider>
        <QueryClientProvider client={client}>
          <Routes>
            <Route path="/" element={<SigninPage />} />
            <Route
              path="/chat"
              element={
                <AuthRoute>
                  <ChatPage />
                </AuthRoute>
              }
            />
            <Route path='/signup' element={<SignupPage />} />
          </Routes>
        </QueryClientProvider>
      </AuthProvider>
    </div>
  )
}

export default App
