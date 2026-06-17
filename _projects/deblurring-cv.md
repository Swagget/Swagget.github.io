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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH46FGHV%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T142134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9nZonYGYPLuiQl4P%2F6hQOnbithTOimaXeSt0JC1q86AIhAJpXmIbmTcCpMDL8bzY8MLpiSGzLTTqnb4yc627LNPaeKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTRQujdBN%2FzuFJkdEq3ANTf9nubXUCOqjuwvJbia%2BFU4xtp1SJc18WWG2A3pshKatXv%2FmJtOFeql%2Fg2UUbtCNvSrGLN4%2FDpsgmjwm9u6c53vLTrFjxybE3MrzWYf%2B19qx9r2h%2FyD8IAcpiYeLEdDvbbFRh3cn2bmuHVcUmkBOvz19kEl3aifpjZlyRd9mZbD09VXp%2FjBQvtEwIKscV0ykxY7l2qsuwaENgB1XNCfsaeQLPq4vVwmW%2BUNcJgHOcesWKcnUsMJM4bc2XBHR7asFMz4OjAaNQ1IZ4RXWdCbUkU%2FfvojOcRgMTMw8a6%2BQqekU38NksYR9MtSGCh%2B98dIDxn1jTMwnfLXj5jVEcB2Oj44wCIuajHC6sdRUaNwX8I%2BdLN4yh%2BHnpYk9ElNpDdmVpUnZWcfJccXLP9NhcBL1rOHciCQ7PvyprOo6D%2F8ol5W4E3zQce1Tg6e7IiIG%2Fp2oWGfX7q%2BEMyoNIUTj%2FvbsBYxv%2B2qY4BIeXbTuglNHJdP7GvvyTx0eXcSiGFf2aXk7XdosScXOcynObpqkfIizZi7B2Qq98TXruhKwMnG1a9J%2B0mDYElruVJUkNIyJdEgmdCS5RpNuYmJLeRV5GA4EU%2FtZu0SRr5oDPP%2B%2FfiXLuovWyFj%2BLf%2FgOz808PjDCvcrRBjqkAfwBFEtNpUak76%2FAxHTzxD0a3%2B7mhOvCj5D4XI7J%2FAO4Xb4qmxJiaButk75tV%2BkAaT6AFUMEjIxtlcZv1B9o7bzbfF9lTTs%2B0T8wW9SRVgH4s13upiualFTXMvjHpPUM41zS6TzXt6VocmffTFtHkXZbQ5AC9zPxyuRTQo%2F5KFVvtEYxB5kdfuBQFsQJowBiEEina1vD5aRUkqbLljIL048agj5B&X-Amz-Signature=8042b071e187f4d3ad36b701a54a7dbe43fcaafd329f116ba7682aa3b755a6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

