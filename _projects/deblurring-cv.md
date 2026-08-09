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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXDSGI2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T092616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHE82gnUIZ8a36en3GiyK3J2QeqKtau72GzBj9IXW%2BQVAiBGb41hoe3BcZ2SMGJEi%2FsqBtngNsvV5La5L9fL8Gm7ECqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYTcxLB6hCou430SZKtwDOcjZLkOi5tKSHcMqLhOPxgRpQiPJJr5JvQfXGVdskj5S0aKXrtWMQvOTfM9d47xlcwo%2FeIKvbihMuBw3cbdTjK7UoiJKFJJ7G3zae%2B4MJaT%2BCoJwIcu9o7xQD%2F%2FwNiVxxhoUwvkv700MtvvTRg5cRMSIN6OexrOx6i20hIXEhUtF%2FI2x2ODxl9XoRmR7LeEFeWnjfE1mAIE8pnya7LzULxY0%2Fxe6c76Db1KDrw%2Fd8z%2B1%2BFaPOwa0Ky7KhRv3xKs7EidSn8wNAkaUn2MXoR1IMuqZsM%2Fc7AA2Zw1UF7mWInamhe7SFVxj6OezifqDPIEQFhsnD7Y04f7xOMlzSgFttrtaAQCxxXMIWUMsOol0TeeL4s8opK6bDRMsSjnQP7dY9g5x4%2BEVBdQN610nBMgkBDHwjA9hbghhuWuH3VQILlX%2F4bmI79UmXj6DIPBXwnRV9aNFrvUco6JMnxq1vV5o9idLl1RN9jy6Lw1KobHy2PFvA3rZ9%2FJyxe6eXfx8xwIUtwksvkRMfy9XxPF%2B5ekdzgPePpi7led42ocIjY8KdgVcoWulKbC%2FkOojEBQPCrwkXoptIEFyln0EszbH98k1jcIku6Mz0S5uGVWNaIGIi%2BlK1MSuODHl8GzQj7Iw8vHg0wY6pgHOcYap8MtiTTOSM9v%2BnSUIZyAdiciBSqYWSHpAyI7IWYOKnhl1mn%2FuAFa8bWjSra%2FZp8mk6u7oya8MTx2ByjlgGHZHti04gZiIRhIfsL6djol5TIVJPQ1wa6GM6Zk195D5%2BOmhxmdDJRSds2l44AV4%2F%2BQjnur7QKf8Uev8JUU4iK3i3JDEDMSi%2FokzBsCCHTlWGcRLX5CkkXA2A9QWLTKVwkAHaM6y&X-Amz-Signature=e82a3313d7e678a0bda34334a5124145035f0811a8c8c3309abfd45c42f1336d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

