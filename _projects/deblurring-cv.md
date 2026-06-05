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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEVR4LGN%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T225445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3oWe3SBUkKF1%2FCRwR5hc8yjTr06CvLwU8jyehWGM9jAiEAjVw9U2%2BarzG%2BHrgpljal9CLLbj6zG8x75dGnQHf39osq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJrk%2B%2BK0TBNWw%2BUO9CrcA1rEulkJHrrueNL2VjUoJmccnaf2icVqy8n38%2BLYntvuC9TKzRiSTvr72Jwm3ystem5zmjEcTf8RSeFFordAudoTi7VaoDj9vpWhc3bZBe6kzIfirxJTMezTusNsA8TyvPaRAeGnUM1A2Hza1T0IjM9MpTHvfROSd3IfsQty96M3uZW3b%2FNaQ8%2BBp2NLiGVIhoIKmP0K%2BVK9PZdtthIuLs%2FSQ0NYYdrAyOyDN5BQF9XpAjT6AIUcJb0Skt0aW4cTUdvaM2Nnv5C4JtEa5Jj1aQvZ%2BKlSaROwgCD266QvR4pqOJtyI28VANGmphwf9bFLTIDk%2FgfZt7WVjhQmBGQWJnmu3QliP2DX9psRcnBue98toet0V3vtwDErYEdtVMSxDZ9FCl7o4anlwd2M%2FCkZPgPiT44x1OCQC2P2aU2g38fqa1t9qR5kOltSsK3nlffB31UAAR6P5hvI5JWojPtP%2BIjC2CXLwA2sfhzBbedFTKDfThByMBTiIY1uTL0NBnjvViz9cMczv%2BxndzMmIUQCDx5BUg2wd7%2FKAWWjjDRpBusMnSkJjqwwvjKEmpWK8mfxELclXAeUD54YJan7hYLCGdwnJydmYjgokd66s9yAvOl628iRj6cjVyPD3qKDMLuejdEGOqUBHPV%2BKORCcir0A7BF1Q%2BDpkRyARpZTCq1d9IPpKaNDCd%2FrbZnghG5%2Fmj1n5nCBa%2FDt0OZMNhq8qIFknw3UhGwMPW2rHKXH6ons5el7kqSXgHeOvXDf47NhGP5v%2BL%2B8iOaLeCPbGpQ72gavxj6Q2NWiCZ41My%2B9OnvM1n6WuaBdIcCdn5awQ2kg8kCYzLULoiCjHbBAUAYDEoTspFN%2F9BrZ9SyIFPy&X-Amz-Signature=1261a9c5c161425f949acdd7aca2002b474267f7cbc7ce49e5857358b02b9abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

