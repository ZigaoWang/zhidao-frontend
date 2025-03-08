# ZhiDao (知道) Frontend

This is the frontend repository for ZhiDao (知道), an intelligent research assistant. This repository contains the user interface and a simplified server that acts as a proxy to the backend API.

## Features

- Clean and intuitive user interface for research queries
- Real-time streaming of AI responses
- Daily digest of research papers based on subscribed topics
- Proxy server to communicate with the backend API

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/zhidao-frontend.git
   cd zhidao-frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure environment variables
   - Copy the `.env.example` file to `.env`
   - Update the `BACKEND_API_URL` to point to your backend server

4. Start the server
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3001`

## Development

- The frontend server is implemented in `server.js`
- Static HTML/CSS/JS files are in the `public` directory
- The server proxies API requests to the backend

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
