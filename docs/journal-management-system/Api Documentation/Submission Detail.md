---
sidebar_position: 4
sidebar: jmsSidebar
---

#

## **Submission Detail**

**API :** https://jms.kryoni.com/api/v1/external/submissions/{submission_id}

**Method:** GET

**Headers:**

- `x-api-key` - `{Your Api Key Generate in Developer Option}`
- `x-api-secret` - `{Your Api Secret Generate in Developer Option}`

**Response:**

```json response

{
   "code": 0,
   "message": "success",
   "submission": {
       "id": 288,
       "title": "Global Warming",
       "workflowStage": "PRODUCTION",
       "language": ”English”,
       "keywords": [
       {
        “id”: 1,
        “Name”:”warming”
       },..
        ],
       "authors": [
           {
               “id” :1,
               "affiliations": [
               {
                “id” : 1,
                “department”: “Physics”,
                “institute”: “Some University”,
                “address”: “10 A ,Rich street”,
                “state”: “California”,
                “address”: “California”,
                “country”: “United States”,
                “zip”: “123456”,
                “url”: “https://somesite”,
                “phone”: “+1 1234567”,
               },..
                ],
               "prefix": ”Mr”,
               "first_name": “James”,
               “middle_name”: ”James”,
               "sur_name": "Hero",
               "email": "action-hero@somemail.com",
               "orcid": ”1234-1234”,
               "contributor_role": "AUTHOR"
           },..
       ],
       "journal_id": 101,
       "journal_title": "Journal of Science",
       "abstract": "<p>xasxs</p>",
       "submitted_date": ”2024-08-26T10:58:44.412203Z”,
       "submission_accepted_date": ”2024-08-26T10:58:44.412203Z”,
       "submission_files": [
           {
               "id": 231,
               "name": "AFOOD-011-file.docx",
               "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fworkflow%2F288%2FSUBMISSION%2Fsubmission-file%2F557ee7ad-d635-4466-85f2-68f957b84e94.docx?sv=2024-05-04&se=2024-11-06T11%3A30%3A46Z&sr=b&sp=r&sig=l%2FQbx05XmTwldKFgApGBhBy266lNx9l%2B6z5QtszqKvs%3D&rscd=attachment%3B%20filename%3DAFOOD-011-SurenMeshak_Python_4%20.docx"
           },..
       ],
       "review_rounds": [
           {
               "id": 125,
               "name": "Round 1",
               "reviewFiles": [
                   {
                       "id": 182,
                       "name": "AFOOD-011-file.docx",
                       "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fworkflow%2F288%2FREVIEW%2F125%2F429bc55d-b7f7-48cb-bb7b-f8cee83cd4b1.docx?sv=2024-05-04&se=2024-11-06T11%3A30%3A46Z&sr=b&sp=r&sig=y1alGnMwZVbI6GSqxWbtv2tkfdBarlwpu8I6JbltdDU%3D&rscd=attachment%3B%20filename%3DAFOOD-011-SurenMeshak_Python_4%20.docx"
                   },..
               ]
           }
       ],
       "production_ready_files": [
           {
               "id": 105,
               "name": "AFOOD-011-file.docx",
               "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fworkflow%2F288%2FPRODUCTION%2F49bf118b-c392-4fd7-b14c-47fb29031b38.docx?sv=2024-05-04&se=2024-11-06T11%3A30%3A47Z&sr=b&sp=r&sig=SNFYnJhBh0m1IJv3YJFHaWQfHgi5I95oBkAqkyPd8xU%3D&rscd=attachment%3B%20filename%3DAFOOD-011-SurenMeshak_Python_4%20.docx"
           },..
       ],
       "production_completed_files": [
           {
               "id": 41,
               "name": "AFOOD-011-file.docx",
               "file_link": "https://jms.kryoni.com/87de0e16-9bbd-4931-a40c-846532da567a/journal%2F101%2Fworkflow%2F288%2FPRODUCTION%2Fproduction-completed%2Ff060d87f-7a16-4a5c-ab8a-a978dfdd934d.docx?sv=2024-05-04&se=2024-11-06T11%3A30%3A47Z&sr=b&sp=r&sig=nC%2B4AY8UuGRoxfAV3TXv%2BXJWbmh65NMXmX4xjoz%2BcVE%3D&rscd=attachment%3B%20filename%3DAFOOD-011-SurenMeshak_Python_4%20%20%281%29.docx"
           },..
       ]
   }
}
```
