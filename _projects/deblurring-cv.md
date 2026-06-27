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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ7ATLK%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T082242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcNP%2BVRgZfxiE4lQtuv9iXfuo6QKdV1EaPR7NEfFQLhAiEAoraQLBCm6jDVcIbZK3eYOF4fY%2FvqSu%2FdJf8oM4zooVAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHvDUEN%2Bu%2FH8rcm2kircA1kvHhbHTj5z1LbKQEv4Wsf0FopffIpkfoRf%2FDYTtxeKl7yvRmh0FZeavOJj8SNI34k%2BlCNJ2Y39arF8J9zgjKyOGLH7r1RaBt8wOqE08F6V%2F9ykpc8V5F0leJtBd343sGqtWGxp5M4rBOBTfSBjEKaCJOqxDTo%2BB9NGRjG%2BQquIpN%2BEnTYVpejkQ%2BCTo6KBdzjoaIvJSNcmOUsCc2c1xAgxj451Tw%2FE5epkah2Yz4tQC5DugHi%2BT2iRsYtpHX2vz9%2BsJY7Whkqj308BhbXBg%2FNAJMhrxakqdh6AKPlKDl3Sb0SO9M1rlXB9iYSrkRbzqQUw1XH%2BEMzUzyc5FtJpwLM7%2Frn7cA2M5xio%2FB%2B3ry2bXN4CiipPQ4xavTNkP3ru94sc%2Bw0qasNs3iNsapUx%2FGD2ZoswMGX4%2B1%2B6YhTTtgiMubwgPP7HK8kgalQ6tPd8wYGv5IhRP5udZQCNV5Z1y22rgVkO8n5y6VimhNb6gqffeObiG6WiVNlqUFrLfmvBnsu%2F8kZrHcf8aQVOGikX1ETZx67M7y8TpWFfWKmmNOCwofgq00TWglzI%2FFdcRSQlGhUS8dIMcSmOK6eYt5qY1Vq%2BxyS4ZPuaMRDeuMVqtrBuG%2BjbMxc2bFRct35nMKyM%2FtEGOqUB3n%2BhfDw%2FhscEboTTdM7y227WFsLNIFMMaJRRk18mhK%2FCl7XlDzuDB11BjJcNouPxvvQ3b9EySdPq%2FyuV6FFamckAHQu0JbVfsW3mS0nr59uQsC1SBV57poqx91eSCNHUeB8GHFocGeb4sElri5waa2YEY%2FFHkZafc3a4bZHLF9Zk57YTb71gX194UGyuh%2BpHfH%2FZrsknKDUxHXzTWv0dbh1tmNvB&X-Amz-Signature=d191113ea7872885f91d6f74428fcd6b5be7b3320bf23a4b907d145f6456d5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

