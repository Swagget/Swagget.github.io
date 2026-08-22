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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XKBGYKE%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKvR5tL7FaX6VndoDFg15SG2%2BRQmPVX8vRXy3EZYjllgIhANwEx7zoEXVwCTYUnnsYfgopl0LNWhESTMeVbT50hkSMKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1NnFpxqb3RfTHHLUq3APSWn%2BE6n0q5qXWAZlog94OKtAMNLvIGEBlTVA6%2FadFqHq%2BJCPLfoVz9Ur3R5XEUTxmp1dEq%2BVO8bD3XVnxYApoBNwArW2kJo5HR%2BxH8NbwYnOUzfQ3%2BkdvT0Lt%2F3ZSTd%2FaFev%2Fj2dPkkLD8MWR8hV%2BJaBUSuRxdo3t%2BjbG%2BEdvwXKu0Du4c1d2Ig8AXGdDLdvvGc7FuGQPF8fGMtKbnjnnm%2FTHt6DXWuIKaTetK7UaLKgtAMfT%2Fn5J4zVhfu%2BhoTQXWTyjwYfebYvCWTf4ll1tQoTwFrrHPI2GhDZ8ucL%2B6dLYiUOtP0xxzmyGrHAiOiA1ReW7oCZadDkjH%2FA1a8S9LE5EcLwXLmRqqhrILLgGdwy9HrXgS4JQofzCXkFCzsKkLZ1P0K4BsZBicdCFxOJeDv1JulxqIe7FVxaQO3Mfkh0otYng95yWezGBaRAlFt07O8ifr6X%2BhXw0ECh4xLOlma1ss3%2F6dP10G%2FSYUFO0wnSuWt8gFFEMcNNrMsG0Jf4hMVu%2FQQXlvdJXDR4NvOe%2F4YrZfR9aETNon4wpslsTUqrf4eXOuhm6e6CjRUtcPaJt7pHuYdsyhONC8h0WAddc96QnMVTMJv1HwXFkKXvdHIRhvGeWcfdc%2BOpJrjDWrqXUBjqkAQtqAOVV0KjBjgR5C83j6U%2FB7dSK%2BP69VHarTAi1ox%2BEJgGN6gHTTlPyPT0WwKvjdV2XCV2EMKMzppM8Z4ItGZE%2F3jh5aocTqkzt%2BQMArWzUfpWK9ROgBPvUEpVNZdkcqS%2B9nUVR0AmJVSdci5Ei4vgnTFNK2KKqQwZlsLr%2FdhxG31oVGY6RpEb8jkHg8oK33wqgvck5olChoY0H03ZOHgYJLTFx&X-Amz-Signature=ee9f2be74995079dabf6bc326217737649710013feba6225418b53147161ce13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

