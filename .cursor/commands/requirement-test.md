# requirement-test

When the user invokes this command, verify that the acceptance criteria of the current requirement are met.

## Instructions

1. **Read acceptance criteria**
   Use the acceptance criteria from the requirement context (e.g. from a loaded requirement document or GitHub issue).

2. **If no acceptance criteria**
   If there are no acceptance criteria in context, ask the user:
   - *"I need the requirement context. Please run `/requirement-context` to load a requirement from a file or GitHub issue."*

3. **Start the application**
   Read `agents.md` for the start command and run it. For this project: `pnpm dev`. Start the app (in background if needed) so you can verify the criteria in the browser.

4. **Verify acceptance criteria**
   For each criterion:
   - Navigate to the relevant page or component
   - Inspect the running app (e.g. via browser tools, snapshot, or view source)
   - Determine whether the criterion is met
   - Mark as checked ✓ or unchecked ✗

5. **Update the requirement on GitHub**
   If the requirement is linked to a GitHub issue:
   - Update the issue body to reflect the verified state of each criterion
   - Use `gh issue edit <issue-id> --body "<updated body>"` with the checklist items updated (`- [x]` for met, `- [ ]` for not met)
   - Map each acceptance criterion to its check/uncheck state based on verification
