# QA — iSee360 (web + mobile)

Use this checklist for **manual** smoke testing on **web** (Next.js) and **mobile** (Expo). Automated checks live in each repo’s `npm run qa`.

## Automated (per repo)

| Repo | Command | What it runs |
|------|---------|----------------|
| **Web** (this Next.js app) | `npm run qa` | `lint` → `test` (Vitest) → `build` → Playwright e2e |
| **Mobile** (Expo app repo) | `npm run qa` | `expo lint` → `tsc --noEmit` → `expo-doctor` |

**First-time web e2e:** install browsers once: `npx playwright install chromium`.

**Web repo path on other machines:** If your clone lives at `~/.../isee360` (e.g. `/home/isee360/.openclaw/workspace/isee360`), copy the same `qa` script and test configs from this repo, or symlink this tree.

---

## Manual click-through (both platforms)

Do these on **web** and **mobile** after a release or major change.

### Home

- [ ] Dashboard / hero loads; metrics or summary visible (mobile: Personal Intelligence / search card as applicable).
- [ ] **View my profile** (if present) opens the signed-in user / Chris Hughes profile without errors.
- [ ] Multi-signal search (if present): required fields and triangulation flow behave as expected.

### Profiles

- [ ] Gallery lists personas; filters/search work.
- [ ] Open a persona detail; hero, insight ring / segments load.
- [ ] BLUF / info preview (if present): opens and shows text; **View profile** works.

### Search

- [ ] Search results render; filters work where applicable.
- [ ] Duplicate-name flow (if applicable): multiple candidates + highlight by address; monitored profile opens full detail.

### Circle

- [ ] Members grid loads; filters work.
- [ ] Add/remove or suggested flow behaves; snackbar/feedback if implemented.

### Scout

- [ ] Floating Scout control visible (top-left on mobile); opens drawer.
- [ ] Header, quick chips, suggestions; send a message; response streams or completes.
- [ ] Close / clear behave; no crash on reopen.

### Settings

- [ ] Settings screen loads; toggles/segments don’t error.
- [ ] About / Terms / Privacy links open (mobile: system browser).

---

## Mobile-only scripts

```bash
npm run lint        # expo lint
npm run typecheck   # tsc --noEmit
npm run doctor      # npx expo-doctor
npm run ios:preflight   # optional native compile check: expo run:ios --no-install
```

---

## Web-only scripts

```bash
npm run lint
npm run test
npm run build
npm run e2e          # playwright test
```
