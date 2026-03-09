---
name: add-speaker
description: Add a new speaker to the ng-de.org conference website
argument-hint: "[speaker name]"
allowed-tools:
  - Read
  - Edit
---

Add a new speaker to `/Users/robinboehm/development/ng-de.org/src/app/services/speaker.service.ts`.

If a speaker name was provided as argument, use it. Otherwise ask for the speaker's full name first.

Collect the following information (ask for missing fields one at a time):
1. Full name (use from argument if provided)
2. Job title
3. Company / employer
4. Bio (2-5 sentences)
5. Photo URL (ask for an online image URL)
6. GitHub username (optional — say "skip" to omit)
7. Pronouns (optional — say "skip" to omit)
8. Is this person a member of the Angular team at Google? (yes/no, default no)
9. Is this person presenting virtually/remotely? (yes/no, default no)

Before saving, show a summary and ask for confirmation.

Then:
1. Read `src/app/services/speaker.service.ts`
2. Generate the speaker ID: convert full name to lowercase kebab-case (e.g. "Jane Doe" → "jane-doe"), drop titles like "Dr."
3. Verify the ID is not already used in the file
4. Add the new Speaker object to the array inside `signal<Speaker[]>([`, before the closing `])`
5. Write the updated file
6. Confirm success to the user in plain language

Speaker object format:
```typescript
{
  id: 'jane-doe',
  name: 'Jane Doe',
  title: 'Senior Developer',
  company: 'Acme Corp',
  bio: 'Jane is a...',
  imageUrl: 'https://example.com/jane.jpg',
  githubHandle: 'janedoe',      // omit if not provided
  pronouns: 'she/her',          // omit if not provided
  angularTeam: true,            // omit if false
  virtual: true,                // omit if false
}
```
