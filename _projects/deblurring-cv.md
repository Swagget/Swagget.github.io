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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635P4LECH%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T105938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FP102Bjt7I%2BAs6c5WR1DuiG4isvmg3%2Bqki4diiAlNJgIhANW%2Btbr2bHLgAKTtJkY6jkxtD%2BoNS6ZJ2ubi5XkQipceKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyazHFtNzRhpUKniL0q3AME2xslCS4zTtKl9TxITX%2B%2Bb2oh7QkDcjQdB82%2F77Qe%2FnV6dIuxGhAe2JeQHvioQLMUcEB3%2FhAi6XSvjqRDnjmQLguxw0wYQ41NB1HWNiQoCPUbPvYZyktfqSupCUIyqOne5%2Fj2Q0ysEU0zIw%2BVKdPA8C%2FvzZdXAtZCRBwt9VBKa1ryFVrlT6AagoPwPcuMTxkS1bGj9ft1LN2qXmzv56sscDzY66wAmExNWDpjKvCVZsLVx4bwYVWltYq5%2BMwaCSW2KNZCl3eL%2BzaxtjLY1ZyKwvKiQWb3AjgvPN86ETbParIIhLLza2vhLy%2F2dZIBrTyTy%2BRhnYHw1bJT3ziHJIoW1gulfKs21NToXvWorsqJcaG%2FvmuceKrTVSXzoD2L8LAaIQyk982u11yKEpC2WgfrPmedlFR91KAUOQmbrEzMq9Joi0UxunhxBXD3MQ5rxW0dAIrWLzk6HRc05LqH%2BjRJC33e9Ft%2Blec%2B9qasBZvk3dqGS7oC55PHoKofkdj3kDlYbltLJtQi9Uh%2BryUQVH1aT8OsgxnX2e4rtv%2Fh9YA%2B8mocE3lhwRKhFX3iPPpqS%2Brd6VaM%2BbN8IB59T%2BG3qNQm7PiaE4wxRjWU8E%2FrnQc4hQfWVOE98w9VwDjgsjCjo5PSBjqkARi0i4AxnYhUovGg4WEmqLUjEBplcgakk%2FS61trk1BdUtH31FHcunNZCNXYPjqSeUrYwxa%2B4B9DscTDFHT0NtL5FodtowDJgRWyqrVdxjbfQHoh%2FxFYksOzjVUjwATYsZY9PD4EnLVHcpEKTuIZaeBCcLUQux8j%2BNFrT3QYIKJ0Y%2Ff2pGdZbgrTWmw8Vtb3YeyYgxFKgsc95x4at14HLG8MH%2BcnO&X-Amz-Signature=a521cd8a7af971de233f13af76052551ce1daaf1028309ec7e9f9b5c3b02c311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

