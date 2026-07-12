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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL7ZVP5I%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T213641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHOv62sU7a4YSnh3Czx0T6o0BwopTrTbVvMNliSlpWAUAiEA2vpS4mty%2FaSxrr510LsBx9WrSf14pDZU81HGUD1SC3cqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA%2FD1f%2FEJ3zX8OZbyrcAxidaIj%2FlrZAlF4bOaUwzNFlSxQV7UzfJNwLObktnBZ27ZUlL1MSXRi3D%2B1IAcYZbaC5qOJyGT0rfjei4FLkv4W6ygYdwqG4tl9q1VdIk1Z699ZnJ7qZ8s7XyzOFPkc8eHGIUVOaBvjMHOwX0dt0%2FwWOvOvjFjVpy7q3cbLWOHaTeQ6Ohzjk%2FYahFkTg328sewJtlSXECSqjeuQwPCOBn%2FH0tCXWO3hMFEdJ%2FcFxFUwCFALBwuTI%2Bwr33xm263juukNL97T6ubM2Wxu%2B1lvYP31ulo0ATiDrBaVwahVt8104DY%2FeV6RcdETWlFBRCkgY7UeEj3re%2Be2mG2BoJizWLT5nCNLehhLyISK0twnSNTqPbf%2FsJ%2BZ%2BS5vv2b7%2BX05U5yA9izM3tV9tRL2RjTcmOnekxDuK5%2BMLV0PlU3j8eT574RZe478BJPgXEPhPEAxPSIlqGwnFPdlqD3M9JZO%2FPFYLqS%2B%2F%2FULeFKEiJf%2BN7tBkoZSvaKgJo4K4OWaNJy%2BlGoPhTAuJq3Rj%2B7tJtgGdYbenf35ls6xwDP7B6uVho8O%2FtDsNUTdpQAcQIpEubICjiaMbNI%2BJvZy1Eqz5SjuFmQM5l5KnB9wYVkDtehPuzDJAnrRZCvXqnzo3pPfhMPPxz9IGOqUB6wVZEhYBcTUlepDs3NoSCq5yzben8YFlMQi%2FT%2FT%2B1ZK9uPVHrLseJ7cQtjm3UujiLi6uBCNsort3MnjawgEyhT5P8C%2F1qMElybgd1CskfSTeBFoh8FHQNgfQ8QIofq2KxwhF3%2FgEr1Dg8zsg9Ccs6NXN0QjZ4pqpbw1fEu%2BtgoNUzP4sA7lzCGYAuZUOzk9oKZ7QsdoBdp5xCqdkQxBpDrWD%2FunY&X-Amz-Signature=819d75d103193c583ac80568e7adbae7149a0d1d5a0d4ea14cbfb9eb7506c752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

