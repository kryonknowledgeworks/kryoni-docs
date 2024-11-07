---
sidebar_position: 1
sidebar: jmsSidebar
---

#

## **Journal List**

**Endpoint**

- URL: `https://jms.kryoni.com/api/v1/external/journals`
- Method: GET
- Description: Fetches a list of journals with pagination and search functionality.

**Headers**

To access this API, include the following headers:

- `x-api-key` - `{Your Api Key Generate in Developer Option}`
- `x-api-secret` - `{Your Api Secret Generate in Developer Option}`

**Query Parameters**

**1.** **Pagination Parameters:**

- `page` (integer, optional): Specifies the page number of the journal list to retrieve. If not provided, it defaults to 1.
- `size` (integer, optional): Specifies the number of journals per page. If not provided, the default value is 20.

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

**Response**

The API response is a JSON object that provides the requested journal data, pagination details, and any search information. Below is an example response structure:

```yaml
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
    { "page": 1, "size": 20, "total_count": 100, "search_text": "science" },
}
```

### Response Fields

| Field            | Type                     | Description                                                                    |
| ---------------- | ------------------------ | ------------------------------------------------------------------------------ |
| **code**         | integer                  | A status code indicating the response result. `0` means success.               |
| **message**      | string                   | A descriptive message related to the request's result, such as "success".      |
| **journals**     | array of journal objects | An array containing details of each journal in the response.                   |
| **id**           | integer                  | Unique identifier for each journal.                                            |
| **title**        | string                   | The title of the journal.                                                      |
| **created_at**   | string (datetime)        | The date and time the journal entry was created in UTC, formatted as ISO 8601. |
| **page_context** | object                   | Contains pagination and search details.                                        |
| **page**         | integer                  | Current page number of the response.                                           |
| **size**         | integer                  | Number of journals per page in the response.                                   |
| **total_count**  | integer                  | Total number of journals that match the criteria.                              |
| **search_text**  | string (optional)        | The search term provided, if any, to filter the journals.                      |

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

**Error Handling**
Possible error responses might include:

- **Code 1**: "Unauthorized" - This occurs if the `x-api-key or` `x-api-secret` headers are invalid or missing.
- **Code 2**: "Invalid Parameters" - This happens when a query parameter has an invalid format or value.
