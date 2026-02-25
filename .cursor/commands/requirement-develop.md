# requirement-develop

When the user invokes this command, implement a requirement. Ensure you have the full requirement context before coding.

## Instructions

1. **Check context**
   If you have no context about a requirement (e.g. no requirement document, user story, or acceptance criteria in the conversation), stop and ask the user to load one:
   - *"I need the requirement context. Please use `/requirement-context` to load a requirement from a file or a GitHub issue."*

2. **Code guidelines**
   Before implementing, read `agents.md` and follow the project's code style guidelines, build/test commands, and testing instructions defined there.

3. **Implement the requirement**
   Develop the actual requirement according to:
   - User story and acceptance criteria
   - Files to modify (if specified)
   - Implementation notes
   - Out-of-scope boundaries

4. **Verification**
   Ensure changes satisfy acceptance criteria and do not deviate from the defined scope.
