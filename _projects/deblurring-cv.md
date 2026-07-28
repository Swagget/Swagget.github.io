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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657RYLFNO%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpM6DGZ3ptJa4lB%2B8kQ05qogJRJ46rl5Y2%2B3xg7Qk9yAIhAP2H1KBBKimY%2BZQX42sYD%2FLMHYqH2KzfIbi7ts7OnE%2BxKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoGtIQwMFrmi%2FI3AEq3AOaoXsDSj6H5ieemtppDAuVBJPV9quMGdL0cBaWtJ7Ug7svX9wolX3wDlmG3%2Foi6HvWLfwDWNFz8UeiXZA3hEUaIJyipTdyQC2zHYOcRJ67m%2FkN3dKNvxTV8xwP2rWxoGi2d1BQK8yVtQrbX2ZL98WYok%2Fm3bN9rDme1WuW1PCYHgilOZj%2FlBQuzAo4KYNazAcvtCjZZKCzpr9hc4za03U%2Fb%2BGzRQP%2Fa2XcQZxw%2F658FXnMFa6UYuyQG64Q%2B2vuig4oYSzgwB%2BZSssCL11KnxtjJu05RbM4UL6zk%2FxzOj5uX9%2FrtT%2FWNsfTrJ6nfBpgEPIHEf%2BIJqXO0UWnY88bSYRIqlmtUKOVycTCHJhEeRf%2B6jZWQTktr%2F4SWomJudO7OO4YLmxqLfYTK8WZCKfMX7%2FC46NYX%2BfIt%2B1INEyHx5X8x%2BjM5JytVoXfv4NPos8%2FllSuRA6mb3%2BJlNnTDsdC18XEvp8E%2FvASKUR7rjGmp94ZO6%2F3JzoduaZzLfwPKH79OZuWJpAhers6CGAhMvPTc%2BeVXXA7X7JioW5PewOQspfP4rmlrxbFqYw9ebXVFso66qNSnZm5A6HFTh9GcX9BIgfqPTZsEgL9t1uYtjqC%2BbQbv9%2Bvg6OzRVJUnf2DdTDN86LTBjqkAaOFV7RKAjtSJ0ZRxnYYf2PoBxJ4HCms%2FLc80kkrBE2YshO2hX3YuVOc83UCmbo2UdqtFY4OgT0UUTzy5FBa%2BZwMbZn0S80f%2FilaQVs9OyLwHZxIQ6YqWdVo9Qr087si7PcAatbrw%2Fj3YIdFJYRE7AH5PE5C4j%2Flql5VCfQagHmJ3WTld%2FDF1ScSyFbU%2F40gTmGm%2BV%2B4C4dB6MSfOEKDOAN5EJRO&X-Amz-Signature=f2e6fb64dce7be50145885423b39b4481d3aebaf3946c57bbd88d70f05dad844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

