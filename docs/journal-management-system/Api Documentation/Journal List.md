---
sidebar_position: 1
sidebar: jmsSidebar
---

## **Overview**

The Journal List API allows you to fetch a list of journals with pagination and search functionality. This documentation provides details on how to authenticate, make requests, and interpret responses.

### **Base URL**

```plaintext
https://jms.kryoni.com/api/v1/external/journals
```

**Endpoint**

- URL: `https://jms.kryoni.com/api/v1/external/journals`
- Method: GET
- Description: Fetches a list of journals with pagination and search functionality.

## **Authentication**

To access this API, you must include the following headers in your request:

### **Request Headers**

| Header         | Value                                             | Description                             |
| -------------- | ------------------------------------------------- | --------------------------------------- |
| `x-api-key`    | `{Your Api Key Generated in Developer Option}`    | API key to authenticate the request.    |
| `x-api-secret` | `{Your Api Secret Generated in Developer Option}` | API secret to authenticate the request. |

<details className="response-success">
  <summary>Api Key Authentication</summary>

```javascript
{
  "api_key": "string",
  "api_secret": "string"
}
```

</details>

### **Query Parameters**

**1. Pagination Parameters**

| Parameter | Type    | Required | Description                                    | Default |
| --------- | ------- | -------- | ---------------------------------------------- | ------- |
| `page`    | integer | No       | Page number to retrieve from the journal list. | `1`     |
| `size`    | integer | No       | Number of journals per page.                   | `20`    |

**Example**

```plaintext
https://jms.kryoni.com/api/v1/external/journals?page=2&size=10
```

This request will retrieve the second page of journals, with a page size of 10 journals per page.

**2.** **Search Parameter:**

- `search_text` (string, optional): Use this parameter to filter the journals by title or relevant keywords.

**Example**

```plaintext
https://jms.kryoni.com/api/v1/external/journals?search_text=science
```

This will return journals that contain "science" in the title or description.

## **Response**

The API response is a JSON object that provides the requested journal data, pagination details, and any search information. Below is an example response structure:

### **Response Body**

<details className="response-success">
  <summary>200 Success</summary>
  <div className="custom-response">
  The response schema is returned in JSON format with details on the requested journals, pagination, and any applied search filters.
   <details>
    <summary>Response Schema: `application/json`</summary>

| Field                         | Type              | Description                                         |
| ----------------------------- | ----------------- | --------------------------------------------------- |
| `code`                        | integer           | A status code, where `0` indicates success.         |
| `message`                     | string            | Message detailing the status, e.g., "success".      |
| `journals`                    | array of objects  | List of journals that match the query parameters.   |
| ├─ `journals.id`              | integer           | Unique identifier for each journal.                 |
| ├─ `journals.title`           | string            | Title of the journal.                               |
| └─ `journals.created_at`      | string (datetime) | Journal creation date in ISO 8601 format.           |
| `page_context`                | object            | Contains pagination details and search information. |
| ├─ `page_context.page`        | integer           | Current page number of the result.                  |
| ├─ `page_context.size`        | integer           | Number of journals per page.                        |
| ├─ `page_context.total_count` | integer           | Total number of matching journals.                  |
| └─ `page_context.search_text` | string            | Search term used, if any, to filter the journals.   |

  </details>

---

**Response**

    ```javascript  title="API KEY"
    {
      "code": 0,
      "message": "success",
      "journals":
        [
          {
            "id": 1,
            "title": "Journal Of Science",
            "created_at": "2024-08-26T10:58:44.412203Z",
          },
          {
            "id": 2,
            "title": "Journal Of Technology",
            "created_at": "2024-08-27T11:00:00.000000Z",
          },
        ],
      "page_context":
        { "page": 1,
          "size": 20,
          "total_count": 100,
          "search_text": "science"
        },
    }
    ```

  </div>
</details>

### **Error Handling**

Possible error responses might include:

<details className="response-error">
  <summary>401 Unauthorized</summary>
  <div className="custom-response">
   <details>
    <summary>Response Schema: `application/json`</summary>
| Code | Message          | Description                                                        |
| ---- | ---------------- | ------------------------------------------------------------------ |
| `1`  | "Unauthorized"   | Occurs if `x-api-key or` or `x-api-secret` are invalid or missing. |
| `2`  | "Invalid Params" | Triggered when query parameters contain invalid formats or values. |

  </details>

---

**Response**

```javascript
{
  "code": 1,
  "message": "Unauthorized",
  "status_code": 401,
  "error": "Invalid API credentials",
}
```

  </div>
</details>

**Example Requests**

**1.** Fetching the First Page with Default Page Size:

```plaintext
GET https://jms.kryoni.com/api/v1/external/journals
```

**2.** Fetching the Third Page with a Page Size of 15:

```plaintext
GET https://jms.kryoni.com/api/v1/external/journals?page=3&size=15
```

**3.** Searching for Journals with "technology" in Title:

```plaintext
GET https://jms.kryoni.com/api/v1/external/journals?search_text=technology
```
