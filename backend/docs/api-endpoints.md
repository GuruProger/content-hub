## **User API**

**Base URL:** `http://127.0.0.1:8000/api/v1/users`

---

### **Create User**

**POST** `/`

Creates a new user.

#### Request Body Parameters:

| Parameter    | Type     | Required | Description                       |
|--------------|----------|----------|-----------------------------------|
| `username`   | `string` | yes      | User's login (max. 25 characters) |
| `email`      | `string` | yes      | User's email                      |
| `bio`        | `string` | no       | Bio (max. 1000 characters)        |
| `avatar_url` | `string` | no       | Avatar URL                        |
| `password`   | `string` | yes      | Password (8-30 characters)        |

#### Example Request:

```http
POST /api/v1/users
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword",
  "bio": "Hello! I'm John.",
  "avatar_url": null
}
```

#### Responses:

- **201 Created** — user successfully created.
- **400 Bad Request** — invalid request data.
- **500 Internal Server Error** — server error.

#### Example Successful Response (201):

```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "bio": "Hello! I'm John.",
  "avatar_url": null,
  "created_at": "2025-03-21T12:30:00.000001",
  "rating": 0,
  "role": "user"
}
```

---

### **Get User**

**GET** `/{user_id}`

Retrieve user information by ID.

#### URL Parameters:

| Parameter | Type  | Required | Description |
|-----------|-------|----------|-------------|
| `user_id` | `int` | yes      | User ID     |

#### Example Request:

```http
GET /api/v1/users/1
```

#### Responses:

- **200 OK** — user found and data returned.
- **404 Not Found** — user not found.
- **500 Internal Server Error** — server error.

#### Example Successful Response (200):

```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "bio": "Hello! I'm John.",
  "avatar_url": null,
  "created_at": "2025-03-21T12:30:00.000001",
  "rating": 0,
  "role": "user"
}
```

#### Example Error (404):

```json
{
  "detail": "User not found"
}
```

---

### **Update User**

**PUT** `/{user_id}`

Update user information.

#### URL Parameters:

| Parameter | Type  | Required | Description |
|-----------|-------|----------|-------------|
| `user_id` | `int` | yes      | User ID     |

#### Request Body Parameters:

All fields are optional.

| Parameter    | Type     | Required | Description                       |
|--------------|----------|----------|-----------------------------------|
| `username`   | `string` | no       | New username (max. 25 characters) |
| `email`      | `string` | no       | New email                         |
| `bio`        | `string` | no       | New bio                           |
| `avatar_url` | `string` | no       | New avatar URL                    |
| `password`   | `string` | no       | New password (8-30 characters)    |

#### Example Request:

```http
PUT /api/v1/users/1
Content-Type: application/json

{
  "username": "john_updated",
  "bio": "Updated bio"
}
```

#### Responses:

- **200 OK** — user successfully updated.
- **404 Not Found** — user not found.
- **400 Bad Request** — invalid request data.
- **500 Internal Server Error** — server error.

#### Example Successful Response (200):

```json
{
  "id": 1,
  "username": "john_updated",
  "email": "john@example.com",
  "bio": "Updated bio",
  "avatar_url": null,
  "created_at": "2025-03-21T12:30:00.000001",
  "rating": 0,
  "role": "user"
}
```

#### Example Error (404):

```json
{
  "detail": "User not found"
}
```

---

### **Delete User**

**DELETE** `/{user_id}`

Delete a user by ID.

#### URL Parameters:

| Parameter | Type  | Required | Description |
|-----------|-------|----------|-------------|
| `user_id` | `int` | yes      | User ID     |

#### Example Request:

```http
DELETE /api/v1/users/1
```

#### Responses:

- **204 No Content** — user successfully deleted.
- **404 Not Found** — user not found.
- **500 Internal Server Error** — server error.

#### Example Error (404):

```json
{
  "detail": "User not found"
}
```

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
