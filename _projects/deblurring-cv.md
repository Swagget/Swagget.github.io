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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIN6LIB7%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T185605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzGo%2BZmkOADODVi9FJUSd1Qxpvi1rRc06Xzc%2Fx%2F3XTAgIgc9CdUnlMalw%2BNaqznQIFilycVqqe4p%2Bz5wLqgoUMk4gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMyU6smGKRGJBNfNSrcA%2BisIqpGhdhQfdcq7BjMBU%2BtX9lKPLJ1IPJstfRcGX0xxD3822JXrdbcjsbqBbekqVSNzgeA%2BIjImL%2FY4noz0GhecycLqlSbdlLBh5%2B7754JFRpejREUEx%2BpsxdyKoXI0dfYb2rTHAuKQRtOcCMSJEvpybxkx72SmoIiXBwOqFeEQ%2BEmptBufdsTTVeTipqxAEkuGwG4Izj0dSizYMTimOiCGz0XKXpxsiRKODahSS1Y1Q2K0vJqG0rq%2BsNFooi5owv33Kb3HvSwK%2FU0dogMQpKYoxxYQD9RJOVCF11FZWV1PXSA7qVFSiV6Z5G%2BKgCypKlxLo2DKkhZMGk3MEmOf81aiPqK5kNSJzjRVbOrJ%2FAwm82onNxwaKXsjOUSE%2F%2BfhwuPw4qxhkXF8U9Rjo650YYD%2FTfj4nURmD7tL6aEPQAm%2FdJe5afGH8SgYGcnVAv1PyDcNZjk%2FKq3NR5Aq7yrVBOVBzJj1w%2Bn68fNtg6yYlde0aNDtE7r6BqDFoIR%2BEeGlh5DIk%2F7hUY1%2By%2F8jrHIT7ZehTtYjYwHxvZmPvAEwm%2FEMQCjvabhGESrn3igrqT1CT%2BkHEv22dA2wZNji4z%2FPqkYnvss%2BEY4xuP3QUuZWQZ4foj549jiu0pYht0aMOLmitIGOqUB%2BtKEW4Y%2Bw7%2BV3NqxU5F8xqZH1oOknAlNGR4MaiflNaBTvuu9l%2FSJUoWFdIvtYQRdxtPqT%2FL6QrfYKTWjYakSnlJoWhr0lJhV0vdYvhWQa27KbUpw7r%2Bw1LPaBYpX3a9nLijK0l97TrHrGvhI%2BBchW86piElR4ywrLS08EFslWbUbvUxvjnyrSk8zisdYnb42XCtABaD5NbDLsUJ7cvm1fx9Ngl4o&X-Amz-Signature=76a4f213e3ad3d384c3ab772d74405ffed0eb67efa5fbcb7dedf5bab277f6b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

