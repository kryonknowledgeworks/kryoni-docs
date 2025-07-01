---
sidebar_position: 3
sidebar: jmsSidebar
sidebar_label: Submission List
---
# Submission List

## Overview

The Submission List API allows you to retrieve a list of journal submissions with pagination and search capabilities. The following documentation outlines authentication, request methods, and response handling.

### Base URL

```plaintext
https://jms.kryoni.com/api/v1/external/submissions
```

### Endpoint

- **URL:** `https://jms.kryoni.com/api/v1/external/submissions`
- **Method:** `GET`
- **Description:** Retrieves a list of submissions, filtered by journal ID, with pagination and search options.

### Authentication

To access this API, include the following headers in your request:

### Request Headers

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

### Journal Filter

- Required: `journal_id` parameter in the URL to filter submissions by journal.

#### Example

```plaintext
https://jms.kryoni.com/api/v1/external/submissions?journal_id=1
```

### Pagination Parameters

Add value in url param

| Parameter | Type    | Required | Description                    | Default |
| --------- | ------- | -------- | ------------------------------ | ------- |
| `page`    | integer | No       | Page of the list               | `1`     |
| `size`    | integer | No       | Number of submissions per page | `20`    |

#### Example

```plaintext
https://jms.kryoni.com/api/v1/external/submissions?journal_id=1&page=1&size=20
```

### Search Parameter

- Optional: `search_text` to filter by search term.

#### Example

```plaintext
https://jms.kryoni.com/api/v1/external/submissions?journal_id=1&search_text=science
```

### Response

The API response is a JSON object that contains the requested journal submissions data, along with pagination details and any search criteria applied. Below is a sample response structure with an explanation of each field.

### Response Body

<details className="response-success">
  <summary>200 Success</summary>
  <div className="custom-response">
  The response schema is returned in JSON format with details on the requested journals, pagination, and any applied search filters.
   <details>
    <summary>Response Schema: `application/json`</summary>

| Field              | Type              | Description                                                                                                                          |
| ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `code`             | integer           | Status code indicating the result of the request. A value of `0` typically indicates a successful request.                           |
| `message`          | string            | Message describing the status of the response, e.g., "success" if the request was processed correctly.                               |
| `submissions`      | array of objects  | List of submissions that match the specified criteria. Each object represents a single submission and includes the following fields: |
| ├─ `id`            | integer           | Unique identifier for the submission.                                                                                                |
| ├─ `title`         | string            | Title of the submission.                                                                                                             |
| ├─ `journal_id`    | integer           | Unique identifier for the journal to which the submission belongs.                                                                   |
| ├─ `journal_title` | string            | Title of the journal associated with the submission.                                                                                 |
| └─ `created_at`    | string (datetime) | Date and time the submission was created, formatted in ISO 8601 (e.g., "2024-08-26T10:58:44.412203Z").                               |
| `page_context`     | object            | Object containing pagination information and search details. It includes the following fields:                                       |
| ├─ `page`          | integer           | Current page number of the response data.                                                                                            |
| ├─ `size`          | integer           | Number of submissions per page as specified in the request parameters.                                                               |
| ├─ `total_count`   | integer           | Total number of submissions that match the query criteria.                                                                           |
| └─ `search_text`   | string            | Search term used, if any, to filter the submissions. This value matches the `search_text` parameter from the request.                |

  </details>

#### Response

    ```javascript
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
</details>

### Error Handling

Possible error responses might include:

<details className="response-error">
  <summary>401 Unauthorized</summary>
  <div className="custom-response">
   <details>
    <summary>Response Schema: `application/json`</summary>
| Field             | Type               | Description                                                                                                                                        |
|-------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `code`            | integer            | Error code indicating the type of error. Each code corresponds to a specific issue (e.g., `400` for bad request, `401` for unauthorized access).   |
| `message`         | string             | Descriptive error message explaining the issue encountered (e.g., "Invalid API key", "Journal ID required").                                        |
| `errors`          | array of objects   | Additional details on specific errors, if any, that occurred. Each error object contains information about a specific field or parameter issue:    |
| ├─ `field`        | string             | Name of the field or parameter that caused the error.                                                                                              |
| └─ `message`      | string             | Explanation of the error related to the field.                                                                                                      |

  </details>

    **Response**

```javascript
{
  "code": 400,
  "message": "Invalid request parameters.",
  "errors":
    [
      {
        "field": "journal_id",
        "message": "The journal_id parameter is required.",
      },
      { "field": "x-api-key", "message": "Invalid API key provided." },
    ],
}
```

  </div>
</details>
