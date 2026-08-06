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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB5CZRD%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T124802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFCKayu8D7lsiDALKtCSRJb5g9ijrHos%2BnRQiaYHsMbJAiApH9MrZdiMYMktAHelkroumMArHTmusTp8eiQ%2B75cj1yr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2rIdKjPkto2MM8ZcKtwDLg2Zi8QVSFkxuMX3oHUtHgQcLqa1lPkG7DsvL2e9TuEdEHEwSEkVFzH8q%2FCPMuWIJZ1HwL5zkNkoX3VCWdrleDyZr3lsWO%2BBDlkWyrh1suqQEfuVDuaG36tGB56x%2Fuh%2BapAU4JxSLjhE3Ujz0zN%2FLjlHV5rixUKRBerojlZEHQDCYgtSF1JRkaitgFhYRlJmHBhpHcHvh1eENIS2tG4Y%2BDsTOIC3poZl8Djo1tmj%2B89f4KXk9eLPTct29FQqGFJM7tEtBUBhL7LVW%2B73%2F36T5Y9PBWIJv3bvF2OAgv%2By1iGyA%2BB%2FPDxD9J6ZeRH8VHFQsZS3KDrtzshC2LROqVyuYJHCkx8XewNTbW7pxPjGn1DLqX2bhYHm1T5H%2BtVi43Gx6Ybn7%2B2GhV5Zh59%2FJrWDCah5S7lSkO8t77UlmNvNgMBYoF9EZGLnE7TBK5xaf8Km31ktwZADbezo2ulmehLnNWXCF7z2cG49a81UGL4SNGkRJj8uYLP9pRXFm3xGELlNh%2BF94fUsAecfWLzXInJYP3SW5eMvnH8eZPdKKaOzg5RGvsHaOLjwqZ5E2Zd32gmunSrv%2BY3PAS1cfE2YjS7XAchha4LTvQ2n4%2B8ti4e%2Bzi19PdSndBrbvEs5d9Mwx%2BnR0wY6pgHa7ZFSmhC3vMpvzlQtlavgFZNsr6j1VOKckb8kTZSNa0bN01J5shrLM1lrsIySREhwLWohrB160huZpWg%2Bc0e6IhqmTPbUPfzkMTQHemFLo2cD8K%2BPZqqwMULIrCe5JtpCsnIq%2Fnf%2FbY1H4HtxJ0coVLL%2F66XHJ874%2BYrh6a%2FMwvRl9xLr9%2BI2t91drmubf8nlxA%2F2N%2FhS%2Fa1Kh6O0dwl%2FqxYAkGSu&X-Amz-Signature=954198445fe7857eb551ab47777817a76f5339b731ed4016ff5c658d90dc32b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

