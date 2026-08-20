# Parler

**A free, open-source, privacy-focused speech-to-text desktop app for macOS, Windows, and Linux.**

Parler is a soft fork of [Handy](https://github.com/cjpais/Handy). Press a global shortcut, speak, and insert the transcription into the application you are using. Speech recognition runs locally on your device.

> [!IMPORTANT]
> Parler is under active development. The current development version is **0.10.0**, and public binaries have not been released yet.

## Features

- Local speech recognition using downloadable transcription models
- Global shortcuts, including push-to-talk support
- Automatic insertion into the active text field
- Transcription history stored on the device
- Configurable microphones, output devices, models, and audio feedback
- Multilingual interface and transcription support
- Optional AI post-processing with local or external providers
- Cross-platform desktop application built with Tauri, Rust, and React

## Privacy

Audio is transcribed locally and is not uploaded to a speech-recognition service. Model downloads and update checks require an internet connection.

AI post-processing is optional and disabled by default. When it is enabled with an external provider such as OpenAI, Anthropic, OpenRouter, Groq, Cerebras, or AWS, the resulting transcript and processing prompt are sent to that provider. Apple Intelligence and compatible custom endpoints running on your own machine can keep post-processing local.

## Downloads

Public installers are not available yet. When releases begin, installers and release notes will be published on the [GitHub Releases](https://github.com/gustmrg/handy/releases) page.

Until then, Parler can be built from source by following [BUILD.md](BUILD.md).

## Development

### Prerequisites

- [Rust](https://rustup.rs/) — latest stable toolchain
- [Bun](https://bun.sh/) — JavaScript package manager
- Platform dependencies described in [BUILD.md](BUILD.md)

### Setup

```bash
git clone https://github.com/gustmrg/handy.git
cd handy
bun install

mkdir -p src-tauri/resources/models
curl -o src-tauri/resources/models/silero_vad_v4.onnx \
  https://blob.handy.computer/silero_vad_v4.onnx

bun run tauri dev
```

If CMake rejects an older dependency policy on macOS, use:

```bash
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri dev
```

The permission onboarding can be skipped during development only:

```bash
VITE_SKIP_PERMISSION_ONBOARDING=1 bun run tauri dev
```

This flag is ignored in production builds and must not be used as a substitute for granting the operating-system permissions required by the application.

### Common commands

```bash
bun run dev            # Frontend-only Vite server
bun run tauri dev      # Full desktop application
bun run build          # Frontend production build
bun run tauri build    # Desktop production build
bun run lint           # Frontend linting
bun run format:check   # Frontend and Rust formatting checks
```

## Fork development

The `dev` branch is Parler's default development branch. The `main` branch is kept as a clean mirror of upstream Handy so that upstream changes can be integrated with a small, reviewable fork diff.

Feature branches should start from `dev` and merge back into `dev`. See [FORKING.md](FORKING.md) for the synchronization workflow, remote configuration, and intentional differences from upstream.

## Provenance and credits

Parler is based on [Handy](https://github.com/cjpais/Handy), created by [CJ Pais](https://github.com/cjpais). The original Git history and commit authorship are preserved in this repository.

Most of the transcription engine, audio pipeline, model management, platform integration, and interface originated in Handy. Parler adds its own identity and maintains a deliberately small set of product-specific changes.

Thank you to everyone who built and improved the original project. See the complete contribution histories for:

- [Handy contributors](https://github.com/cjpais/Handy/graphs/contributors)
- [Parler contributors](https://github.com/gustmrg/handy/graphs/contributors)

## Contributing

Before contributing, read [CONTRIBUTING.md](CONTRIBUTING.md) and the repository guidance in [AGENTS.md](AGENTS.md). Use conventional commit prefixes such as `feat:`, `fix:`, `docs:`, `refactor:`, and `chore:`.

Changes inherited from or intended for upstream Handy should follow Handy's contribution rules. Parler-specific work should target the `dev` branch of this repository.

## License and trademarks

Parler is distributed under the [MIT License](LICENSE), and the original copyright and authorship notices are retained.

The Handy name, logo, and other Handy brand assets are not part of the MIT-licensed source code. Parler uses separate product branding and is not endorsed by or affiliated with the Handy project or its maintainers.
