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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TT6QAA%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T191518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGtoTVGGPJita56v4Y4R5szfLnfeOuhTfAMiYSboAgU1AiEAylSXAXq4EcRy7PRW7vi6RSbA8VH9oqdaNtuZvQ%2FFE6sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOCKtBoX3aLAx6ZOHyrcAzazYK1xN0bS5MMHh2zyJUT3SqoqqAVKtTLXqbi%2F329OyvYHG45rmTTMV7A3WX%2F37aFIDDser8TKozogAbkYEGfU0iOi80VrlGimbQV%2BtqtEfj%2Bct343mNEylkyuvKa1Ato3C6VT%2FLNWYc46RETfpdRjEYN4bI9ESgnrjh8htR2ifZW%2BThnS2CPRevRoYS%2Bn%2BMKAAyoaz0jSi6NycjdEZ3B8OuqlvfzwUaKt0Ji1IK5Fg460Dm9I0HPiMmO0VjQHMnrjYGrgHDqFaKDAdoocOmOTgAVu15ZHdUeZKTk%2F%2Fy4IAAvD773p%2FxHI3323C7VgFVprogNwO0rBqcp911s1tF90YAXt7HV0bbqf6Zg8SbOogwesPDMG%2B%2BKu0Mvua9qAekgyzCHB4NAQM4B6eKR%2FV%2BXRdf8KppgrHu5Hj5hAChOKAL5NwdRkX7Cia1xD3QxjOLo6rdAADw8urltAMO15P1kCqATOZo9i%2BLlaP9C32G%2FvS15mCm8oqIYjWre9Rei4XV6jCi0J5V2MinR9kwGDVyM2bqDGNJOx6XsjK9C9tZfHuWgiYwLUS8bXpmTW6z%2FW6nT2y0jgVoDe%2BHnIuEIITM4IoUk6ZQlg2xyUcrUS22yv%2BVihpD9XpPjRPs72MJ6RyNMGOqUByZK3MLqTyaImR%2FUIswcCR9MnJdqGkpeDwQKUxpS1PyYNlCI%2BjFhjGsEZU5IeTgrWHdyXwpGUVOGdpc%2Ft3bJGvBKgfLYr0t5TxHeKN2y%2FiX8tBj8wo6hlixl5Vgi5qMyX0Wl8GZuKggtoQd7hsjpTlME6zZxT%2FPSGxTOEoksvlfexF9MEhQ17mUvMbKKRD6LNv1KYzwnBcQ7dVT202fYs%2FG1cGaNs&X-Amz-Signature=6e8c2d7b0dda023f3c87188c09f981e4a038d6a3648dab7dfc313ad84c808afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

