# 📊 Angular Dashboard

Welcome to the **Angular Dashboard** project! This is a simple and scalable dashboard application built using Angular, Bootstrap, and SCSS. The dashboard displays charts, tables, and card information using dummy data. Perfect for getting started with Angular and creating responsive dashboards!

## 🚀 Features

- **Dashboard Overview**: A clean and responsive home page featuring charts, tables, and information cards.
- **Charts**: Interactive charts powered by `Chart.js` and `ng2-charts`.
- **Tables**: Simple tables displaying dynamic data.
- **Cards**: Information cards to display key metrics.
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

### 📚 Project Structure

Here's a breakdown of the project's structure to help you navigate the code:

src/
│
├── app/
│ ├── core/ # Core services, models, etc.
│ │ ├── services/
│ │ └── models/
│ ├── shared/ # Shared components, directives, pipes
│ │ ├── components/
│ │ └── directives/
│ ├── dashboard/ # Feature module for the dashboard
│ │ ├── charts/
│ │ ├── tables/
│ │ ├── cards/
│ │ └── dashboard.component.ts
│ ├── app.component.ts
│ ├── app.module.ts
│ └── app-routing.module.ts
│
├── assets/ # Images, icons, etc.
├── styles/ # Global SCSS files
│ ├── _variables.scss
│ └── styles.scss
└── index.html


### 📝 Components Overview

- **DashboardComponent**: The main component that includes the charts, tables, and cards.
- **ChartsComponent**: Displays a line chart using `Chart.js`.
- **TablesComponent**: Renders a table with sample data.
- **CardsComponent**: Displays key metrics in card format.

### 📈 Dummy Data Service

We use a dummy data service to simulate backend data. The service provides data for charts, tables, and cards. You can find the service in `src/app/core/services/data.service.ts`.

### 📦 Dependencies

- **Angular**: Framework for building client applications.
- **Bootstrap**: CSS framework for responsive design.
- **SCSS**: Syntactically Awesome Style Sheets, used for styling.
- **Chart.js**: JavaScript library for creating charts.
- **ng2-charts**: Angular wrapper for `Chart.js`.

## 🎨 Styling

The project uses SCSS for custom styles and Bootstrap for responsive layout. You can customize the global styles in `src/styles/styles.scss` and variables in `src/styles/_variables.scss`.

## ✨ Future Enhancements

- Add more chart types (e.g., pie charts, bar charts).
- Integrate a real backend for dynamic data.
- Implement additional UI components (e.g., filters, search functionality).

## 💬 Feedback

Feel free to open an issue or submit a pull request if you have suggestions for improvements or find any bugs.

---

Happy coding! 😊

