---
sidebar_position: 2
sidebar: jmsSidebar
---

#

## **Journal Detail**

**API :** https://jms.kryoni.com/api/v1/external/journals/{journal_id}

**Method:** GET

**Headers:**

- `x-api-key` - `{Your Api Key Generate in Developer Option}`
- `x-api-secret` - `{Your Api Secret Generate in Developer Option}`

**Response:**

```json response
{
    "code": 0,
    "message": "success",
    "journal": {
        "acronym": "Food Safety",
        "type": "HYBRID",
        "scope": "<p>sw</p>",
        "abbreviation": "food",
        "subjects": [
            {
                "id": 1,
                "name": "Arts & Humanities",
                "disciplines": [
                    {
                        "id": 258,
                        "name": "Architecture"
                    },..
                ]
            },
            {
                "id": 1,
                "name": "Physical Sciences",
                "disciplines": [
                    {
                        "id": 1,
                        "name": "Astronomy & Astrophysics"
                    },
                    {
                        "id": 2,
                        "name": "Chemistry"
                    },...
                ]
            }
        ],
        "languages": [
            {
                "id": "aar",
                "name": "Afar"
            },
            {
                "id": "abk",
                "name": "Abkhazian"
            },..
        ],
        "id": 101,
        "created_at": "2024-10-05T08:59:35.539781Z",
        "title": "American Food",
        "welcome_page_content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>",
        "online_issn": "1234-3214",
        "print_issn": "98765-1245",
        "author_guidelines": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>",
        "reviewer_guidelines": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>",
        "article_types": [
            {
                "reviewTypes": [
                    "Double Blind",
                    "Open",
                    "Single Blind"
                ],
                "name": "Editorial"
            },..
 ],
        "author_site_url": "https://jms.kryoni.com/kryonknowledgeworks/author-submissions/101/testing",
        "reviewer_form": null,
        "reviewer_guideline_attachments": [
            {
                "id": 34,
                "name": "2084527000000072002.pdf",
                "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fattachment%2F1385bc08-fb5c-479a-b462-c607b2c22f3b.pdf?sv=2024-05-04&se=2024-11-06T09%3A21%3A21Z&sr=b&sp=r&sig=z7wMQ71r42alx5AH5pXuGg9htg97SNwimhoozjIbvJU%3D&rscd=attachment%3B%20filename%3D2084527000000072002.pdf"
            }
        ],
        "author_guideline_attachments": [
            {
                "id": 33,
                "name": "2084527000000072002.pdf",
                "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fattachment%2F648c19cc-ba00-4eee-ae61-c9481644162a.pdf?sv=2024-05-04&se=2024-11-06T09%3A21%3A21Z&sr=b&sp=r&sig=vPVSK6%2BaHq7920exQHfzYFeRK6FYcYE7K1j796%2FQ%2BF4%3D&rscd=attachment%3B%20filename%3D2084527000000072002.pdf"
            }
        ],
        "check_list": [
            {
                "id": 1,
                "name": "I hereby confirm that this manuscript has not been submitted elsewhere for publication and is not currently under consideration by any other journal."
            },
            {
                "id": 2,
                "name": "I hereby confirm that all authors have reviewed and approved the final version of the manuscript and have agreed to its submission and publication in this journal."
            },
            {
                "id": 3,
                "name": "During the preparation of this work, the author(s) used AI assistance/AI tool. Following its use, the author(s) thoroughly examined and revised the content as needed, and they accept full responsibility for the final version of the published article."
            }
        ]
    }
}
```
