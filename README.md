# Indie AppStore API Documentation

## Authentication

### Register User
- **Endpoint:** `POST /api/auth/register`
- **Headers:** `Content-Type: application/json`
- **Body Parameters:**
    - `email` (string, required)
    - `password` (string, required)
    - `username` (string, required)
- **Request:**
    ```json
    {
        "email": "user@example.com",
        "password": "password123",
        "username": "user123"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "message": "User registered successfully"
    }
    ```

### Login User
- **Endpoint:** `POST /api/auth/login`
- **Headers:** `Content-Type: application/json`
- **Body Parameters:**
    - `email` (string, required)
    - `password` (string, required)
- **Request:**
    ```json
    {
        "email": "user@example.com",
        "password": "password123"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "token": "your-jwt-token"
    }
    ```

## App Management

### Create an App
- **Endpoint:** `POST /api/apps`
- **Headers:**
    - `Content-Type: application/json`
    - `Authorization: Bearer <your-jwt-token>`
- **Body Parameters:**
    - `name` (string, required)
    - `description` (string, required)
    - `version` (string, required)
    - `category` (string, required)
    - `screenshots` (array of strings, optional)
    - `apkUrl` (string, required)
    - `price` (number, optional)
- **Request:**
    ```json
    {
        "name": "Sample App",
        "description": "This is a sample app.",
        "version": "1.0.0",
        "category": "Utilities",
        "screenshots": ["image-url-1", "image-url-2"],
        "apkUrl": "apk-url",
        "price": 0
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "data": {
            "id": "app-id",
            "name": "Sample App",
            "description": "This is a sample app.",
            "version": "1.0.0",
            "category": "Utilities",
            "screenshots": ["image-url-1", "image-url-2"],
            "apkUrl": "apk-url",
            "price": 0,
            "downloads": 0,
            "ratingsCount": 0,
            "ratingsAverage": 0
        }
    }
    ```

### Get All Apps
- **Endpoint:** `GET /api/apps`
- **Headers:** `Authorization: Bearer <your-jwt-token>` (optional for public access)
- **Request:** No body parameters required.
- **Response:**
    ```json
    {
        "success": true,
        "data": [
            {
                "id": "app-id",
                "name": "Sample App",
                "description": "This is a sample app.",
                "version": "1.0.0",
                "category": "Utilities",
                "screenshots": ["image-url-1", "image-url-2"],
                "apkUrl": "apk-url",
                "price": 0,
                "downloads": 0,
                "ratingsCount": 0,
                "ratingsAverage": 0
            }
        ]
    }
    ```

### Get App by ID
- **Endpoint:** `GET /api/apps/:id`
- **Headers:** `Authorization: Bearer <your-jwt-token>` (optional for public access)
- **Request:** No body parameters required.
- **Response:**
    ```json
    {
        "success": true,
        "data": {
            "id": "app-id",
            "name": "Sample App",
            "description": "This is a sample app.",
            "version": "1.0.0",
            "category": "Utilities",
            "screenshots": ["image-url-1", "image-url-2"],
            "apkUrl": "apk-url",
            "price": 0,
            "downloads": 0,
            "ratingsCount": 0,
            "ratingsAverage": 0
        }
    }
    ```

### Update an App
- **Endpoint:** `PUT /api/apps/:id`
- **Headers:**
    - `Content-Type: application/json`
    - `Authorization: Bearer <your-jwt-token>`
- **Body Parameters:** (At least one of these should be provided)
    - `name` (string, optional)
    - `description` (string, optional)
    - `version` (string, optional)
    - `category` (string, optional)
    - `screenshots` (array of strings, optional)
    - `apkUrl` (string, optional)
    - `price` (number, optional)
- **Request:**
    ```json
    {
        "name": "Updated Sample App",
        "version": "1.0.1"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "data": {
            "id": "app-id",
            "name": "Updated Sample App",
            "description": "This is a sample app.",
            "version": "1.0.1",
            "category": "Utilities",
            "screenshots": ["image-url-1", "image-url-2"],
            "apkUrl": "apk-url",
            "price": 0,
            "downloads": 0,
            "ratingsCount": 0,
            "ratingsAverage": 0
        }
    }
    ```

### Delete an App
- **Endpoint:** `DELETE /api/apps/:id`
- **Headers:**
    - `Authorization: Bearer <your-jwt-token>`
- **Request:** No body parameters required.
- **Response:**
    ```json
    {
        "success": true,
        "message": "App deleted successfully"
    }
    ```

## Review and Rating Management

### Create a Review
- **Endpoint:** `POST /api/reviews/:appId`
- **Headers:**
    - `Content-Type: application/json`
    - `Authorization: Bearer <your-jwt-token>`
- **Body Parameters:**
    - `rating` (number, required, 1-5)
    - `comment` (string, required)
- **Request:**
    ```json
    {
        "rating": 5,
        "comment": "Great app!"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "data": {
            "id": "review-id",
            "rating": 5,
            "comment": "Great app!",
            "appId": "app-id",
            "user": "user-id",
            "createdAt": "2024-08-28T12:34:56Z",
            "updatedAt": "2024-08-28T12:34:56Z"
        }
    }
    ```

### Get Reviews for an App
- **Endpoint:** `GET /api/reviews/:appId`
- **Headers:** No special headers required.
- **Request:** No body parameters required.
- **Response:**
    ```json
    {
        "success": true,
        "data": [
            {
                "id": "review-id",
                "rating": 5,
                "comment": "Great app!",
                "appId": "app-id",
                "user": "user-id",
                "createdAt": "2024-08-28T12:34:56Z",
                "updatedAt": "2024-08-28T12:34:56Z"
            }
        ]
    }
    ```

### Delete a Review
- **Endpoint:** `DELETE /api/reviews/:id`
- **Headers:**
    - `Authorization: Bearer <your-jwt-token>`
- **Request:** No body parameters required.
- **Response:**
    ```json
    {
        "success": true,
        "message": "Review deleted successfully"
    }
    ```

## Developer Dashboard (Optional)

### Get Developer Apps
- **Endpoint:** `GET /api/developer/apps`
- **Headers:**
    - `Authorization: Bearer <your-jwt-token>`
- **Request:** No body parameters required.
- **Response:**
    ```json
    {
        "success": true,
        "data": [
            {
                "id": "app-id",
                "name": "Sample App",
                "description": "This is a sample app.",
                "version": "1.0.0",
                "category": "Utilities",
                "screenshots": ["image-url-1", "image-url-2"],
                "apkUrl": "apk-url",
                "price": 0,
                "downloads": 0,
                "ratingsCount": 0,
                "ratingsAverage": 0
            }
        ]
    }
    ```

## Category Management (Optional)

### Create a Category
- **Endpoint:** `POST /api/categories`
- **Headers:**
    - `Content-Type: application/json`
    - `Authorization: Bearer <your-jwt-token>`
- **Body Parameters:**
    - `name` (string,

 required)
- **Request:**
    ```json
    {
        "name": "Utilities"
    }
    ```
- **Response:**
    ```json
    {
        "success": true,
        "data": {
            "id": "category-id",
            "name": "Utilities"
        }
    }
    ```

### Get All Categories
- **Endpoint:** `GET /api/categories`
- **Headers:** No special headers required.
- **Request:** No body parameters required.
- **Response:**
    ```json
    {
        "success": true,
        "data": [
            {
                "id": "category-id",
                "name": "Utilities"
            }
        ]
    }
    ```
