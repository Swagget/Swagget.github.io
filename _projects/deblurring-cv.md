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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVTCY6P%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T211137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnFBgFZkePmh3%2Frs7RrVgaTtdv2HrKzl9EXQsfg8C9uAiEA2gUgZpp7ZTVz4bDI4tV2sixuJt1IYZHQLNu4D7H2i0QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVGl0kSoB8166n0SCrcA3nivN9jfj0eu4%2FrnGc0zazClTES4h%2Fla1kwpndBwsfx05aOc6gPS88HLy%2BKfWkG2WEmwDxF10qN12ijKRgS3Foxk%2FlKWd81SemERAcpb1AwDtMtfgKGWNCpmO%2BCeo9s0WlhX%2FYm6MafRoB1q23EYsUN%2BsZEe7knGd6PpVszv8mCboxcDC818bguQhAnwBtcku4rwZxVYz0P17NOHsvXjlvB8E55VmTnhU4TTS9QAAnmYWpMi%2Fw5PkJcZ%2F0pAd5W0rvYUsG9ZnevRIXPyaAgzF84h%2FJWtUtXQtk4IESxfgRycTqZDTGfKTXpb1%2Fz%2FjVpQoY0slY%2FN1zOUGPCHI7nhVVQlHgleEoYIIfOovN7HJsHzOKnrc9UW2MjXzZ29bRUPSk2oJe7PrL85lORH5g2xUggYcx0aJlYS%2Fvt7V1is%2FkEa%2Flah0tV0UVxY7m4be4VQedSwEoV5YvLEMU19ayHCgpbTkLQbiUdbr0OkkiSReKAZ%2FbbhCbpKpoi3BDisffb8TmxvUwuNtKz1XDhSpWJr98%2BSooOa7tM3G8hVp55isKQVcpttcLMMPLV2DHFKsgtUeEI9kjtSMVXPNildvcAGfaNgJSrc7jQShssThS5nw3KohDU1Hps%2BiCBVoMyMOvFotQGOqUBUL19kpI4y1JLCCSj5Lc3YTNky%2FQP7r27m1nwer6orcv4B79arqu%2FzSg%2BiY5GDtAOblxKI9P3uKL22xG%2BWe%2B%2B1d6c372ObsD2OKHzhKwPTt40fq9MBn6ES%2BYSBjHKuhc09OBg64fmw3K2pQZKBJJpBg2%2FxSpX4crIvVhneUmABGagsq8oHpfl5EZB2yY9pPOJeY97PnUJ6s7A4TDNAcq5K6UVDpA6&X-Amz-Signature=2edd2952e0b58a95e0ca1c7f2f933538bf72041619c6403b3fc9ad772b83db79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

