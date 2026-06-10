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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7ZUGW3%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T174859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC52kqhmU69yXH%2BP6Co75bFj2JS17rqcI%2BAdkJSW57S8wIhAKH4adfOnYWL9jy3zvRNy7pDRm0i5AB7a%2B7q6qKlGKTQKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTqXdyKyqK86PjOpoq3AOW3Ps47Mz2f4Et%2BVY689NrYMIpqjKJQwPIJhOHJFL91Yqzc7j8rQS5FgDhs8QkXjjRv48%2FGHoL7PG9ljvj9otVROQ06stKgXkZ1s1iRM1ZQVH2TBYkO1xWhKduIFJptUdz3nzb4qbk%2BETvWD6HOZ4lU04hy6os%2BRB8I%2BA63l0v7gltDbXEItMllz2cljAfRRz1Eha5dGpDY1GR9nELVkQ3jlasO5xv4uy7%2BsqWLmEmhZiWnuhtAgWJNmeJ%2FKdBUxaaCzSRDXiBnvVCvjZl3V%2FSxVVe07KLCqyacSh%2FoGZmXnrslb4BpVsdDODbiHaaAJap4bokk0%2Byv5RumN%2BBvANFVY%2FbEWATMHtrsb8ZRIuyHmI18G3cxPmNxkEQssi3uDUiBRJg%2Fzj0Iv1ILnbScRZ58O8Jr55iiSnZkkcbfPsZ6J3%2FKXRdwwYN%2B8HecC6GQSs%2BiKSpVdiEkrspRp198crxjDdEjKhDKUa%2BdZ7%2Bm0Ih4TSfJrDkYLDtDRCdWl9I2h4fo5F%2FQX4re%2FW9D3cuZ8oP2YjDE45qlg2kTgVC1W7mLz1QcD6oq2pXU9x3nWul13UHCmyXEK85mYYa%2B69%2BY%2ByiAqExf1m6DybAYG258xld4zku3KMwh%2F2UXCNOtzC3oabRBjqkAdp1oN5HlhFZoPba7gUIkszhv6sJcPa8C90bq7nRm1jnMd5L%2FjvZxmZ3gMUJ9LB1n%2F4sThfxdHB2LSlKaKUUhDq5DH%2Fz0lgR30iYllor0cF%2BYBcZiNx07O4414Wf8rMP8klLmzkqE4cXvj6JnIFYKD9D7LhQGCW6E5pVHfKieyL2uXtz3sULiwT1E8JwZjYrlT0L6wxkpZlADw4e2xdDj7QwmAsc&X-Amz-Signature=42afeabff72886bc864fb5f184f7fb0e0e9e36c61a9820cad45279099673dad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

