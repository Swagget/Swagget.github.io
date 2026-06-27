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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYBTSH2%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T225056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRAo7HbleYu2ZWVnutyDlgdxCw5RHLFQla6AI6NquX4gIgbQcM8UEjhZBkyNVSsLKzqqThKoov0n80rxCgtRjhHXEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnG%2F2Svdpj3mAAoyircAyOjJ551YuooFjE0i3uTCYy0Z1LITf9r2tcFzN8E8kYfPhejA54lUsu%2Bj6AEOEufpTltJABxpnze5pfHiun3xG771gSTPXY5mkLyj1Vl6J7ZikhnNSuo8e5%2BW%2BvVqN9k5mZR2l8rLY5s8qMpc2my3AH7hYLrCAp7f63FBLIO9u3gt4mb0t0GyzJ8VIUDAMeIPjmohbuA%2BCsnyFakm1ISmdgud5vWJ6COjjKGXOS7Qj3sJzM6c6%2BmapphYQikteEnJroT5fLcpU6N2pcO37prd6JtgA5uM1smZXFQfj8iPC78S3UEKvMYj0X4Ut5rMNuSNYPfXAocEGnLQAYZ%2Fv37wnDRb248EhR4aucYkWd0DotPbiYNCWOdyqBVJqDysiOExRwk%2BYXvYMoHg3X3mf37ZN3snIcW1ljOw70cr6DHc0H8z3yFS%2FGEf0QjOcM8IgQlJJ6dl%2FnQBCANRVfn8S2rpXIJp%2BnwnpFOdgKjcyFpxWNbVR4FBB1jRsV3JhCdwCC3tBPgJ%2B1UQ%2BjC06wh7IBE6EZN5cUFS9X4xaX%2FB2Ct3KMX%2BeS1xdutgavoFisp%2F0jsdR79rhq6QhvT2EFi0W85x2btcev57Y1afALJfCJoOUiVOVWHemGDurC4KNbLMNSLgdIGOqUBtB5hueTsRmrJHsr4yCd686%2FYx48wtexeBwhA3ksC3rjWCj9cR3wJ5NgRr2RDPyJ5EUd4bBQE7vsOy5OFbzskZb6vw%2FdvjPxA7ECSbrgqpiXxkpXGIkOjW44fzoNHV%2FXL8C0aeFaen%2BX7tU44gChYVDCsJdI8%2FOO0wif0RjFb8ICbLlElKH0uZM%2BDM%2Fg7fxtw0fRdUSG5laYClZVa3TU3B8Qe1dnO&X-Amz-Signature=0b967379c604dffc7f58dbf0f8710940e858a7fdcac983dfa72581c0945754fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

