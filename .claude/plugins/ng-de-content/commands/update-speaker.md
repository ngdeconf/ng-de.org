---
name: update-speaker
description: Update an existing speaker's information on ng-de.org
argument-hint: "[speaker name or id]"
allowed-tools:
  - Read
  - Edit
---

Update an existing speaker in `/Users/robinboehm/development/ng-de.org/src/app/services/speaker.service.ts`.

1. Read `src/app/services/speaker.service.ts`
2. If a name or ID was provided as argument, find the matching speaker. If not provided, list all speaker names and ask which one to update.
3. Show the speaker's current information
4. Ask: "Which field would you like to update?" and list the available fields:
   - Name
   - Job title
   - Company
   - Bio
   - Photo (image URL)
   - GitHub username
   - Pronouns
   - Angular team membership
   - Virtual/remote flag
5. Ask for the new value
6. Ask if they want to update any other fields
7. Show a summary of all changes and ask for confirmation
8. Apply all changes to the file
9. Confirm success in plain language
