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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNPS5H7%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T190900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDPqeQzQJi4HLdrhuYW6ZKgMDnii7iBNq9r0sNO4SpiiAiBT48VdqGqCRQQNTXK42%2FR14FOWRGlMIRjUFrmwvybJyyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM8F0IMW0tnQYWI3g8KtwDUOxJLnpPFk8y0Oakmif3IlEdv0TSY6TWhm3nFfVhVP325NGj9lSShj9Jpe%2FFmqimhPD226kXZEpRObtgwuK47T4QIuxGgrU%2Fgd7NbuErZ6IG032SKdKyiI61pNeuhcQUG4xIr8oWygYnbOXLxR0pIWRK6hRi9qdaPnhXDsfBy6gqMp0GxKQRj8LLFDOB9w%2BKZAT736S0Tl594GxYoDQSY%2BtfTCRLW4xzgRCVyc0S7EP%2BE3T6NEBm79JqFYabbYIf8guxpmRquGY6cUaZ%2B6H6GHhlLp5Q%2FbHDskuOQZgOPBlnLai2heeiRHh445xgNMd%2BiSeofynh4I7oo8kj8PNzumW%2F0vM8rIo9VK6vFBWdbtwsT7WAZ28JcnNFJWQHdTAC8nmiXQ1%2B6J5s3JUkmpylHriBQ3r4EoSkG2rQOCbayn3gCZUxrf3vBVpItEpthEGTru23wbAaGGoDJkB67aa4tGwr5Cz1OSaCvwSxpfAumrd7kCMrRUt%2FBqhKFv47kv%2BBAxuIrtDLWwfuu0tuSXIAqDFu%2FE8sMKFyuPosU2pAC3vDEw3x48M6rzlTVb0VFquNF3dXDAhkNNUj7XQXdDFx3fGXlRceUCJjfljgVHa77euamfRLQaI3JDSnQ6kwmIPO0wY6pgGoPzP%2B%2FXhinE2iTHsHcTNlScO1QYWn1dQWrVPk7c23YZIeQZvCgQ6gOciLFyWTAbLQ1kUQ9ljnH603N1xOTVEIDvBPCVw%2B6K7EJemWopKS01of1cbf1HaWXEzUrfhPHFJG%2FsH5CzRS%2BQgAWT0u5P%2F3eQ0cDMnXmpcwSZ%2FBxCLeR5dxrINOE226Gu8ajCfQXuJ4jpVGFm5ZwIziyTU8cJSRPXEcyMFk&X-Amz-Signature=0cddc61253b7e6e83813123ba4301364b1881f3366f12497ed55d72067339852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

