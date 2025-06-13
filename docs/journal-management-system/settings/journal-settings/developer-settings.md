---
sidebar_position: 10
sidebar: jmsSidebar
sidebar_label: Developer Settings  
---
#

## Developer Settings

![image](/assets/images/journal/developer-settings.webp)

The Developer Settings section provides full control over email templates used for various journal operations.

These settings allow you to customize and manage automated email notifications triggered at different stages of the Journal Management System (JMS) workflow.

![image](/assets/images/journal/developer-settings-1.webp)

- **Pre-Review Stage** - Notifications related to manuscript submission, initial screening, and editorial review initiation.

![image](/assets/images/journal/developer-settings-2.webp)

- **Review Stage** - Emails sent for review invitations, feedback submission, and reviewer reminders.

![image](/assets/images/journal/developer-settings-3.webp)

- **Production Stage** - Notifications regarding final proofing, production completion, and publication updates.

![image](/assets/images/journal/developer-settings-4.webp)

    **Editing Email Templates**

        To modify the content of an email template:

        - Navigate to **Developer Settings → Email Templates.**

        - Click the **Edit** icon next to the template you want to modify.

        - Adjust the email **subject** and **content** as needed.

        - Use **dynamic variables** (displayed in the sidebar) to personalize emails.

            Example variables:

            [[JOURNAL_NAME]] – Automatically inserts the journal’s name. 

            [[JOURNAL_ID]] – Inserts the unique journal ID. 

            [[JOURNAL_ACRONYM]] – Displays the journal's acronym. 

        - Save the changes to apply updates to the selected email template. 

    **Email Configuration Options**

![image](/assets/images/journal/developer-settings-5.webp)

Each email template includes the following fields:

- **CC To:** Add additional recipients for a copy of the email.

- **BCC To:** Add hidden recipients to receive the email.

- **Subject:** Define the subject line for the email.

- **Mail Template:** The main body of the email, which can be customized.

    **Activating or Deactivating Emails**

![image](/assets/images/journal/developer-settings-6.webp)

- To enable an email notification, check the **Active Status** box.

- To disable an email, uncheck the box.

- Only active emails will be triggered when their respective journal actions occur.

By properly configuring these settings, you ensure **clear, consistent, and automated communication** throughout the journal's workflow.

    **Use Case Example: Configuring a Reviewer Invitation Email**

![image](/assets/images/journal/developer-settings-7.webp)

**Scenario:**

The journal wants to send an **automatic email invitation** to reviewers when they are assigned a manuscript for peer review.

**Steps to Configure:**

- Go to **Developer Settings → Email Templates.**

- Find the template titled **"Reviewer Invitation Email."**

- Click the **Edit** icon.

- Customize the subject and message body, ensuring it includes relevant details like:

    **[[JOURNAL_NAME]]** – Inserts the journal's name dynamically.

    **[[MANUSCRIPT_TITLE]]** – Automatically includes the manuscript title.

    **[[REVIEW_DEADLINE]]** – Displays the review submission deadline.

- Enable the email by checking the **Active Status box.**

- Click **Save** to apply the changes.

**Outcome:**

Whenever a reviewer is assigned a manuscript, they will automatically receive a personalized email **inviting them to review the submission**, ensuring a **streamlined and efficient review process.**

By effectively managing these email settings, journals can maintain **timely and professional communication** with authors, reviewers, and editors.
