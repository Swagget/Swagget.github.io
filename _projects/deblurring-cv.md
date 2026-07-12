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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X74X7UCU%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T154522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDhHpPnHhPnBOXy6eVeM%2BntV%2FvgA3kGxWmBU2SujrtyXAiBZ%2B0VeVDdD7ZCML7xlvz82GMT6qRI%2F2grd2N9N%2BGSvKyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqSA24Mn%2BvzlRElhEKtwDHbhOH18c%2BXkRDOYlBTe3T4V%2BPi4%2BC%2B5JJyqo5sVsFhMg5FKl2XdQEnRNmHcnZ6RdTY6e1Z5lCMOVD%2FUWxxXkBtIHi4QN6hzrAbFTtVxWm%2Fl6yqYsZd990FL8ZJJ3H%2B9RZwYQ45MptWJmY%2FMUlRI4buKMfJInVGC5pui2CJt6ClwwbBwm%2B4cPIYaiSs0zZWKnt3eajgaqAwJ2Cgk5wd82WYW4mCLyOP42jRf53RlLF9GkpHAKrCk%2FrnWk%2FWC%2FpglGI2JqzYhvOMXcNhYNFp8Gks3vxqBvJ0BwUyjEjxGZI27zPAuCmqcLQkAiEU20d0aXdW%2Bd3%2BXaVAAd2c6zJFH4j25NB7j8J89725JijF0rTeQXKEV7kDVssj8sg8%2Fl1Zq3kcD0ZJquTakqOzdX9znypLNWOTRnSoGKmf88mecD8KMwjbCK0ZXmd7ZWr5rvQsF7VJTnVKpYlv9ckLNY81pqJs3xRzuCKQUdP2l82TG4FIZJtsfSIWmk6D%2FqVQc4maaAc%2B%2FRvNpj0Zm9thcbNo7aBhKdJExe1DJjFqDHKb%2BWogIFmz80soplegnB8ucRfQoo0CnEheIO48UEsaf4n2PIZVF73RGIZikp%2Fpu7S8z6Wpwr1%2BN%2F4EGti6UuBqIwyIDO0gY6pgFaG2i0yA%2B%2BteVUJuz2cEUcYmwVmnJjCBJ6zM7YcgK98bGAgj4z4Dq9woVr%2F74Ted8g%2BZGyW4GEtx406YN4t3AvMqope%2FtRRmq85g1fp0RefgigncBe2Kb5Scfw0mQ6aWE8%2BTXIZSFrVu6tpmJonxxr5P%2Fv%2F16cQqkTWhNPYNrZQaPcy9Y85tj6bBp9kKzlgFBuXA0RYv0T9a9RE%2BEFK3FLQU5rnmBW&X-Amz-Signature=83f57381e5e864d39a6c3b228bc2185bc3126eb9a32e805cef8f824d92e9eb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

