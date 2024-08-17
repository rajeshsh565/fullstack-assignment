## Instructions
1. **Setup .env**
    - Create .env file in backend folder.
    - Add a mongodb uri as follows -
        ```
        MONGODB_URI = uri_goes_here
        ```
2. **Install Dependencies**
    ```
    npm install
    ```
3. **Spin up dev server**
    ```
    npm run dev
    ```
4. **Start api testing with postman or thunderClient(vs code extension)**
    ```
    GET http://localhost:3000/ping
    ```
