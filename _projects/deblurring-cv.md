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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RNRTGV%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCULs3CmwCpXIJtT%2BQEHg8X4kM5URB%2FxFs%2BnIwxiuEmiQIhAOms0nijeUlXvKv6i0xtQCi6f6XaYuwhuq7qu9H51InNKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhfly37nh7JGlbe9oq3AMAXiZ5haL5JLueZg5VqsyXWLWol4FA1q8ReyiTTFHTrY6sWccpJZ89qxog4fvksk4ssTm4VVumaRuFBBkzjVD4Vq0%2FJsSWQ%2FEwjpk%2B3WvQwfMl%2BOSqZzlo%2BiBzqMzoBtp5BLUMrK%2Fow114NoTnwKpJGqSBbm%2FcJlVfw1DokyD%2FLgOb1ioHE9ptoewVTAmu6CaEYdWt84KwNb68t4Hw4O97FfJIyvpPhU1IwxU5G2UKMBRgcOwB1K4KbzwJHwiIigv7wYMnvo2XWmGWRqwxfH0lv6tIyZfBprPbGYjqYEUhTA4PuEMPKZhoKbwYEv4QfyNF9SytB070XMa4WQRKjC2XdYH5EMH0GDSzPLynl41HWkFEO5BGvA7XErzfbLB7caIgC7G1BMO2qFjILMbEuQqYj5kuT2cZbELUwa%2BMDhTnVKCp5IWl4pZU%2BfJMJPE0E4CIVfcst4u3A9On46jMqBbLQz7NgHsQ7uApCejWJuujS8ghWIouAUnDMa2S4wznkfzNk9NGm8VRsnOAwk0HUVsiLVT2dMsm%2F3WQih%2FpePZKwjz5X5z4pAGua451X5T7y8ID7vIwI8zH%2F3CV%2FYK58varsO1p1tmkG7oMAYN93j3xBy1Ymmz7XWeQd6Ty0zDx86bUBjqkAdhdI8rm1I8AUUut26mxOv2PU%2BQKO%2FSguM0ASTjLSJCLFkd72olY%2BRBrDG%2FsCmPBPiRJ9xkJrMo2CJpBJe7F6qoWJFQxfKV7Ryk2jcgUTjmijKvJg%2FjFmSAQFFKuWKRalu%2B68%2BGN6Ftj0iPeQqk79BCTD6sD6JorOP2LwVJLpb4OpfJVdb8ZSz8ZUy8P2Yh%2F3XY%2FYxdLd%2BzAlLAiVIflJeJzqUNF&X-Amz-Signature=9704caa755aed3f7e86d6edfa6a2ded25a157cb9f9e7eaed03f57ee6531c1969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

