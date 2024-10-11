# Employee Management API

## Overview
This is an Employee Management API built using Node.js, Express, and MongoDB. It allows users to manage employee records, including creating, reading, updating, and deleting employee information.

## Features
- User authentication (signup and login)
- CRUD operations for employee records
- MongoDB Atlas for data storage
- JWT authentication for secure access

## Technologies Used
- Node.js
- Express
- MongoDB (via Mongoose)
- JSON Web Token (JWT)
- dotenv for environment variables

## API Endpoints

### User Endpoints

- **Signup**
  - `POST /api/v1/user/signup`
  - Request Body:
    ```json
    {
      "username": "johndoe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "message": "User created successfully.",
      "user_id": "user_id_here"
    }
    ```

- **Login**
  - `POST /api/v1/user/login`
  - Request Body:
    ```json
    {
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "message": "Login successful.",
      "jwt_token": "optional_token_here"
    }
    ```

### Employee Endpoints

- **Get All Employees**
  - `GET /api/v1/emp/employees`
  - Response:
    ```json
    [
      {
        "employee_id": "employee_id_here",
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "jane.doe@example.com",
        ...
      }
    ]
    ```

- **Create an Employee**
  - `POST /api/v1/emp/employees`
  - Request Body:
    ```json
    {
      "first_name": "Alice",
      "last_name": "Johnson",
      "email": "alice.johnson@example.com",
      ...
    }
    ```
  - Response:
    ```json
    {
      "message": "Employee created successfully.",
      "employee_id": "employee_id_here"
    }
    ```

- **Get Employee by ID**
  - `GET /api/v1/emp/employees/{eid}`
  - Response:
    ```json
    {
      "employee_id": "employee_id_here",
      ...
    }
    ```

- **Update Employee**
  - `PUT /api/v1/emp/employees/{eid}`
  - Request Body:
    ```json
    {
      "position": "Senior Designer",
      "salary": 95000
    }
    ```
  - Response:
    ```json
    {
      "message": "Employee details updated successfully."
    }
    ```

- **Delete Employee**
  - `DELETE /api/v1/emp/employees/{eid}`
  - Response:
    ```json
    {
      "message": "Employee deleted successfully."
    }
    ```

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repo-name.git
   cd repo-name


