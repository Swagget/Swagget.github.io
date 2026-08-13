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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYRWYPF%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T113638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGWX4gXfw%2Fg90l6240Urbx1JBFcsWTZwoU%2BUIsgPfz3fAiEApWn5xDJ7nEMoJaVImuWn5drRpUy7ov8lGklQiCN4C2QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVLuC7FlXGx218eQSrcA7FVGZtLfl4a4ro10NDpy2iyek8Cdpfzpu9X2x0Ebr8iwlvqXPaMPwDN83iJ1c6fMMP0EEOLWcgDPxcg56zFJa%2F9RBtSSzQ4367HlyagnYR%2BWI3fbijA7CdjCJNqN6Ux7YLIXs6oEcs7UJqU2f6buDeZGwLR4RBkmIQ5VrDDWhI%2BP542l%2BsewNBneoRWLPJREPsoqSGjPsUXIL5eG73OiQdbBb8XxxBxgltVbe%2Fal3q2S12CfJDMgz1YQpgR8vjkXDml1uTIpngEYz0WoE090w%2BiFbGJ%2BNvg53x30y298n5xbxV3DncTqAmOD7AIeSQcB1ahoaKlR8h16LLDW78lOtMHDp%2BfEbzPeoUE%2FdgluPAECRSAkV99RwWt1iTBosMQXrtWzJodnl3STOQiiH1L%2BdQXoOVu7vZmNdCpRHmO4eJiXMEctadSGbZ1KDl3hrrgH1FRPSeoyOfkPvKG8CsFwmO6ewKknf54X%2Byc0XjF6N9MbwLuOFgwTeibbjCxRKOARbcxDKszR8ifZoQmOZ2CxaGNqiREL6UVr3bd58%2FbENsT%2FEyYtSCal1jOXCHfhICPwRtCLtAqoTgqcn4AgQJ7qM3pKmO2Kn49nMCTPNYJi1hV6MVcjJe3JddAGoR1MP2Y9tMGOqUB2Q8U1i8CBCCaimdHfaS0tC%2BJ%2FDJ0FjpgeDE7yHRhHLQHCwHeT0cYWRI2cRwWYbW%2B3h5DSAVM7QpwEAC4Gf%2FV6zscifmEuI10MQzfaWUdPcexJvNM6i2Mqwxhugq3iT8AwEDBuWcD4GrmeL3%2F21suZg46G9jP%2FDhE%2B7sIHWV8XN%2FSJxhbkCGLf8y0Vze%2FDkkfTvwBwIWtE3FYz9DaZ8JU4lHQzUL9&X-Amz-Signature=258247d585803eb37fd1749a523c11fd21682fa0898f7bdb361b770fe6a42246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

