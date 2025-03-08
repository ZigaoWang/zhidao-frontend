# 知道 (ZhiDao) Frontend - AI Research Assistant 🔍

<div align="center">
  <img src="https://github.com/user-attachments/assets/768f58e6-0e5a-4ecc-a837-721dc2ba4461" alt="ZhiDao Banner" width="800"/>
  
  [![MoonShot 48 Runner-Up](https://img.shields.io/badge/MoonShot%2048-2nd%20Place-silver?style=for-the-badge)](https://github.com/ZigaoWang/zhidao-frontend)
  [![Bilingual](https://img.shields.io/badge/Bilingual-English%20%7C%20中文-blue?style=for-the-badge)](https://github.com/ZigaoWang/zhidao-frontend)
  [![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)](https://github.com/ZigaoWang/zhidao-frontend)
  [![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)
</div>

## 📱 Application Screenshots

<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/user-attachments/assets/e7b2880b-b80d-42ea-9ebf-ca81380c636b" alt="MoonShot 48 Award" width="400"/></td>
      <td><img src="https://github.com/user-attachments/assets/92417291-442f-4e97-bf75-591d1eebc573" alt="iOS Screenshot" width="400"/></td>
    </tr>
  </table>
</div>

## 🏆 Key Features

### 🔎 Research Engine (Core Feature)

ZhiDao's primary feature is its powerful research engine that helps users find, analyze, and understand academic research through natural language interactions:

- **Natural Language Queries**: Ask research questions in plain language
- **Academic Paper Search**: Searches multiple academic databases simultaneously
- **AI-Powered Analysis**: Analyzes and synthesizes information from multiple sources
- **Citation Management**: Automatically tracks and displays sources for all information
- **Bilingual Support**: Full support for both English and Chinese languages

### 📰 Research Subscriptions (Bonus Feature)

As a complementary feature, ZhiDao offers personalized research subscriptions:

- **Topic Subscriptions**: Subscribe to research topics of interest
- **Daily Digests**: Receive daily updates on new research in your field
- **Personalized Recommendations**: Get paper recommendations based on your interests

## 🏆 MoonShot 48 Runner-Up

This project was developed during MoonShot 48 hackathon and received **2nd place** in the competition! ZhiDao is an AI-powered research assistant that helps users find, analyze, and understand academic research through natural language interactions.

> **Note**: This is the frontend repository for ZhiDao. The backend repository containing the proprietary algorithms is private and currently being maintained by [Zigao Wang](https://github.com/ZigaoWang).

## 🚀 API Endpoints

This frontend communicates with the backend API through the following endpoints:

<details>
<summary><strong>GET /question</strong> - Process a research question</summary>

Process a question through the research pipeline.

**Query Parameters:**
- `query` (string): The user question to be processed

**Response:**
- `200 OK`: Returns the result object with the answer and metadata
- `400 Bad Request`: Missing query parameter
- `500 Internal Server Error`: Error processing the request
</details>

<details>
<summary><strong>GET /stream-question</strong> - Process a question with streaming</summary>

Process a question with streaming updates.

**Query Parameters:**
- `query` (string): The user question to be processed

**Response:**
- `200 OK`: Returns streaming updates and the final result object with the answer and metadata
- `400 Bad Request`: Missing query parameter
- `500 Internal Server Error`: Error processing the request
</details>

<details>
<summary><strong>GET /stream-daily-digest</strong> - Get personalized research updates</summary>

Get personalized daily research digests based on subscribed topics.

**Query Parameters:**
- `topics` (string): The topics to receive research updates about

**Response:**
- `200 OK`: Returns the personalized research digest
- `400 Bad Request`: Missing topics parameter
- `500 Internal Server Error`: Error generating the digest
</details>

<details>
<summary><strong>GET /api/daily-article</strong> - Get daily article</summary>

Get a daily article based on topics.

**Query Parameters:**
- `topics` (string): The topics to receive articles about
- `userId` (string, optional): User identifier for personalization

**Response:**
- `200 OK`: Returns the article
- `400 Bad Request`: Missing topics parameter
- `500 Internal Server Error`: Error retrieving the article
</details>

## ⚙️ Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository
   ```
   git clone https://github.com/ZigaoWang/zhidao-frontend.git
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

## 🧰 Development

- The frontend server is implemented in `server.js`
- Static HTML/CSS/JS files are in the `public` directory
- The server proxies API requests to the backend

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
