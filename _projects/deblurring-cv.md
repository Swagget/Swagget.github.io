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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMMQP5H%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T225727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEYy%2FeDQhB1%2FD33wO5f%2BrRyrU%2BXi%2BLoRUzxt7bEAzWubAiAcylxwqRINXmkH8Bxedr5HWx99w1mZ1NBM7SwxWSXsICqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxGVU8m%2BqKhJKLgmeKtwDyNnHPSVOVs6AIwqvhmuITwXcw6mNp0%2BPqb9L2OW%2F3%2F%2BavLH5fNXHYLbeyOOqpehpId51ncDZhYKHYFp2vztDMyNELP2ffeY64kcwWMnRcXw5VgQPI6a3DGSa4Tv6eDxqJCu1K0DAU8GnvaDDtFHtItJhrDMtUK9Tgy4urVjgJ3SsEeKh63MiAbzRKyfZMPoHwtv9wjmiHivbGLUOY5lIqOX8aiUIMuZ3PWxi%2BPrmlNL9bAf8DaAqqnydcc8cqNwtIrgYjNS6RdGXx08erZVGE3118w%2BDI3AzprCY1Y0s20wlJ8a3XTrB9sOpXiPhNU22I%2B2GasXtZyeTEZkGwGcC9CLjixxnmyZUGO8h%2FTaFj8MeuzFpPXjwU8S33%2FteznuHkDDaPlmq%2F0cLPto%2Bd%2FC2KzmfM3W5X8tFLc1O6xPrdeuwEhPi3RZkiOTWwMWB3rT0bkCmQxr69Bi9ac9D0vK1XnT%2Fzzz9fcrOvZIleuqzF5J125IWrbTHHsBrmC4QezLBDgyRXaMAMJ9Jfk9E8X7z7kiO%2Bknp%2ByfZSH6B3VfHTdtKYEWTGgIGyL5NJ0kVLCg00odgsfdYrRxEDw8DeZ0qN4FWYbBA5Y1tgens2lfg%2BWCrzTGu4IN1ryNkewIwwdPh0QY6pgG1dRl6nwgRjJUPU3%2FD5i4cVA7spcvTtrW5ysLzsg2tncBfPa39GNAMdTjkxLY1I7eD8mmNtTqzxR75CNyApEkC9k43exu0Cgr%2BRQG6qpHLBycck0iWuxdSZTvYBb%2B%2BJdL7oTMXB75BwLHtzEwX6CZDZOKVcIJ%2Fon46rlZT5eyj5P3yULx2UqBf62OCuDNd7pW4rwbKiPb8PpqelPW%2BimYEPvATesU5&X-Amz-Signature=ef2df805eeee92842b3e3400ffd95db458a17add3390e2f6ec149f9df1d89368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

