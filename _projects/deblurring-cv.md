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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWMTLFQ%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T234521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDHqbn6iPSCYRbWQFw6jekaGDb3h1tSdBTuO8bRmEyS0gIhAISqNDRewQg9jEUx1ataae1In50Xriq3%2Bx%2B1a2Rac6jhKv8DCCYQABoMNjM3NDIzMTgzODA1IgwBOTm8NgniHXi%2BCk0q3AP2f0KCacdsZVrtf%2FU0mOvcamoPUfRSe%2BqcvDKFF0GMSJ1NGDlg2VimapzIZJORu8vKQcRu52Z2ct%2BPDZALW%2FrXrZI2Y0q4rqSpYV%2FLZWD9M5DWdvj%2F9wKawkuEbrUM8aGpEKc9sGo574BddlDvoIHhx2AwqAYiLYUBeqzRhy5fXqwKTtIa2GSLbryPKeLmx0xkJ0uCSY7bwKIMniXNB%2By%2F17u4xjyaATonW1NmIbyG33xYbYos8ouLADWwFxX%2FVj5mJR8BGEnwt%2Bo2P2rXKq0QY6Xejys6RPWBp1j2sAPKhmJkZNb%2B0Y7G2s4TEbCJb2vPKn2NevqBuTEUzFlxLsfhd3eC25jQTp7W%2BU18VL5GXEQIfARoXStB1QmPuyfh4hhiwhfT%2Fl2Tf%2Fvq4ydQH3sS3Z1o59N6%2BQ2hijheN4bIxjIA0eBw6kkDKWCI9KR4qWlGya2LgjAlMJ%2BaEnwzpa1p3bkf2qLoYs0DiQpGCPjgHghpUTBew01EUWkGCSlpfuZIjh5yNmy5sYFkiLYVkaXBQzQZt%2Fsvxybat%2FdWkMWKmoQAv3xXVH9%2B8aS02DgJfR6IqQJwDcXPnaIIJPL95FkICandxSKI1h%2BXzrbA9ahOT9dTphLMdiMbrrBDMDDi7uvRBjqkAQLjq7WHeovHgl9UbiNCy9WNOoPbgMuessiBhiO8ydv7O1fXAzfrjnJ5om7cMej3%2FLj6LSYGkfniQClg3IS1vlz8ZoVSPArDztXA37E2vE1VaHRjdwi5dmqJZl1LHsOdVWSDbd5m7kOsXYsnwo6Q9dMVWonvmxE1QhagAlRjegrAtGpR%2FGPL63UAXC89Lv%2FpixmdYJX4Mi0TuAu3pXxEYg8EFIOl&X-Amz-Signature=52726bbccd925b6042f7691c5a8155b4cf4d1271fccc840e5a348daaa14325ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

