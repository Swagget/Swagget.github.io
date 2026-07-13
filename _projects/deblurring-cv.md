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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJMDNRH%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T012302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBA7DXvJb0zusaMVkVC5wn%2FK3ko%2BPzFtAYAm2A0916AKAiA0wnjiM0RJ5%2F%2BFdX7TgG19BAxAAmRd%2FIRr2ulrx4Ku9CqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPDNHOj5RecuQ86xKtwDM8ajvU3%2BGlUwnBHStine2lph1NeFiecN9gmepDLZyhmq6J2w59l06CGAINHQ0%2FYxAoAX0rMRTWjwVB3a0IphE4BFIA7TBSjSJxk%2FgyDmBWMVqYoNV6khfTB%2F5U2jhBnknV1007QjHD6TyBMD0OZMVDWWNisw9Xa560ymjRlVTD1rT24oHPpQkrF8MHW0kgoOj9QtgWJ7e8PHadWJyBOAz4fyOUUfKj%2BOa1GgEkf%2BD3JoTCfdUXLlmfZ30XX6aQVp6rxIDHWrIDB5DDKYvZJhoVc%2FQ6VwADPYIXCXsStSALiS7%2FgwXwgsRIlPnwlF75LNoEz6niYetVuaRHtNnEkTXc0YGvrpXTgy54vCUZUWffKLMRDTBmgfIm0%2BihpnLlehFbmI4JXcAxacvTJXXejW%2F9x%2FtwYGaLqlkbbuGkkfbHgK2x2SVwAOPj3COKOVVUrcr6lB%2FR5%2FmhOwnCM3E8OLcUS9hLdQxmI6EJlRs5soNtsi%2BvfTUGwt%2Bl6rsrmK3p0BpF1GkvoIXl5qvddxJfX76fr%2BsS7rFn5qYAJGH162wILF3wG%2FDPUmRXYJFqZUsTxIUekE3XZl1xH6DisxkqA1o0QsVmnoNeVuWgux832nEMs5W1cyHrOc2bsRR5EwtrnQ0gY6pgGu2x5ghutRfh0ESaaKWbqYWLFxNeqKRqIjwWu%2B1dyzySiiWffpXKQTATaZXwolrEo2pz3GWmHqZ3UlU8xRUIToV2azSUu2NoiMxWMdnMCnXa0STthmuYojTOhGD4NGsRaoyfNc8susyG18ECVoNIGSPl8mCzB8B1udJjq2j4iit16Bmgbn76fkCBaGyHdNNEKpbGlB4BJ%2FYeVOlro7WgO0C7hCRYnU&X-Amz-Signature=95ba59786d491f309f0e3ad8f2fcf6c96e94652fa000195d8af24710e9ac39fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

