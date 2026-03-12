# Harry Potter Universe

A React application that consumes the [Harry Potter API](https://hp-api.onrender.com/) to explore characters from the wizarding world.

![Harry Potter Universe](https://hp-api.onrender.com/images/harry.jpg)

## Features

- Browse all characters from the Harry Potter universe
- Filter characters by role: Students, Staff, or All
- Filter characters by Hogwarts house (Gryffindor, Slytherin, Ravenclaw, Hufflepuff)
- Search characters by name in real time
- View detailed information about each character including wand, patronus, ancestry, and more
- Fully responsive design for mobile, tablet, and desktop

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **Axios** — HTTP client for API requests
- **React Router DOM** — client-side routing
- **CSS** — custom styles with responsive design

## Project Structure

```
src/
├── components/
│   ├── CharacterCard/     # Individual character card
│   ├── CharacterList/     # Grid of character cards
│   ├── HouseFilter/       # House selection buttons
│   ├── Navbar/            # Navigation bar
│   └── SearchBar/         # Search input
├── constants/
│   └── api.js             # API base URL and endpoints
├── hooks/
│   └── useCharacters.js   # Custom hook for data fetching
├── pages/
│   ├── HomePage/          # Main listing page
│   └── CharacterDetailPage/ # Character detail view
└── services/
    └── harryPotterService.js # Axios API calls
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/harry-potter-app.git
   cd harry-potter-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

### Build for production

```bash
npm run build
```

## API Reference

Base URL: `https://hp-api.onrender.com/api`

| Endpoint | Description |
|----------|-------------|
| `GET /characters` | All characters |
| `GET /characters/students` | Hogwarts students only |
| `GET /characters/staff` | Hogwarts staff only |
| `GET /characters/house/:house` | Characters by house name |

## Deployment

This project is deployed on [Vercel](https://vercel.com). To deploy your own instance:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and configure the build settings
4. Click **Deploy**

## Screenshots

| Desktop | Mobile |
|---------|--------|
| Character grid with house filter | Responsive 2-column grid |

## License

MIT
