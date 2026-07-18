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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRCEX35%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T195708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu6W2qzHM8ortBc10OOSn4naNeAewcvyicZuA7%2BRZ4tAiEA6Nl%2FnI88UqhXbyEzZ%2BkGEKWkg9ChQXiND7VnOnwXpH0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEfRjn1Pb3%2Bsp3KZNyrcA4eF2bBwhgVjueY9WI3VpXqhRNwU6w8f2%2FNhR9XrLSZ2ky2ma3INQ3r4j%2BLWx0pImga3GNWHkV3Y9G9huN4Fj%2Byd81Y6zMSrXSvJgvmj65M1iavluAWnyOoNmLvf2r32SLBiKpL18ANd2zcttiXISiNtWwQ2JMHEqbOIsLhsIVSiMHztvsNxSpHjKSXb5%2FUBxxojgRpPKGdKPYKBlwNsDgh3S1kP5%2B2nIqsDD3hjjjU2xN1tPPlxSSk0r9WmwigFR%2B6hdGIJvZCCctqLG7HH6wVPe5%2BuCl723%2Btdi9agqjmlmnKdxidO9Hv6xIkNvjj%2BwVRnhw3Tz5FNBv0kJkJTGpC9LexLEuAo%2Bqk9lGM%2B6UT4TWmNQKd8ups1tMaJCGBsADPQ3J6fw1Anooh%2FfZHQi0lS6QP%2FynUgRYVImOldVfMlEAI8ixAyBjzgBwJG2pDd07LSje%2FZzufemRPYqF9CUJh4OurnstRtrb2LzAZ2nqjU84K2kuC8JlJloza2NT8xicGtnW4HTJ2ZMhUtMVz3B%2BgYhmpBv7soN7A8n22zYWNWfWA46ZlXLVZ0j8%2B6ZAYLFcJgoga%2BLnyKDpgH8MyZSpL%2Byo16EOtvO48Zam3GP2iDKD%2BeCG5nLjqVvoZbMLeR79IGOqUBbm7ImjrLshxJRohz9VsghE4pV13XOQ8v8iEjP7yJiHQ55z9tPlHFpOCYNTMsrwr82PqY0Q141S8dowCOzVzwIT2%2BtfN%2B42TnmnDPWlkrlqlmZP4J5GU8%2BhKYqCwsznqerAEOFLMgvbDBou4ANBq1gLRx2ZQkqRSp3bgDPuPL6JIb8nNqYyDFkF3wQeTBucUpxAsS7lYJED0sUuC0rFZbPNJGDCJB&X-Amz-Signature=4095500286444dd113b8e02778143e5b76168253fdaac45f97c404f11151ad55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

