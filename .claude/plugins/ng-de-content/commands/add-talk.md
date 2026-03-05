---
name: add-talk
description: Add a new talk/session to the ng-de.org conference program
argument-hint: "[talk title]"
allowed-tools:
  - Read
  - Edit
---

Add a new talk to `/Users/robinboehm/development/ng-de.org/src/assets/talks-2025.json`.

If a title was provided as argument, use it. Otherwise ask for it first.

Collect the following information (ask for missing fields one at a time):
1. Talk title (use from argument if provided)
2. Abstract / full description
3. Speaker name — then look up their ID in `src/app/services/speaker.service.ts`. If speaker does not exist, offer to add them first via the add-speaker flow.
4. Day: Thursday (Day 1) or Friday (Day 2)?
5. Time slot (e.g. "14:15 - 14:45")
6. Stage: Pool House or Aula?
7. Should this also be added to the schedule? (yes/no)

Before saving, show a summary and ask for confirmation.

Then:
1. Read `src/assets/talks-2025.json`
2. Find the highest existing talk number for the chosen day (e.g. if `talk-day1-8` exists, next is `talk-day1-9`)
3. Add the new Talk object at the end of the JSON array
4. Write the updated file

If user said yes to schedule:
5. Read `src/assets/schedule.json`
6. Find the correct day's entries array (day1 = `datetime: "2025-11-06"`, day2 = `datetime: "2025-11-07"`)
7. Insert new schedule entry in chronological order
8. Write the updated schedule.json

Confirm all changes to the user in plain language.

Talk object format:
```json
{
  "id": "talk-day1-9",
  "title": "The talk title",
  "abstract": "Full abstract text here",
  "speakerId": "speaker-id",
  "time": "14:15 - 14:45",
  "day": "day1",
  "room": "Pool House"
}
```

Schedule entry format:
```json
{
  "title": "Talk",
  "datetime": "2025-11-06T14:15:00",
  "information": "Speaker Full Name",
  "location": "Pool House",
  "session": "talk-day1-9"
}
```
