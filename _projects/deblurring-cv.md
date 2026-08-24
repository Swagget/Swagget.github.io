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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YZIPIGX%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T172011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCL5L2kIX9HwW7C8nE2gyBeeHjIRscXnnstYR2zh7ymcgIhAOPSGwtvwKwp%2BfNmjaPEKexgX3ZgcAjM6DqNlufoqDASKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQrd7VPYtqprVeUMMq3AMkuOh8jm7QNCfJxQ7LLXq0dwTZatJ6joW7GFY7tvXlupjtQSyfJ7WItcCj6FOlWGauy42uNbLwJIOxzTnH3CtKzo7jGCbNCzCQa2dt9i5X0C%2BI0RrBrRcZSY3ZvRx3fJhEVgFazzzbzfqmc5vrk3qTlIw4d%2BcPYcnK7MmTPYFxi7BiXJfPU6D8JTYb3R02FOCKuOIHGBHdOQCbsYYJZlg3ETe5vPq8sVdu7U2uTKcju4AyItARQqxzfaspoM%2B3URbaaRUsu9t6HAotRMnGyomYOVWrfHiSVL6ygSvWrxUhav7%2FFGixZNpNk4yne7OKt7lv%2BcIUResGBiSZ83chD%2B%2F5jicGMeNDcXj3F0qggJ0HmmFuNwyfPBPu7BLJdhv%2BcZDeFFWRYlMcscbjloPIgc8Dns6%2FFgIauiu3HZC%2Bep3IAxYeL%2F5a2n%2BwTGSU26DHXUHJa3OPIbN9%2B1lu1hOFDWoVE9BwrzKky5vuQFqrD%2BDtMK9Wq5r1f3IO8Hyqg78qmqc6JRwEIQZ4lmmZFXYGGFBsryBYLGInjyiUiapQekRru7GTplrk9n2tDjj7HLAHDQqjwdL35SNo%2F9FTtTi2wLGom10EEVly8XjlDWsM8GWInA%2B38AYAprJodky41zDAo7HUBjqkAeUfC9snWJj%2BVumrTs7iwcDW4xPNPqnjI5vJjNhtu6mAO7czzRGwTfwDrlaPjBDZw4BDkAT3Vu0RgWMnrJwatDmsDJxlMNbgH%2BBvCQDwfFBNyE7hmYO8aOkYrY0WRUMIqHMvWWoZfpJSE9yygu77ptzLTR8WG7Y963pS6SdCM%2FGWikByxopUPqocOQhcRj7PwvS2FXh4XjD4aW75WAwU%2FleOrXP%2B&X-Amz-Signature=919157f4037d542b2c661b5060c20497eeb9d7b4dee96ac28c395407ecefaa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

