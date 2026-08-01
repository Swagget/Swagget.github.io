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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD35TBYP%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T184812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHAhTXQwS2Crn2YtRuFR8q%2F072N5LnGLx1olnBojZ7iQAiAutrbShDCn8oBaY9PqK35%2FdfOawkg2q2UGQA548mJxjyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr1Q%2FR5Uz8edgI4ubKtwDtQHJqvVgO8Rxh7yIrHu2yP7fiCaMP04hDBMI56SPAkQqXfzGE9qQG9X8rP8aZluAV4yvqXvR1E9g%2BomiUxuvlsSRuXr%2FgcsCzpCOwOSfApdFv6V%2B2nqbB4yeRbiOaAOt7C9EOmEHHxhxCxOhCWjjfRAFEMgHONSdWg3cPi%2BVFwYTl3WK4dpmeKpJAsX60b8ukHZLFyR9nJZpjTjdtXeivEWYYUjBuEwWss45iIjw8%2FrvUKpChbXB5V1YiAJ9lvwszBWRr8QEG63XHfp0PTAW9BFI0xXlFBOqo9mdd39mA2UUnlnW2NDy%2FqGZm2UXMlXAPsXg26RUdJmp5wbpkUqoCL578KToZ9KdGmK08L5lx44VzDxSN5s3jJKsILMvf9j1hffcxlbcTK9pPWRWQBcuVG9q8ZMGRcejIw2BqXWc3pRBpvtHSqJugtJuPYhlVvZaIJJTX5nf23i2VnMYOa2Tk7mbpcyIb0lXpy4sYFzlKZoQwVZeYLEkyusrnvqpOR553mKKN3NlrxNf4MNm%2BSasmoJPjVrmWTaHH3cqaICF7%2FzUNNMH1x7l9P1IVqr0Fodm3dC8VsVvarWIXMpOo328xLFkL6ItyJVcfQiJbMgZIG66%2FoL9EPLTikmDrLEw3%2Fa40wY6pgEI8gKIscZURJoLSXjJBh5WNdg1tE9xSbikEJsE8WuwlQ2PUiqW1AScb%2F7sf79egf9yvXIpmsO3BZM%2B5vU7Ej0jsCpicFU17PkPgPYV6pA6iVz9L9X19o6rLgdBxytIq0LdbAOYcnEMfEolCKd4ogcF7c%2F5RKmNb4s9rGoxusGFEuElKFJoM2uu3b6MA72US2VhJnNbR2b6z0reQUBJ1D6SbWi1dcNa&X-Amz-Signature=4d58d410c6d425f3c8f6f0e3eae75ed27ecf790bad96842a94ff4bd93c84616f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

