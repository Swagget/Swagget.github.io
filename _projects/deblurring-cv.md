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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBMNBFS%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T034156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIE9tWyaGgPi%2Flzttc4RjTXmNMqXKPmSUL51ymAg2NPGSAiA1XRCenN162ci3yITLDwtZozk9%2F%2B3Z9xnMkHDZuW8AUyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMT6yZjxSPqapuUeU8KtwDCWI3%2FIp1OPVv4MqGCk3NyC0VK%2FK%2F00wDWoIz00Wz%2BkbYYcT8%2FCbCmbyUZCMcYJjwYgP1VUaBFBukkYTFqD7T9Okh0Sup3uQGiAEMYdNOwDpiHd%2FiHrgnjRIq7qqT%2FYLQ%2FoTJTTaxSjx16%2BVb7GgK%2Fn%2BuUY8a%2F3AuK69FZhWaOZ6C8ljLWSlIbVlqStJ4208d46aDLCiYOVs%2FbFxrpcj%2FGZfUWVdqfbAYCp1yuFTS%2BevkcjFWv88L1dD0qM%2BEtyM5oucBi3%2Fxen5jXdpyfHYy2QpPZ%2BpFPP2tEkJbaIRWJI4u0v5hwtPIxZ0Ej%2B4c3zQqP7z3Kx9bKKGosqcoOilnbh%2FGb9UeTxDejL35%2F1CxH%2FDN%2Bt8KTBqCf2lPsAolBTLSZYKEjrqefohQ%2BPirAcrne3xseXU2PfTzWgK3YrobFg0zoLR3Wu2W2DRtYbVUtDkH7kh0VyYcoo4koQ3UrKlapJ8vBOTPnmr6Olqa%2Fi%2FyurFGqlSXQV2PDDZhUrg1lYtfM7UvNkSJmDPYYOqReXCCqrpO%2FcZh5qCdueJGM4KGhwdP%2BqHJtf6LB1zhThdk5qurdxtKPsfR4Y%2FOBXobKCpZN4XRW2QbVHTVcRAK5egtrFXMO9CHYDnlR5xl73Ewqba51AY6pgGfsqMZYsZXrehUoGo0WYInnaVm5kpOORENGbgudKnCZe4HQ4SKWcpnwtQCvxpKRSLHgaYApMOy%2FXxWBmu23CEhnjwoOSVLwJkGxsip961PSMSMRB7xFFj0yzfcyMjks%2F2LfzqWUyFEg3%2FC3SNx2r9viSMnd0dHzlzBal3umr6pclludvD72qsL44fmQqrdPCmaZoTyaMKkHlIjrHULDFRrdDC0xx3X&X-Amz-Signature=bae638544fb2123a27c7de4fe0e01ddfaa2613d0d51a65573b35141b5d07f79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

