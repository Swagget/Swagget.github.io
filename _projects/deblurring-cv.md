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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZAV4VO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T052115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDEs6cdn4%2FaOpqgtUYlhfxbcGj140QDR9wqBmYRyvLuPQIhAOETqcSI5gb48LFtyWFFvRyL865P33EjmiNraL8u4VPBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7YjZV6ZFQ78P7bCsq3APRhJ6WdsV24aQzrHxjbWzZkQg3sc5G0stq5a4WAGtAdps8UDdqzwbyTrekqjDqqG3rpiQnMo8%2BQErkZakHnOf1HiwpSOZaPVYjexsP%2FoVi%2FEzS%2BeFTuhL1UjU83bWsy1YJQBi%2Bvx0Chv2Jfj4MfDLW1XNn10iNVtDF0OUFSiyU9L9ZwGuHZyw64fjnG0xZL0D2L6Ty1wdy9hKCtvZmY48khoK56qhWflfJDce8diQpNmSOGaC7rwmTyK62ePJjS9mUuRy%2FuveAcDcEtNnp2xqTKlEvO%2FGDluYXpwkxfYw9OMdosE94hlzLwel8ZjICaBI9UuC6vKk%2BPAkz7GWRH4sdLSb94obFi34fIhd%2FfsoLlm6L%2BgeRb482Yhea12CysskS3S96XvQjWrvb%2FWtaoWn0QNkLknTJMmssaScdOLZtPkssimDlPWfQFx%2BA3MJwalihvvaAbGL3qtVIaxHUOwjbIoHpYOUbN5KzzWQqoRD3%2FrZXxfIsshOTLUqp5fOQ7ww%2FE0VZMXW%2Bs%2BHwr1s02pVKKAWU%2Fu%2BGjMsK4nRacAkSwC3IQQ4L%2Bvu3L0ONQpKsr31RxqZUHZTfVI9ymvlERilkYwWhUk8lxpg2Ct1zujoQWhj%2FW8X0tJBleNh6bjD80LPUBjqkAddNdSeMZXMMTML0u2JOJ9Hlx%2B65glxX9dyjw%2FoMmfBcH8lIu%2FEIDIPffMVSVMbYLfzdlbRheRjhy9evr3rlA27J0GapQM1guPXKhtpHd1snAcLg%2Bbs9onfW1OytGaDrIqzvIdj9CZUVjXB0RZw4u8WJE1mocKuXAdZstQwU3ssmxat0k7h3SDYwzzUZtwzqD01msK9SKPPMbljD0OVrn5%2BbfdMN&X-Amz-Signature=d61ebc8696e5e9b067ec773fab01fbbf34a65e4666297e3a8bbc130665b42f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

