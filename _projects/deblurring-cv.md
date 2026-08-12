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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJI2TIFB%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T154605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIH4tFMAZ6yGmyYSp1QZCPQ%2FfRh25UrS0KJL9k5B8PtweAiBSUNfbodJkZQv8swVT%2Fl48l9jGJ9utmIU8ZGDPN%2BlZ1SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxdvBMPZOqDBlFKHKtwDpsJN%2BA5ilpA6haBASTOgLRIYKGl80KVya0b2empuuP3ZkN7h2zYbbsZEKCRZO15s6iY0JL1JkS8PZWJQEsfjK7pv9ebiSHNG%2B31pFbUMRNQ75FLoawmOoMsjh9QjEuDGN5%2FUiQ71Pbts8gaBygpE6KHOQk5eXsaVQLqWUWXKgjjentLHX52WQba1iKaxGCBEcSPwyl4%2Bm2yW8A1ZoXja4qUeYNRzaHu%2Fv2GcTrVRjelvHOLnzPJ%2F2fneSumV0DjTigG6EVYJjA%2BNVGHiFnkzPFWE4BiBa4f0HqmQje2AbV8XybNdXN1A4Ptsn%2BMoXDzyjoUdaJhe9koBd6NyObGFbwuNXHhorYrxVrohCThSX0tPWq1u1bj9JKq0nINlxFkJXxLMdQ3UCC%2B9C83M4F8EsRGxl%2BaeKoEaPvxyomKSaLjGcGtTB%2FXbr8tfo57K6EE4dlAOIsOJPJ%2FYY7XvBKP4OyrLTrXU9DfLHO1ZUc%2ByHNSxBEyRhDD7%2BsOdwA%2Bp7r15TouMp9wS7k60sIbSDcLTioXElwEyw%2F07rg0ks920Cqb6Q5DGONj4jkRJ1bauU61EhFJIJA8dRgBTodMWrmJDohPJdyfx2Cw4rV%2BvKFKb3%2F7OydLJ0TXQGuvj8VYwqO3x0wY6pgH1aDlRzN2DwtZtrswcTfd%2BQTuon8mQbqISwdn8r6OEZXygBhSsCAlkL2dvrGglKbIaB004sWq9RqrfxtVel54orGGAKnPkD4dvJNGR9hWW9YkIJuzasMrSuL5NdXnkGdjHPUE1JkPCtGx%2BFnU%2FmYSOGoAG9d5gkVj%2Bhe9nYMAczdvmUaPPMZ63aPZ916E9WEMIy3Aii36LwKN7nq2SUtyUQk2zK1Ep&X-Amz-Signature=2d955875e687fcf28c0d9125d368ba0d774fe1e783e7c2bfe58943faf40f3e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

