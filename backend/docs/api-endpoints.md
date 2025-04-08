## **Users API**

**Base URL:** `http://127.0.0.1:8000/api/v1/users`
  
---

### **Create User**

**POST** `/`

Creates a new user with optional avatar upload.

#### Request Content Type:

`multipart/form-data`

#### Form Data Parameters:

| Parameter  | Type   | Required | Description                         |
|------------|--------|----------|-------------------------------------|
| `username` | string | yes      | Unique username (max 50 characters) |
| `email`    | email  | yes      | Valid email address                 |
| `bio`      | string | no       | Optional user bio (max 1000 chars)  |
| `password` | string | yes      | User password (min 8, max 30 chars) |
| `avatar`   | file   | no       | Optional avatar image (binary file) |

#### Example Request:

```bash
curl -X POST http://127.0.0.1:8000/api/v1/users \
  -F "username=johndoe" \
  -F "email=john@example.com" \
  -F "password=securepassword123" \
  -F "bio=Just a regular guy" \
  -F "avatar=@/path/to/avatar.jpg"
```

#### Responses:

- **201 Created** — User successfully created.
- **400 Bad Request** — Invalid or missing data.
- **500 Internal Server Error** — Database error.

#### Example Response:

```json
{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "bio": "Just a regular guy",
  "avatar": true,
  "created_at": "2025-04-08T12:00:00"
}
```

> Note: The `avatar` field indicates whether the user has an avatar (`true` or `false`).

---

### **Get User by ID**

**GET** `/{user_id}`

Retrieves a user by their ID, including avatar as a base64-encoded string if present.

#### URL Parameters:

| Parameter | Type | Required | Description    |
|-----------|------|----------|----------------|
| `user_id` | int  | yes      | ID of the user |

#### Example Request:

```http
GET /api/v1/users/1
```

#### Responses:

- **200 OK** — User data returned.
- **404 Not Found** — User not found.
- **500 Internal Server Error** — Database error.

#### Example Response:

```json
{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "bio": "Just a regular guy",
  "avatar": "base64_encoded_string",
  "created_at": "2025-04-08T12:00:00"
}
```

> Note: The `avatar` field is a base64-encoded string in this endpoint if the user has an avatar.

---

### **Update User**

**PATCH** `/{user_id}`

Updates user data, including optional avatar image.

#### Request Content Type:

`multipart/form-data`

#### URL Parameters:

| Parameter | Type | Required | Description    |
|-----------|------|----------|----------------|
| `user_id` | int  | yes      | ID of the user |

#### Form Data Parameters (all optional):

| Parameter  | Type   | Description                        |
|------------|--------|------------------------------------|
| `username` | string | New username (max 50 characters)   |
| `email`    | email  | New email address                  |
| `bio`      | string | New bio (max 1000 chars)           |
| `password` | string | New password (min 8, max 30 chars) |
| `avatar`   | file   | New avatar image                   |

#### Example Request:

```bash
curl -X PATCH http://127.0.0.1:8000/api/v1/users/1 \
  -F "username=johndoe_updated" \
  -F "avatar=@/path/to/new_avatar.jpg"
```

#### Responses:

- **200 OK** — User successfully updated.
- **404 Not Found** — User not found.
- **500 Internal Server Error** — Database error.

#### Example Response:

```json
{
  "id": 1,
  "username": "johndoe_updated",
  "email": "john@example.com",
  "bio": "Just a regular guy",
  "avatar": true,
  "created_at": "2025-04-08T12:00:00"
}
```

> Note: The `avatar` field indicates presence (`true` or `false`), not base64 data.

---

### **Delete User**

**DELETE** `/{user_id}`

Deletes a user by their ID.

#### URL Parameters:

| Parameter | Type | Required | Description    |
|-----------|------|----------|----------------|
| `user_id` | int  | yes      | ID of the user |

#### Example Request:

```http
DELETE /api/v1/users/1
```

#### Responses:

- **204 No Content** — User deleted successfully.
- **404 Not Found** — User not found.
- **500 Internal Server Error** — Database error.

#### Example Error Response:

```json
{
  "detail": "User not found"
}
```

---

## **Articles API**

**Base URL:** `http://127.0.0.1:8000/api/v1/articles`

---

### **Create Article**

**POST** `/`

Creates a new article.

#### Request Body Parameters:

| Parameter      | Type      | Required | Description                         |
|----------------|-----------|----------|-------------------------------------|
| `title`        | `string`  | yes      | Article title (max. 255 characters) |
| `content`      | `string`  | yes      | Article content                     |
| `user_id`      | `int`     | yes      | ID of the author (user)             |
| `is_published` | `boolean` | no       | Published status (default: `false`) |

#### Example Request:

```http
POST /api/v1/articles
Content-Type: application/json

{
  "title": "My First Article",
  "content": "This is the content of the article.",
  "user_id": 1,
  "is_published": true
}
```

#### Responses:

- **201 Created** — article successfully created.
- **400 Bad Request** — invalid request data.
- **500 Internal Server Error** — server error.

#### Example Successful Response (201):

```json
{
  "id": 10,
  "title": "My First Article",
  "content": "This is the content of the article.",
  "user_id": 1,
  "created_at": "2025-03-21T12:30:00.000001",
  "updated_at": "2025-03-21T12:30:00.000001",
  "rating": 0,
  "is_published": true
}
```

---

### **Get Article by ID**

**GET** `/{article_id}`

Retrieve an article by its ID.

#### URL Parameters:

| Parameter    | Type  | Required | Description |
|--------------|-------|----------|-------------|
| `article_id` | `int` | yes      | Article ID  |

#### Example Request:

```http
GET /api/v1/articles/10
```

#### Responses:

- **200 OK** — article found and data returned.
- **404 Not Found** — article not found.
- **500 Internal Server Error** — server error.

#### Example Successful Response (200):

```json
{
  "id": 10,
  "title": "My First Article",
  "content": "This is the content of the article.",
  "user_id": 1,
  "created_at": "2025-03-21T12:30:00.000001",
  "updated_at": "2025-03-21T12:30:00.000001",
  "rating": 0,
  "is_published": true
}
```

#### Example Error (404):

```json
{
  "detail": "Article not found"
}
```

---

### **Get Articles by User**

**GET** `/user/{user_id}`

Retrieve all articles created by a specific user.

#### URL Parameters:

| Parameter | Type  | Required | Description |
|-----------|-------|----------|-------------|
| `user_id` | `int` | yes      | User ID     |

#### Example Request:

```http
GET /api/v1/articles/user/1
```

#### Responses:

- **200 OK** — list of articles returned (empty array if none).
- **500 Internal Server Error** — server error.

#### Example Successful Response (200):

```json
[
  {
    "id": 10,
    "title": "My First Article",
    "content": "This is the content of the article.",
    "user_id": 1,
    "created_at": "2025-03-21T12:30:00.000001",
    "updated_at": "2025-03-21T12:30:00.000001",
    "rating": 0,
    "is_published": true
  },
  {
    "id": 11,
    "title": "Another Article",
    "content": "Another article's content.",
    "user_id": 1,
    "created_at": "2025-03-21T13:00:00.000001",
    "updated_at": "2025-03-21T13:00:00.000001",
    "rating": 0,
    "is_published": false
  }
]
```

---

### **Update Article**

**PATCH** `/{article_id}`

Update an existing article.

#### URL Parameters:

| Parameter    | Type  | Required | Description |
|--------------|-------|----------|-------------|
| `article_id` | `int` | yes      | Article ID  |

#### Request Body Parameters:

All fields are optional.

| Parameter      | Type      | Required | Description                        |
|----------------|-----------|----------|------------------------------------|
| `title`        | `string`  | no       | New article title (max. 255 chars) |
| `content`      | `string`  | no       | New content                        |
| `is_published` | `boolean` | no       | Published status                   |

#### Example Request:

```http
PATCH /api/v1/articles/10
Content-Type: application/json

{
  "title": "Updated Article Title",
  "is_published": true
}
```

#### Responses:

- **200 OK** — article successfully updated.
- **404 Not Found** — article not found.
- **400 Bad Request** — invalid request data.
- **500 Internal Server Error** — server error.

#### Example Successful Response (200):

```json
{
  "id": 10,
  "title": "Updated Article Title",
  "content": "This is the content of the article.",
  "user_id": 1,
  "created_at": "2025-03-21T12:30:00.000001",
  "updated_at": "2025-03-21T13:30:00.000001",
  "rating": 0,
  "is_published": true
}
```

---

### **Delete Article**

**DELETE** `/{article_id}`

Delete an article by ID.

#### URL Parameters:

| Parameter    | Type  | Required | Description |
|--------------|-------|----------|-------------|
| `article_id` | `int` | yes      | Article ID  |

#### Example Request:

```http
DELETE /api/v1/articles/10
```

#### Responses:

- **204 No Content** — article successfully deleted.
- **404 Not Found** — article not found.
- **500 Internal Server Error** — server error.

#### Example Error (404):

```json
{
  "detail": "Article not found"
}
```
