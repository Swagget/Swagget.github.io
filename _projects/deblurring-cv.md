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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHACQRH%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T224951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC2CyQJJV2havA9rl2n82bEA2JN%2Fdpt%2FOipelSoYfFNyAIgYL9%2FZFn3o8yXukwifu59ZCHfW2wFuXS5WqznTA0YO1AqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc6aiqdvs86sO2HMCrcA81w2TBupDln2akkcA6YZrvU2rCPhyDje%2FBTNG%2FSMVrj6lJGqu8QSVmgMs1P1JXhHCxSvWBo26A3Q%2B0dqXP2iOjM43zWH1cukrtc5K5epScvux0IP3Lpt1xqPz%2BZYXOsIHM3pHIzymhJVUspShyZkXaeyjo9YIQVRCyU3CXWgpN3Z3DYQl9tEE8OC10Ew%2FuMmXlZGtIenseXkfSZnrPJxZg3aB5w8xosKqpeGkHG00KUVbgta9GLJj6tBkUJkJCIWemYZJ8KlhEP78Jora43lZng9NCgvwnjA8KIicxdvWK4Eh421MQLpf1bYJPHss8mU1fdLUlt9uGvEO3OQN7ayi%2F%2B0Q5foUGFOQfVdqlvj%2FiKsTdVeLRswSAqvb7r7Fmf6a0Vhd1xGucwOI5N6b2eRhJZF28SOMfjXs2k4gI3JdSdbdF7p72tciLcKsKCAolH4y%2FNVZxMsN7E3WPOuWpZ%2FNOvsCv7%2F5zHESAVzMH8adtcPCKCLCr0WTra4q6XNQDV8ynzojeeo2VhDVh8EKdpEwy%2BHkqVkJt8NlUGw9uuc5bPGkz8elFaCYJob6sVBMuY0HBgdqD3g6bX1N2M7zKihCATTBylA4nrXcSEBK1gpQNnowxdz4ZT%2B2VlmVdjMMO%2BhNMGOqUBJjGdNoOKJ6HyhaoR2R%2BTbKCGPBDHm5GWAandDcAHX8IBRWwq0NWLp0%2F4bxMmY%2BmGb6hnRGH8rSZV330t0DNT3iTxkFA4kuTO%2FYhv7TdJyq%2FZpD%2FtEj7HM%2F2lLO5p5GRWZc7%2F1qlGeufE8K581W2kXtMGkyiugk6GiOYBFu0TIE6AsXAkh3rcNxJofaiLPkTIA%2FzGHdbaVSrbXp1oF%2BKk%2BXd%2F9C5U&X-Amz-Signature=7c6976ee7b87eb86faa3d77e6ea69926c8081ba0101521140c85a0cf69b06171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

