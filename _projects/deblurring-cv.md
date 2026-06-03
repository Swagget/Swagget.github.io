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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDVSFC5%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T222151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC9f1zaoSaxI5PN%2FoBoGGE5tPxXlNx%2FAYx8XikLJ77g5gIhALQ9aTP8XPYjH6pXy9SuUzX7GLRxitd6a0bea690ZCPkKv8DCEYQABoMNjM3NDIzMTgzODA1Igzx4GbcpGPE%2FixkeD0q3ANt2IF8WIo4wFAAUDUllE1bMs28s2oBuoS%2BOarvqYezhjE0VPTYT4ZfcXqWWcu3dZ48NQdSF2LRDIwRZUGk0kaEjaqc7tuPYZQPWgiaO1Vrr%2FKus9yP5Sf9T3xKMUu2vUOnKXh7YEsQf72zZVxQEi%2BtJvKFjxeHHJug0XnIvKQU9Dtum01I4a0weYpefo%2FmIw6ilwEkSU3xfD3R2ykL8nGeIGjv%2F%2F5%2Fctq3kzKU%2F6PmVfV1qAJZZpk%2Bgq57E6n%2BmfgcY5NOpQW9oVrQzUu1R96FTzmtdgP0UTHin%2B13zi%2BnEt07kKYPT4O%2F1xFZNFhj9wMh46nq6XB9s%2FZ1N9LEfkoEZVgVhlmiaOmA%2Bg%2BvkHAREUpRySy3%2BmurDOIFa1qmzyYzWEl8k1BORmf%2BbABTKd6meSDRfDPLH13vvIH5joIxiq1zcb8RtC8tNBi27BVo5tXN9tpVbuD41jb%2FSRiz9gS1OxtY5vu51DREJOT6wWjsiuVofUTmYCGdekpqYqVYbLXNc51jPVWStGRJDMHSieGlDSvrppokIsYQo6i7B1tcVM6QtWf65Hqsmiv4knyw69O8lRCq5%2BTD6FWJ6ZZT8JVGsPZJUdxGm66VnTYNKp2jTltO3exJOZk7apwifzDsmoLRBjqkAXdD3YSmGg62sH%2FiXSDyrNOuP07vRDCHmRTQPfrQTPN1oq2EN0o2vlX65jSFzC7YYhXUqV9447xkmAvqpgmwUwERkfOktFQoJfVDhVQnLDHQbcpDCMpaQcswiW50YojekwV%2FgA3R3XRJTK6%2BRJIFyz934Lc4gyCnMOFBSdlnrN22ZniowrAJf6qXHFYENBXr%2BglBfGorM%2FmICVmPujweHE%2FeKdAY&X-Amz-Signature=985f15a5abb876bd4ed622fb2a7461321d930842abc69b837e0bf8f2e84f2d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

