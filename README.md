# World Wise

Welcome to **World Wise** – your personal travel memory journal. This website allows you to document and share the places you have traveled, creating a beautiful and interactive map of your memories.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add and view travel destinations on an interactive map.
- Store and manage travel memories with descriptions and photos.
- Filter and search through your travel destinations.
- Responsive design for both desktop and mobile users.

## Technologies

- **React.js**: A JavaScript library for building user interfaces.
- **Styled Components**: For styling the application components.
- **JSON Server**: A simple backend to store and manage travel destinations data.
- **React Router**: For handling routing within the application.
- **Vite**: A fast development build tool.
- **Leaflet**: An open-source JavaScript library for mobile-friendly interactive maps.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14.x or above)
- npm (version 6.x or above) or yarn (version 1.x or above)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ZBl0ody/World-Wise.git
   cd world-wise
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up JSON Server:
   ```bash
   npm install -g json-server
   ```

4. Start the JSON Server:
   ```bash
   npm run server
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Add a Destination**: Click on the 'Add Destination' button, fill in the details of your travel destination, and save.
2. **View Destinations**: Explore your added destinations on the interactive map.
3. **Filter/Search**: Use the search bar to find specific travel memories.

## Folder Structure

```
world-wise/
├── data/
│   └─ cities.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── main.js
│   ├── index.css
│   └── ...
├── index.html
├── package.json
├── README.md
└── ...
```

- **public/**: Contains static files.
- **src/**: Contains the source code.
  - **assets/**: Images, icons, and other assets.
  - **components/**: Reusable UI components.
  - **pages/**: Different pages of the application.
- **data**: Mock database for JSON Server.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Your Name - [@linkedin](https://www.linkedin.com/in/ahmed-samir-abdon-b99156280/)
- Project Link: [https://github.com/ZBl0ody/React-Quiz](https://github.com/ZBl0ody/React-Quiz)

