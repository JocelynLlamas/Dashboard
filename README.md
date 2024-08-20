# 📊 Angular Dashboard

Welcome to the **Angular Dashboard** project! This is a simple and scalable dashboard application built using Angular, Bootstrap, and SCSS. The dashboard displays charts, tables, and card information using dummy data. Perfect for getting started with Angular and creating responsive dashboards!

## 🚀 Features

- **Dashboard Overview**: A clean and responsive home page featuring charts, tables, and information cards.
- **Charts**: Interactive charts powered by `Chart.js` and `ng2-charts`.
- **Tables**: Simple tables displaying dynamic data.
- **Cards**: Information cards to display key metrics.
- **User Authentication**: Includes login and registration forms with form validation and token management.
- **Route Protection**: Protected routes with Auth Guards to ensure only authenticated users can access sensitive areas like the dashboard.
- **Lazy Loading**: Optimized loading of components using Angular's lazy loading to improve performance.
- **Form Validation**: Ensures data integrity by validating user input in forms.
- **404 Not Found Page**: Custom 404 page for handling undefined routes.
- **Scalable Structure**: Organized folder structure for easy scalability and maintainability.

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or above)
- **Angular CLI** (version 13 or above)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/angular-dashboard.git
    cd angular-dashboard
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    ng serve
    ```
    The app will be running at `http://localhost:4200`.

### 📝 Components Overview

- **DashboardComponent**: The main component that includes the charts, tables, and cards. Protected by an Auth Guard to ensure only authenticated users can access it.
- **LoginComponent**: Handles user login with form validation and lazy loading.
- **RegisterComponent**: Handles user registration with form validation, including password matching, and lazy loading.
- **NotFoundComponent**: Custom 404 page that is shown when the user navigates to an undefined route.
- **AuthGuard**: Protects routes to ensure only authenticated users can access certain areas of the app, such as the dashboard.

The application features a simple authentication system with:

- **Login**: Users can log in using their credentials. If the credentials match the dummy data, they will receive a JWT token.
- **Register**: New users can register by providing a username and password. The system includes validation to ensure passwords meet criteria and match.
- **Token Management**: JWT tokens are stored in `localStorage` and are used to manage user sessions.
- **Route Protection**: Auth Guard ensures that only authenticated users can access the dashboard. If a user is not authenticated, they are redirected to the login page.
- **Logout**: The application handles logout by clearing the authentication token and redirecting the user to the login page.

### 🛡️ Form Validation

Both the login and registration forms include form validation:

- **Login Form**:
  - **Username**: Required, minimum length of 3 characters.
  - **Password**: Required, minimum length of 6 characters.

- **Register Form**:
  - **Username**: Required, minimum length of 3 characters.
  - **Password**: Required, minimum length of 6 characters.
  - **Confirm Password**: Required, must match the password.

### 🌀 Lazy Loading

- **Lazy Loading**: The dashboard, login, and registration components are loaded lazily to improve the application's performance. This reduces the initial load time of the application by loading components only when they are needed.

### 📈 Dummy Data Service

We use a dummy data service to simulate backend data. The service provides data for charts, tables, and cards, as well as mock authentication data. You can find the service in `src/app/core/services/data.service.ts`.

### 📦 Dependencies

- **Angular**: Framework for building client applications.
- **Bootstrap**: CSS framework for responsive design.
- **SCSS**: Syntactically Awesome Style Sheets, used for styling.
- **Chart.js**: JavaScript library for creating charts.
- **ng2-charts**: Angular wrapper for `Chart.js`.
- **Angular OAuth2 OIDC**: (Optional) For future implementation of OAuth2 authentication.

## 🎨 Styling

The project uses SCSS for custom styles and Bootstrap for responsive layout. You can customize the global styles in `src/styles/styles.scss` and variables in `src/styles/_variables.scss`.

## ✨ Future Enhancements

- Add more chart types (e.g., pie charts, bar charts).
- Integrate a real backend for dynamic data and authentication.
- Implement additional UI components (e.g., filters, search functionality).
- Consider implementing OAuth2 for third-party authentication.

## 💬 Feedback

Feel free to open an issue or submit a pull request if you have suggestions for improvements or find any bugs.

---

Happy coding! 😊