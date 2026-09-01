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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MC7DI66%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T121004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKr9120NjSg4uwhfL0aM1%2BZbf9d%2BuMlXj7JT%2FnTW2v0AiAKWmkkAwjEce77igOLmwzAvpbkXe9EQyLWI222qwfHLSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlH%2F771jprzk0dIjvKtwDbmFNDfoHqRtbf4pWYBtKR%2BzupQ02cUTXg4yxqwmKJHnPK5ZRQL1ij1XgOT6vXKSgx8wTRJPICfWqGRQpG%2FEmN%2ByiPZTKT9ifMYS%2FIRauk4J46IkxmsdAt0VxFqRm7p7wGE6%2Bs8DjPIoN%2BQNabDTPbd134pBqvpoO%2B%2FdkZxd8YPZJ85cCBTABd385VgpPaOenPzXrUtSMGFPPGFMabCBWgkUlVccHM7HB5XYnMktpw9TnaucI2dHBXAjntMFZ1DJ%2BpnToAjRu7NUSwBEnRTLSmsPV5io12LyNHhMjvvlwE%2FkG1whdubknV6ZCaQtx5DnKhIzW6qFMIAmRIsYT4QdAMT5QTX50r20jis3kZJ0t384SKiZBq12ynGxSqQLG783BYtQduxfMixvBC8yXOm9BRMKFjxI1A4upjgTxEe92lK%2BYa8Nbypjex4arPsobbH4F18EsJlb98B4uhKA1lRzYM488feycrWDuRXG8ja6RIg2kIXApXSQTIrd419eflSWjIb6Q2pH8MnCO6KUTlhUt%2FQQib4YsP%2FJtZeUE7gcxnCMGniUUFPgfgQLyx08qqrSg0Q0W2UYUwON6VkPDBYGa0G18L0MIXSEz4xQGvcEIclTcdtW25wsTxIsMuBMw5eza1AY6pgFgWh91sMHkTCPWTIr%2Fv8Kx18NFbMyWCCkoUU51ZXIZDeqUULhsRXGOg3N80Mt4%2BcpKmFXsWANvR2MK2zaPek20ibqbmKVSA%2BbvHUl2bZqaxX%2FAavfzucDKjpjalnYrAGQseVTqpQ%2FzxvZByhBYOYYCCEd7xBJtf3KRkTpb3b2t4CuzW%2FECTMO0P5HPKLaKB2mp6cuhVv%2BWuFSLBmM1ibCjTQBcqInH&X-Amz-Signature=6ed07a2de8544fa5bd86625be2a49b9d52eac59872ad282922b5c184de435e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

