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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URCSPTN%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T141732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTk5DPsE79hYqMCvqBIbuWi%2FXrFSIx4ASODurRH%2FlzUAIgHNSmuxsHVeMjyYBBnYYIL0zBVAeYUpIM5S9hxb4IBQkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBAlNgSDhKnmiPItyrcA5dArWCE2QxtINf09NtcYQgZQftLVlRCkKC3ayuA7SPIKU%2B%2FzSnax3k0yAQa1%2B2R%2F0NscyXmTZFcmPx24ueZ5TlOBXXMHTYR0PJzysiWcRgHcqghVreF%2BTKl5guyzwNyzI%2B7mEAilkXsyh59dssRYlJZMTq2m6JScc3z9wm1gDL7jlUHVWu0b4MoYnawLdxX7OZbfIxs3CkhA2NOLsDo1oiXIbJpGE0mWgmWYWYIPGBmjj8yXK4%2FlEvF%2BET2a3SePTvZFMO6Pr0LEYHP03%2BhoAiSDXIzKJdu%2FwmykKqGFXKR6ko4olnej92YyCUyWFXWuS6rKZUARTI6Xe4KpeQoYchFM4GvDkV4WYfhDHh7V2XcLRe9tG4tXy9ORIYjIVxiVRPrdcaNRJXsgunH%2BL9zl63cEqXYK9F3u13UoPfIf1s152sgrsi%2FBL8CtRAZK7tGf3iTUewSG5Ing8pEurFLNTqey0RQg%2FWJKRTWz7DA12IfWPO31dmeuijQPoIHeWVQL9CEFdAaS2z3zUdbW3031wDyWHcERRWyA%2FKd%2BTPhXraVptk8aZ2Z3TPgnP%2BYBl0YPJhh922r1xzVVbZHusFIo6v0cr93FnlTHhr7v0Mr0DHNwqNpUeOeWrq7s8MFMPOg89IGOqUBYHjbYL7SY9zlkVS0PD6e7%2F3NpO%2F3Xa%2BdkjtdRqyTkgr6yPJUKzHf36BNtMBvuuxDv%2BggbICitoR1ZK9XWPVyHsc%2FURnYKEM5OSkCH4hMXsaB9yqEJWfpfkcT3tLYckGNZG98I4kAG7OdKRPoxMOS65rlkPZ9xqCknYDqMSuXm92%2FmCRvL6AYbLNIlHmU9g%2FFBwzBhYUAF61SV9Wh7s6tIoj5DEDJ&X-Amz-Signature=20b291a1acefa6dc806a0b45a17ed0c168748b651dfada097885b4c50646c43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

