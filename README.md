 <p align="center">
  <a href="https://miley.app">
    <img src="https://github.com/miley-music/miley/blob/main/public/assets/512.png?raw=true" alt="MiLey Logo" width="150px">
  </a>
</p>

<h1 align="center">MiLey</h1>

<strong>An open-source, privacy-respecting, ad-free music app.</strong>
</p>

<p align="center">
  <a href="https://miley.app">Website</a> -
  <a href="https://ko-fi.com/mileytf">Donate</a> -
  <a href="#features">Features</a> -
  <a href="#usage">Usage</a> -
  <a href="#self-hosting">Self-Hosting</a> -
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

<p align="center">
  <a href="https://github.com/miley-music/miley/stargazers">
    <img src="https://img.shields.io/github/stars/miley-music/miley?style=for-the-badge&color=ffffff&labelColor=000000" alt="GitHub stars">
  </a>
  <a href="https://github.com/miley-music/miley/forks">
    <img src="https://img.shields.io/github/forks/miley-music/miley?style=for-the-badge&color=ffffff&labelColor=000000" alt="GitHub forks">
  </a>
  <a href="https://github.com/miley-music/miley/issues">
    <img src="https://img.shields.io/github/issues/miley-music/miley?style=for-the-badge&color=ffffff&labelColor=000000" alt="GitHub issues">
  </a>
</p>

---

## What is MiLey?

**MiLey** is an open-source, privacy-respecting, ad-free [TIDAL](https://tidal.com) web UI, built on top of tidal API + Q-DL. It provides a beautiful, minimalist interface for streaming high-quality music without the clutter of traditional streaming platforms.

[![MiLey UI: NASIR by Nas](https://i.samidy.xyz/NASIR.png)](https://miley.app/album/90502209)

## [![MiLey UI: Jump Out by Osamason](https://i.samidy.xyz/jumpout.png)](https://miley.app/album/413189044)

## Features

### Audio Quality

- High-quality High-Res/lossless audio streaming
- Support for local music files
- API caching for improved performance

### Interface

- Dark, minimalist interface optimized for focus
- Animated Album Covers For Supported Albums
- Customizable themes & Community Theme Store
- Accurate and unique audio visualizer
- Offline-capable Progressive Web App (PWA)
- Media Session API integration for system controls

### Library & Organization

- Recently Played tracking for easy history access
- Comprehensive Personal Library for favorites
- Queue management with shuffle and repeat modes
- Native Podcast support & organization
- Playlist import from other platforms
- Public playlists for social sharing
- Smart recommendations for new songs, albums & artists
- Infinite Recommendation Radio
- Explore Page (Hot & New) for discovering newly added music and whats trending overall or within each genre

### Lyrics & Metadata

- Lyrics support with karaoke mode
- Genius integration for lyrics
- Track downloads with automatic metadata embedding

### Integrations

- Account system for cross-device syncing
- Customizable & Public Profiles
- Real-time Listening Parties for synced playback with friends
- Last.fm and ListenBrainz integration for scrobbling
- OAuth support (Google, Discord, GitHub, Spotify)
- Unreleased music from [ArtistGrid](https://artistgrid.cx)
- Dynamic Discord Embeds
- Artist Biography + Social Links for learning more about your favorite artists
- Multiple API instance support with failover

### Power User Features

- Keyboard shortcuts & Command Palette (CTRL+K) for power users

---

## Quick Start

### Live Instance

Our Recommended way to use MiLey is through our official instance:

**[miley.app](https://miley.app)** / **[miley.samidy.com](https://miley.samidy.com)**

For alternative instances, check [INSTANCES.md](INSTANCES.md).

---

## Self-Hosting

NOTE: Accounts will not work on self-hosted instances. Our Appwrite authentication system only allows authorized domains.

We had to heavily customize the authentication system and write several custom scripts to support features like SMTP and Google OAuth (which are currently bugged in Appwrite). Because of this, we can no longer provide a self-hostable accounts system.

### Option 1: Docker (Recommended)

```bash
git clone https://github.com/miley-music/miley.git
cd miley/docker
docker compose up -d
```

Visit `http://localhost:3000`

### Tailscale Access

Visit `http://<tailscale_server_hostname_or_ip>:3000`

By default, the app uses Vite preview, which restricts access to localhost.  
To allow access over Tailscale:

1. Open `vite.config.js`

2. Uncomment and configure the `preview` section:

```js
preview: {
    host: true,
    allowedHosts: ['<your_tailscale_hostname>'], // e.g. pi5.tailf5f622.ts.net
},
```

3. Restart with a fresh container (if already running):

```bash
docker compose down
docker compose up -d
```

For development mode and advanced setups, see [DOCKER.md](DOCKER.md).

### Option 2: Manual Installation

#### Prerequisites

- [Bun](https://bun.sh/) (Preferred) or [Node.js](https://nodejs.org/) (Version 20+ or 22+ recommended)
- [Git](https://git-scm.com/)

#### PocketBase Schema

The current PocketBase collection schema is stored in [`database/pb_schema.json`](database/pb_schema.json). Import this schema into a fresh PocketBase instance when setting up account data storage.

#### Local Development

1. **Clone the repository:**

    ```bash
    git clone https://github.com/miley-music/miley.git
    cd miley
    ```

2. **Install dependencies:**

    ```bash
    bun install
    # or
    npm install # NPM is included with Node.js
    ```

3. **Start the development server:**

    ```bash
    bun run dev
    # or
    npm run dev
    ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/`

#### Building for Production

```bash
bun run build
# or
npm run build
```

---

## Usage

### Basic Usage

1. Visit the [Website](https://miley.app) or your local development server
2. Search for your favorite artists, albums, or tracks
3. Click play to start streaming
4. Use the media controls to manage playback, queue, and volume

### Keyboard Shortcuts

| Shortcut      | Action                       |
| ------------- | ---------------------------- |
| `Space`       | Play / Pause                 |
| `→`           | Seek forward 10s             |
| `←`           | Seek backward 10s            |
| `Shift` + `→` | Next track                   |
| `Shift` + `←` | Previous track               |
| `↑`           | Volume up                    |
| `↓`           | Volume down                  |
| `M`           | Mute / Unmute                |
| `S`           | Toggle shuffle               |
| `R`           | Toggle repeat                |
| `Q`           | Open queue                   |
| `L`           | Toggle lyrics                |
| `/`           | Focus search                 |
| `Esc`         | Close modals                 |
| `[`           | Previous visualizer preset   |
| `]`           | Next visualizer preset       |
| `\`           | Toggle visualizer auto-cycle |
| `Ctrl` + `K`  | Command Palette              |

### Account Features

To sync your library, history, and playlists across devices:

1. Click the "Accounts" Section
2. Sign in with Google or Email
3. Your data will automatically sync across all devices

---

## Contributing

We welcome contributions from the community! Please see our [Contributing Guide](CONTRIBUTING.md) for:

- Setting up your development environment
- Code style and linting
- Project structure
- Before You Contribute
- Commit message conventions
- Deployment information

---

<p align="center">
  <a href="https://fmhy.net/audio#streaming-sites">
    <img src="https://raw.githubusercontent.com/miley-music/miley/refs/heads/main/public/assets/asseenonfmhy880x310.png" alt="As seen on FMHY" height="50">
  </a>
</p>

<p align="center">
  <a href="https://notbyai.fyi">
    <img src="https://i.samidy.xyz/Developed-By-Humans-Not-By-AI-Badge-black%402x.png" alt="Developed by Humans" height="50">
  </a>
</p>

<p align="center">
  Made with ❤️ by the MiLey team
</p>

## Star History

<a href="https://www.star-history.com/#miley-music/miley&type=date&logscale&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=miley-music/miley&type=date&theme=dark&logscale&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=miley-music/miley&type=date&logscale&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=miley-music/miley&type=date&logscale&legend=top-left" />
 </picture>
</a>
