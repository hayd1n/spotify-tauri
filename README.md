<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/CRT-HAO/spotify-tauri/assets/31580253/2648e8bc-2ad9-4bd9-b843-a0fc344f2c6c">
  <img alt="Cover" src="https://github.com/CRT-HAO/spotify-tauri/assets/31580253/f31759cd-a53e-49ca-b1f8-f40e3a1cf683">
</picture>

# Spotify Tauri

An Unofficial Lightweight Spotify Client Alternative made with [Tauri](https://tauri.app/)  
Support Windows, macOS, Linux

## Screenshot

<img width="1439" alt="Screenshot" src="https://github.com/CRT-HAO/spotify-tauri/assets/31580253/e255f37b-a0b1-45ce-855a-5e6594ac8d7c">

## Release

[latest](https://github.com/CRT-HAO/spotify-tauri/releases)

## Development

```bash
cargo tauri dev
```

## Build

```bash
cargo tauri build
```

## “Spotify Tauri” is damaged and can’t be opened. You should eject the disk image.

Due to the fact that signing Mac apps requires the Apple Developer Program, which is available for an additional fee.  
So I can't afford to sign apps at the moment.  

So you may open the app with _**"ntust-auto-repeal-votes" is damaged and can't be opened. You should move it to the Trash. You should move it to the Trash.**_  

<img width="372" alt="damaged" src="https://github.com/CRT-HAO/spotify-tauri/assets/31580253/3ea62cd9-12bb-4e87-8a69-6082cd4ed394">

### Solution
In order to bypass the signature verification, you will need to remove the attributes attached to the app by macOS using the following command.  
```bash
xattr -cr /Applications/ntust-auto-repeal-votes.app
```
