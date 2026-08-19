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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XU4E55M%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T191615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioQfS0US8rA5MUv7kTXb3JwU8OLHcp9XQnLIeHVWsBAiEAw6qCzEtpJFgahOkhzgwA6%2B%2FZH4YpFryPQRHZ8ETWBZkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDBu671xhO7bgUsh4SrcA2p5wiEmdo8ccy3UiwqeIhJr9NgafzduylaGCWmsvhURjGSQoz%2BZEKQG%2BJpuTZXslAYpEC90S5Gm6rImRnMxJQsjpscuylFc94x48mL3Ovcr13BCEUala5hSbah%2F82sfXBmbDf5K0RuTblDBvjvG6ZQqcAOD1kcKcYc%2BYBO%2BbRR8lRjStfCO6fb9UI45Sw4v2l2CohUY43pkjFP37KUoYKMiNFKxb3Ui3dqDo6bO4ypgoxlsMZdwuuQHCdrHZFshLzAKSE%2BjqCgojdcCvAliq1rKGuJSj5e2c0wmtFowpnjf5LSK%2F71o6O1oSXqIL4cWuAAfkKsFZMgiB6vsPzNhr9bkPL%2FqkwuqtFTS2dEZsNk3%2Bxxwe%2FQWIuMCDVnPVbP%2Bb7W1hpPV%2Bg0SvojrJt37gZkW1mTWNADdRfmQsRd2MBOE7sePds9QTtZ218UPHWuA02QZgc2xxNf90Uw3uUnC5vustfeun%2BY792yzxAQX%2BGpleKh%2Bo1TfnSuWQWSZOPrCyIHGoeFD%2Fuz37Zi6oy%2BUPbd0bMDivbkYNKFYAKHDfxgv5bGTryNLaGmLCmPRflM5V2iq5UHxUGD9Dlu6aPdl8x2gi0eQlzak6e4z2OwHOxyvbTOjN%2BfRnWAQhUJ7MOzTl9QGOqUB5AwcN8ztGQz71Tk7W5qrYWLVPBWQjH2%2BqEtj74nilITrAl7YhGe6eLrypTK9%2BgLCqdcPPcZlD9xoMg%2B2AS4StkHe3g8QTDwdcMAS7ZO7vkENwDd%2FYe7ubih5Bwe4sd7arWuz0EiEflu%2Fv5SPHA%2B4Xc58JBIGdZGL9Dw8gKTBwb5R09sIjgFMok3lcHINki6E1CuFfM7WjXC%2BemG3E9G4ae%2B7A7PM&X-Amz-Signature=9ddab48836caba023e38c6e844d431ac85d1bf8fcc8144a62f2613973a058ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

