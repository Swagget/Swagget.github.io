---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: "Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving."
date: 2021-10-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving.


We then used optical flow with a threshold, when the threshold was crossed we used the prior method, however when the optical threshold wasn’t crossed, we used the frames from the input image itself.


We then wrote the methods in the form of a research paper.


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4UP557R%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T012526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEoGLGQgJPwTPA%2BZ1T%2FfO6Y6JYARvMgEZoWKuE8%2F8TqvAiBL7ybM1sYyqTaoSR2yiuRF2NwKBbV%2Bm%2B0O%2BZsqsEp2Air%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM9McpWYqKT3TxIuyDKtwDQIlcSOx1yESPbGUbIivVBVvUfSKG6vZElmUqkDO87aQA2CWU4Zn%2FXnMdoiyHqcflOdM28ou%2FGqvSNWOjU1t%2BMxazDHkaoS%2BtnfufDIIbhAbrewAt31mrhOX%2FV0dhK59t1S%2BWZ9hruFZohBttv5op6uanaeeiHqPf%2BUDEqRTs%2Fvkd%2Bb7vJJ5WRJi5Wy3ezU0FW1xPK6%2BBXUE9y8xL4%2FaPWHtlxFwOoKnvuTp92RDMbzd06WZmj5f3hWWpbODj2zID%2FFJ4fHLRBmmZjmK4sIDdkRs09nGSp7oCKEHMglFuK3X4lzKXYYUoVN5469zhVrlIACOhDPk1BBlFS%2BdMKGDuyBbYgfS8VFNaKbUvLIbR4sD5z%2FGFGNBDz69%2FA8eMy7nxEqTKSeU8XuaU7jQiLCaC6sSK%2FWHsm7unwVKYVki8qaYuzq67LcH5q2ikIkS2t%2B3OG6uNOw5HG997lGMcpt22hoJPBbh6pdhdQf5QOO1g9WB%2FxA7eFsxlXg5dhAoyb5Gn9aqE840CzQ1b%2FyDT1G4ImlhLpxywfi%2FC%2F0thhyNSVctLKl409q4%2BK49RMhrenSTTNcUaYDHael63C41rl%2FZVqgWSQvBON8Mt4PsUBUfiZn0JWsEgIQ8dSUn5BzAw0qqV0wY6pgG%2F0zzziwmpvRwGT6jdaQkL5rxJG%2Bb46Xl9PLGzcYkPCG1BUUD4aGbBcgpnP8GeqfBC87czPbJSNJKnVoM1XnCffNOXcOh0qYdX5MPWPYzcg2xnb9YTQHytzLmqzzldNZZqB0DfoaB9HchPmW0%2BOuYUsFbIZ98I6Ln8UFch9coJTg7e%2B2S8th3qSX5HfFwu4bEJmkrZpgL8NPEqvE6yAzyyVG%2F%2BtF6%2F&X-Amz-Signature=314c387a3598f3ba0ce3a807cc630bb4f7330bb938f7d850a09443e129dc799d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

