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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I32ZIQ2%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T015644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHATzfnwNca2KKmIyLIrt3DCPmT0PInsB96YVmfsIEl2AiEA5%2F%2BCp41BJGnAb%2FSlQ7crd4w8ufJVXRRGUxenvuE9L%2Fcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG9fFLJs8OKPhgsXlCrcA%2Ff%2B%2Fj0jWBpDS5%2BaWQEfoR0EfDvoVT%2B5IoSrOT362f87L0w04bUQHuEhRvlk4%2BFkRoH0ZX6aypTTGPUDPsS8FArEJgMQzkjjjNfUaHochLzkICRPmG%2BdIEKSnc%2BM1G%2F6UeHGN9PRjAGJOgK7keb9uWcsQLfT4VG5ERovvDsaBxR4Jbv737w2s0%2BoZBR9mdJfu%2Be4ln3eehcEBrh7PXCi70AIf5yM%2BmlnAzH%2B2Aq3auSmlHiSdICxXCW8%2BJXe%2FeV0Mjb5cmEQ8M0PriM2VJ5Mb7LHk%2FUjiUeessu%2FLIdJIuJ7wRBN0mv2FbbSGN0Ats6cVKpe3LD65YZwD%2BrkN%2B7cjDVczH3zu1GJfR9bUpKQTSRwxNlLVtrvjoyjXJaxVV4XBpn0yeC%2Fj5HNO4vYiM5JeDeKbrXgw8jg8HncX%2BXNISeNUWcyLu9KDSn5LZPbRtWA2FQLk370%2FosxfBnkonYc2AOykPPSlbyeb4Z4sPA1URccj8yeXjSt6%2B9vFer7E9%2BQtVlhvzAdJi%2F5w1dya1ZuXKr1%2Fq95JSSRGowAi6vOOy%2FgusoAWbPJU5T5E7ltuvKmE%2BA8rtE1kuZn3XlCCOPnGD8bbmzUL71TUJV%2FeBuxEToV2B2Y0rOgjhy2d9skMJbV7NEGOqUBl8TdvsjB4ILdP%2B3QY24UpcOcNmY0UH1vDFpHe2w%2F5vbNk3a5YKqQf3HjqMTbPQMqaYXPuFu2Lzo6%2BlrpuTwG8pCXNvSX%2F0mZVVvUVLIrAkoDT8o33nm6Nlz7gWZNEVfjCjz5PRwmAKOrqC1gP328LF2kmVjz60ecuOVqEcxBP%2BtN1dkl8XvmSi4k60ck3iObyz7u1IqkBVN4cpI11iLeg2dyed2r&X-Amz-Signature=ade038ac27605eccb0eb734ae38cd1e6fec13a482caf0ab61359563b6c256df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

