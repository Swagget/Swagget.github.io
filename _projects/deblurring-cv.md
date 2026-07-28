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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQPANPB%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T011741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3vhB97FUTtgJX1zsKqGJuybxBzsTMW6Gn4RT7OEaqAIgc4l4KYMr6jRI7D8mEVh8qCjkdWMtH%2Bs4vE4uzfBlN2gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLs9cljzQLgMlYOURyrcAwh3CU31ac5JbqGjkYr3EcNY0GB%2F9bPx1Tu%2FvAJBL22XA2B0eRqJsen%2FMwVf8b9DLCsx5HPBu95259kJeTVP5QJ%2FMd47OWAK2kAUf2FNPNb356%2B2DYxk32dd%2Ba4wdatTZ9sxGjyRl38B4euMlYoEiQrec2Ja07%2BtAj%2BA6cgw8fpSeM3bP8KnQhJ9z551b2iwJE8%2BhGxClFGfhBASVASWg4iUawrpJouxl7ldL%2Fzp2gNk94nzoRNKDZAYgM1%2Bs78X3REGfZnY67epeUIihVY4RvUeoUOugO6qMlbmyaZxjj6eYDTkqn9Drey5DpSUd3kXNQmFbRhGSwaRlBs9X5Xd%2FSkrCozh7m1wVWmn%2FWFyITeeIPBw7Dt%2BFuF3Jm8KkRz2YBK1NgV2zRcbz2Z1Pl9jjGUaJwEp4BBGE3OKWR2r%2Bk3lzCfa3aYLd%2Fvp%2BUad8Jpc%2FbH01G0zw0gA%2FgTlGE2gQITlcePVRGx5g%2FkWdiIu%2Bmm7%2BjwBwUt4ZJYkXP9bbtd%2F8RleBI%2BPbZJcJu3xYZlQS1m05w9%2BpNe82v%2BSXtKQ1WrTMm%2F0g1BZOBCq3KcI41Sn%2FEtYrfcBk9iW5lxi7b4NLnBhbFDf9zvOjiDIdiDJgA9H2kiJ2IFRHsyqUdx4MLLxn9MGOqUBCynv7qP6MaFWEgDzMrBpy3poSvvyz%2BXJVyJjAN0AgEV18BeUYk3M1vRWoZVYz74smtSRn%2B7cn34hlLsXjoHTBVqH1Abt0gku%2FpmVOlZP8esMOAik4sXD7INk7RonLPzYVxB39CeW%2FAGxvtVdBhjtsRF8ZAHza%2BV9atfK6hptordMG5iUKxFU25pqBjwTMtR%2FrbGVcwyoC4aayV1cBeTNJyy76i7m&X-Amz-Signature=c3a743088cc97ecc12ea111aebe4884be4ce4ae829b933d352a2d365407014fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

