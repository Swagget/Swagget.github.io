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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDHZQN2O%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T195358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT7lfocWXDBfgV7utbcCbwYI60%2BMD3lV%2Fwfo4v9yFrgIgFgjkeU9MGcnzqtcVZ5jV3WwiA1Q%2BXpn4DaIg4i%2B2iBoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL7lzmnbIF1u06JZiyrcA5xGaK8isIgAW7lVUfkJP95GEcnkbR659qeFJ50%2BLJrY%2FCOzG8%2F9P8IlB1qeiz9E%2B2kIoxqUrVp4b5T0xCk7NxLyiLJiLUEkZOdR82gadWBAY1SkRUOQeij5cZg74jPpWi%2BejNJxDGPw5JoE6J%2B2c4lnLEWnIGAF5E69x%2FkFrA38BwbaevnV3lYmMTZvXga7bOt48XsGAkbPUfxYUP%2FCzWxSnuJImvspale1D%2Fyevl2154utuPQtiKOKOGR272xhtAqKn37NxcQYS0%2BhoxK3rCb0YXv1x%2FDRLPbpElgJGDD9TV6VIU%2Fn1vwtdt7H0EMdpl99CqWV9ulVrfRVsynSPzyTLgUA0Zc6imHzrOs0Vq2%2BuAgFlFlMyf5S1dYmO4Vv%2B4jkSAEpNUeTGxjJA46igXl%2Fh%2FEHbOp4XlRDu5PZBDDheN7TVh4qX3zXzOiw1vtdy3Nr9wBBWkuqourBnYfv50rJEmR0%2B%2Ft8%2F5fJsO1RtgedVzDbUX3Bi8bqjBXcE09sq9eYGGGXL5LRcTGAb%2BjfTJuPVRrZwK9p4iZM3%2FpJEnUUorVzqJw4gmFUCpe%2B%2BcJOezNnn5SnKkNFtSkl0nNHgqBWztlsDQRj70el4%2FUaOqioMFWAxYQPLSn7Y%2F07MLzb5NIGOqUBGZP1h8M2MhIGZTfxCQjmi5B4C6Yya8vkQfMbVKehF%2Ftl6N6K1Sl6px3W%2BkkZmXlBSbEAfAdNPJJx0l%2F%2F0e6t3OToy2TcjMGww9ttMYGGhidg%2FgXn%2BDy%2FHX2raaj7StJ%2B4gQ5pfGETI%2BrL4NBAe83wjmQ9MYNqROzF6XHjfKoOu0GQxSiRFYw2TGXj1fckRXrS65B7iql4kEo3cxCqGFOKbj6%2Fy9R&X-Amz-Signature=d57a031108b3e6a785de6b0a77c6b0f9887374cd64561e9afaea54fde13131c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

