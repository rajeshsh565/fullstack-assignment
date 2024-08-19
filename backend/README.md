## Individual Instructions for BackEnd
1. **Setup .env**
    - Create .env file.
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
4. **Start api testing with postman or thunderClient(VSCode extension)**
    ```
    GET http://localhost:3000/ping
    ```
### Note:- This is only the backend server.
    Goto README.md at root folder for instructions on how to setup complete project.