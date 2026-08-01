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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FB4DFIM%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbTFupd3FGWCKpPaVmZFkmplp3FH2ZlKHgriz3b%2BswtAiA2WAQkY45vx1C%2B%2FkkjoStwhB26U%2FU9uM5HzX2Mj52IiCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMarzkgpfBSajdtSMYKtwDLuI2pnand%2BPZq%2BFDQl6vzz7sp8%2Br14aHsCQQcwPU1%2Fp5TVu4VP2r%2BwJhQrDqUZDrjUt8Nw1Kj%2B%2FGHD6ONCfQKJU4PSHzRtU0i5PgixslfEHEFZMnjQFT3OudLOCrJ1xXQwDTTYJb%2FRUgRHH00xMbee2mL0URCsNCKF2lL5krDxEdo3t%2F357CeDDfprVURcY0WG1hnV9gH%2Fk1%2FDQKzTJLXUJ6Nq8fiZpLmh7unmM9gpP7iSOfdXaWO7PGkvsocLzv1aEtCMbGjQocuqUV2zGVEon6c%2BItBTs4VH66VDqQFK2VfEUtVmwIlvXMhPc25A%2FbNPG%2BQEIeXumqTDyRYZbg36tTCMp%2BzeCqsZv5aDf%2Fk7JVjFcqk%2BK5OJ2RryhEbMOOGQhalBqTL6lYxRpXg1PSi5wzV%2FzaibwkBUeKKcVjhCzf%2Btuc141Pj9H4hQxOyduDQi7Ckw8s2gWh4l3rnR6dMBR2ghO%2BA8SSv4BT1iBBxDvrfFeVN5OUu1xGeWwUxaOKOeZpvDZVpT1FynXdVo%2F2vqWhJ9iMiiWotBQxodLD8S5%2BlcUVmuJmMXMmqKYzqMYEEAblpw6gb1Niycyq25H9qjO4IuZUvDhBGLWmAErDxeI8yBObTorwcwM4nSMwvfq20wY6pgEB3leA3CXRQp52FbsW5FuDwkxIQFCk3XakhKZ8LyhGIgnNWrTgOY9z0N5IGoLTXXU8ufJTnZqHXOAv3nIwatdEJoPUCcvk3QLRMsTZOSBn5PsSqPUM2gP2C03w9TXmJT%2FaEgTmdUC8clcMdLLXfFWmRmCfaVWc7WYqcZQ%2BZFx%2FcN5QdBN6rKqsYQh20jsOPMAv009i7Vc2DmYGpWh5Sh4p0dS2O51%2F&X-Amz-Signature=83fb18d04e3f4329f58243a7f8b664f66ba6a0c3a7f1c1a522da4cbe44e3a7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

