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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUUK4YUG%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCy6V7sVMYDg%2FZhSAoiAMCQDPDQ5EqtydZwfRuSCMjXiwIhAPGrmtjAmEzL20eEoczrdT%2BHYq6sVwp8Kx7airyqQz0sKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjI%2BM9SQQHr%2F9%2FLNIq3AM82Y3qgbAUb%2FffIQ9ckNYfb%2Bw4BcVKebrElVQpmScLwFr7vWjGLDglvDCeLxO%2FKDVYEp4jFFVg6FodK3Cse%2BT8g8HP1nQ82xB1vxUKRFCbnR9pDS2dUi5zxvKuvn0S9%2FkrpqNk8ow5CP1OfhhA4xs4WrW2YyJqfidWHELUzggW52k%2B%2BYR0Pt2lMploUmXpN1h%2B1a%2BbUYRes19g2tBACNdtgMw0%2B2z9lAWH2lBYMLYWSgU4IJBrm3TUwtM2QK8aV57xhWoWi3U511SZMl7Oao%2BNgCNe2usq6d8wy7K%2Fcsc4nIvyfzLPvuzvK7g65ymLALPtDFBZp%2BkTxAoniks5yDc%2FNDZ4G6BYaGb17dXk52wLt2hDKu%2FhuX4vFoqXEbYN9u3tUnG%2FtPQU3prpWHu3VPRUJozhLCrD2DwmP%2F%2FCXj5jZ9A4WytzmuXYY7y2pSRFO9bggavfIL1wTLGP1f9btT2Hui0BaKQ1UE9Zwl8VLLOtyRuAPBey2YT8DxoiG118ksPo8C1jdETNhvHPtHCMFHONrk6WUNeaSUlqkBrQ%2FXVBHhyU2L%2BN1WRnktDRarFG40rlGUsMs1%2FxS3ETyQ3W5JSMGuRmoNy6Ut4K5tGc1kJU6u0KBci9tvUAZtOA3TCNmq3UBjqkARDGoxmq1adRxTM2KOYbWkOciCZ7H30cr0fubKjTfk5eWL9s%2BUj9MYxK%2BJicvhkxjpbi1cBr9Nb%2BlHwD0LLiKooRS374bs7kArEEaT1B52crQ6OVjtAaY%2BY2C6mQh6jjO6SmH9D7SFbtvAoG%2FTqW2oLwZwMjSK6zU2y1fErleQVMzT4GUCvCGb2aR0fsIbQ4DANCAje%2BMspuUuTPFHSgXFhByfre&X-Amz-Signature=1ce7493b01596ad50294631476c36dd925e41a575680a7ed23968ef8661bbf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

