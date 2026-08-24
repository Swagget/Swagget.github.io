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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Q6TK6J%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T231200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDmBGHZxZFRdeMkKg2L522urq3A%2BPF%2FTlmMQgsNSdcybwIhAMXmN8eFDTBVg8ms1ZEWqXRZilHhQ5AXjdI3syvnmGaIKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4P51qcO1XuoTJ9gq3AP8%2FsJDYElP4m%2BarmWP2%2BmTDQWUiYnHTgyhxlYtxAJHTi734%2FyQ5dAIr1teYpTDceiLHzc4kTAOtzXq%2FqzuVu%2BG4SzCSPFjKW757jZVr2SWT7KCS9IWTvklOizFw1lM0VFBWvKafNHHHCdJoxGBpvwF%2B7iEMbmeWwRhQiD1mp7w9UxWXeyYyIXR54pWY%2FjGKlOW8nfKdPW2ec3Y4BunQx331rFBIxorGZZ3y2etikvbZAqyB%2B%2FSP1yy1t2r%2F%2Bf%2FpOL5PQNEYaJU%2FCI4%2FCgSdQ3uuyRN4CNtk6kzIt3StcPVE2OTAEL2%2FlCvDgMfkk2lRuMYg2%2FbAW7L0hH4rwxEg0XXglJ2w%2FVN9EVe3HVu6ywgtsxltVdJGW7kG320SWrbAcgrAJhwk6Tg0E3HP6NE%2Bdr3f63wOU7TVihmTd6xyWVBo%2FIgtR5TUcKatJYmiFt0yJUkfWvnXlCL2ogARU%2BQZPCW8sw7EnKuDmb8KKSBpPQNJQr60kpu3adgAoCwZWJ12Wn6%2FSUqyqQPAUIpC4KFLoT8nJ5FLjXVBFujcxNOd9CT1wyq5OgqeAbYlkmfjbfh8nAAhzuXfYxOMdVTj4o%2BWcwXu4BLGUbzHJtmGZp1UQ%2Fs3V9ArQDPmM7Sf4jqrzCSjbPUBjqkAcA6zGmmOoWtp%2FlPNs%2Fs5WNBzsuXhumAihw9B%2Fk7RKPiRt8bi1ILU3xDiiAWjuqWw9inUJFIgJvyRcp0MO1XUH5iaZf2hv3WJ5JY7HUmMp6qT7O5AKpR5UyCcFifdybrhXeglDsqUEXDreuzw0Bgx%2B7bA4rVhWTMLj8HMyeSWsuo9accuHc4jdi1Xpe70PnABr%2BtWxx2Kr%2FDgPvYmcCddwZzfdlw&X-Amz-Signature=a0a29905314f44614d90d83f367c8b11018414307e623a69f62951e11ae0416d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

