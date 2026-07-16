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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EAZEDS%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGmNVaU%2F0bdD7LDUPQ5tu9gkic26UzhaGPBDp0JP5ztGAiEAlW3%2BOB3mXL8aPyMWP5YlSmiI2KkuxLdApQIRZiupxS8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEnpNrKZxAXi4ufI%2FyrcA9pPZdFmkhIZi8AfmUMNb0WPCCsIY7%2FsorMruZl8eSB7m4BwcN%2BqRuw7MNVw5n3azFp6cKruOw93fEJCClaxXhpiMIj1A0G9rDf4hOHo1V8w0JjdUbEmxQgAjl4LDmA7%2FEH0KSHch9l8pBrmjxy9MR2WdLenQLxmnr0MvR8jhXwHyYsuGKWPoZTgFGDoMbRWRGxANWfLlQRu%2BTMbMYcP4vpzNSvnb4kzfNu1c0Ss8NBpQYtMkcG66lWdcEjDKBobnuaiJ0jry%2BsPZ0%2Fqm1bH6P2Q5oIPJU4iHROOCPxjGpr56dCtaJE9XYW7LvGwXG2DDngASFU8pw8KXSG3gQeLCbR48i0wEEW89RHkEUqaCymb3m5Rt%2BpCLi6p3ZZX1Ie10OLPc0MiNSW4RVm20wPGfdknLj8lEwiiSe6kNwvRPTZetlW%2B9OVWXnowFxuumK9b3ymfKQQA5MJ6Z0u%2B28%2F%2B21z8HiXUWdYNKZ7POCxrgHQG26jaxKJqE97pktQZwhM7hnPY%2F2sP85NwSYqmelYgtkL%2F8VT7jwj%2Fd6lzH1iEi1lAn05XEV0UQKULnXo%2FLHRqVq%2BwHJboToY9Y42Ei6vpppM%2B6oED85VQXkKyHL60VcI79d52GUCE5xWmF3g%2BMJ2M49IGOqUBGwoFPRsfjEWWbP6A8RNgjF%2BMA1PLY0rcg2xHI4ZuJW4KSVALZ1SLqiNXh%2FKOsIfFICaxj40m8X97A7bnxXebS0F%2BZtO0296znOU2%2FogJRVRKSuaCIGSSuPWZ2m2d05%2Fo6T%2FQaQK9Wuwy7EWTOPBxnfOmrWvs%2F6CiBEZW4Bki7CJSTQlmZn%2FJZZJioCDKItPP1Da4kg%2FYifTsyadcrSBMCfsgov2z&X-Amz-Signature=bbca8caa045b88e8a348489e038cd5694899937fd165641bec9012ddc5e58d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

