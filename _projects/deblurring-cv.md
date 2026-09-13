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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZO23OY%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvL0ItRulBW4SYECSvTXqQX8dHkBlEBh57pOVCansa1AiA21tUstfg5J%2F6452PdY%2F5TDZY52pNNl118WQZXDEsl8CqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx1eMzJwxPHOctsK3KtwD4JCeS8AXSwu1FurxCLJPda9NBH20OgipBI6ceu1zFZZykKQ21p4USkMBNAS29RyjNyeGjq6qVi22ACArBUvdm%2BZlADZN%2FB1gJ3diFDBnjhKSZTMHsk2sATi36ZcjSoO3TIe33lmg6gono9Tk%2BUbr40b5KU%2Fqpwb89BZC2Gwo%2B0%2F9eGAUhcwBIomUPa7jnvUCkoi1DinXDiDeD5xn8UY1SBhXxokPX4adcu%2B08xvI611Gz3rgd%2BP4ecqvliXCIKF1p7rkqHLZ7jXKF7PZO0RelXXv%2FweXIKVV9FKawY7fLVmSJiZS%2FKBcAMGgS0YCED%2Ba7q19ysns5NEyKnd%2F%2FZW0H%2F5epV4bAxlIgrb0onK23rADQdGhx%2BcLexXQCqdvRqhtLKEBmHliwoKOzPu1MhefxacLcrUPn74TlFqvoBV2KVQyf08yPoTC8dgkfasdi6IKih9zI8v77LhVyh6FKxgK6NO8knJMcj8R6mlMXXAX1roK2L0VdMp0Fhz7AWTDUmUNSqIAkFQtyq6HMEHcEBcKBY7apFd3pogJnWGvNJ0h8SncduwdowXw7OBHXTnRSxOWU3JLKk2%2F7sDj%2B7xeDB8smHvIwmeqtmP6h06fGd6Oyh%2BdlgDHHYlSrZ2dLiswjOSX1QY6pgFCenjm%2BvCeqn1uFEYpmhrXxedzTOdwGaurNVKrGoTyRyguVXYAvCnkjUL9IqFKVIRfG13HqdnRN%2FCssBJc4yvRFZx36fa875NTtP6CuOWKbGGTNzZiFs2tKMK7eXx%2FhEeeEibUmlDjzTM0BWKUK2DW3XGnNYGV1w0Z4THgy7%2BKcQTYQpdFeiar%2BGRrw2qVKTM8OTZPPjfaWFwt573rSDXwbm3E%2F%2Bvi&X-Amz-Signature=1444cc2cafe3d29a558d2750d2f6a3f1e2504b7643ace9f27514be0019d8025d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

