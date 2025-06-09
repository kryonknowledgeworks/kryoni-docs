---
sidebar_position: 3
sidebar: jmsSidebar
sidebar_label: Article Configuration
---
#

## Article configuration

![image](/assets/images/article-config.webp)

### Article configuration overview

The **Article Configuration** section is essential for customizing and managing the journal submission process efficiently. It allows journal administrators to set key parameters that define how articles are submitted, reviewed, and tracked within the system.

**Key benefits:**

    - **Enhanced submission control:** Configure article and review types to align with journal requirements.
    - **Accurate tracking:** Set unique tracking IDs and numbering formats for better organization.
    - **Editorial flexibility:** Enable specific permissions for editors, such as overriding review type rules.
    - **Compliance & transparency:** Ensure submissions meet ethical and quality standards with similarity checks and conflict of interest declarations.
    - **Custom workflow:** Tailor submission settings, including co-author verification and color figure pricing, for a smooth process.

Here’s how to configure articles.

### Select the article type

![image](/assets/images/select-article-type.webp)

Administrators can choose from a predefined list of article types relevant to the journal, such as _Case Study, Editorial, Review Article,_ and more. Additionally, they have the flexibility to create custom article types as needed.

### Create new article type

![image](/assets/images/create-new-article-type.webp)

To add a custom article type:

1. Click on the article type input field.

2. Enter the desired article type name.

3. Press **“Enter”** or click **“Add”** to save it.

This feature provides flexibility to accommodate various submission categories based on the journal’s scope.

### Select the review type

![image](/assets/images/article-review-type.webp)

Once an article type has been selected, administrators must assign an appropriate review process to ensure a structured and fair evaluation of submissions. The review type determines the level of anonymity maintained between authors and reviewers.

    - **Open Review** – Author and reviewer identities are visible to each other.

    - **Single-Blind Review** – Reviewer identity is hidden from the author.

    - **Double-Blind Review** – Both author and reviewer identities remain anonymous.

### Assigning a review type

![image](/assets/images/assigning-review-type.webp)

1. Select the article type for which the review process is being assigned.

2. Choose the appropriate review type from the available options.

3. Click **“Add”** to save the configuration.

Administrators can assign multiple articles and review types based on the journal’s scope and editorial policies.

:::info

 The chosen review type plays a crucial role in maintaining the integrity of the peer review process. Ensure that the selected review type aligns with the journal’s review policies before finalizing.

:::

### Select the similarity proof

Similarity proof refers to a document (usually a report from a plagiarism detection tool like Turnitin or iThenticate) that shows the originality of the submitted manuscript by comparing it against published sources.

For each selected **Article Type** and its corresponding **Review Type**, administrators must define whether a **Similarity Proof** document is required.

The available options are

    - **Mandatory** – A similarity report must be submitted along with the manuscript.
    - **Optional** – Submission of the similarity report is allowed but not enforced.
    - **Not Required** – No similarity report is needed for this configuration

### Adding additional configurations

To define more article-review-similarity combinations, click the **“Add New +”** link and repeat the configuration process.

### Tracking ID configuration

Tracking ID configuration is a crucial step in efficiently organizing and managing journal submissions. This feature allows administrators to assign a customized tracking format, ensuring consistency across submissions and simplifying the identification process.

### Purpose of tracking ID configuration

    - **Consistency cross submissions** – Maintain a standardized tracking system for all journal submissions.
    - **Seamless continuity** – Align new submissions with an existing tracking format for easier record-keeping.
    - **Efficient monitoring** – Quickly locate and manage submissions using unique tracking IDs.

### How to configure a tracking ID for a journal

![image](/assets/images/config-track-id.webp)

### 1. Submission tracking ID prefix

![image](/assets/images/track-id-prefix.webp)

    - Enter a unique prefix that will be attached to all submission tracking IDs.
    - The prefix can represent the journal’s name, publishing house, or submission year.

**Example:** If the prefix is **JOLIT**, a submission ID will appear as **JOLIT-001**.

### 2. Sequence starting number

![image](/assets/images/seq-starting-number.webp)

    - Set the initial number for the submission sequence.

    - This helps maintain continuity with existing tracking systems.

**Example:** If the sequence starts at **001**, the first submission ID will be **JOLIT-001**.

### 3. Tracking number digits

![image](/assets/images/tracking-number-digits.webp)

    - Define the number of digits in the tracking sequence (e.g., 4 or 6 digits).

    - Ensuring a consistent format improves submission organization and identification.

**Example:**

    - **4-digit format:** JOLIT-0001
    - **6-digit format:** JOLIT-000001

### Finalizing the settings

:::warning
**⚠ Important:** Once the tracking ID configuration is saved, it **cannot** be changed.
:::

Double-check all entries before finalizing to ensure accuracy and alignment with journal requirements.

### Checkbox options

This section allows customization of various settings using checkbox options to align with your journal’s specific workflow needs. These options offer flexibility while maintaining control over essential processes within the Journal Management System (JMS).

![image](/assets/images/checkbox-options.webp)

#### Allow editorial users to override the review type rule while assigning reviewers

This setting determines whether editorial users can bypass predefined review type rules when assigning reviewers.

    - **Enabled:** Editorial users can modify the default review type, allowing flexibility for unique submission cases or special circumstances.

    - **Disabled:** Editorial users must follow the predefined review type rules, ensuring a consistent and standardized peer review process.

**Recommendation:** Enable this option if your journal requires adaptability in the review process. Disable it if maintaining uniformity in reviewer assignments is a priority.

![image](/assets/images/editiorial-override-type.webp)

#### Allow to accept submission even all the co-authors verification is not completed

This option controls whether submissions can proceed before all co-authors have completed verification.

    - **Enabled:** Submissions are accepted even if co-authors have not yet verified their details, streamlining the process and reducing delays.

    - **Disabled:** Submission acceptance is restricted until all co-authors complete verification, ensuring accountability and transparency.

**Recommendation:** Enable this setting if speed is a priority. Disable it if full co-author verification is necessary to maintain submission integrity.

![image](/assets/images/co-authors-verfication.webp)

#### Do you want to include color figure information(for pricing calculation)to be collected in submission?

This setting determines whether authors must provide details about colour figures during the submission process. Collecting this information helps calculate additional costs and ensures authors are informed in advance about any applicable charges.

    - **Enabled:** Authors are required to specify the number of color figures in their submission. This helps the journal accurately estimate pricing and notify authors about potential additional charges.
    - **Disabled:** The system will not collect color figure information, and it will not be factored into pricing calculations.

**Recommendation:** Enable this setting if your journal charges for color figures to maintain transparency with authors regarding potential costs. Disable it if color figures are included at no additional charge.

### Next option is

![image](/assets/images/next-option-is-yes.webp)

**Would you like to integrate the production system (Post-Acceptance Tracking) with the Journal Management System (JMS)?**

Administrators can choose whether to integrate the production system (Post-Acceptance Tracking) with JMS.

**Options:**

    - **Yes** – Enables integration for seamless tracking and workflow management.
    - **No** – Keeps production tracking separate from JMS.

**Benefits of Integration:**

    - Track manuscript production progress efficiently.
    - Define proofing workflows based on journal and article requirements.

    **Should authors be mandated to provide conflict of interest declarations when submitting their articles?**

![image](/assets/images/authors-provide-conflict.webp)

This setting determines whether authors must submit a conflict of interest (COI) declaration when submitting their articles.


**Yes (Enabled):** Authors are required to declare any conflicts of interest before submission.


**_Click to upload conflict of interest file_**

![image](/assets/images/upload-conflict-file.webp)

![image](/assets/images/after-upload-yes-conflict.webp)

The administrator will upload the **COI declaration form,** which authors must download, complete, and upload before finalizing their submission.

**No (Disabled):** Authors can submit their articles without providing a conflict of interest declaration.

**Recommendation:** Enable this option if your journal follows strict ethical guidelines for transparency. Disable it only if COI declarations are not a requirement in your editorial workflow.
