# StreamFlix App

A modern streaming platform interface built with React. This project demonstrates a responsive video streaming application with a clean, user-friendly design inspired by popular streaming services.

## Features

- 🎬 Browse movies and TV shows
- 📱 Responsive design for all devices
- 🔍 Search functionality
- 🎯 Category-based browsing
- ⚡ Fast and smooth user experience
- 🎨 Modern UI/UX design

## Tech Stack

- **Frontend**: React 19.1.1
- **HTTP Client**: Axios
- **Styling**: CSS3
- **Testing**: Jest, React Testing Library
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raizel7738-creator/streamflix-app.git
cd streamflix-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for the best performance.

### `npm run deploy`
Deploys the app to GitHub Pages.

## Project Structure

```
src/
├── components/          # Reusable UI components
├── styles/             # CSS stylesheets
├── App.js              # Main application component
├── HomeScreen.js       # Home page component
├── requests.js         # API request configurations
└── axios.js            # Axios configuration
```

## Deployment

This app is configured for deployment on GitHub Pages. To deploy:

1. Build the project: `npm run build`
2. Deploy to GitHub Pages: `npm run deploy`

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with Create React App
- Inspired by modern streaming platform designs
- Uses The Movie Database (TMDB) API for movie data
