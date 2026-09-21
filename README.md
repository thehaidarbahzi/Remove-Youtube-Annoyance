<img src="assets/icon.png" alt="Repository Icon" width="128" />

# Remove YouTube Annoyance

Browser extension that removes timestamps and ads from YouTube.

## Features

- Removes `t` parameter from YouTube video URLs
- Removes `themeRefresh` if you open YouTube on Incognito or Private Tab
- Removes the red progress bar from video thumbnails and prevents YouTube from resuming videos from a previous timestamp
- Removes Youtube ads

## How to use

Install the extension and browse YouTube normally. You’ll notice that video lists no longer have the red progress bar under their thumbnails, so YouTube won’t automatically resume videos from a specific timestamp. You’ll also notice that there are no ads.

## Installation

### GitHub Releases

#### Chrome

1. Download `chrome-extension.zip` from GitHub Releases
2. Unzip the file to your preferred location
3. Open `chrome://extensions`, enable Developer Mode, then click Load unpacked and select the unzipped folder

#### Firefox

1. Download `firefox-extension.zip` from GitHub Releases
2. Unzip the file to your preferred location
3. Open `about:debugging#/runtime/this-firefox` and click Load Temporary Add-on, then select `manifest.json`

### Clone Repository

#### Chrome

1. Run `pnpm build:chrome` to generate `.output/chrome-mv3`
2. Open `chrome://extensions`, enable Developer Mode
3. Click Load unpacked and select `.output/chrome-mv3`

#### Firefox

1. Run `pnpm build:firefox` to generate `.output/firefox-mv2`
2. Open `about:debugging#/runtime/this-firefox`
3. Click Load Temporary Add-on and select `manifest.json`

## Development

```bash
pnpm install
pnpm dev:chrome       # Chrome development
pnpm dev:firefox      # Firefox development
pnpm build:chrome     # Chrome build
pnpm build:firefox    # Firefox build
```

Requires Node 18+ and pnpm.
