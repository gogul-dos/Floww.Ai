# Personal Expense Tracker API

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run database migrations:
   - For SQLite:
     - Create the database file and run the SQL script in `database/migrations.sql`.
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### 1. Add Transaction

- `POST /api/transactions`
- Request body: `{ "type": "income", "category": 1, "amount": 500, "date": "2024-10-23", "description": "Salary" }`

### 2. Get All Transactions

- `GET /api/transactions`

### 3. Get Transaction by ID

- `GET /api/transactions/:id`

### 4. Update Transaction

- `PUT /api/transactions/:id`
- Request body: `{ "type": "expense", "category": 2, "amount": 200, "date": "2024-10-23", "description": "Groceries" }`

### 5. Delete Transaction
