---
sidebar_position: 2
sidebar: jmsSidebar
---

#

## **Journal Detail**

**Endpoint**

- **URL:** `https://jms.kryoni.com/api/v1/external/journals/{journal_id}`
- **Method:** GET
- **Description:** Fetches detailed information about a specific journal, including metadata, guidelines, disciplines, and author-related data.

**Headers**
To access this API, include the following headers:

- `x-api-key` - `{Your Api Key Generate in Developer Option}`
- `x-api-secret` - `{Your Api Secret Generate in Developer Option}`

**URL Parameters**

- journal_id (integer, required): The unique identifier of the journal you want to retrieve detailed information for.

**Example:**

```plaintext
https://jms.kryoni.com/api/v1/external/journals/101
```

This request fetches the journal details for the journal with ID 101.

**Response**
The API response is a JSON object that provides detailed journal information, including metadata, disciplines, and attachments. Below is an example response structure:

```yaml
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

### Response Fields

| Field                              | Type                 | Description                                                                   |
| ---------------------------------- | -------------------- | ----------------------------------------------------------------------------- |
| **code**                           | integer              | A status code indicating the response result. `0` means success.              |
| **message**                        | string               | A descriptive message related to the request's result, such as "success".     |
| **journal**                        | object               | Contains detailed information about the journal.                              |
| **acronym**                        | string               | The acronym of the journal.                                                   |
| **type**                           | string               | The type of the journal (e.g., "HYBRID").                                     |
| **scope**                          | string (HTML format) | A description of the journal's scope in HTML format.                          |
| **abbreviation**                   | string               | Abbreviation for the journal.                                                 |
| **subjects**                       | array                | A list of subjects covered by the journal.                                    |
| **id**                             | integer              | Unique identifier for the subject.                                            |
| **name**                           | string               | The name of the subject.                                                      |
| **disciplines**                    | array                | A list of disciplines under the subject.                                      |
| **languages**                      | array                | A list of supported languages for the journal.                                |
| **id**                             | string               | Language identifier.                                                          |
| **name**                           | string               | Language name.                                                                |
| **id**                             | integer              | The unique identifier for the journal.                                        |
| **created_at**                     | string (datetime)    | The date and time the journal was created.                                    |
| **title**                          | string               | The full title of the journal.                                                |
| **welcome_page_content**           | string (HTML format) | The content of the welcome page for the journal in HTML format.               |
| **online_issn**                    | string               | The online ISSN of the journal.                                               |
| **print_issn**                     | string               | The print ISSN of the journal.                                                |
| **author_guidelines**              | string (HTML format) | The guidelines for authors, in HTML format.                                   |
| **reviewer_guidelines**            | string (HTML format) | The guidelines for reviewers, in HTML format.                                 |
| **article_types**                  | array                | Types of articles accepted by the journal.                                    |
| **reviewTypes**                    | array                | Types of review methods used for articles.                                    |
| **name**                           | string               | The name of the article type.                                                 |
| **author_site_url**                | string               | URL to the author's submission page.                                          |
| **reviewer_form**                  | string (nullable)    | URL to the reviewer form, if applicable.                                      |
| **reviewer_guideline_attachments** | array                | List of attachments for reviewer guidelines.                                  |
| **author_guideline_attachments**   | array                | List of attachments for author guidelines.                                    |
| **check_list**                     | array                | A list of confirmation checkboxes for the author, indicating their agreement. |

**Example Requests**
**1.** **Fetching Journal Details by ID:**

```plaintext
https://jms.kryoni.com/api/v1/external/journals/101
```

This request fetches the details of the journal with ID `101`.

**Error Handling**

Possible error responses might include:

- **Code 1**: "Unauthorized" – This occurs if the `x-api-key` or `x-api-secret` headers are invalid or missing.
- **Code 2:** "Journal Not Found" – This occurs if the `journal_id` provided does not exist in the system.
