# Target Account Matching API

A RESTful API service designed to:

- Authenticate users via username and password.
- Retrieve a list of companies with match scores.
- Update the target status of a company.

## Features

- **User Authentication**: Secure login with token-based authentication.
- **Company Listings**: Fetch companies along with their match scores and statuses.
- **Status Updates**: Modify the target status of individual companies.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **Build Tools**: Vite
- **Styling**: Tailwind CSS
- **Languages**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/latha0001/challenge1.git
   cd challenge1
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Supabase**:

   - Set up a Supabase project.
   - Create the necessary tables and schemas.
   - Obtain your Supabase URL and API key.

4. **Set Environment Variables**:

   Create a `.env` file in the root directory and add:

   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_api_key
   ```

5. **Run the application**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## API Endpoints

### POST `/login`

Authenticate a user.

- **Request Body**:

  ```json
  {
    "username": "user1",
    "password": "pass123"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Login successful",
    "token": "your_jwt_token"
  }
  ```

### GET `/accounts`

Retrieve a list of companies with match scores.

- **Headers**:

  ```
  Authorization: Bearer your_jwt_token
  ```

- **Response**:

  ```json
  [
    {
      "id": 1,
      "company_name": "Acme Corp",
      "match_score": 92,
      "status": "Not Target"
    },
    {
      "id": 2,
      "company_name": "Globex Inc",
      "match_score": 87,
      "status": "Target"
    }
  ]
  ```

### POST `/accounts/:id/status`

Update the target status of a company.

- **Headers**:

  ```
  Authorization: Bearer your_jwt_token
  ```

- **Request Body**:

  ```json
  {
    "status": "Target"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Status updated successfully",
    "company_id": 2,
    "new_status": "Target"
  }
  ```

## Folder Structure

```
challenge1/
├── dist/
├── src/
├── supabase/
│   └── migrations/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

## License

This project is licensed under the MIT License.
