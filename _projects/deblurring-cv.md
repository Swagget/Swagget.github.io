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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BW2WREO%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T063724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAalpW4kn4aqNB5VfZgnTM6WmaxZQblPrGIHPm0wbIzOAiACfN5tJcvqHAymip48y7FUuQwpxpqhdpavezQoN7d4VCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0c6Byvp%2BUq3GxdwBKtwDRv1ZNCPKMIlKg0TbriytOdwaoDm0ChXEhy4HAtQ8yaF2BkqBFpnQMqKYn%2BovZ7PI8Ux6%2FEBVnVt6VnBzW0W7AiWU0eTpKdqmfmulzY1iabx76m1ZKGQd5Cjh4qMoQ7KGBMh%2BvMoh9BlewTAZaOxDpxkCRDav3otjlnWamz9XSsv7sC%2Fmkesk6TACkaymiKZFQsl7NGPZCzYfsVsKPBlvZmVYzxxWf0aVlcCLaWIO6YRKYEEqpjC4tKR6RMgN%2BBcASlAIFNtugJBYvhqSrncokdCj97Er0nk5RHNB4bLhvc3tGfNtaBDbcstQCE%2BdoAsQSXAB8oeBFf2GbDlKosnIjsLfHDrNDittyZ7kR0frQTgRx%2BH4mhqufVeDRUEFfkmckzWYUJgopqi0OmjIRJU2hN3tCyrTzwp4zSnU9t4%2BvdHwJ%2FE%2F8%2B0sJnOV%2Byi4seihZ7%2F3VQG4o28eIX66rINfMNyZIQpV3n4K1Rc2YgJQxv4CHgsGKG673N3xGXz5EOSqZ5mCgXjSEfYFPQLeE0FBgyAZDGkoKB9FI3YyaCQ3iWSAJqN9us7Ijpw5CJXV3sBeeQ2sjUQ%2FoqyF5k%2B82RfcUIjGKNXYPz72d3uV4YtwWhDJ91hVYHHdpJrVYlkw%2BrDp1AY6pgHIpCMm1Sas289p%2F4w5lgBvddoKzRMybb%2FwZMlOJ06Sq2s1w3%2FZQy1%2BsVfFxAS26pxn86ylwp%2BLBuEfkGlWshbCtgm9Ew44WxUeiZNMJ0j3riLYsdy7w7HJHOu8oM6XoYZ%2BjpSbMV%2Fx6qvRQDGL6V%2FP%2B0QUC%2BJbNJTYYGrSmmuM7xdfABOanCbYmqY8r2BMjpJw04lBTbzZ96PTwCYZUnQMgtBb34S%2B&X-Amz-Signature=5d3146d6b492d0b1befeff05bb16fa8c4f41afa730700a2f9aaa7186cd9554aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

