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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2K2U4M%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM%2Fj0a5iAAQO5jb8h2eKFmK5WwtMlUVy3D5NOxcgtmdAiEAs9A6WvFmasLPc6s%2Fd6o79YiOgtp%2Fa2%2FV6Gsbj6VQQVMqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe%2By6V0kOGur%2B0zLCrcA0nXrkYCqrStuWhcJHFwOyhxh1fGL0wpn7pZIzxBEOWxfQyI5ER0i5TVzR84MkRL3uU8otP9USYr5c39CdFRMR99BNMMJRmlx3lcjox9e5YQwyr4LZ69Iv4xv%2F84UY%2FutYMMQ3GToHsaFVLCeRdMbIxOkNRLu7lX7B39QHdmyHEKXNcPvsleH7X56Qfn6Q8Sbl%2Bvioh%2B9LHA3FQOwVp4SAvyrvW6ukNEZagfQXFJJmeFLDWLMoG2lwXy2o8lmLxjNmKl6qM3SSW3AQ492hwJO3j%2BlBnuG9oICzREe6411ArpjcrUbNmSI%2BbgvXkq77AzZpkTsnCYALl%2Bs3ppHqzjVXKw4FRP2zRlS%2F6Y0l8uSgnSS%2BzuMaYt2ELo4yPDRdnDHb%2BjRoo67sE73JmKNRoFH24jbsRi0BWw03LPm%2FFqIOl%2F1ighV61RuJHA3tJjZcXko4NQgCRM5ohpCdabhrXmR2%2FK8hHY5eFpjDQ1gbczMPPOeBIIyeTGpsDUOW75GHxA1xc0pNMjyEb3Z8Yn2KgwaLO0XoBg1UYxKkIZkSlYb7zZyEBO6BBnTo4KcB6XNodTm12ulMv5R%2BiRseld54ODDqvYrBtmj20Rw0Sew1xLumdPX03oAanqM7VOvrtZMLH3ptQGOqUBtxK3zWt4EJpxIdpT1j%2FbeC72%2FSe9ndSuYOxtQ5a5cyjKjTGLmtspz5Cz3%2BvER2cjdr%2B%2BWIhBQ6bJuGhPrgTQeXqGBMTznsk6TpFoOy8a954OoztnJ58k3xCOPRA1BZl9Iz5LkfOSnfsr%2B2gepNr2zVPZwMUU1nLF5lhqiqrHj32Vplg9CWRFkcaitlEljGMRRF02jrNIs75xurGVdZBNstEkMNEI&X-Amz-Signature=bb19a885cf9712fc1410c848b48464b5e8f8e6675a6a31cc13fc6eec17ab5c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

