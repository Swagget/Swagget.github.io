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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYLKELC%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T235030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDaMtZLHFNXudxbnYpxFNsQ8scFoRiawPBxpKOEOs%2BVcQIhAJ3HGJQ75RuJjkMhPD0teyh1BP5r6SaeNRv5l3l09%2BVaKv8DCDAQABoMNjM3NDIzMTgzODA1IgwkYZ%2FnemRow8mmtKEq3AM2yfZv%2Bnlc9lvwEnznx4tkoXxgR94LDb6hS9OGO%2BN1pVh7ukrjgNHnGQ6FGNQCbf5W0GBmW8PUkssEF2Gij8SqNcGhya3RlanxMHZTq%2BLgYFr3J60fZwwQBLEambN3oZXN4XfXlxdQO5qk1SyWtANN8MidFDjDUI4c1P7%2BLdH2CXQV%2F80fTnO5KZ5sU1qBoHOs62BnffydI3euD55G3jr7aHigRBILcedPSaeMTms2bWf9D%2FiHF4FL%2FaPM8XgMtIbI4ge15JSH1CG6ozfjW%2FCwNoJpOnV%2BHmruP7N8qc2TZFz8L9ooyljvhvE3aX7vBnAHD4gyhCMVkDYyKWla4qTjsS%2F9qogg8N8JexPkDrtNyk5DAmEQ1auagnbrNDL%2BdZoIye%2FNnwatxVWQZ6vFZvvIVPrp%2BwnCpqepEb762%2B8Y8bJPRA9kBngdGiFZFELXLlh5Ihp9KFY6VMrSvJ2MPpCnm9KFEBFU0GCNLH9ro7u0Gb%2FeJzYMpXlNsEqJWniuXtMcvhYsfdE84fUzjptTm8xpYlDRtRajL8q97j90DJeGSfoEwgGXEcmSPBYXm7ZN%2BKVpvlkKMo25jVuUH57MIRWZ8MTsWvJDNs8Ckndg5iRH%2BM9SsrDWaxnRh9NdGzCTqKbSBjqkAfjVqfevebYpSM5INU5U4x2YbwubI9YksaqBeB0bDDg2SgqMfH7kRW8%2BaVZJZARBRsh2j2FbpkOfoeI%2FXRFZmANnaOswdHP7SfnTD2mY7n4HLAR%2FsFc8gtn6axIpU3O%2BCsPkwCg6lRf5ydYzu0VcTEKO%2FzWE8%2BkylLy4GAqTeJNmM%2BpXgq1RTOl5wiqyV%2FHx%2BDybDx4WV952jgAJmnPifIAKPYAM&X-Amz-Signature=74e03664c28ca19645070cbfbf9c2ee61e2054a316b4d022e7011840e054dc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

