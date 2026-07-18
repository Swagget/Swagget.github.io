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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHGBFGU3%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T174427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrSoBaVgvyhv6JHBrrcN9xDT2rj8Z4VZwEJeiLs0e4EAiAmbbpwhV6CItJwbM3WghM5j0u3sJoX41RW%2BLj3rmh42Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMSRVJnPMK2rrOACenKtwDVCkHRkYbQZseX7qCmdJ1XXAJYxI%2Fg6BgxDnSlF1oZAgQIHwwxFljISxhRgerPggDHif1LWj1OrPmp8pafEj9fjxMmO5p2z9dw7VAg9Ph4pD%2FosX9onJ01Mt4H6hpGl8Ud7Szv10LH9I3hNXA52HxSQb62Rzc%2BAGxGG3UrfWw%2Flb0Jio0ZANDqK1G8V%2FlFwUydf1l9lNwzPL2e3UJ6SS9ll4DeneLLEppkkML%2BxP0YpmLzTadX%2FGFvxE8osc8q6qYcRZzOaid%2FngZz%2BZVSJJSvkBYS%2FmTTKrS8p2JnY7PIrCkO6s0i%2FacfRsu4nmHgA188XMEm1knGj%2BLYZR0NEcFRnDIiOeUZqJn9HJ3pemFoZF%2FB0Y%2BS5totiLSufW76HS01nogUNO9ev8Jy65EC8ZW5%2FqiMNjMCXdnhThR%2BcctQSmX7ziU9Svw0g%2BTFKIJHVEdN9ckGixeM3pVgkRgNftF9piFtnuJw4do2B0CH%2B6erDCGz5J1v9ZRJqYYlHzN%2BXQqCtldq2blTO6Aj5yz7UhADAifXIqd8iQBx7w7bHB%2FZ3Px7LEQK1z4rTrwkuO3j5CskcvQYmkIZ6dIoKUugfS3iUjaQUn%2BfjxxZ%2Fo6Ek5lJyvlFMtQDjulK%2FuEKckw0uPu0gY6pgFnIFQSUbT7NhMv3O7WJtr6%2F4PNnbVJKIS%2FNVd%2Bn0jE84%2FIsG%2FAwniStrpZNFpe4iQirkuPQwrTlJKj0ywt6%2FCPlVAVP2IS5pllsFlPmmbcYpdfh01jPiLUKG%2BQ9AOii7IV3pvDkmCamKxbIUDtFtBgrdRoNsy5YhVUfZ9FBsmfwJjyaxHEj8%2FREi415bXy3zGpc5CjgTF2QrZhD4jy1YKKD7GXtIJN&X-Amz-Signature=cc4d9f596f32d142417d55c1b437f10dfd8e712a2f5bd2b15a342a72a36e8006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

