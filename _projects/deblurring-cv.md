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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DGBFQ25%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T151835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACdlbQctw9My5Bwxe9kRJT929yi1UAn5ZbODLQwc0iUAiB%2BH6fSLIdXYwsjm%2F3joO54pml3%2BxpE5Jbk9jozt6UppyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFH%2FQ5%2BOFDibByXlfKtwDS%2FaP790Q8EZTbu63ylkRb159Ybw64ThBrjFqwDAc5h2juTk%2FpUgzyfosWO2gEmKumdy5j56cio7yWz9AyMpv5VOyBW6p%2BFVSCpmU2cAc1M9VLTM0tlN%2FUy9zSiJf9RlExXsoRqStUXwKaPHVPbvp3CKqWMdFmsSp0G1fhYT95R1WkCNKvAvOSj9%2B%2BA3aZ3SlYykfGTvw1dN2GSKPdKuZQWQS3%2BXB7OXT2AGyyYcPelaMTDpHBag4q0ZW%2BOPR%2FysY55JguU9DMzjHD7VhBLY1WEtX71WHaeFtLVeCsi13UWlG94dHcXEuZ4HCdDJZ6BvO7L3T2zjBbfUMWay2mDHWmf4asM0sFdMs9sBiLl5Ly7tvY%2BxHIbo%2FbxmIYcBmD1YKmDaAJwwfzMZA0asiwASThqYoowbYoupCx3uv7Sz3B6pIGcA8C%2F%2Bm%2BkexmjW%2F0T%2BpDPcUCsDOvu3X8e8jy0%2F3fRm1SmWRBNJJJTcp5teSVso7IceZ3bCw5oT4uaVcaO7QR61TOKvLPuUDWTH7xOdZieAP9fIlMIBWHRu3X0%2F%2FWBn61eQZZVr2xo1WiWG4D4ZBl3lcLlC%2F%2BqMFoQMi9khVjw0dhccWSOw84BJNzOevWv%2Fbjl6YFA5%2FaKialvwwpaTh0wY6pgF5%2BFY2aNf8EpqA41R4dZ4%2FMy8S4U5ELYSyjxNbK2%2FNVqMOKEKWXH5%2F6XHEXwvT%2FiurtBYH%2FI4IdZ%2F4sd%2BBHp2NSF4V5NMGNCiwDB2vxF3Jc07JTZTReXJ9UpVkX1nyagEh1GTvaH3B71i3XTi8BUrkDbNa3PxBwJyaw8BkWDoztAXb6YS5WyDpT0rKoHTGIMjyFi9bYYU28buTcuQocA%2F9VCUTcbla&X-Amz-Signature=7c81f15926c32c7215773f05df17d4b81eac5976a77f702488dcb74fa844cd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

