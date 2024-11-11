# Rick & Morty 🥷🛠️

This is a React application designed as a test task to display information about characters, episodes, and locations from the Rick and Morty universe. It utilizes Firebase authentication, infinite scrolling, search functionality, and a structured routing system with private and public routes.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
-   [Project Structure](#project-structure)
-   [Application Functionality](#application-functionality)
-   [Routes](#routes)
-   [API Reference](#api-reference)

## Features

-   **Authentication:** User login and signup using Firebase Authentication.
-   **Infinite Scroll:** Load characters with infinite scrolling on the main character list page.
-   **Filtering:** Search functionality to filter characters based on user input.
-   **Responsive Design:** Adapts to different screen sizes.
-   **Navigation and Routing:**
    -   Public routes for login and signup.
    -   Private routes for viewing characters, episodes, and locations.
-   **Reusable Components:** Modular components such as `Button`, `Input`, `Heading`, `DataFetcher`, etc.

## Technologies Used

-   **React & TypeScript:** For building the user interface.
-   **Tailwind CSS:** For styling the UI.
-   **Axios:** For making HTTP requests.
-   **React Query:** For data fetching, caching, and server state management.
-   **Firebase Authentication:** For user authentication.
-   **Rick and Morty API:** To retrieve character, episode, and location data.

## Getting Started

### Prerequisites

-   Node.js and npm installed on your machine.
-   Firebase project credentials (API key, etc.) from the Firebase console.
-   **Demo Credentials** for testing:
    -   **Email:** `admin@firebase.com`
    -   **Password:** `123456`

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd rick-and-morty-app
    ```
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm run dev
    ```

## Project Structure

├── src                 # Root directory for all application source files
│   ├── auth            # Contains route protection logic for private (authenticated) routes
│   ├── components      # Reusable components like Button, Input, Heading, DataFetcher
│   ├── config          # Configuration files, including Firebase and global settings
│   ├── context         # AuthContext for managing global authentication state
│   ├── hooks           # Custom hooks (e.g., useAuth, useSingleCharacter) for encapsulating logic
│   ├── pages           # Page components for each route, like LoginPage, CharactersPage, etc.
│   ├── services        # API services for fetching data from the Rick and Morty API and others
│   ├── types           # TypeScript type definitions for strict data typing
│   └── utils           # Utility functions, such as form validation
└── ...


## Application Functionality

### Public Section

-   **Login Page:** Allows users to log in with email and password. Redirects to the character list on successful login.
-   **Signup Page:** Allows new users to sign up. Redirects to the character list after successful registration.

    _Both pages feature Firebase authentication integration and handle errors such as incorrect login credentials._

### Private Section

-   **Header:** Contains navigation links (Characters, Logout) and is displayed on each private route page.
-   **Characters Page:**
    -   Displays an infinite scroll list of all characters.
    -   Each character card includes a name, status, species, and image.
    -   A search box above the list filters characters based on the input.
-   **Single Character Page:**
    -   Shows detailed information about a selected character.
    -   Links to the character's location and the episodes they appear in.
-   **Single Location Page:**
    -   Shows information about a location and a list of characters who are residents.
-   **Single Episode Page:**
    -   Displays details about an episode and lists all characters in the episode.

## Routes

-   `/login` - Login page (Public)
-   `/signup` - Signup page (Public)
-   `/characters` - Character list page with infinite scroll and search functionality (Private)
-   `/characters/:id` - Single character details (Private)
-   `/location/:id` - Location details page with list of residents (Private)
-   `/episode/:id` - Episode details page with list of characters (Private)

## API Reference

-   [Rick and Morty API](https://rickandmortyapi.com/)

---
