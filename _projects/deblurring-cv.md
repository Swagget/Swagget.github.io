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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5GJ35TB%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T234458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFyDJj3RHkfdMeF%2Fv%2BtZpKQ8NfylHChjRV9%2BNcvKIavAiEAotFyvjxcVsQQQD1rTPgI2CzGMwG4O%2BXyg7Sd635%2BxpQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN30ZWNLADAdL9JgtircAzWfUwEelJaNFDYmQ%2F0xGJ0JGOLX%2BSSzHUlH7CmxRTZnuBhijkg%2BNjgwE%2FMl%2BEKAcgENdBC129je5jA2FfDi34mOlDPQhk3TtfpVOR6B%2BPoYfjSzzYzpM67dUk5uBi4Se93OIhrFK1kKMj4CQ8KrXZsPCsZ6%2BdCuXD8eWekXboUnZHQONLxNUIl7iZMiyAsGmvNddZhSDtCnzYcFlGTUcuGKqkf13MUQ1z7X0A7Xkfhk%2FXGFWDYJj20TKJzoPpGQGgkunCtMeEKIpiUQZvHFD%2BiJ2GeBTD6M8RoX2KjinKSf%2FOKkQoiAnlO%2Fo7uAnjp34PkMyxoboNOh76s7U5tpIlbneMV%2BkWf5yZadIoSizQJvqdZ4mtXZyptxunW4r9dQMNty6rUh%2FDEifmAmWqG3%2FSFS2bsPfjZ6BbXJhhzCVQIeJBbAeFubsXeuwhIITJxdyj64GK1gMmrsFt6e2vOq7%2FGNSSnZsOyGd6dvlasX2mEhx3TATkFIgYIi6UBQE7OVKFRKs6g6gaeabJ%2F%2BUayK58S9%2F7gNJSDq6792pQNqkQurJga8%2BhOqyRCFvpUoXmX5UzX3WNu5n9O0OpFLkHb6iKayFCD1W7KfbNMb4%2FZfYoryHUWEgstsDX797szNMM63%2F9IGOqUBHw2U4RO7p8RBSa2zFpW72hPch%2FbNaf%2FarTa1GpaZ8dYTJuvoDjlgsMYYk7dgUji%2FmpHzp8aiGjqbGtZlw15XSoIaqLztTCnkCy2GtZ7Kugq6sPzI60ezQwdO1xD1XdUMER9LI56ux9n8BL37Hxt6HaifHNLpyL6nB3LoMWD3WtoZX4wd564ElNVid1CDJtGI4BfSacKDEysuWQAwRfki19jj6CqQ&X-Amz-Signature=4c6512fe4eba01b41a9af84d2d59d830043f955968aa15e204daa934a2159b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

