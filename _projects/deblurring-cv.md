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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CMQV6P%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T145836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeaH%2BCFu3uy3aAZJhKozhmLPfxPGMZEE6XaCsvcCp6DAiAZU7HLdDrKciAs70QPd2RJ%2BPiOAOrv4gxd8qBwqFQDGSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM22YMWMM0i%2Fn%2BHb7ZKtwDyDPoi1EhmNiqwrMAiGfke0tfZCVO2N%2BW9r2HojM%2BhP6LwKiHHG33QQusJF2%2BmimmOshJqDh6hPsy3SFj7wM7WLQkjVaO%2BprGEJdT1xkxLvFQog%2BEOe0sLEH%2BI2Upso1yeMOygqqvbuLdGrkCQiOHkl8TcZ8%2FOalyYHTRoofjAO2Wwlo1FJ1WHBwcTQFji3hH%2Bc6Jt4qiK87iOZV%2FcQue%2Fh%2BnosmUK316IqWzP%2FBwj6M2N%2FoDv%2FYlYxLJsw8QRfZaagr1%2FTkWBgmmxxlHXD1R%2BJ5vK42MsHhQR9awBb3OY5VvTIqSd4gOPd8HT0UVDWTjb1LeX0AsPACNV0o4VPmTCaIYcmxji0AHw3oFx4TchpA39zVmTFlkpd%2B1lZRgLZQNm%2BhXPeDNI%2FfBnvtugPFG7Taky61eeIirWQaENSsWEg7cJr0BJK9vKyr1tQflylQ1MsJ7HpstwIOfe%2FzBUThsx9sGD3e9gayj706hHk3tHFKrVE9rUB7My26Uy9uGO18FcggFQQcR58AJNVkA6Jrwtw2g8TqXAZ4r14iXzdl9UuOVE8GuffS%2Fpz9wRYT9nVizJKpJqJlP%2FIhQePN%2BPK4fVJkGr01azQBg9qoRPk%2BaADbZzyybdsULL010SHAw%2BL%2Bt0wY6pgF3rbscYtTLNl5pIqPXp7K4SbcBTfuOf%2BDXLl%2Fgi6O3CpoHtGAJ5NKEGmW8B0LgLBt0CcaqNs7YAlADCNW0cE7RIprw6lKy7sB8Ao2jOARgkbqcaq7oNd04pFpZUTPNzMdUTbMlE8utNZ%2Bfe1tQYeVkxnXb7ZrteicioLWJbmQL%2FAl6Ug0CL5U7xKAWH%2Ffhq5pYYkL8h8VshD%2BpmGsni6pfvP6znM93&X-Amz-Signature=bf7c1ae581e68c819f42cfb72ae13dc910878ce6e65af744c0cd68dadf4efe33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

