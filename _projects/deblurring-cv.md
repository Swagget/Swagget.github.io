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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOHAT3N%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T235536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDOhgFr1xVW7kShstvru7%2FOg6p4lhP1uFj%2BuEfod3hCEwIhAItGhStl1jp0vKBmWBpxhsSAyLuOCwXBh63xYqtAolkLKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2FSIpjg%2FvAFhUDgoq3AOdBFLfsMVzK8IPAb7aQ5SSF9RjLgcmdZ5qMkz5vGTT16rzQwmmJmjVJRDLeiLOQ39pAwNP4seEv2M1ak%2FonVhBEmXj4tv33U8dKTg1QFdUqb%2FhEz1WVBPCdQtS7lgxSxi0VmI%2Fep%2BuHDIK1NeZRkXfp2NqNnpRgjB3%2FMVKPy5vnPlCoG8XovCqwKp%2FkVa4F0AxNicVYpeqk3oOo8nYs2ozZbyxR12idspU5b1a0hjTIQoiJtbjNxpJdeKBivGjGcaW7geEXlEtMYljSFVH0h2AuOa5FBXB6FNhD0w8VmcV%2BeP42DvRDWOBEPIvM63GZ2a4i6RO9c2LwJ4qRTY0JRLmzioI4wLuSIlDhpni87tQTZwWS79xM%2B97ZP%2BCFdsbV6cTVyUn%2B2yI%2BkJXYe%2FwcQUCkA%2FUpmq9b9aSbgP%2BL33VJjimcBwxdWSJr1tSFnQQbMOQOHzYr14JOGMyNYHYdf4jtPm0Y81d8hjxayghmHMHMfIBHTOPJGyl1JRUK33%2BTP4U7F44zZDIqlOx41C%2F5sYZRsREyGti8TSvtxF6tH8%2B17vcXkkYRNUFlWkEq5Ko5H%2BDt00LEfXLSthvqx%2BPE4Bfmc%2B6lh%2FNfyRnMt6Id0DH2TptcjG8cjDeiLWNQzCx6ZDSBjqkAUUENNrufvwek2IC8raSD3q1grE47bpn7rjdC4lDAzyx5IxOiFKsNTh7luhO8RPmJ5OtrzYPkdqy2A2htEeagp79uGsHj9RhuvpdWYZWqRWEFKKA%2BIS68lrjIpHcnz15Gm6osoBl4%2BY5M4AkOOITtZ%2FLTl4zqOv3%2BuCftrT8EO%2FhuBCi5HUmVYuBxy9xQyYPQODfCw6FJqN%2BFDbJ7tg7JSp1pJcq&X-Amz-Signature=8b57c38b9a4db897f1afee83691722e5344dd6a6562c3adbf3add31ed351fe1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

