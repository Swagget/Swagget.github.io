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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NXZWGT%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnV5FRhjiWbBj3HlgpATFVTb6fwaeNZ1kKt9MTg7h0lwIgES41k23A59hKsQPTQJPT5ovktvDc326giP%2F1GfZcfpcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf2d%2BflP4VRq8d6wircA3HDe0dhxpshQpGLdsodloTOC7gHxvK0KTPAUz6ULQ2VsdVRK84PRBun7PJF%2FLXfp1cpcuj32qJ3I7EQGWskUTbGOFEVEbvIHXHSbkfhWeM0XLEOsBqmQreXflfBZYkLapuhKLrbDi6hOORBy%2FM8ahgwhAiP5Ml6%2FCg%2F6FZAwNdz1cYCDZv7M7JVVuzFw9sj5QFBzXi3%2Bard7eJa0zcww7RRZ8OaDVzvsfnBTOja4XDqHfnzpdiVvcFsyuFAqxLZFcvIdA5%2F19AY%2BPP5IjJN%2FKM6hyn2yRncqoJ4nzCES0z8SOUHRSjL35LC%2F%2FuO9C09RdstVnBdu%2B7tx1SFEOJC%2BR810T8w6CUUsssSBCFJZGDyZJfGII4iG0iav9VJl6qWp8vpbyXhCikWHnNps52Sf8aKUxtT01jnsUMY8v%2BFLj9j2uN%2BRdZeRb1vmFF765TSNWse%2F%2FRFMybJsJOjwD3bn6zly5%2BFG9Nkc96MlNdPtD2LdPeEl9qKBVInAT2KZn24ECAaIviU35Wi66c08HWos6ct6fbkAqzbWbyjnnONft%2BcjzL%2BLm53P2N%2FWhIXIdac67aUfepccLKtrJ%2B9gmoaqGpx0qMlwsO2szx5JYulFilnj9FKSqA8ku9ITx9FMKbg5NMGOqUBUVT%2BWF45SaBclubLdjD8TalO6lrzqkuaaJ4AvnY5uxhEOAgUXSOwN4bmvAaKnNHKZ3g4vSEslm7PaNVf7g8zTnqfMyA%2BpIDzPKsvCCIOKGaMZfAEDzjgoTC7W8P1%2B3qx4VBbIY%2Ba5NghOaenAWuxrCral3bYWleUvPCOyYdBZKYOBRYNPNpJZjUcFFWTCbE1R1Wxedhgi4YPLhCM2zQ53OFe9LYO&X-Amz-Signature=19d6853242c26a48b15561bb3992b3b4a52ee00b0bc967af35968342eb886f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

