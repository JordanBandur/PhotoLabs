# PhotoLabs
The PhotoLabs project for the Web Development React course programming.

# Screenshots

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

# Dev Notes
The following is the project Structure, along with a breif explinations of the core files.

## Project Structure
### **Frontend**
The frontend of the PhotoLabs project is built using React. Below is a brief overview of the key components and hooks:

### Components
- **FaveBadge.jsx**: Displays a badge indicating if any favorite photos exist.

- **FavIcon.jsx**: Renders a favorite icon, with an optional alert indicator.

- **PhotoFavButton.jsx**: A button component to toggle the favorite status of a photo.

- **PhotoList.jsx**: Displays a list of photo items.

- **PhotoListItem.jsx**: Represents a single photo item with details and favorite button.

- **TopicList.jsx**: Displays a list of topics.

- **TopicListItem.jsx**: Represents a single topic item.

- **TopNavigationBar.jsx**: The top navigation bar of the application.

- **PhotoDetailsModal.jsx**: A modal to display detailed information about a selected photo.
### Hooks
- **useApplicationData.js**: Custom hook to manage application data, including fetching photos and topics, and handling modal state.

- **useModal.js**: Custom hook to manage the modal's open and close state.
### Routes
- **HomeRoute.jsx**: The main route displaying the home page with a list of photos and topics.

- **PhotoDetailsModal.jsx**: The modal route to display detailed information about a photo.

### **Backend**
The backend is set up to handle API requests for photos and topics. Detailed setup instructions for the backend can be found in the backend/readme.