---
sidebar_position: 2
sidebar: jmsSidebar
sidebar_label: Journal Detail
---

## **Overview**

The Journal Details API allows you to retrieve detailed information about a specific journal, including metadata, guidelines, disciplines, and author-related data. This documentation provides the necessary details on authentication, request structure, and response interpretation.

### **Base URL**

```plaintext
https://jms.kryoni.com/api/v1/external/journals/{journal_id}
```

**Endpoint**

- **URL:** `https://jms.kryoni.com/api/v1/external/journals/{journal_id}`
- **Method:** `GET`
- **Description:** Fetch detailed information about a specific journal, including metadata, guidelines, disciplines, and author-related data.

---

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

---

## **URL Parameters**

- **journal_id** `(integer, required)`: The unique identifier of the journal for which you want to retrieve detailed information.

### **Example Request**

```plaintext
https://jms.kryoni.com/api/v1/external/journals/101
```

This request fetches the journal details for the journal with ID 101.

## **Response**

The API response is a JSON object that provides detailed journal information, including metadata, disciplines, and attachments. Below is an example response structure:

### **Response Body**

<details className="response-success">
  <summary>200 Success</summary>
  <div className="custom-response">
   <details>
    <summary>Response Schema: `application/json`</summary>

| Field                                       | Type          | Description                                                    |
| ------------------------------------------- | ------------- | -------------------------------------------------------------- |
| `code`                                      | integer       | Status code indicating the response result. `0` means success. |
| `message`                                   | string        | Descriptive message related to the result, such as "success".  |
| `journal`                                   | object        | Contains detailed information about the journal.               |
| ├─ `journal.acronym`                        | string        | Acronym of the journal.                                        |
| ├─ `journal.type`                           | string        | Type of the journal (e.g., "HYBRID").                          |
| ├─ `journal.scope`                          | string (HTML) | Description of the journal's scope in HTML format.             |
| ├─ `journal.abbreviation`                   | string        | Abbreviation for the journal.                                  |
| ├─ `journal.subjects`                       | array         | List of subjects covered by the journal.                       |
| ├─ `journal.languages`                      | array         | List of supported languages for the journal.                   |
| ├─ `journal.title`                          | string        | Full title of the journal.                                     |
| ├─ `journal.author_guideline_attachments`   | array         | Attachments for author guidelines.                             |
| └─ `journal.reviewer_guideline_attachments` | array         | Attachments for reviewer guidelines.                           |
| `check_list`                                | array         | Author confirmation checkboxes.                                |

  </details>

**Response**

      ```javascript
      {
        "code": 0,
        "message": "success",
        "journal":
          {
            "acronym": "Food Safety",
            "type": "HYBRID",
            "scope": "<p>sw</p>",
            "abbreviation": "food",
            "subjects":
              [
                {
                  "id": 1,
                  "name": "Arts & Humanities",
                  "disciplines": [{ "id": 258, "name": "Architecture" }],
                },
                {
                  "id": 2,
                  "name": "Physical Sciences",
                  "disciplines": [{ "id": 1, "name": "Astronomy & Astrophysics" }],
                },
              ],
            "languages":
              [{ "id": "aar", "name": "Afar" }, { "id": "abk", "name": "Abkhazian" }],
            "id": 101,
            "created_at": "2024-10-05T08:59:35.539781Z",
            "title": "American Food",
            "welcome_page_content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
            "online_issn": "1234-3214",
            "print_issn": "98765-1245",
            "author_guidelines": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
            "reviewer_guidelines": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
            "article_types":
              [
                {
                  "reviewTypes": ["Double Blind", "Open", "Single Blind"],
                  "name": "Editorial",
                },
              ],
            "author_site_url": "https://jms.kryoni.com/kryonknowledgeworks/author-submissions/101/testing",
            "reviewer_form": null,
            "reviewer_guideline_attachments":
              [
                {
                  "id": 34,
                  "name": "2084527000000072002.pdf",
                  "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fattachment%2F1385bc08-fb5c-479a-b462-c607b2c22f3b.pdf?sv=2024-05-04&se=2024-11-06T09%3A21%3A21Z&sr=b&sp=r&sig=z7wMQ71r42alx5AH5pXuGg9htg97SNwimhoozjIbvJU%3D&rscd=attachment%3B%20filename%3D2084527000000072002.pdf",
                },
              ],
            "author_guideline_attachments":
              [
                {
                  "id": 33,
                  "name": "2084527000000072002.pdf",
                  "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fattachment%2F648c19cc-ba00-4eee-ae61-c9481644162a.pdf?sv=2024-05-04&se=2024-11-06T09%3A21%3A21Z&sr=b&sp=r&sig=vPVSK6%2BaHq7920exQHfzYFeRK6FYcYE7K1j796%2FQ%2BF4%3D&rscd=attachment%3B%20filename%3D2084527000000072002.pdf",
                },
              ],
            "check_list":
              [
                {
                  "id": 1,
                  "name": "I hereby confirm that this manuscript has not been submitted elsewhere for publication.",
                },
                {
                  "id": 2,
                  "name": "I hereby confirm that all authors have reviewed and approved the final version of the manuscript.",
                },
              ],
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
| HTTP Status | Code | Message            | Description                                            |
|-------------|------|--------------------|--------------------------------------------------------|
| 400         | 10   | Journal Not Found  | The `journal_id` does not exist in the system.         |
| 401         | 1    | Unauthorized       | `x-api-key` or `x-api-secret` headers are missing or invalid. |

  </details>

    **Response**

```javascript
{
  “code”: 10,
  “message”: “Journal Not Found”
}
```

  </div>
</details>

**Example Requests**

**Fetching Journal Details by ID:**

```plaintext
https://jms.kryoni.com/api/v1/external/journals/101
```

This request fetches the details of the journal with ID `101`.
