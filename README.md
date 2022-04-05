# subnwub

Subtitle editor for the browser, supporting [WebVTT](https://w3c.github.io/webvtt/) for captions and [WebM](https://www.webmproject.org/) for video.

## Motivation

This project is mainly for learning purposes:

1. Get familiar with [React](https://reactjs.org/)
2. Integrate [MUI (Material UI)](https://mui.com/) for a fancy look
3. Learn about HTML5 media APIs

Furthermore, editing WebVTT captions in the browser has additional advantages. It is a format for the web, hence classical desktop players like [VLC](https://www.videolan.org/) and [mpv](https://mpv.io/) as well as popular tools ([FFmpeg](https://ffmpeg.org/)) currently lack support for many of its features. I also would not want to ship a whole browser with my media player. Furthermore, it is just a draft and even browsers do not fully support the whole specification. I hope to easily test out the browser's functionality in an interactive manner.

Currently, my main interest is support for Japanese subtitles:
* Furigana support (using `ruby` and `rt` tags)
* Vertical text from right to left (even though this is only for literature, not for digital media)

## Goals

1. Upload a video
2. Upload captions
3. Synchroize video playback and captions table
4. Edit captures and update video accordingly

## Outlook

Since this will a be a static SPA with user-provided data it's a good candidate to convert it to a [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps). Maybe also look into persistence?

Furthermore, for more interesting media manipulations I would need to look more into [WebAssembly](https://webassembly.org/).