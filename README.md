# EHA: Eurosymposium on Healthy Ageing and Longevity

Website of the 8th Eurosymposium on Healthy Ageing and Longevity, organised by Heales (Healthy Life Extension
Society) with the International Longevity Alliance: 5–6 November 2026, Muntpunt, Brussels, and online.
Served at https://www.eha-heales.org and https://eha-heales.org.

A static page with no build step for content: any static host can serve the `site/` folder.

## Layout

| Path | What it is |
|---|---|
| `site/` | Everything that is served: the page, its content file and images |
| `site/index.html` | The page, generated from `src/eha.html` by `tools/build.sh` |
| `site/eha-data.js` | **All content**: dates, programme, speakers, past editions, declarations, FAQ, contact |
| `site/img/` | Heales icon, ILA logo, favicon, share card, speaker portraits (480×480), photos of past editions |
| `src/eha.html` | Layout, styles and the script that renders the content; it has no `<html>`/`<head>` skeleton |
| `tools/build.sh` | Wraps `src/eha.html` in a document skeleton with the social-media tags and writes `site/index.html` |
| `tools/og_card.py` | Draws the 1200×630 share card and the favicon (needs Pillow and the Archivo and Atkinson Hyperlegible Next TTFs) |

## Updating the content

Edit `site/eha-data.js` only. The programme, speaker cards, countdown, "live now" banner and calendar links are all
generated from it, so a date or a name changes everywhere at once. No rebuild is needed.

- **Fill an open slot:** find the item with only `start` and `end`, add `speakers: ['slug']` and a `title`.
- **Add a speaker:** add an entry to `people` (slug, name, role, affiliation, short, photo, bio, links) and a
  480×480 portrait in `site/img/speakers/<slug>.jpg`.
- **Schedule the panel or the glucose session:** move the item from `unscheduled` into the right day and session and
  give it `start` and `end`.
- **Badges:** `online`, `interactive`, `panel`, `keynote`, `welcome`.
- Change `updated` at the top whenever you edit, so visitors can see how current the page is.
- `draftNotice` shows a yellow "draft" bar under the header. Delete that line once the organisers approve the page.

Times are Brussels time. On 5–6 November 2026 Brussels is on CET (UTC+01:00), the `utcOffset` value.

To change the layout or styles, edit `src/eha.html` and run `tools/build.sh`.

## Behaviour

- Tabs, each with its own link: `#overview`, `#programme`, `#speakers`, `#hands-on`, `#venue` (venue, travel and FAQ),
  `#history` (past editions and declarations) and `#about`. A link to a section inside a tab, such as `#faq`, opens
  that tab and scrolls to it. While the event is live the page opens on the Programme tab.
- Before the event the page counts down the days; during it the programme marks the live talk and the next one;
  afterwards it points to the recordings.
- Online visitors can switch all times to their own time zone; "A+" enlarges all text.
- Speaker e-mail addresses are deliberately not published.

## Deploying

The server keeps a checkout of this repository and Caddy serves its `site/` folder for `eha-heales.org` and
`www.eha-heales.org`. To publish a change, push to `main`, then run `git pull` in the checkout on the server.

## Images

Speaker portraits come from the speakers' institutional or project pages and event photos from earlier editions of
the Eurosymposium. Replace any portrait with the one a speaker prefers.
