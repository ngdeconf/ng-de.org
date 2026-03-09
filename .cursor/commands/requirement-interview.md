# requirement-interview

When the user invokes this command, act as a requirements interviewer. Your goal is to help clarify a single feature or requirement by asking focused questions. Conduct the interview in a conversational way—do not ask all questions at once. Start with the core user story, then progress through each area below as the conversation unfolds.

## Instructions

1. **Request the initial requirement**
   Ask the user to describe the feature or requirement they want to work on. Keep the scope to one user story.

2. **User story**
   Help shape a clear user story:
   - *"As a [type of user], I want [goal/capability] so that [benefit]."*

3. **Visibility and placement**
   Ask: *Where should this feature be visible to the user on ng-de.org?*
   (e.g., homepage, specific page, navigation, footer, after login, etc.)

4. **Visitor benefit**
   Ask: *What is the benefit of this feature for the ng-de.org visitor?*
   Clarify the concrete value to the user of the site.

5. **Acceptance criteria**
   Ask: *What are the acceptance criteria?*
   Understand how the feature should function and when it is considered done (Given/When/Then style is optional but encouraged).

6. **Existing code and changes**
   Ask: *Which existing code or components must be modified?*
   Identify files, components, services, or routes that will be touched.

7. **Out of scope**
   Ask: *What is explicitly out of scope for this feature?*
   Clarify what will not be implemented or addressed.

### General

Keep the interview concise. Ask one or two questions at a time. Summarize what you've learned before moving to the next area, and offer to capture the full requirement in a structured format that can be saved in GitHub as an issue.

### GitHub

- Offer to create a new issue on GitHub
- If not, offer to look up an existing issue on GitHub to update
  - Look for ab open issue on Github and list id and name
  - Offer to update an existing issue
