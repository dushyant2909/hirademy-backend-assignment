# Hirademy Backend Assignment

This project is a backend service for managing assistants using Node.js, Express, and MongoDB. It includes CRUD operations for creating, reading, updating, and deleting assistant records.


## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (running locally or a cloud instance)

### Installation Steps

1. **Clone the Repository:**

```bash
git clone https://github.com/yourusername/hirademy-backend-assignment.git
```

2. **Navigate to the Project Directory:**
```bash
cd hirademy-backend-assignment
```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=3000
   MONGODB_URL=mongodb://localhost:27017
   CORS_ORIGIN = *
   ```

5. **Start the Server:**

   ```bash
   npm run dev
   ```

### Postman Collection

A Postman collection is provided in the file `Hirademy-backend-apis.postman_collection.json` for easier testing of the API endpoints.

### Instructions for Using the Postman Collection

1. Open Postman.
2. Click on `Import` in the top-left corner.
3. Select `Choose Files` and import the `Hirademy-backend-apis.postman_collection.json` file.
4. The collection should now appear in your Postman workspace.
5. You can now run the requests provided in the collection to interact with the API.

### Troubleshooting

- Ensure MongoDB is running and accessible.
- Check if the `.env` file is correctly set up with all the required environment variables.
- Verify the port specified in the `.env` file is not being used by another application.
