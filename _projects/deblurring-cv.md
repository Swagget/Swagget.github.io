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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2O2LHS%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T231412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj6YDqpudCuYglwpvnFiiGoRel1GtTtXJptV4AxvXYigIhAKZWQ16ergVyp7%2FUqlAi4ij3VDcR7JSr9frHRRjVNd1tKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEt1A3%2FoPmld05gLgq3AOCLvz1djfWrKd4pReP3wPwGfMuAW6%2F7s2hOCEgzaObMVRcxYJvzhtzmGz1OTWSsn8lKlShOrBViMhC6rEflvG3uuC%2Bn7emzZ2yMNJoWSGCttzopAmTN34p2kj23cuuqpxFPm9nSO7Zc%2BRbkKEI16OOldTT3xIKGb27VcrZzxg%2B2IjvVKjHKnALQrGbGM7YOkCG7t7X2iGEOT%2BTGLvKHRGJhlJmL9xARwVIECc0xyr8IUDmF3Sx4nMfPaLiElrp8JoU2yI5YqT9SklHs1uY7ZexJQqcfx7dZycTlqWQfyKTRcnz7nLPNLEGPqQGXOxZNW6XJM50WTUhGjNlLJ0xIWQIpvv%2B%2BTyc1HlVCQjwgAX%2FrmsGTrMcDOQUhMhSDM22pAIoR6FDtZ0p6QiFGVcthCK00FhV2XBUF7vz7WkJuaiQgvLD5g3AoO8QK6TTA0GQu3nwVD71x3GdHWYKKWyGhsmGL9WsPVkBIYmu%2BAVvG%2BXekRSO5vQ0dSBvUuiv2lDAr9JlW8UP91rnDEtFDRaIwBe4%2B7uMHzniMeKJp1TcGZBNCljBBH9VUvUa3cEW9bkPsATVaT14LU3an4ABIL21C%2FM3C7u6WAgoebIRSKoCZMYAbicQktp2noQHA9G%2FJjC0lczRBjqkAaDhlanbK%2FlM%2BDR%2BfpCh75Z2ezLBM%2BBs4uOoXPs8hp7vg8lLVzerdStjROMvLLm6AhNLedm%2BmiyPUBOq63n3b%2BdxDTgILKV0R%2F6iRf0UoyEUioaHMSg4AJVVmoZV7YxRdu%2FP7PTF2LDs%2FvGLbaSi7ffkWWiu7sqp3p4vG5MYT0Hp6vZGWDmolKHRdsdGRXp%2BNCBbtYg2t30F9JzFb2shCNmCCxNZ&X-Amz-Signature=a32ee2015cba23d17250bdb09fff9bc6614c396748635bdaf69aac3cca76ba7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

