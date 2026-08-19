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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665HGCT4C%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T151804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC94y57eM2OTW1tpI4k7Gc4Djxa9PgPFH5lM3oi%2FhRX%2FwIgIUUGhVWEWhWvrwbeJSKWQuebWkKja1hicBdPHtSPCpkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDD4aX%2FQq%2BfHJPOxRNCrcA5NbgzsKqkhCtxW5n8C2kUBAmVd4%2FktgVOE4qZ5K%2F5bxJgFZdjZL9021RkEFv59RVjp2Wifnqeefs0EAZ8MpE%2BrL%2FTVrKhLw9w4OlhQ4OImzpHwkm4gUyrqdEpmKRSzyjoI5Y65qp415Z0AKyODfTx%2BPW6PMjuUyDPatWlmfNov2G1RTg2EfN42VkoYmsOyMc%2FeoibfrVZJkCCROF%2Fu5qRdk8vA1Nek7bsLz6XhRq%2FVyXbv748yTfJ1f7WEpnz4r3JIxVEOFbaO2VQO56kYgFQV0hVWJQBzR1X4V%2BZLzJaORdCFuvH6CTHHm0XsB2Xw%2BRyv%2FxKtTZH3KyEsV4CTvz%2Fsq2aa6rmVTJ32N%2FpU1y61ZNAsap3447p3fEXjzJRuCFXmZZGOhT2e%2FFpOunAaYlZW414oVHdJ7o%2FDF61xcGbzMeTj1hjvXl9QYJXDBmik2nq%2FcPez6m3KjZJBQWoIDrfFrylrrO%2BcTYe7N9JyWIS8qfF3LIULZJTH%2FmFdTICPvVyi2e4NQT0KDhkHhFZXZXZZ42w9CrlHpSBlUtxBeWkXFQMjt5jdf6%2BjAf1c5hPiR59hc236aKxhU7%2BPDDI8c762o5PefFIZwAUPsSjMhFeJbOJoNsdXmWfSLfqADMOfdltQGOqUBPiIkqV21V1XMCx0peH40zyTI%2BSKeGhJ7SmQZOmMA%2BJahaTdqeor6CA2iWb%2BGBCmYjk2VNwSXpGjPDXpIU6wZJFgcLaecbKk%2B%2FzFLjVaASqiJGTibbxAEAsMzxk0QEfd1BquhRdGkzPkoDLf6fFoq9Z7%2BqV5yYf0fLIOfp%2BA8bdNdMZuRW42usrO6UgklvVb88Br94sK9HRashqqLI%2BerWMAc%2FORT&X-Amz-Signature=af8f389374cf123b82acf9c04a6ecf754bc3d5bbdc15b01c3f50a42f199f3101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

