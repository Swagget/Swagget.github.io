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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOPPOC6%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T195919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMQ9EKVj2%2F%2BiHsqZymyOroLMqhXbaz%2F6HxAxZTUByJ5AIhAJGuVFouU2lKcWVdcgKqfTHFwWBwQAj5TLwoOQe%2B1uCvKv8DCDMQABoMNjM3NDIzMTgzODA1IgwxepjlpU4KakNZRzQq3APaqN69L8zq9hXSeZN7pa6w%2FvvTCOMLX2jPtLFte6knbvWjEWIncaygpiqGSj%2FPTvh2r7Jf4gM36iLk8MAqKxMweBIW%2FIQgoF0C9hL91hGdfDtVM1R33jM5HBlD8oKpV08JOqQN1Dy9bgxSUh6D4SXLO%2BVvc1Cf%2BOzmBIzwi4mwNJaG2kCIfO3FfyYwgj82wPRFLnUh76EwdF90R%2BRWSkF5Crkzn58TvoJdLm03zYgloE4K0x%2BDCIUT418Ak5Pxoau3m7YTT0Skr%2BagbniG37Iyg1E0o5mvYkxKbij9zkaE8z1tNa4kHclw0FPna4I4SoWOr075H2Yn0MNAg2yPqpKFtOxjpGamuwDjiG0T2KccKgTh9gaJZa1FJExm2FowpTLjcCO8yHxAO2btZM8nll2xkAfabifpVcEtxiJzjyUoBK%2BPCMIdE8VkLxSmeNkhevrW81uQybM5EWRf1TzRfVGFJkNGkhybjTpccbto%2B7%2BgWTicq9PXrRDbrZq%2BCHIglXwUvXVlyw460OHPrBbOvnyGnr3gfNHNyWV%2BwfxTqwaD7VwXNAI0XDZAA9rEkSQse7JjJJOI%2FXp8myZ0JpHjOUyaHGe8Tiy5vSQtWPSV3eSIbns04XyPOWwweVS2fzDanN%2FSBjqkAQA0EiKeLT58L4PW28gA2A3bLuIL1GwVJAmTx55ScG2DsqdtriH%2FkklA4QukfHxuGtgemvl7CFt0Uqcvzj5DnHyp9MuKIm3QjrBRhJwvZezRTlu1HY32OmgKyP3wE8PKINNeVqj5A4XWBDI%2FXgkSX4iStE2io%2F7MpSAzBqwSeFRoldloD8WEfVShiE6MTTGxUx0F2rif4zIZXqH6llZSZi%2FbH8gt&X-Amz-Signature=dd05f809e24af8749e5e17a75f83879758ea3e9722a31048682cc6dcb71e7f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

