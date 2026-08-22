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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFIORZC%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBqDDtR1%2B3j%2FcuFW%2Fp%2FB68IatNgRBlJ%2Fj4KaI%2BXl56bAiEA8h5kVJ1O4QeiYlJ57hNmO3qya4aoeW59iNIOlr6eFiEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHglJGGVHm3iE%2Ft74yrcA5jtOi5xWX%2BEUUoxIfB1V6QrlRCcRRtqXB4%2F8QCAezGunFR%2B7u%2F%2B%2BhxKCAqSYzfiCVijXAHsTp0uehnkmhGF5nOZAuYCUOmf8pzntKkoh0cftXwd40xbIh8MAd7OPitxo3XYBbvzYwIZ%2FAHKPQu%2FXIDDnVgcYfo0zx2BOTPhWk7GcYWcOWwrEktwxPsn8%2F%2Fi1ouP9GBaOknzQxz5ns%2FZBcabMJfrGh1B6eaY8aE7ifwzbeLoyJ%2BGTAf%2Fw8j5inh%2BJjDFSENsfSGHBiYi4I%2FUwdA4A5XVGx3XZFy8puPTXFtT%2BBLOAb1RRPC2E68WnbIGdPXLoAbBzoVYUFgdIzUSCEz%2FaBl%2BVtpCF3R19GzH2O8aaM8GSBsZOG8XKU0eiYpKCVTsVxrkBd%2Be3uQ7vTWfquzlkFhEdt1Qdrd9KkWHMwnL%2ByJ9EbYQaDNhXmjEydN0L6Nv%2BeQAOyyukEL2b6Ds4zXI0lCMNQfYMdler37Z0nSFP85dxkStrzQ1U1GVRw9Q9%2F901oG9Mja%2Fkh0gRoDNmT%2FmdcLH7Ct5DvdMDQwWN0LrKWO465kK2Ae3X8GrEsQEpdkGXMirY3hFpBtUZpf9M5wT4HCQP7xqMZa4TagjabwBY8XsImLsxZmOOymSMP3yptQGOqUBYHCrnHcctd9hgWNwosipYRXM0V8Ea8V5%2FfBbTynkG4iy%2B09uUxWcOC9WyeagEhYC2UGYgZRa9Uj9Tfn7uqdgrx7IAthtk4lvnMBD%2FCGo0%2FB%2F0FHZXMGpEJhkVc2%2B9i8QZ%2F6Ls7PRZni3xrsNStjEYJeadfYKySGVH9sErO86VJU%2FsTP55kxocfx33a4%2Fu0H4nJGULsn%2F0zoYawYyMCfvdWhfKyi0&X-Amz-Signature=c93c4645f5d86bf0dd897a9ba5d48e44e2ae254ee0b2dfc39fe9ee37566c0749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

