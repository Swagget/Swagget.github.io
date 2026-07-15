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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ2WUIZ3%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T224928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICg6Sze36iUVOdM%2BDWQHpxoAI01AQgMdtKeq3ycGZvtvAiEA4E%2B%2BfJyocMG14AW3fCN5HaqYAAlt6XyCLK4lhMwlvfUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL3XfaLZSQaFiSEX6ircA8oGBHwXEdM32V5aOmePBicacc%2F6LDTj24H%2FUkzC53JFHBVFmhkSN%2BaAHriBAOYyCCdL9PN30p5WpU%2FeLZJMvNPeHTJmTNmMXr9jw3fpoZ3hskgExmrpXibi3VaU%2F%2FnnZRqVq4Fs5ypa9ffv1fmcYz5HNyp%2FMoPTn6na9daDrFU%2Fi69%2BzVamHMMCjgTibgU9%2BzIMJggTX2ci%2FvJbqz%2BWcbULCYd%2Fjcu0HLnaE%2F3hWud%2BOfOA%2F6bfpZfZKZvJ6h4vWwXgyh8OTPnAqSdFkGj4AvmaV7GvylH8cpKbWo1gPwse6864wWZvg2P2Ty334zfDFRg8f6ILiG%2F1H81SLWVsO%2FcqSBn8W8G0ijotTru15LJEHeaCK86fUnVb7b%2F5Qm77FMTD1oRuA9VgilxNmRkA5p3wMs4s%2BwY5lchuwUU637PuuE8e6qfLwoL9OzBSqzg4rI7NMmQo9ud0VHOk7UJdrmuUE4X5xpAwk9h4YBCWTY0qmwvqFfosa7yhQXATIXtZWlLvCmpqIlvgACw6CzXH0Hm9aJcExf6ObyKVMV9FyH%2FKsYrzE21NyJ%2B4EpMXA5rF6NFqfZ6axlElWum1FAAf%2FCuZqAMcAGwHv%2FlUwUGCLuU7WiCTvfH8LfKA35LbMO2H4NIGOqUBJlP3Lzpme2wwx%2F3td2EY30pSXWJSWw7rMifWrmURAQlReYyeHyKLGuliOePs7JXQm%2F4glaoMZhlVEeKz9S0q3WcfDFwecXZHUKcLF6LHbgTDwRLREhb6vty%2BXRKkBKSI9t2Sttf8zGW8tk0410nzxyDecncOA2IK%2F3fWDG8ZRicHmQz2RX2hBkyteikAxvYQilrG6LtqMEGLPYKtw7CH6DvPAj9u&X-Amz-Signature=da88cf4d05783b97401883e68a77f297b146e4525f3d196b39c6a74fa33db48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

