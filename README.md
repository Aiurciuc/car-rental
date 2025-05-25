# Car Rental 

Simple Car Rental prototype
## Features
- Display available cars using a grid of cards (for a predefined set of location & time )
- Show search date & time inside a "legend" section ( search not implemented)
- Show each car features and details inside the card
- Possibility to navigate to a detail page for each available car
- Handle undefined routes
- Display the details of the reservation in a separate page

## Dependencies

- **react-router**: Used for routing.
- **@tanstack/react-query**: Used for data fetching
- **sass**: SCSS support for styling components.

> All dependencies are listed in `package.json` and will be installed automatically with `npm install`.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
### Installation
1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd car-rental
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App Locally
Start the development server:
```sh
npm run dev
```
- The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Building for Production
To create a production-ready build:
```sh
npm run build
```
The output will be in the `dist/` folder.

To preview the production build locally:
```sh
npm run preview
```

## Project Structure
- `src/` — Main source code
  - `components/` — Shared components used across the app
  - `pages/` — Route-level pages
  - `scss/` — SCSS variables and global styles
  - `utils/` — Utility functions
  - `hooks/` - Custom Hooks used across the app
- `public/` — Static assets


