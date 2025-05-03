## **Users API**

**Base URL:** `http://127.0.0.1:8000/api/v1/users`

### **Create User**

**POST** `/`

Creates a new user account. Supports optional avatar upload.

#### Request Content Type:

`multipart/form-data`

#### Form Data Parameters:

| Parameter  | Type   | Required | Description                         |
|------------|--------|----------|-------------------------------------|
| `username` | string | yes      | Unique username (max 50 characters) |
| `email`    | email  | yes      | Valid email address                 |
| `bio`      | string | no       | Optional bio (max 1000 characters)  |
| `password` | string | yes      | Password (8–30 characters)          |
| `avatar`   | file   | no       | Optional avatar image (binary file) |

#### Example Request:

```bash
curl -X POST http://127.0.0.1:8000/api/v1/users \  
  -H 'accept: application/json' \  
  -H 'Content-Type: multipart/form-data' \  
  -F "username=johndoe" \  
  -F "email=john@example.com" \  
  -F "password=securepassword123" \  
  -F "bio=Just a regular guy" \  
  -F 'avatar=@avatar.jpg;type=image/jpeg'
```

#### Responses:

| Code | Description                                    |
|------|------------------------------------------------|
| 201  | ✅ User successfully created                    |
| 400  | ❌ Avatar validation error                      |
| 409  | ❌ Email or username already exists             |
| 413  | ❌ Avatar file size too large                   |
| 415  | ❌ Avatar file is not a valid image             |
| 422  | ❌ Validation error (invalid or missing fields) |
| 500  | ❌ Internal server/database error               |

#### Example Success Response:

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "bio": "Just a regular guy",
  "id": 1,
  "created_at": "2025-04-16T19:05:27.993045",
  "rating": 0,
  "is_admin": false,
  "avatar": true,
  "status": "active"
}
```

#### Error Responses:

Username conflict

```json
{
  "detail": {
    "loc": "username",
    "msg": "Username already exists"
  }
}
```

Email conflict

```json
{
  "detail": {
    "loc": "email",
    "msg": "Email already exists"
  }
}
```

Unsupported File Type

```json  
{
  "detail": {
    "loc": "avatar",
    "msg": "File must be an image"
  }
}  
```  

> ℹ️ `avatar` returns a boolean (`true` if uploaded, otherwise `false`).

---

### **Get User by ID**

**GET** `/{user_id}`

Fetches user data by ID. If the user has an avatar, it is returned as a base64 string.

#### URL Parameters:

| Parameter | Type | Required | Description           |
|-----------|------|----------|-----------------------|
| `user_id` | int  | yes      | ID of the target user |

#### Example Request:

```bash
curl -X 'GET' \
  'http://0.0.0.0:8000/api/v1/users/1' \
  -H 'accept: application/json'
```

#### Responses:

| Code | Description                      |
|------|----------------------------------|
| 200  | ✅ User found                     |
| 404  | ❌ User not found                 |
| 422  | ❌ Invalid `user_id` format       |
| 500  | ❌ Internal server/database error |

#### Example Response:

```json
{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "bio": "Just a regular guy",
  "created_at": "2025-04-16T18:55:36.719610",
  "rating": 0,
  "is_admin": false,
  "avatar": "/9j/4AAQSkZJRgABAQEAZ...Po//9k=",
  "status": "active"
}
```

> ℹ️ `avatar` will contain a base64-encoded image string if uploaded.

---

### **Update User**

**PATCH** `/{user_id}`

Updates user profile fields. All fields are optional. Avatar can also be replaced.

#### Request Content Type:

`multipart/form-data`

#### URL Parameters:

| Parameter | Type | Required | Description           |
|-----------|------|----------|-----------------------|
| `user_id` | int  | yes      | ID of the target user |

#### Form Data Parameters (optional):

| Parameter  | Type   | Description                        |
|------------|--------|------------------------------------|
| `username` | string | New username (max 50 characters)   |
| `email`    | email  | New email address                  |
| `bio`      | string | Updated bio (max 1000 characters)  |
| `password` | string | New password (8–30 characters)     |
| `avatar`   | file   | Replace avatar image (binary file) |

#### Example Request:

```bash
curl -X 'PATCH' \
  'http://0.0.0.0:8000/api/v1/users/1' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'username=johndoe_updated' \
  -F 'email=john_updated@example.com' \
  -F 'bio='
```

#### Responses:

| Code | Description                        |
|------|------------------------------------|
| 200  | ✅ User successfully updated        |
| 400  | ❌ Avatar validation error          |
| 404  | ❌ User not found                   |
| 409  | ❌ Email or username already exists |
| 413  | ❌ Avatar file size too large       |
| 415  | ❌ Avatar file is not a valid image |
| 422  | ❌ Invalid input or bad format      |
| 500  | ❌ Database error                   |

#### Example Response:

```json
{
  "username": "johndoe_updated",
  "email": "john_updated@example.com",
  "bio": "",
  "id": 1,
  "created_at": "2025-04-16T18:55:36.719610",
  "rating": 0,
  "is_admin": false,
  "avatar": true,
  "status": "active"
}
```

---

### **Delete User**

**DELETE** `/{user_id}`

Soft-deletes a user by marking them as deleted in the database.

#### URL Parameters:

| Parameter | Type | Required | Description           |
|-----------|------|----------|-----------------------|
| `user_id` | int  | yes      | ID of the target user |

#### Example Request:

```bash
curl -X 'DELETE' \
  'http://0.0.0.0:8000/api/v1/users/1' \
  -H 'accept: */*'
```

#### Responses:

| Code | Description                                    |
|------|------------------------------------------------|
| 204  | ✅ User successfully deleted (no response body) |
| 404  | ❌ User not found                               |
| 422  | ❌ Invalid `user_id` format                     |
| 500  | ❌ Internal server error                        |

#### Example Error:

```json
{
  "detail": "User not found"
}
```

---

### Additional Notes

| Feature                | Description                                                                |
|------------------------|----------------------------------------------------------------------------|
| **Soft Delete**        | Users are marked as deleted (`status = DELETED`) instead of being removed. |
| **Avatar in response** | In GET — base64, in the rest — boolean true/false                          |

## **Articles API**

**Base URL:** `http://127.0.0.1:8000/api/v1/articles`
  
---  

### **Create Article**

**POST** `/`

Creates a new article.

#### Request Body Parameters:

| Parameter      | Type       | Required | Description                         |  
|----------------|------------|----------|-------------------------------------|  
| `title`        | `string`   | yes      | Article title (max. 255 characters) |  
| `content`      | `string`   | yes      | Article content                     |  
| `user_id`      | `int`      | yes      | ID of the author (user)             |  
| `is_published` | `boolean`  | no       | Published status (default: `false`) |  
| `tags`         | `string[]` | no       | Array of tag names                  |  

#### Example Request:

```http  
POST /api/v1/articles  
Content-Type: application/json  
  
{  
  "title": "My First Article",  
  "content": "This is the content of the article.",  
  "user_id": 1,  
  "is_published": true,
  "tags": ["programming", "python", "fastapi"]
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
  "is_published": true,
  "tags": [
    {
      "id": 1,
      "name": "programming"
    },
    {
      "id": 2,
      "name": "python"
    },
    {
      "id": 3,
      "name": "fastapi"
    }
  ]
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
  "is_published": true,
  "tags": [
    {
      "id": 1,
      "name": "programming"
    },
    {
      "id": 2,
      "name": "python"
    },
    {
      "id": 3,
      "name": "fastapi"
    }
  ]
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
    "user_id": 1,
    "created_at": "2025-03-21T12:30:00.000001",
    "updated_at": "2025-03-21T12:30:00.000001",
    "rating": 0,
    "is_published": true,
    "tags": [
      {
        "id": 1,
        "name": "programming"
      },
      {
        "id": 2,
        "name": "python"
      }
    ]
  },
  {
    "id": 11,
    "title": "Another Article",
    "user_id": 1,
    "created_at": "2025-03-21T13:00:00.000001",
    "updated_at": "2025-03-21T13:00:00.000001",
    "rating": 0,
    "is_published": false,
    "tags": [
      {
        "id": 3,
        "name": "fastapi"
      }
    ]
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

| Parameter      | Type       | Required | Description                        |  
|----------------|------------|----------|------------------------------------|  
| `title`        | `string`   | no       | New article title (max. 255 chars) |  
| `content`      | `string`   | no       | New content                        |  
| `is_published` | `boolean`  | no       | Published status                   |  
| `tags`         | `string[]` | no       | Array of tag names (replaces existing tags) |  

#### Example Request:

```http  
PATCH /api/v1/articles/10  
Content-Type: application/json  
  
{  
  "title": "Updated Article Title",  
  "is_published": true,
  "tags": ["programming", "tutorial"]
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
  "is_published": true,
  "tags": [
    {
      "id": 1,
      "name": "programming"
    },
    {
      "id": 4,
      "name": "tutorial"
    }
  ]
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

### **Get Suggested Articles**

**GET** `/suggested/`

Retrieve a list of suggested articles.

#### Query Parameters:

| Parameter | Type  | Required | Default | Description                            |  
|-----------|-------|----------|---------|----------------------------------------|  
| `count`   | `int` | no       | 5       | Number of articles to return (1-20)    |  

#### Example Request:

```http  
GET /api/v1/articles/suggested/?count=3  
```  

#### Responses:

- **200 OK** — list of suggested articles returned.
- **422 Unprocessable Entity** — invalid query parameters.
- **500 Internal Server Error** — server error.

#### Example Successful Response (200):

```json  
[
  {
    "id": 10,
    "title": "My First Article",
    "user_id": 1,
    "created_at": "2025-03-21T12:30:00.000001",
    "updated_at": "2025-03-21T12:30:00.000001",
    "rating": 0,
    "is_published": true,
    "tags": [
      {
        "id": 1,
        "name": "programming"
      }
    ]
  },
  {
    "id": 15,
    "title": "Popular Article",
    "user_id": 2,
    "created_at": "2025-03-21T10:30:00.000001",
    "updated_at": "2025-03-21T10:30:00.000001",
    "rating": 0,
    "is_published": true,
    "tags": [
      {
        "id": 2,
        "name": "python"
      }
    ]
  },
  {
    "id": 18,
    "title": "Another Suggested Article",
    "user_id": 3,
    "created_at": "2025-03-20T15:30:00.000001",
    "updated_at": "2025-03-20T15:30:00.000001",
    "rating": 0,
    "is_published": true,
    "tags": [
      {
        "id": 3,
        "name": "fastapi"
      }
    ]
  }
]  
```