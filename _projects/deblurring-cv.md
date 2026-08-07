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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5Y7JJZ%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T123450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2FJQCBExZ2sArzbz7CuLMrP%2BMjQxIWTIU2BZ32NK4dAIgAtRjTkZ1d2a98ywbImAKO9te6H8kaIMy%2FdwlHgovuTgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDK%2BXsOkJyUHL1TPVLircA8uWpZFyXXJpfOtcjx6T%2BGxhhIILnbivxbeR6w%2BfV9O1jQKbEBduWCjeKR38kWO926Gr8NzE2vlGJNQh%2F01Rj9zRquKwi6CT7MkzfhLwVYDzSzeJl%2BQET8%2FfU5stXKlukB43WHkPGlF6x3oXLh2jxGCKSlpCo8Pw0Z1GWTK%2B6%2FV3Mo7mEcKgKkaBnkJ0r3eUI%2FrWvYQOksUMFr99175S03mJPQG02dMxzcxWja16RgKx50yS7%2BErxGqkSeObfoWgAws1E8Jd%2BVqcz8ImCVliOPQLKkZChfNgiAx02nuCilXXUN9Mmzhd6nmDnBo31MVpDi8MD4CNgrPQXze31cMSRjqZctyZ4i%2B8maYjxG1RyeeRulsKWL4J4zhzR4O%2FzDQP9oG6YmKkZWxYvptb4re7iWRUKYZjzs0tyo3mrSTP2Cmzbf6GkEFQhlxGCPFl1KHAy%2Fwl%2FK7sn3aqo0wSHpN20iQfMvTNi21q7U3pPnIP9DPIfkbOSLbyrClGVnp1rb%2FvfHzvs7dSTeQYm7z69Gl%2F4cJhqVi30%2BPoR2VyfYrl20kVZaGqRkAM04m8XA%2FYRz%2F8Is3hlfzZDkhLIvV4Eap7D%2Bnb2C7JqM7WVqTQ0O9dwPhUi0bkZgjW8VCy1umyMLP91tMGOqUBBMzDcumATOjgsvDzdyCItVdOhSUPkuqiVw0n18u6akSTCU%2BX6nw7XBFSCGQ5iGDuH%2FagbtotFhXG1TIk0Wc57x0bTw70GJRQVv7MLWmFKtznOurP2S0n3Kh7WWWOxCTRspt86oFxfzPkdbtmNyO00p9NvWX8cN2oqNpnnGHw%2BiUUSZvlhAwGB4JdPvbdBWfFYZWm77BXBmV%2BKaVexr81wj72L4Vx&X-Amz-Signature=6a0913152bf812843d8315f5c5d42bfa5ea85850e66af4c84483999b3b591309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

