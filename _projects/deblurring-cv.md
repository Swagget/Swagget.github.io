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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VABOLGN%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T215509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwdEpeALE9tFEsWMBIU%2FKLaYAqi1RXWqxy1XSxN5DbHwIgQRlqeHsKSqfwZ8So9qHFUycLD0nM96FDvR7%2BF3c%2BY1cqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsRU7zg0majhvK4RyrcAyoSvEq2fVG4VCiqILn160vCgCR5vO6SGKjlEGGTj31VlrXWSHXSG84o%2FJR9X1nwt9Gc47KOsLw%2BY6No4VljHebkPVcwStWsacRv87%2B%2BfWW%2FzGp0HgH832TkM7%2F%2FqZz%2BRVoWhWzeb7VqD6fFReI3jUqVI%2BIxfanXYhShnNg7lAcvDq3jRyrvX1CHl7gmm81C%2FxwCkBGA4w945OqM2EgPfkKT5wLACZGZqdtYXcZCEDv0QqJAvor6M1fSj%2BLhEG2Fhid0V4fNkr5qnEnEOwqs2dFDn1VnAJzNMz7qOfcxOQfMch1xlC2ZXBBP5PM5s9NdFK4xrLBq6hMeLG2GMmbJBnwmdaesdaL65femx5YA5tbNRfxk%2FNIb67Bd9EU%2FKtbToc7IGAlluuA0vJ1fnOoVI3VRNA651R4vf0U6DbZOmSrwe%2FFthGrY%2FINkLQqq9DL5SPl0kR9tOEY7SuHz9Mr%2B4AHIIfG9sYJfLrmmMeO87eKan0D13SNSZUKjpOw6Bhw3LFKvA6p8SaVtqjRpE7Ct3K8ZwwBYSuNI9WztDZ6DHDYkyFReFG%2BC7F82bUn4D0zIMIdoP365coIw%2B2JxziDEJFGMUTWa6kRP6wya1lMef%2FoY3Jb6VYKNDN827uAlMObQxdIGOqUBDRazV849AXm9sMpx6%2FvrRy1iutU2IttkD6xJcbPcKzJoNYWqVgG2ojiVCeEfGfN9OGipPMpHISECayDiBSIteRUjV%2FD3JM0aXDZBoJ9S1DVtLMSgSwts8yfuoSKbbrw78yzj%2BiyyLLf23%2BHocg3rEPdHSKM6MyuOesNlzHT%2FJb2McFOWqgqwTfNzhgA7X%2FCwpQPj4BGVtnY1IzK4h2Whvr20sXJ7&X-Amz-Signature=cc4ab7b9ab40edcd0c9f3a7f23f864ea44500b85c670383a874814dc9568a078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

