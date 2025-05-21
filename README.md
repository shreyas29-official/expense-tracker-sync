Expense Tracker with Sync
Overview
Expense Tracker with Sync is a full-stack application designed to help users track their expenses seamlessly across devices. The app features:

A React web frontend for desktop users

A React Native mobile app with offline support for on-the-go expense tracking

A Node.js and MongoDB backend to manage user data and synchronize expenses across devices

The app ensures users can add, edit, and view expenses with real-time synchronization and offline functionality, providing a smooth experience regardless of internet connectivity.

Features
User Authentication: Sign up, login, and secure sessions

Add & Manage Expenses: Create, update, and delete expenses categorized by type, date, and amount

Synchronization: Automatic syncing of data across web and mobile apps when connected to the internet

Offline Support: Mobile app can function offline, caching changes and syncing once online

Responsive Design: Intuitive UI for both web and mobile devices

Data Persistence: Securely store data in MongoDB with RESTful API backend

Tech Stack
Layer	Technology
Frontend (Web)	React.js
Frontend (Mobile)	React Native
Backend	Node.js, Express.js
Database	MongoDB
Authentication	JWT (JSON Web Tokens)
Offline Support	Redux Persist, AsyncStorage (React Native)

Getting Started
Prerequisites
Node.js v14+

npm or yarn

MongoDB (local or cloud instance)

React Native development environment (for mobile app)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/expense-tracker-sync.git
cd expense-tracker-sync
Setup Backend:

bash
Copy
Edit
cd backend
npm install
Create a .env file and add your MongoDB connection string and JWT secret:

ini
Copy
Edit
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy
Edit
npm run dev
Setup Web Frontend:

bash
Copy
Edit
cd ../web-frontend
npm install
npm start
Setup Mobile Frontend:

bash
Copy
Edit
cd ../mobile-app
npm install
Run on an emulator or physical device:

bash
Copy
Edit
npx react-native run-android
# or
npx react-native run-ios
Usage
Register a new account or log in.

Add expenses by selecting a category, amount, and date.

Expenses will be saved locally on the mobile app and synced automatically when online.

View and manage your expenses across devices with the synced data.

Offline Support
The React Native app caches user data locally using AsyncStorage and Redux Persist. Any changes made offline are synced to the backend once the device reconnects to the internet.

Folder Structure
bash
Copy
Edit
expense-tracker-sync/
│
├── backend/           # Node.js + Express API
├── web-frontend/      # React.js web app
├── mobile-app/        # React Native mobile app
└── README.md
Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

License
This project is licensed under the MIT License.
