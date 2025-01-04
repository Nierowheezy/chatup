# Deployment Instructions

This GitHub repository contains comprehensive instructions for deploying both the backend and frontend applications.

## Backend

1. Configure the `.env` file with the following environment variables:

    ```plaintext
    MONGODB_URI=...  
    PORT=5001  
    JWT_SECRET=...  

    CLOUDINARY_CLOUD_NAME=...  
    CLOUDINARY_API_KEY=...  
    CLOUDINARY_API_SECRET=...  

    NODE_ENV=development  
    ```

2. Run `npm install` to install dependencies.  
3. Use `npm start` to run the backend server.

## Frontend

1. Navigate to the `frontend` folder and install dependencies with:

    ```shell
    npm install
    ```

2. Build the frontend with:

    ```shell
    npm run build
    ```

3. Serve the app using a static file server or integrate it with the backend for deployment.

---

These instructions ensure the application is ready for deployment and testing in any environment.

If you need any further clarifications or additional information, please feel free to reach out.
