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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID4FNEV%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2F%2BbGPtf1EJdvzyFGyMKsRF74hjedbNF%2BDM69oVMa5AiB%2FVXBLTm%2BkUgZzaS2mucbGbTHGGZv3aAKBG8XJNpI%2FmCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWs%2FVaIAJGneZakcaKtwDTH2A9jTADik1ae2hKivoVvhy6fzzlbslHyEQOGRMmn4Hcxu96meMQQZzZXzzmf2EXX8K3Rq%2BGzLCK5xqxyTy3RCuhXh6Rt0QZDU9RoLgDLn%2B32P3%2F%2FZUq1rBKY58brfkSbTuFob3AOjgWnw8nhQ7qqnO050JGTwlupWZ9fJAktMo21SbCDEjGL3ESg3aBwGpmR0X4LlH%2BTnMcWL%2FrgiL0GAtb061jg6YiLGpmDlUtbEY%2FSsS%2BbkUIGMNrYT4kqGPOvA3bvp6MqixhvecZc7%2BJKoC5US8KCsew9%2BqUHImF6Kb2qobskmAdQYd5KduwFlixhTq9HkOkVk9N6eK%2FBZ6Qd1Sin%2Fdmsn4WroTL52%2BA%2FXgQ67JkqP2mj1rUv6FnIew99%2BJEsQMjtvLzML2Uu8dMZ%2F8FJ6H9yg%2FmJc7p6sBvRXYqEdb5iR9OJvKmfWN442MsgeQTy5MF1vD2zyBITgGhrTGYCCj64kLlMVmxFiGsYbBIYsM7EDwer1AiXF8TRT7RNqz0V3%2FqXsr6wyBY%2FqlOT8GUngUUE0mO5APBW9dQ4Qz00I6MalKMF8kVVAE4T7BwH7CVOd%2Bc5qJUVbrkLTJt3EwigwMBUgBf6jJ0SBiCqWIaXjX8FWJ6vmjxC4whKz10gY6pgHQvyIrv9StoKkdq5XeL%2BFw5fiD8wBksWufz4hfNhpOHf48l4PKmCZH1%2B5VuxZCkiQ86krlu5rap5NuX1%2BFkk2A8LUY1bnARhgKXlYjiuKRjdVsAElMhClOmDk2fNuYGCPguQt0rPXpzEMuyAn9kFUe7k8YIiUboHqI%2BpLCmlWJPxjQRpxkkfh3I5hV1N4ZniuyqXsufCmrbcUGPCDNGbJR0p8xtD%2Bg&X-Amz-Signature=3ae30295c4de4a3ef4232f8c46903fd26c7148eb9ebf07d1da2a309c8a31fe98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

