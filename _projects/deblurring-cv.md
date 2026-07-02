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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PGRG3CZ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T150231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQClaSGFrMpUE%2FnY2FeKPJvkl%2F6PG1TWdn7GUSj7ZCi5KgIhAKu8v34Q8mUCtmBliTNbIpuyppHYgvcjHJ0pkZVea8PjKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp%2FYCtBdOJAzLuclEq3AMwnkAYbs1doe3%2FI8ew%2BRgjwAf7hhpexKUK5rbzKwANsf%2Fa3041FeJ6%2F1Q%2BQrWoaIV7lU%2BN9cxANJQV7wPf%2FP25iK2bcjdt6IYcQz1q2swVcMCSyqUcWz6iWSZGxSYPlix87t8M43gCczb6ueVMKUAS3NWUmAXIb2I%2BnrWkeMlYc%2F8Ffqt3zhPfkE11%2Be3DlVUcku10sCLHBNfqz3av5NEHvU7VAvWJL8vSdNt%2BEbUTEI4hxJDA9mprWzdN%2BuVwxcxRB8aoUbUe5WMAY0b50VcpZqgDuPYOrE1pLA4gwHl5HLn5mdMApW6zdCAjKHsrKtYH%2FPkA9LKiDTY4VOWD7alzv8Gipwo28TUTFkapPQnoJ%2FWT4vfLfsH8C%2B7PJ9XPDoMI0efbS2byV1sxMnPyEOZqf%2FcwScEfI%2BOYKnXf4GF2MUnf4kgviJgdIodwPlVK8nF6r1WWuDt7PJEDXUvQftasIRDZDji381kT6uGrf1Kiz5YIVGDwG2GcwDJ83knt6AJycWwh0bSNVQHWPBt7fOeCuWeclLRGuihqYBfR5xCBZ2VXeL08%2Fbt%2FQa992KGsy4A586IEOCHSNCvwNFQ5HHR2X86uwlttlaUySN%2FgFPqKrTk4A9%2BEvTsgoZwwbDCy5pnSBjqkAWgShUcEgDjdy%2Bm6De50oj7O3%2Fz7V2aCoxJmZnlHblfHGKfOiZhW83zvnQFv2mDm8r3vfCaJB2jcHc2P7jS5y70t0jF2hZcWnXUPTBqKU9b%2BIIPeKxFlxp3Px49Q%2FxLS54BZLZmyEgGsRftwlJj1bppoC2ROm8KqegeVgOz9%2F57bXd0W5CA4Qkl5atocfMOfggPd6QmyRHbVezrEJTp1rKLXSMe5&X-Amz-Signature=dcd01ecc6457f00dc90a90713bf4acdf7460d08ffc9bcbdb52e6d9c846585d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

