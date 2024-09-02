# Chat.io - Frontend

**Chat.io - Frontend** is the frontend of a full-stack chat application. Built with React and TypeScript, it provides the user interface and handles communication with the backend via Socket.IO for real-time messaging. Users can sign up and sign in to interact with other users, while the backend manages authentication and real-time messaging logic.

![Chat.io Demo](https://github.com/user-attachments/assets/5ce9476d-efa4-46d9-8cc1-a31fcea64552)

## Features

- **User Authentication**
  - **Sign In**: Users can log in using their email and password.
  - **Sign Up**: New users can register by providing their name, email, and password.
- **Real-Time Chat**: Engage in live chat with others.

## How It Works

Here's a breakdown of how the frontend interacts with the backend:

1. **User Authentication**:
   - Users can sign up by providing their name, email, and password.
   - Upon signing in, the frontend communicates with the backend to authenticate the user credentials using JWT.

2. **Real-Time Communication**:
   - The frontend establishes a connection with the backend using Socket.IO.
   - Messages sent by the user are transmitted in real-time to the backend, which then broadcasts them to all connected clients.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js; ensure you have the latest version.
- **Chat.io - Backend**: Ensure the backend server is running. You can find it here: [Chat.io Backend Repository](https://github.com/mathbl99/chat-backend)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mathbl99/chat-frontend.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd chat-frontend
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Configure environment variables**

    - Create a `.env` file in the root directory.
    - Add the following variables:

      ```env
      VITE_API_URL=http://localhost:3000
      ```

      Replace `http://localhost:3000` with the URL where your backend server is running.

5. **Start the development server:**

    ```bash
    npm run dev
    ```

6. **Open your browser and visit:**

    ```
    http://localhost:5173
    ```

## Usage

- **Sign Up**: Create a new account with your name, email, and password.
- **Sign In**: Log in with your credentials.
- **Start Chatting**: Begin real-time communication with other users.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: Fast and modern build tool for development and production.
- **Socket.IO**: Real-time, bidirectional communication between web clients and servers.
- **Axios**: For making HTTP requests to the backend API.
