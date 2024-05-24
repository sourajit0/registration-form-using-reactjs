# Registration Form using React.js

This project is a simple registration form built using React.js. It includes validation for required fields, displays error messages, and disables submission until all fields are correctly filled. Upon successful submission, the form details are displayed on a new route.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sourajit0/registration-form-using-reactjs.git
    cd registration-form-using-reactjs
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
registration-form-using-reactjs/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Form.js
│   │   └── Success.js
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

# Registration Form using React.js

This project is a simple registration form built using React.js. It includes validation for required fields, displays error messages, and disables submission until all fields are correctly filled. Upon successful submission, the form details are displayed on a new route.

## Form Component (Form.js)

The form includes fields for First Name, Last Name, Username, Email, Password, Phone Number, Country, City, Pan No., and Aadhar No. It validates these fields and displays appropriate error messages. The submit button is disabled until all fields are correctly filled.

## Success Component (Success.js)

This component displays the submitted form data. It is rendered on a new route after successful form submission.

## App Component (App.js)

The main component that includes routing logic.

## Screenshots

### Form Screenshot

![Form Screenshot](https://github.com/sourajit0/registration-form-using-reactjs/blob/main/screenshot/form.jpeg)

### Success Screenshot

![Success Screenshot](https://github.com/sourajit0/registration-form-using-reactjs/blob/main/screenshot/Success.jpeg)
