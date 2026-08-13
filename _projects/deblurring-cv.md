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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KGHTXI4%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T070653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCH0FfJgVj9WcfDpSTWk7UjDTPvNbfSBRbkCYzZkEJQIQIhAMxvIsLXAbF1homEZhNPQfIpwUQQZH9tVxNs%2FUQeM0WEKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxInPJcQ6lZ6Qjv1kUq3APFBly0SxnWoCgzx0swIgTMuhtq6d2ztcvoEElPbFjkpb%2B5CPKw0yohLepDwoGGNxMVCB3cwj0FfNIdZouXTDj4Wa7mG%2B9OXRRWgBvDPcOMauYLOqeq50Ujpvop4Fmux3N7bAzZ45Hq8fDEIgvuSwG1WVE8tbBsSuk6NE99Yh3hSLSt6mfhNi6vwZdE8rS9a8b4LXgzuCPVKCoypgTGQzJfDufm%2BMj7Xn%2Fs4G%2B1bin4SQAeOK8zlwLsWH9TlOr251%2BEVT6v%2BWvVjc8JZASsSZZW7H2ock%2Bikdsa%2FbbgIW8ihP%2F6dmHlD%2FjCYv47Hd0JmvNwx3b00K%2FlL29WySeQly6I10qPrJnZuRMq4%2Bgqd9AiU857WydqUQXaDwyBCT56yS73OiEiVWRLIbr%2B4hdsAGhohLEKKkXE2EIJdFihA0WjV0%2FJWeb6gdJ5vpeYgpZdv2oFmBvI82i2k%2B2ZDw1Dn2OM%2F7cKh%2FDpkXcdhkRjYqzyqd0UFH3jDswcQVdeRAuUSa7l3WU0m5%2Ba%2Bsu9UGUvcN5%2FwfrtXiUYFHAOphTp%2BxznmwWN6VgfVqnSmEORFODDlxd4mys5bGWCoMR1O2yDCzWpN0dJIi5IK883%2Fv%2FtHPtSCVQGw%2Fgoexq4wXGqxTDpuvXTBjqkAT8fXeIqQ5orPxdL%2Blf5wcYBQFI3bYuJ1zvY%2FAJJs96IArE7NODppQOiuI%2B%2B60eLOg2bnxS7RRc5t6qOn3WCe48rqktDG5innD0ZW6a%2Fi0bOY%2BR2CinEkqOxkd6AEtT9AboSwUpVlzJxFaexZ7wOp2Q8jiKFK7x9RSO2xlLsEIkfU398rXa5aORIST40pCWhXfqZAEiZPvc55oSYiClsQPnSL%2BTz&X-Amz-Signature=2618fe7782d14bc5ceccae798c69ed49decafbd3f13a37c992fd8efe1ff0f9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

