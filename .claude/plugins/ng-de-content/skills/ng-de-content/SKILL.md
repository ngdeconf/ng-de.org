---
name: NG-DE Content Management
description: Load this skill when the user wants to add, update, or remove speakers, talks, sessions, sponsors, or workshops on the ng-de.org conference website. Also load when validating content consistency or managing schedule entries.
version: 1.0.0
---

# NG-DE Content Management

This skill provides complete knowledge of the ng-de.org content data model, file locations, and conventions for managing conference content.

## Project Root

The ng-de.org project lives at: `/Users/robinboehm/development/ng-de.org`

All paths below are relative to this root.

---

## Data Files and Locations

### Speakers
**File**: `src/app/services/speaker.service.ts`
**Format**: TypeScript array of `Speaker` objects inside a `signal<Speaker[]>([...])` call.

Speaker interface:
```typescript
{
  id: string;           // REQUIRED. kebab-case slug, e.g. "jane-doe"
  name: string;         // REQUIRED. Full display name, e.g. "Jane Doe"
  title: string;        // REQUIRED. Job title, e.g. "Senior Developer"
  company: string;      // REQUIRED. Employer name
  bio: string;          // REQUIRED. 2-5 sentence biography
  imageUrl: string;     // REQUIRED. Path like "assets/images/speakers/jane-doe.jpg"
  githubHandle?: string; // Optional. GitHub username without @
  pronouns?: string;    // Optional. e.g. "she/her"
  angularTeam?: boolean; // Optional. true if Google Angular team member
  ngrxTeam?: boolean;   // Optional. true if NgRx team member
  virtual?: boolean;    // Optional. true if presenting remotely
  mc?: boolean;         // Optional. true if Master of Ceremonies
}
```

**ID convention**: Convert full name to lowercase kebab-case. "Jane Doe" → `jane-doe`. "Dr. Jim Sellmeijer" → `jim-sellmeijer`.

**Image handling**: When user provides an image URL, set `imageUrl` to the provided URL directly (e.g. `"https://example.com/photo.jpg"`). Do NOT use local asset paths unless the image is already in `src/assets/images/speakers/`.

**Insertion point**: Add new speaker objects inside the `signal<Speaker[]>([` array, before the closing `])`.

---

### Talks
**File**: `src/assets/talks-2025.json`
**Format**: JSON array of Talk objects.

Talk interface:
```json
{
  "id": "talk-day1-9",
  "title": "Talk title here",
  "abstract": "Full abstract text",
  "speakerId": "jane-doe",
  "time": "14:15 - 14:45",
  "day": "day1",
  "room": "Pool House"
}
```

**ID convention**: Use `talk-day1-N` or `talk-day2-N` where N is the next available number. Keynotes use `keynote-day1` / `keynote-day2`.

**day values**: `"day1"` = Thursday (first conference day), `"day2"` = Friday (second conference day).

**room values**: `"Pool House"` or `"Aula"`.

**speakerId**: Must match an existing speaker `id` in `speaker.service.ts`.

---

### Schedule
**File**: `src/assets/schedule.json`
**Format**: JSON array of ScheduleDay objects, each with an `entries` array.

ScheduleEntry interface:
```json
{
  "title": "Talk",
  "datetime": "2025-11-06T14:15:00",
  "information": "Speaker Name",
  "location": "Pool House",
  "session": "talk-day1-9"
}
```

**datetime format**: ISO 8601, always use the conference dates:
- Day 1 (Thursday): `2025-11-06`
- Day 2 (Friday): `2025-11-07`

**session field**: References a talk `id` from `talks-2025.json`, or `null` for non-talk entries (breaks, registration, etc.).

**information field**: Usually the speaker's name, or a description for non-talk entries.

---

### Sponsors
**File**: `src/app/services/sponsor.service.ts`
**Format**: TypeScript array of `Sponsor` objects inside a `signal<Sponsor[]>([...])` call.

Sponsor interface:
```typescript
{
  id: string;        // REQUIRED. kebab-case slug, e.g. "acme-corp"
  name: string;      // REQUIRED. Display name
  logoUrl: string;   // REQUIRED. URL or local path "assets/images/sponsors/acme-corp.png"
  websiteUrl: string; // REQUIRED. Full URL including https://
  level: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Travel' | 'Community Partners';
}
```

**Image handling**: When user provides a logo URL, set `logoUrl` to that URL directly.

---

### Workshops
**File**: `src/app/services/workshop.service.ts`
**Format**: TypeScript array of `Workshop` objects inside a `signal<Workshop[]>([...])` call.

Workshop interface:
```typescript
{
  id: string;           // REQUIRED. Sequential number as string: "1", "2", "3"
  title: string;        // REQUIRED.
  abstract: string;     // REQUIRED. Full description
  teaser: string;       // REQUIRED. Short 1-sentence hook
  trainerId: string;    // REQUIRED. Must match a speaker id
  duration: string;     // REQUIRED. e.g. "8 hours"
  capacity: number;     // REQUIRED. Max attendees
  room: string;         // REQUIRED. e.g. "Aula"
  address: string;      // REQUIRED. Full venue address
  benefits?: string[];  // Optional. Bullet points of what attendees gain
  outline?: { title: string; topics: string[] }[]; // Optional. Session blocks
  targetAudience?: string; // Optional.
  soldOut?: boolean;    // Optional.
}
```

---

## Validation Rules

When editing or validating content, always check:

1. **Speaker ID consistency**: Every `speakerId` in `talks-2025.json` must match an `id` in `speaker.service.ts`
2. **Trainer ID consistency**: Every `trainerId` in `workshop.service.ts` must match an `id` in `speaker.service.ts`
3. **Schedule session consistency**: Every non-null `session` in `schedule.json` must match a talk `id` in `talks-2025.json`
4. **No duplicate IDs**: Speaker IDs, talk IDs, sponsor IDs must all be unique within their respective files
5. **Required fields**: All REQUIRED fields must be present and non-empty
6. **day values**: Only `"day1"` or `"day2"` allowed in talks
7. **Sponsor levels**: Only the six defined levels allowed

---

## Common Operations

### Adding a speaker
1. Read `src/app/services/speaker.service.ts`
2. Determine the new speaker's `id` from their name (kebab-case)
3. Check the id is not already taken
4. Add the new Speaker object to the array (before the closing `]`)
5. If a talk is also being added, proceed to add the talk

### Adding a talk
1. Read `src/assets/talks-2025.json`
2. Find the highest existing talk number for the day (e.g. `talk-day1-8` → next is `talk-day1-9`)
3. Confirm the `speakerId` exists in `speaker.service.ts`
4. Append the new Talk object to the JSON array
5. Ask user if they want to add the talk to the schedule too

### Adding a schedule entry
1. Read `src/assets/schedule.json`
2. Find the correct day object (`day1` = Thursday entry with `datetime: "2025-11-06"`)
3. Add the new entry in chronological order within the day's `entries` array
4. Mirror the entry for the other room if it's a simulcast (Aula live stream)

### Adding a sponsor
1. Read `src/app/services/sponsor.service.ts`
2. Add the Sponsor object to the array

---

## Conference Facts

- **Conference name**: NG-DE 2025
- **Dates**: November 6-7, 2025 (Thursday-Friday)
- **Location**: Hotel Oderberger, Berlin, Germany
- **Rooms**: Pool House (main stage), Aula (second stage / overflow)
- **Workshop day**: November 5, 2025 (Wednesday, day before conference)
- **Website**: https://ng-de.org
