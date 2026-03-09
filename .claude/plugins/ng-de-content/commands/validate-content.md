---
name: validate-content
description: Check all ng-de.org conference content for errors and inconsistencies
allowed-tools:
  - Read
---

Validate the consistency of all conference content for ng-de.org.

Read all four data files:
1. `src/app/services/speaker.service.ts`
2. `src/assets/talks-2025.json`
3. `src/assets/schedule.json`
4. `src/app/services/sponsor.service.ts`
5. `src/app/services/workshop.service.ts`

Then check the following rules and report any issues found:

**Cross-reference checks:**
- Every `speakerId` in `talks-2025.json` must match an existing speaker `id` in `speaker.service.ts`
- Every `trainerId` in `workshop.service.ts` must match an existing speaker `id` in `speaker.service.ts`
- Every non-null `session` value in `schedule.json` must match an existing talk `id` in `talks-2025.json`

**Duplicate ID checks:**
- No two speakers share the same `id`
- No two talks share the same `id`
- No two sponsors share the same `id`

**Required field checks:**
- Every speaker has: id, name, title, company, bio, imageUrl
- Every talk has: id, title, abstract, speakerId, time, day, room
- Every sponsor has: id, name, logoUrl, websiteUrl, level

**Value checks:**
- Talk `day` values are only `"day1"` or `"day2"`
- Talk `room` values are only `"Pool House"` or `"Aula"`
- Sponsor `level` is one of: Platinum, Gold, Silver, Bronze, Travel, Community Partners

Present results clearly:
- If no issues: "All content looks great! No errors found."
- If issues found: List each issue with a clear description and the affected item's ID/name. Group by category (missing fields, broken references, duplicates).
- Suggest how to fix each issue in plain language.
