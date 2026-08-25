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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCFZAN5%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T143223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDThkYovLS50CDblN7N5uQAQwBr%2B9rc3sVi6nuee%2BEUTwIgCg%2BVi%2F7PLHcQZEYVhQO%2BJv%2BgO9%2BbwsiPnnx3HyCaqFcq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDKGFE7puzcCEc08ZmSrcAwRRjUa8zmej6TLlqwQdpMt1uoiaCuTfIrqGEFsJ5cC5dFVkW%2Fc3r%2BfN%2BotAqP%2BI1qu%2FQgWT7HRfsywj5iZc1Sy0%2F5P2gsWPdHppPQFQu03pGYxFrqt4ttGD24mshe6ERNfXkkKor3bHMU7%2B%2FrsDi9Hk5%2Fdk%2FDNzd1U7sAVifc2EbdIaQtal1RGBIp7fkjn6M354t2ZZNmfWgukkdEGtYX5hfOCFRdH1KU7KetjmKMhDnkoET0ctqSCrY9UYNpbQtOjETPe6UbHKoWfarVqT7t5r9ucFm7cddZmqPJDlQ1BE9FKgr7wzYhvwTyOJ%2BDBkeO%2B4wZqBvbh27uXmQnstdQq01kImgdd3eAxHGUUCL6zZTdWL9Ndv9x31d93oJMQ2BC59CjLz7MqWzVLbPLMDvt7d2yWSxNXrnf71dX4mAqHjbvaN%2FHimT%2FvAiS4CdTVxQR%2F2pwNc6JqAeL4weoxCpwrV3%2BY%2BouIBUZDgzwIxNGK7IJ4cUkYyMuV4qtbQhze%2FmPmpLkPYlOxq7RzL3j2pOL7K4nIbLcaGUw%2BEOZAuHvRB6d%2BPbdMbkSBNlLYRe8Fvyibpf42X8BONGe26FzBmD31HojR9yC53mE2dYLeJRrJWykYFwWC8FrfhaAxjMPqQttQGOqUBlROg1ND61Xj3k1pd6Slv9XPZurgnlKGS8Q4NNHxgKHCsKgH0Y0wyYUWE9kDbYyI4LOECjTBAl%2B3IbliaqG0ifx0QSGuRCNHTpA5n4j%2BtMHC5k8hLTAjRLqEevIeiZuaKrzpaIcdwBm%2B3iXa9t58qnsbV2FfX9kiO2%2Bwnjn80PVF%2B3UgLY5WoDOGmqnu8ZTeQtSJ1mLDw1aKkuMNi%2FUxZ3SqSviLf&X-Amz-Signature=74c59af061abb4fb39584075f4996d60f69aeb33204f342668e89a834c293700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

