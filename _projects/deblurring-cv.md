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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GZ3RLF%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T121232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGOITNcXfcgIu1ClS3BVeVTX%2BaLa%2FEPaZnvAIoYnuYrIAiEAxicSR1bbq6FtSGG4wYXNFUZrSCT8eEobmggsRZQ2tr4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDP%2F6Gtk5h6StriI%2BiSrcA%2BBQXHHTGrSb8rwvsR6DClt6CF3uSERohp%2Bb1zCeqCwnC34hR5sAPBQ%2FWARDkkUT%2Fg9bVmXDRGEeV%2BkRpDsORqsJQjAhQ0tbTYvqRqJE2hXvBVgm5%2BRh52EDVAE0IfwsuruGfmwYsFwJ7FJOc%2FQA5VtidvBSwr6yLC1%2FpBZB%2FOxx8cKn73GBqR4N0TlrsZA%2BofsLFaxJkvVAn9OqcmIJ1po36K8mmF6aXy973lGg6H6Wn%2BhI8CglmYCO1YkYyNx3kBYrDleFaqrAZkcoZM3i1MAUv7epyFB2kEa1y%2FxALmUSZTGrcv2i0LOdlnlH6M7XOkAUt%2FMS0qyKwm4dIi49xa1VpRv18mfclZwuT8NmL6RYzccX3TBb2KCI9G%2F%2BWAssj8GPYyMJH9qM1wHzc9g4A6eNS%2BKQaLP0BFAomgeUx6vLUhItZrJTqdaStH5qg8Xf6wIoCfyMXdX2I8V1UR4YItOZweaCTDccJA87X63xnIEakBtNcAfBRvMxua39uJPUVmU2Y1GZ0UpgU5Vlq0K%2B0W9CSqrAQAuzgUSjIp60Ib74oQByfMiRXBOEg6Koq5pS0uCE5pcO0K2aw5CHv9RqR5FmmNziM9Dz%2Bo9Q0gh4rkXtG3yIZfIO%2Fz78jNYHMLqagdQGOqUBxLYBVd94bpPL1CWTJT6TrPoprjXIpCkn6M6Q5uxp3%2B8qFT8IAMKLOmtsTnzoZyz5nD%2Bjlj%2BUVpQIpaFMPyXJDWk%2Ftgfroj0S%2BKo%2BnOT9BQLWCGYT9QyvdMz%2Fz4TC%2Bna6kTXfO4dC88XPjRW8LB5TzeJqwsbUhd%2BRAETxn%2BkM2RnAkmUEt9kozBjdm9ElA7MSsHQ96Mm1BIYT2Ss9Nvgsd4ZlttJu&X-Amz-Signature=53a8e87b2a934fd8ce9b58576b97de398a42751a83a97c934713c990abfb8ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

