---
sidebar_position: 1
sidebar: jmsSidebar
---

#

## **Journal List**

**API :** https://jms.kryoni.com/api/v1/external/journals

**Method:** GET

**Headers:**

- `x-api-key` - `{Your Api Key Generate in Developer Option}`

- `x-api-secret` - `{Your Api Secret Generate in Developer Option}`

**Pagination:**

Add value in url param

- page // Page of List (Default is set to 1)
- Size // Size of Page (Default is set to 20)

Example: https://jms.kryoni.com/api/v1/external/journals?page=1&size=20

**Search:**

- Add search_text in url param

Example:https://jms.kryoni.com/api/v1/external/journals?search_text=science

**Response:**

```json response
{
 “code” : 0,
 “message” : “success”,
 “journals”:[
    {
     “id”:1,
     “title”:”Journal Of Science”,
     “created_at” : ”2024-08-26T10:58:44.412203Z”
    },..
  ],
 “page_context”: {
   “page”: 1,
   “size”: 20,
   “total_count” : 100,
   “search_text”: ”science”
   }
}
```
