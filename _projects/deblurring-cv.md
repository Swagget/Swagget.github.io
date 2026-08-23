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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBEL5YUB%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEAt0aB5QKSlgt%2FxhyicRCvIIipqMrL3RQWgYUS3SZVjAiEAo8nZjDm1LWf4gT%2B4LFkwePijCc5XcX6teezsiUVMzXkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9S3gkh7nzZHK526CrcA9LW6W7UsYfa83Q%2BMtQKyQXTwAZ2fhdEcRMBr7yexuhNgEp6ltNzE7B1I4nj29lRBJgNgktG%2FYUce8j2D487xSKP8pFFlZpgNHxD4ovnhG%2BZBlw5xBDn0%2FGOQSd%2FtvxRJDv4Nvs61MJaeDW6swYmgrfoPCXuNMcpi7fMnPiUKFYOQ%2FZL05M8uVnkbf5Evqx2cXkKLYhhrFXwmgKYT5GvvoS9NC5MXi9%2FaTsS62wvhzy%2BGxshsh%2F9NA2oR%2F03pbOJ%2FprKk1HHNQJHhYH9wFK3chdihx5lGJao1NuuOZidrCEqvXwkXWQyKM4BshQ5u071gDXAmjyhb8Oy7RA2WScXsGkHsqguvhTNEdSmUKUyWDA2fbsk3qQDupn6299QPfzs284%2FA5KH8%2BRb2I%2BaWHpPQeGl55X2UNNasVT9mQ4cCMK5zU7prdSTGihSYpDm%2BTFKwOyKg674geJFCy1%2F%2FZ8xl%2Foq0880Qy9kvQG3vJdTwWR8%2B%2F4kWo2Y6veI%2BirY6kKL3%2BcwH3if5IB67e9nV0M1lkKpFlW0zKbj%2Ba7uWopPTdbW2IE0kXK5eR1k%2F5yJX3mUK0tHjGOpC3raOG07GhbiWo3yl7Kxmx5V3ZIpIPlELxK5hmeMZ7StIYCyS7lGMLPnrNQGOqUBVPsvny2bjkD0f3i3%2FMYuCK3aFlP%2B6XPjpKQu60Ba4TbGEKSOZL1CFTMlXyWYpkcmP%2Bg6t6v6u9FplwwWAvH%2BfOn8BrCnolRop3tBwgCb%2Fet4vAXXL6JFJz8qeyYRHxENiuLh9EmLR32lnzIYYvnI5e%2Bf9b0N3PNo9zao7GKg30aZjV1GjtMdLck2zep5b69alSwX5h2iTklxuydPXyVUCtR8Ybp3&X-Amz-Signature=172bba4605a637fa45c7ec070e9f1d71160a05a968b0726d77c8e8a7d82e39a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

