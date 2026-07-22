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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BUWYH4L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T011810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC9j6qk1vL5MgMYM9a9Ab0Tti%2FZ8JwCb0%2B77jBYOe2XEgIgEsn6NQKs3QQhGBwWsY8wa3HaYrenT%2BCfW965ra1%2B%2B30qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxz7TmQnI8bjO3CcyrcA2DB6ED2lcDR7wsqYKuUzZ9pXkSQgdnExJnoQ0uVk9pzMER1JEKqav%2Fc%2B%2BiRbIilNKC%2B2E20JRmJcGpVZbOHsvl3cflX%2BcTFP0X7rfFxblBJacQtapHqalpLcIbVcoUhC7cN379dnIhhX6D%2FduZW0L9xTP%2FabJPzrIjxY00lzCMD%2BOhqjI1%2F4Vi555cXgNYr9kfgwSWNE1kWqvMgqYBdAODHuLKPyyoY9ozDLpGV8E3VcpkF7yl0Yv1CgtyJzth%2FvHqBGgj%2BfNWCJGIdyM4oDUafwoPjJfRhcH7Eq2FKU3cJLecHaE0Cq59rZzS52u75LXnZf5qfYfoCm9u%2BbBS3dgvAqdC1bNfpmjO%2BYWfuZuK1ZkJ8sYuN04alPC2S1zAQEgoNji%2B8RAgSc7ZUyUDpAf2C0fTWeLt1YpvygsIL3RlHQPXS3JVd3VSjvKUy4M2rj3AjdSn22cE6%2FhtEEnFjigT5VR2xZ5K8JLK%2FeFL96ho0vJ2vVjRwOR4i6eXQO2VlQMKkuRDwte9446Oku%2Fg4rxtzKt52urPjtJrZRZLDTnivLyGVaZ2tbSWk9QK2JBxUUJi3D5Q93e5y5E%2B5a9x5qv2yj6xz84e4cZoWmoemyiQBS3KogiHBpajbBerZMJWSgNMGOqUBcGB18KNZ57uTLRBFRjNoamHltxVjIDtH9%2FNDrnLFxxihjKMjw9BqFnnbDAv7Cmfe4Dp1ZZtfU9BE6Y9mGlH50%2Byq7XO5oPHDBpK1BvuIN2yGIMa5xEXzN92vhBIms7S8UfLJKwjTXL9YVOUxKWGpQFnBlndxsYMcuQNJAfmdeaiIKGr4wH6p25bs5r1gJ4fXuSM%2F35o3VYPtXXTOvvRgNy%2FxksYs&X-Amz-Signature=cd2b5a47a9c943b4330d464d2eb207a4e068295be6f4c542bbfe0f0177b7949f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

