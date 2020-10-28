# Starfish Desktop

Starfish desktop is a cross platform (Mac, Windows, Linux) desktop app that wraps [starfish-server](https://github.com/sobachef/starfish-server), a web server that runs in the background and signs any incoming request to sign a message using its internal private keys.

It is powered by [Electron](https://www.electronjs.org/), but does not use the browser UI at all. The Electron form factor is only used to package the [starfish-server](https://github.com/sobachef/starfish-server) so the local server can be installed and run with one click.

Starfish Desktop is entirely a background application without a user interface, so it doesn't take up much resource (CPU or resource) as other Electron apps do.

Learn more about Starfish here: https://starfish.computer

# Usage

- Download the apps at https://starfish.computer/download.html
- Learn how to use at https://starfish.computer

# Build

To build this repository, first install `electron-builder`.

```
npm install -g electron-builder
```

Then run:

```
npm run build
```

# Contribution

is welcome.
