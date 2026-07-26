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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7D7LYXP%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T125145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDVS%2FMyTPtv4y4nGvpmpU2OI98Rgc8VjUiAt6gnC%2BycBAiBILBT9L0qUA9rmBDC%2Fa2w3VJ5OQnZsxYqV%2FaNT5wLpxCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMKU8pGmdNy8%2FO5UShKtwDC%2FhdVuJ5nAgG6bb2COvJzcvv1Yoc7yTx28AJmyx2zK8LMed6xWf7CvCXS0%2Ft34PZENu75yUgCN3WYzcx8yf6al8iU3xUqagqWUhSxypwe43JJYkfRowrp2TLWtNqpZi4bXFQ9sbwiao58L0fe5wZ%2BZr368l2mD1Vhmlen792KVwVZfH5MidaeZpWhd3z8GrPfgw4nycuyU9mUX8z2X1XmYk%2FRTK7muEQF%2FlS6VwkHSi22aYYmNa2qvqeqF7A5dqVGv0yWEPewN24IbYOx1KiMbr0yrFaJIqXInz6%2FXNa9bOSLviZHqvmAnW2L8gFZ38QSDotTsWKbhIsfycOVf6G8lyMFDUYsW4pPF4ZxHpofkYqIo6bA6MkO5yGsoLHvXj2kR%2FNetPH%2BPeHm3zrtS33%2FJoZifhOq1pfrRI9VGK2pWcLnictPxGHxbphXhtGq%2BPCMwKjtkGO%2FvdyQHRXe2G0Mqg60zhQhyf60M%2F2j9q6oJKiXTIOnZTpbYV8pD6a7LWm98bqeUKi6oB5VVOYt9L2bGJx1dlg1ePOPrTP6wzOXb%2FEotFoc8XDZGqipA9h4FN%2BzQjqFlvGCbaOcLhx3oFBghZmKS2%2BTHVUjeNS8Z2M%2BGdC0Ou2IdrA8eH2bjUw%2BcqX0wY6pgHQfXAvhWPvcO67rb5qW9q08PXeb%2F60J2R41Rbt2hoapLhS2BBaFHUrD2mDeYvi4PitR%2FtlBgsS1vLAktySjyU1%2BL1F%2FWrS9%2BggxBsayt3KBqMWyADu5eqQ5c8qyDYyRW47a8wYLdAW1q2Vw3V1HSCgQhewGNLEKk4xDFDMtRjMNl4%2BXKgKBIrwt%2BEWVViwzkdiamyCO3s3TQ79pyTa7nvLhsErWHoQ&X-Amz-Signature=2034e50eeff99c4895dadc7aadf1c81a6970a0368cc4b97450c2f6c2b69e24f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

