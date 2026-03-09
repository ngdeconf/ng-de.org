---
name: add-sponsor
description: Add a new sponsor to the ng-de.org conference website
argument-hint: "[company name]"
allowed-tools:
  - Read
  - Edit
---

Add a new sponsor to `/Users/robinboehm/development/ng-de.org/src/app/services/sponsor.service.ts`.

If a company name was provided as argument, use it. Otherwise ask for it first.

Collect the following information (ask for missing fields one at a time):
1. Company name (use from argument if provided)
2. Company website URL (must include https://)
3. Logo URL (ask for an online image URL — e.g. from their website or press kit)
4. Sponsorship level — present these options clearly:
   - **Platinum** (top tier)
   - **Gold**
   - **Silver**
   - **Bronze**
   - **Travel** (travel sponsor)
   - **Community Partners**

Before saving, show a summary and ask for confirmation.

Then:
1. Read `src/app/services/sponsor.service.ts`
2. Generate the sponsor ID: convert company name to lowercase kebab-case (e.g. "Acme Corp" → "acme-corp")
3. Verify the ID is not already used
4. Add the new Sponsor object to the array inside `signal<Sponsor[]>([`, before the closing `])`
5. Write the updated file
6. Confirm success to the user

Sponsor object format:
```typescript
{
  id: 'acme-corp',
  name: 'Acme Corp',
  logoUrl: 'https://acme.com/logo.png',
  websiteUrl: 'https://acme.com',
  level: 'Gold'
}
```
