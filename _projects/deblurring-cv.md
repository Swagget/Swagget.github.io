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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSAVJGC%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T111454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDwZbBoR2ggi%2FTHpoB5ysjTmDG3yQML9UszgAr5uw8eeAiEA0lTtIXpkDsC0EAosA%2BwU1G1ckMafQuXDKviHZLkTaJIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDchS6EdkkTq6fH%2BQSrcAzbZ%2BF60dIGij101mdQIEYIF%2BAlKtwcYTXlBd9fNqvA2s0xHxLM5W%2BW28n4UcD4%2FttZoFi7FtYLlOecc75GY8%2FlRyKFBTIHmJNGk6uarJ8RqBmnhc6fGNFCLzil2MlBa0LbNDHfu3YqIlTVOSoGRg2Z3m7gzl%2B2TqbIC20hI7i6QC8pLHFXFGyCWMKGLQTBGCGn0jKhE0O%2FEn5FWOdusd48RBAYXMQT9npJdTONs1wEq9YjQIk%2BB3nSQN2wBwnhcc05RipMIjcH74ueOAnF6q1cTnC6vnp50A3DVnOoZwRwWdl7Z65f4juqVmdkk9tIYOy79plVj8s4BHp28zoLmWvVnaeDuzY1OXh7T9SDPWLLVBdB7tfwidnesdc%2BKxYATN5MuJIYD81uY5Fgj3F75JNOePKYp%2FNph12Qi0t6waDaOweL81lRymgU%2FPtl5Pvg7es4MK5IkIzWd%2FD%2BNzqPeFt1RqD2FcNrNDYsyvn7nC1WtYnwGq5rH4OLHYyzuy5jL1lAMuCafTMIK9PrUEE%2BuLUE408f83IuVzAe8zWNtqKJyt04NKTLPveM9SDY8%2FQ18%2FWUWZEmHAH7uZ6hZaYzitOITWZGeZAMWYnNptmvlM%2Bisw5mA21tYtM%2ByNs1HMIXL19IGOqUBlXEJe0TDHSf3HY8obaOI4QGZib63VPWK5TCDstM%2F%2BPZlVIc2cbgTsESDXhYETebcYv7BhK%2BMHeVM%2Fa6cXj3e3zpVuW%2BRaF%2FlBFNazcMWbOplSeMom2VoGC4Zuji12UA%2BcKrkPCa%2BJ6RwC8j1cISwIeo21yvkmewls2c3550v7sUJq6hPGr7j02%2FBe47oU1C4hT4TL0ygGnYD%2FoqYh9Lh3fzBn8n9&X-Amz-Signature=8eb5deefa9edd1161ba80e1eaa172415e166fd8f6ea86780d012f16d8f8284ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

