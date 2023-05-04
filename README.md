## Endpoint Documentation

### GET /admin/get-product/:id

Description: Retrieves a single product from the database.

Request Method: GET

URL Parameters:

- `id` - The ID of the product to retrieve.

Response:

- `200 OK` - Product object
- `404 Not Found` - If the product with the specified ID is not found.

### POST /admin/delete-product

Description: Deletes a product from the database.

Request Method: POST

Request Body:

- `productId` - The ID of the product to delete.

Response:

- `302 Found` - Redirects to `/products` on successful deletion.
- `404 Not Found` - If the product with the specified ID is not found.

### POST /admin/add-product

Description: Adds a new product to the database.

Request Method: POST

Request Body:

- `productName` - The name of the product.
- `productImgUrl` - The URL of the product's image.
- `productPrice` - The price of the product.
- `productDescription` - The description of the product.

Response:

- `302 Found` - Redirects to `/create-product` on successful creation.

### POST /admin/edit-product

Description: Edits an existing product in the database.

Request Method: POST

Request Body:

- `productId` - The ID of the product to edit.
- `productName` - The updated name of the product.
- `productImgUrl` - The updated URL of the product's image.
- `productPrice` - The updated price of the product.
- `productDescription` - The updated description of the product.

Response:

- `302 Found` - Redirects to `/productId/:id` on successful update.
- `404 Not Found` - If the product with the specified ID is not found.
