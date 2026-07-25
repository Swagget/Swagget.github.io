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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPQB7SE%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T142438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC426HZgsBH0%2Bz9RDqvKyJMk2xguBDXUU%2BA3Ut6PIiHmwIgQY08YJR4nkE5U1axwIsFFIrgZ25SimSpi%2BF%2F84%2FIcpoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDI4V82IljiZRmYjbyCrcA4kBDiRnTbnG%2BKEPfLcIz73ZLFGDiMe25ra8aOGgknr3l%2F7rD2VJde%2BXlAUxixErYO1NJTGlqTgjlFtt1%2B8FMQFBjx0NSwE7RRgb4JRZcE%2BYSnCIRfAg8NUVpVdGCk09fsJB%2FrrSXtuppy87SwVe4RPtqGN3EV8hrMpEws2R9a4MYw4020Z3ZYa1ztEbSjuRI8SzjjB2OaIR%2Fc49bp6limCRpnVSaMT91jgBClq1qSSNb%2BCIpbEe2FyIhjm3Bi2o1OJxvLmOKnzL87quONssDvVBN6Sb3s187m9RAJ4nXVKtHj%2FfFh1TSY5ews%2BPVAszXdr5xXXccNAKq4HIBxUPoDUG7sYcSft%2BWYCxT59I%2FG%2Frj1XPHYlUJ595T2jMPb8G7qJiTxMvVv%2BnKw1M2E5BbEg3oHw4UK%2BlpO3eihJjsM91Vy%2FrRCx9KS5hB1bXC9O8eMjlNboc9QxHAwbjcubdX1J%2B6MduGXiTVl%2B3Dd8CCEGPsGw%2BafwYSthjAb2YbdH2hDpSy3n%2FILrbciK%2FbZ4RhSF%2FDveZVF0u%2Fi%2Bppb89SuGx1UzqqUoN273ZJYHAIK8XicF7zxaelrjDC5Tl85lKi7ZKnFWzwtg%2F4uSjf4bPm%2FY05HbEdHO%2FvzZdGW7wMP6Fk9MGOqUB3BABudBxynRRbgAM5EAmf9wkXsCQ1zLyTZphaUhjSa5CiufgHdCtwkPOyWfyU%2Fpj0mkGwiItTL1Zxn6ch6mAGm%2Fj2hab58gnkRy1bPwZFaLJC1vDIWHtZbFgA4is1u2oekEXl9LQs5S7bUEtp7jYiXzFb0lAygeVFAIU5tBVeMeX990zHk%2B0vQHfj6GNwUQHc2NFFSdZ8XOfxQRiNwH3h1XX2rP5&X-Amz-Signature=24d145ebd62a6f558069bf0983805281db44989f1536e1fa00d5f4b49b967a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

