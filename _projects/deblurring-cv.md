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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPHV55GO%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T203044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLNhHISrIRoxdoPIV%2FNQD7L55ZvnvoWNf2cbzphnCsgIhAPZ8tgmImtdl5VLmtfkqFYL0rr3zCgu4GY8w%2FXCA1ns6KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FcPm9X2yqNIXL0FEq3ANKkotTeuvK14mLVU8sIuWSpn9gq%2Bv9A9VdZxLAvMrc0%2F%2Fw7RMdQMXxo9%2B5H598B0bVkS1qpMYGnYllkTuijrBuXc0mXf2vWhbsribqGUBpeuCmZEdrYk5GKyC6AuKqdpPBvX1lpaPvwUYHEatbnmPvm07ghVbzfaoQ1ohuI%2BJgGG2sT5iISs7nzQgBmFQfeaXy665tH45FzJDyDBbbbivJg6g2H8UETv1hYSKsAkHvXIcxbl99e8kEKbw073MfrEpA4CAjJZF6nj%2BQoDHAFIgt%2BUbzP8yuH9am7O6VAdw3ouRExXdWJ3rbPhdQU7Og3LAQHlyBgMrTswnQxrIndkdwIWzaxgix7br4%2FGQzi%2FMYyHEhD2A08yqh89bFPNbpgzb3gsK8%2BgzuBm7Js0TQGE%2FkI3sUPTFITtZ%2Ba2arbfp1An%2BV9PLEQvsx%2BPvI28ZAM2e0IcsizOGct%2BxGNl3vLiT1WGHKGYbtpneAa%2FootfKgVYwsR2f2xaaJgMuZH3f7tC3zVgwFTWd19Yh15LW2BNGbVgFXYGAS%2BScRvdkYsKzf2%2FNWPI97zhNsc1RIrqZ9WWMA3vCIUHSYCgPQygr37wtfHwtRtNdYKh0F0vz2ljkX5%2BEppTb4DIl8dlOrGjDX1O3TBjqkAdcJd5kTt%2B1BVRHtHXYfza7Jgqj0x3jo%2FYLKVNIO2Ui7JXwfJKqFcK2QIcCV%2FTjzUZXqls3DiRt2%2FbASdD6Q3H0p%2Fd%2Bxeg9ieOZEig%2BdpY9bZE7MjrCAhlUVSqVXlmMnwBrwy%2BI56gMXzi4L8LFIM2Xp%2BnXAm%2BI3b7e1u4wH6liXXYDvB7MtmYz%2BHGSMOo2HUPom%2BNLy8UijS18FEromyL9Vx5up&X-Amz-Signature=8f4c770315970f98ca5826691bb09f3914602a3baf9a660a4ec4401d45619cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

