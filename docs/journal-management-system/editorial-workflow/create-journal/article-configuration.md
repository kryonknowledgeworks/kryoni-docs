---
sidebar_position: 3
sidebar: jmsSidebar
sidebar_label: Article Configuration
---
#

## Article Configuration

![image](/assets/images/create/article-config.webp)

### Article Configuration Overview

The **Article Configuration** section is essential for customizing and managing the journal submission process efficiently. It allows journal administrators to set key parameters that define how articles are submitted, reviewed, and tracked within the system.

**Key Benefits:**

    - **Enhanced Submission Control:** Configure article and review types to align with journal requirements.
    - **Accurate Tracking:** Set unique tracking IDs and numbering formats for better organization.
    - **Editorial Flexibility:** Enable specific permissions for editors, such as overriding review type rules.
    - **Compliance & Transparency:** Ensure submissions meet ethical and quality standards with similarity checks and conflict of interest declarations.
    - **Custom Workflow:** Tailor submission settings, including co-author verification and color figure pricing, for a smooth process.

Here’s how to configure articles.

### Select the Article Type

![image](/assets/images/create/select-article-type.webp)

Administrators can choose from a predefined list of article types relevant to the journal, such as _Case Study, Editorial, Review Article,_ and more. Additionally, they have the flexibility to create custom article types as needed.

### Create New Article Type

![image](/assets/images/create/create-new-article-type.webp)

To add a custom article type:

1. Click on the article type input field.

2. Enter the desired article type name.

3. Press **“Enter”** or click **“Add”** to save it.

This feature provides flexibility to accommodate various submission categories based on the journal’s scope.

### Select the Review Type

![image](/assets/images/create/article-review-type.webp)

Once an article type has been selected, administrators must assign an appropriate review process to ensure a structured and fair evaluation of submissions. The review type determines the level of anonymity maintained between authors and reviewers.

    - **Open Review** – Author and reviewer identities are visible to each other.

    - **Single-Blind Review** – Reviewer identity is hidden from the author.

    - **Double-Blind Review** – Both author and reviewer identities remain anonymous.

### Assigning a Review Type

![image](/assets/images/create/assigning-review-type.webp)

1. Select the article type for which the review process is being assigned.

2. Choose the appropriate review type from the available options.

3. Click **“Add”** to save the configuration.

Administrators can assign multiple articles and review types based on the journal’s scope and editorial policies.

:::info

 The chosen review type plays a crucial role in maintaining the integrity of the peer review process. Ensure that the selected review type aligns with the journal’s review policies before finalizing.

:::

### Select the Similarity Proof

Similarity proof refers to a document (usually a report from a plagiarism detection tool like Turnitin or iThenticate) that shows the originality of the submitted manuscript by comparing it against published sources.

For each selected **Article Type** and its corresponding **Review Type**, administrators must define whether a **Similarity Proof** document is required.

The available options are

    - **Mandatory** – A similarity report must be submitted along with the manuscript.
    - **Optional** – Submission of the similarity report is allowed but not enforced.
    - **Not Required** – No similarity report is needed for this configuration

### Adding Additional Configurations

To define more article-review-similarity combinations, click the **“Add New +”** link and repeat the configuration process.

### Tracking ID Configuration

Tracking ID configuration is a crucial step in efficiently organizing and managing journal submissions. This feature allows administrators to assign a customized tracking format, ensuring consistency across submissions and simplifying the identification process.

### Purpose of Tracking ID Configuration

    - **Consistency Cross Submissions** – Maintain a standardized tracking system for all journal submissions.
    - **Seamless Continuity** – Align new submissions with an existing tracking format for easier record-keeping.
    - **Efficient Monitoring** – Quickly locate and manage submissions using unique tracking IDs.

### How to Configure a Tracking ID for a Journal

![image](/assets/images/create/config-track-id.webp)

#### 1. Submission Tracking ID Prefix

![image](/assets/images/create/track-id-prefix.webp)

    - Enter a unique prefix that will be attached to all submission tracking IDs.
    - The prefix can represent the journal’s name, publishing house, or submission year.

**Example:** If the prefix is **JOLIT**, a submission ID will appear as **JOLIT-001**.

#### 2. Sequence Starting Number

![image](/assets/images/create/seq-starting-number.webp)

    - Set the initial number for the submission sequence.

    - This helps maintain continuity with existing tracking systems.

**Example:** If the sequence starts at **001**, the first submission ID will be **JOLIT-001**.

#### 3. Tracking Number Digits

![image](/assets/images/create/tracking-number-digits.webp)

    - Define the number of digits in the tracking sequence (e.g., 4 or 6 digits).

    - Ensuring a consistent format improves submission organization and identification.

**Example:**

    - **4-digit format:** JOLIT-0001
    - **6-digit format:** JOLIT-000001

### Finalizing the Settings

:::warning
**Important:** Once the tracking ID configuration is saved, it **cannot** be changed.
:::

Double-check all entries before finalizing to ensure accuracy and alignment with journal requirements.

### Checkbox Options

This section allows customization of various settings using checkbox options to align with your journal’s specific workflow needs. These options offer flexibility while maintaining control over essential processes within the Journal Management System (JMS).

#### Allow editorial users to override the review type rule while assigning reviewers

![image](/assets/images/create/checkbox-options.webp)

This setting determines whether editorial users can bypass predefined review type rules when assigning reviewers.

    - **Enabled:** Editorial users can modify the default review type, allowing flexibility for unique submission cases or special circumstances.

    - **Disabled:** Editorial users must follow the predefined review type rules, ensuring a consistent and standardized peer review process.

**Recommendation:** Enable this option if your journal requires adaptability in the review process. Disable it if maintaining uniformity in reviewer assignments is a priority.

#### Allow to accept submission even all the co-authors verification is not completed

![image](/assets/images/create/editiorial-override-type.webp)

This option controls whether submissions can proceed before all co-authors have completed verification.

    - **Enabled:** Submissions are accepted even if co-authors have not yet verified their details, streamlining the process and reducing delays.

    - **Disabled:** Submission acceptance is restricted until all co-authors complete verification, ensuring accountability and transparency.

**Recommendation:** Enable this setting if speed is a priority. Disable it if full co-author verification is necessary to maintain submission integrity.

#### Do you want to include color figure information(for pricing calculation)to be collected in submission?

![image](/assets/images/create/co-authors-verfication.webp)

This setting determines whether authors must provide details about colour figures during the submission process. Collecting this information helps calculate additional costs and ensures authors are informed in advance about any applicable charges.

    - **Enabled:** Authors are required to specify the number of color figures in their submission. This helps the journal accurately estimate pricing and notify authors about potential additional charges.
    - **Disabled:** The system will not collect color figure information, and it will not be factored into pricing calculations.

**Recommendation:** Enable this setting if your journal charges for color figures to maintain transparency with authors regarding potential costs. Disable it if color figures are included at no additional charge.

**Would you like to integrate the production system (Post-Acceptance Tracking) with the Journal Management System (JMS)?**

![image](/assets/images/create/next-option-is-yes.webp)

Administrators can choose whether to integrate the production system (Post-Acceptance Tracking) with JMS.

**Options:**

    - **Yes** – Enables integration for seamless tracking and workflow management.
    - **No** – Keeps production tracking separate from JMS.

**Benefits of integration:**

    - Track manuscript production progress efficiently.
    - Define proofing workflows based on journal and article requirements.

    **Should authors be mandated to provide conflict of interest declarations when submitting their articles?**

![image](/assets/images/create/authors-provide-conflict.webp)

This setting determines whether authors must submit a conflict of interest (COI) declaration when submitting their articles.

**Yes (Enabled):** Authors are required to declare any conflicts of interest before submission.

**_Click to upload conflict of interest file_**

![image](/assets/images/create/upload-conflict-file.webp)

![image](/assets/images/create/after-upload-yes-conflict.webp)

The administrator will upload the **COI declaration form,** which authors must download, complete, and upload before finalizing their submission.

**No (Disabled):** Authors can submit their articles without providing a conflict of interest declaration.

**Recommendation:** Enable this option if your journal follows strict ethical guidelines for transparency. Disable it only if COI declarations are not a requirement in your editorial workflow.
