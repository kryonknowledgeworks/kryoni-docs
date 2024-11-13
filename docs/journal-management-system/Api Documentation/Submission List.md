---
sidebar_position: 3
sidebar: jmsSidebar
---

#

## **Submission List**

**API :** https://jms.kryoni.com/api/v1/external/journals

**Method:** GET

**Headers:**

- `x-api-key` - `{Your Api Key Generate in Developer Option}`
- `x-api-secret` - `{Your Api Secret Generate in Developer Option}`

**Journal:**

- Add journal_id in url to filter by journal.And It is mandatory for this api.

**Example**: https://jms.kryoni.com/api/v1/external/journals?journal_id=1

**Pagination:**
Add value in url param

- page // Page of List (Default is set to 1)
- size // Size of Page (Default is set to 20)

Example: https://jms.kryoni.com/api/v1/external/submissions?journal_id=1&page=1&size=20

**Search:**

- Add search_text in url param

Example:https://jms.kryoni.com/api/v1/external/submissions?journal_id=1&search_text=science

**Response:**

<div className="custom-json-response">

**Response**

```yml
{
 “code” : 0,
 “message” : “success”,
 “submissions”:[
    {
     “id”:1,
     “title”:”The Global Warning”,
     “journal_id” : 1,
     “journal_title” : “The Journal of Science”,
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

</div>
