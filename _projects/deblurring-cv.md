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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRH4SSQL%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T200506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXrUyIoer%2FprOpbgeZ3Kdg7vjQiYrFrlxeqtcAzgRnOAiEApkWfm%2BrRco0XHBHTWEdAM5nWrDDUfVRRxnvl%2FfBKPD8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfJmrxvGCTYyUohzCrcAwdB0XwMclLLL8K3SSkmdd5fY%2BpSjW5kdmdmekX06KVh8cy4CL7IVO1AQaaUaqmg%2BmbwnD%2FoWbKyWDlngWISZe6iBgA3uJwdR6nRAsnHgm%2BhI4mcgtaaAb%2BzRnJcghOq4hE8Vh13ccckXyCtCTcWoyDY6ojjF%2BL%2BJpBbthJeUSJwJghEHLzCWMnQXzaEFBVwvNi9buyCe47D9ufukdNHBDyOI9KMy%2FwvewvVxl2SxL0Ca9yahkaa7Wgy7lH3bwGxxCeKrj7I5wkWLtKyeQOTHbv4KbG5syQmpN2KfJGFl6b5mW%2Fdttcgt%2F1GAFrd%2BwTqAZbfnRfls8U0o%2F8Vaq9hkC5ktXVivcz91hA7Ey919qKc7yizBiAiw3FPvLZ7Kzy7SNKehdEJFJRGnBZzRd28s5I7km2liC979Z6QYKtWiE7aA1nINKoEhenVGcF%2FIcraG2723SMt2E%2BSIkwNOine%2FgM1CiczJ3cZRqpZUgqVyPNvCBn4ZI2ls%2F%2BzeAiEzuS%2F2usqYXNEihSASWdNSW9u6X9o1j6C0kyLmBMgN6CrW0ILevtyQ66Zl2IGIB%2F%2BHjTOL4WRzVJ%2FrOZe0v65oGsgwu4w9zKoVb3fV2JnfzfAK3tMYLST5RJXCnbOhqOXMLaU0dEGOqUBwAh7f3LvGjZk0BSj56%2FjtSg0wGyYvD6cbUNKyjpZLQR%2B1tgGH%2BURE30AQxd%2F61%2FIgWP1dGVyrjvqgIHmqyy%2Baxfrvo8eCmK%2BxhMRzo92Y2jdnpc6WOeA3muEMJ3UdmHE8l%2Fup8JHkBTUxx%2B%2BKFiVbkkNqI0iesXafEqgu%2BjKL2e6Yqishk3O1%2FS1IQLBSzHkofXGdnZgGbwEMqycIxv5fOui5Jum&X-Amz-Signature=16c80608efe770571064198d6842f10bb8a2c0e4857454958eeb3ef9585b94e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

