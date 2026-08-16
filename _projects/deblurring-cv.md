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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFXPVUXZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDPfZFyvhkz9efPMYoUPR7sRc2TqoHCwPfhZmWGKcf0fAIhAKoV1Cxe3TKryQsWZj2BgN0LFsI%2Fmf4c2Xbn5nMpU9hgKv8DCCEQABoMNjM3NDIzMTgzODA1IgyC1c53MLfjIRp%2FDxkq3APG78xsAruB0OilH6ymCzV%2BWty1iL%2BtMStUrlMk4O7y86oPYGCzc83Q6%2BtLbvyO22OuEeoz7Zt7CXo2LbvrPIbdaDyLFSw87GWLRO2PiEuFb8cOi%2BggkQ1uX%2Bxy6amZESKIlxUMFeckAKE5UmE5vMr8o%2BH%2F04TQctQkQv9H3jGhHRoFb3yLAPnEEZBPYutif%2FW1kQRy5vS1i0L7ikG2uqUVr0Zm8FgffJeF%2BfxRYxexEiKYtKvwpiWj%2FoTpVMTpmYEa71Lq5WZuqlkrfrzak225lz3LdHdBK0xyXVuSs3nwWlsiI42xsR1r%2BFwk4ralnxsc9wDEFze91uPuJB7YuHjUXJiidRpFUSNpN6u0z6PpG3iL%2Bb88dsci3x3Z%2Fra4qJfuDEF8HAfI2aLmClHWmQ0iJ5ngauDUMb60%2FK1Wu%2BuLMavSt4kLhX4AlTk8QtUD%2B2jJBhCvcLgLnr1WXWzu9stBfsMHbtVexUPpNr1nDMovm6xdbdMTqQT2UerDlOQpXEuIKVsNniFNMVH5q4UzEpPCsXVCHIOcnwghOZQlhujYWh0KaliB5kSvfFeW26IiEj8oe6zdkJI4rIPhSJzVm%2BkaNdw3e6QcpzTyon%2FFZmlEPnWfgsJPTjOwOsT2YTCy7YPUBjqkARIop3KgaaK8eG1rlH%2BdrBrnhBUuKXlZZfRxxADMIOAR%2BekAiY9sS1A7bh5pY04C0UCx9FbW4EhDrAprRnDHRLicNsXAFFVNZVNPC0FkhV8298ADOVx0tQ5Ssj7OcBS4Kar1UZP7XcV546c3yEg8uYrpdJrOyZ%2BhqEUsIghTvplDLyU0U0e%2BdKt%2FeiNAw9J0UHlRLg1doTMKmh8sttA2Uz%2FULSWF&X-Amz-Signature=c8b8fcbe669090b52df284dafa9c286f29fe8ef26516b2448d9fd4c9c4efb17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

