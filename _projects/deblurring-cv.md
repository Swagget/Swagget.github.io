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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46WEVR3%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T160715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIF8pkWQYBwlywDssd9F1Xlmnc%2BkQJPpNkMB17J7lxtrwAiEAnafv7tCpwLWPzifnrOUU763k6G9SyqvEPCE7GCuydR8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDL9cBI6gk4v2xg3ZVircA%2Fpx%2FD9f%2Fmy0fsKzRr6IMZGWpu3GSBdBP6olBXT%2FepkBsHRuDXAKUu8xSjRCkt3ztpwPO2Hw5TuiXpgqWgga6StJcNu%2FvzeWdZAV9r3tl1BBa0Exn6uOSf%2FF%2Fy2kHWwSld8%2Br%2FgWMsvxcOcpgn7%2B6As%2B%2BtneGsKSMLxpdwWtMWIXJaphPzArQN5iDXMiSbLipO8uHSUtt5mjVQbBGOUXqajS%2FW0UXXOVXdkzbtckz6D9qh3CMJ1XYwyDU8PgHlqOAcrRlClL%2FLTxE9p%2FmZuP2m3ltG6MWzvJr8PrbWt8Vb45iNDC6Zpz1%2FJaO2q6%2FJ02i4%2BvgeCL2apT9VqU9qlF0thb8fOVMxBrUVQJThGzJI6TN2gxB4T7FcbFV3SVmsmbjIvrBkOVvgU4SLTpWViOMvMzgiwW97%2BaxQntUvf%2B4kRil8MQk4ylspYy4V%2B60bAoZNm5LmFoJz4lB%2FFoFlDQZhqYj8HBBm78llXuzoKQrrWhq8iEvH%2B0C8CS46t8YQty3%2BPrSTe%2FrAZvr83%2BMBriaVWx2pSLowrFi1xXnEreliwf77lySlkq6o%2BqO4N2FvkaTmySpAfBE3C5tFrnBIBPNQla5H9nV8B1UK9gvWU8CCRtL03o2%2FdNT0e5u8sBMPzhu9QGOqUBCWNXEEVJgJJvBPmqfBAgTQySp72S1YZTCCx9rnkbqFur8p6MoAvNY4aVYwGhK5XgCL%2FAh5R08SsKEyKWnkIOCgQlxA3ChLhep%2FGVcwKT0BuztWxTzywIOsu86WnDpqrKh7ofyGN32lt4t3aQ1xIX%2BKIkrMPYgtvPv0DF2fexR0IHE6n%2F0Stv4YtEPNIe7ND3npZGP1GNZMylkhewuzM9g37iGwr8&X-Amz-Signature=c41b8a6d941b0d44c24ca25f956d3adedcd0bc70d89d27e82157099b03fb11af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

