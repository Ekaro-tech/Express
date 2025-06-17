# Simple REST API with Express.js

## Setup

1. Clone the repository or copy the files.
2. Install dependencies:
   ```bash
   npm install

3. Run the server:

node index.js

API Endpoints

GET /

Response: "Hello, World!"

GET /items

Response: Returns all items.

GET /items/:id

Response: Item with the given ID.

Error: 404 if not found.

POST /items

Request Body:

{
  "name": "Item Name",
  "description": "Item Description"
}

Response: Created item (201).

Error: 400 if fields are missing.

PUT /items/:id

Request Body: Same as POST

Response: Updated item.

Error: 400 or 404.

DELETE /items/:id

Response: 204 No Content.

Error: 404 if not found.

Example Requests (Postman or curl)

curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Book", "description": "A fantasy novel"}'

curl http://localhost:3000/items

curl http://localhost:3000/items/1

curl -X PUT http://localhost:3000/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Book", "description": "Updated description"}'

curl -X DELETE http://localhost:3000/items/
