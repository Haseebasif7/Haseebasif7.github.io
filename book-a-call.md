# Setting up "Book a call"

The site currently links to `https://cal.com/haseebasif7` in two places per
page: the profile sidebar on index.html, and the calendar icon in the footer
of all four pages. That username is a placeholder and will 404 until you
claim it.

## To make it live

1. Sign up at [cal.com](https://cal.com) (free tier is enough).
2. During signup, try to claim the username `haseebasif7` so no links need
   to change. If it's taken, pick another and note it below.
3. Under **Availability**, set the hours and days you actually want to take
   calls, in your local timezone. Cal.com converts it for visitors
   automatically.
4. Under **Event Types**, create one event (e.g. "30 Min Chat" or "Research
   Chat") so there's something to book. Without at least one event type, the
   link will land on an empty page.
5. If your final username is not `haseebasif7`, find and replace it across
   `index.html`, `projects.html`, `research.html`, and `cv.html` (6 total
   occurrences), or just tell me the real username and I'll swap it in.

No code changes needed beyond the username if you keep the default event
setup. This file is a note for you, not something that needs to ship to
GitHub Pages.
