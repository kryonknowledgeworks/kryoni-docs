---
sidebar_position: 9
sidebar: jmsSidebar
sidebar_label: Production Permissions  
---
#

## Production Permissions

![image](/assets/images/journal/production-permissions.webp)

Production permissions oversee the finalization of accepted manuscripts before publication.

### Basic Access & Management

- **Read:** Grants permission to view production-related documents and discussions.

- **Manage:** Allows the user to make comments, suggest edits, and oversee production tasks.

- **Allow upload production-ready file manually:** Permits manual uploading of final production files.

- **Allow upload production completed file manually:** Enables the upload of fully processed and finalized documents.

- **Allow user to add/remove participants:** Grants control over participant assignments in the production process.

- **Allow initiate/manage production discussions:** Enables discussions related to production workflows.

- **Allow user to view production jobs:** Provides visibility into assigned production tasks.

- **Allow user to participate in production job:** Grants participation access for production roles.

- **Allow user to manage production jobs:** Enables full control over production workflows and task assignments.

### Decision-Making

- **Allow to complete submission:** Grants authority to finalize and mark submissions as complete.

By assigning these permissions to different roles, administrators can ensure that users have appropriate access levels, improving workflow efficiency and security within the **Journal Management System (JMS).**

### Use Case Example 1: Assigning an Assistant Editor-in-Chief (EIC) Role

    ##### Scenario

        A journal's **Editor-in-Chief (EIC)** wants to delegate certain responsibilities to an **Assistant EIC** while maintaining control over final decisions. The Assistant EIC should have the ability to **manage submissions** and **oversee the review process** but should **not have decision-making authority** in the review stage.

    ##### Objective

        - The **Assistant EIC** should be able to **view, edit, and manage** manuscript submissions.
        - They should be able to **coordinate the review process**, assign reviewers, and provide feedback.
        - However, they should **not be able to accept or reject manuscripts** at the review stage.   

### Step-by-Step Implementation

    ##### Step 1: Creating the Role

        - Navigate to **Role Management** in the journal's system.

        - Click **"Create Role".**

        - Enter the **Role Name:** Assistant EIC.

    ##### Step 2: Configuring Submission Permissions

        The Assistant EIC needs full control over manuscript submissions. Assign the following permissions:

        - **Read** - Allows access to view submissions.

        - **Manage** - Grants permission to create, edit, and submit manuscripts.

        - **Decision Making** - Enables accepting or rejecting submissions.

    ##### Step 3: Configuring Review Permissions

        Since the Assistant EIC should only **oversee the review process** and not make final decisions, assign these permissions:

        - **Read** - Can access and read review documents, reviewer comments, and feedback.

        - **Manage** - Can assign reviewers, provide comments, and track the review process.

        - **Decision Making (Do Not Select)** - Prevents the Assistant EIC from accepting or rejecting submissions at this stage.

### Do you want to auto-Include as participant to stages?

When setting up roles in the journal management system, there is an option to **automatically include** the user in specific workflow stages. This feature determines whether the user holding a particular role (e.g., Assistant Editor-in-Chief) will be **automatically assigned** to submissions at each stage or whether they need to be **manually added** each time.

    ##### Option 1: Yes – Auto-Include in Stages

        - When selected, the **Assistant EIC** will be automatically added to the assigned stage for every new manuscript submission.

        - There is **no need for manual intervention** to add them each time.

        - This ensures **consistent participation** in every submission, streamlining the editorial workflow.

        - Useful when the **Assistant EIC is always responsible** for handling submissions at a specific stage (e.g., reviewing assignments). 

**Example:**

If an Assistant EIC is responsible for overseeing the review process, selecting **Yes** will ensure that they are automatically included whenever a manuscript reaches the review stage. They won’t need to be manually assigned each time.

    ##### No – Manual Inclusion in Stages

        - If this option is selected, the **Assistant EIC must be manually added** to each submission at the relevant stage.

        - This allows **greater flexibility** if the role is not required in every submission.

        - Useful in cases where different submissions require different handling, and **not every manuscript needs the Assistant EIC’s involvement.**

**Example:**

If some submissions require a senior editor's direct oversight while others don’t, selecting **No** means that the Assistant EIC will only be added when needed, rather than being automatically included.

    ##### Step 4: Saving the Role

        - Click **"Save"** to apply the permissions.

    **Assigning the Role to a User** 

    ##### Step 5: Adding an Existing User

        - Go to **User Management** and click **"Add User."**

        - Select the **Assistant EIC** role from the dropdown. 

        - Click **"Assign Role"** to confirm.

    ##### Step 6: Inviting a New User (If required)

        - Click **"Invite User."**

        - Enter the user’s email address. 

        - The system will send an invitation with the assigned role.

### Outcome

- The **Assistant EIC** can manage manuscript submissions from authors.

- They can assign reviewers and facilitate discussions.

- They **cannot** approve or reject submissions at the review stage.

- The **Editor-in-Chief** retains decision-making control over manuscript acceptance.

This setup ensures a **structured and efficient editorial workflow** while maintaining the **integrity of the peer-review process.**
