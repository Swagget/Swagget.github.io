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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEUECJ3%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T123921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDslB9QIJdWRj6coBg1CYmJp1WkVxBJJM0FTwvHxiOasgIhAKEjdhs3Ij6xX%2BSwanp0psPgdFghtb9OE9PnrxeV3UFjKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx903%2B4WvVxaPB0Gw4q3AOj4FHL7xRWIqwrDPIouciWXNCQWNYns9vrBa17hSX0gkCa6VZG12N%2BiIz%2FjNHivms5xUH%2Fj80wJmJUwlGkRStUUibjNgggO%2BDpuM2Vg%2F6A%2Bmqj4XK%2FoDCheCBs6HR1KE9BYe%2FQaU%2FVFkrcpkTuXJ5jNwj%2FcN1n3ClYTZTRJL364D1p%2B7zk5qZO0ZS6eWlzMjXWqOEm2ClBbZEDNq7epXFwCyJwimIew9sBOyYYVwRwojj1tqCAWLKrvcjqiRMDnHUJnxJHEx7iey7uczMYj57O1R1PSi%2BcdyCcBJAH%2BI7jWPwmbg0TOXRYnuVzdmJmvr3oBydNms%2FuacjUUNihB3HVDry4xcJUEy9vQ4U2zFNlqJPLssiJ0Rgvzwwz7VJeaad4aD1cqBCmN4N8FfVQN4At8%2BBrmHd7CuLdADVaDOqMp8zUjqsBXABjAav3PNChLkagBCdEUtwUGKDRQVr4Rcv5qxFP8ta4dS1J5yu3Ojcuu5KEiHpTgjYkDpuPHSC9pIKaG6%2BVfiD6CDX3iW3P%2FjbwRouzSM1LSYJgcaoL6vOJjXXRzDAnuVvDWSk5e6LbVh0U1KVWGzNLK3SYc40wVnrcT7Y99QGl00fPRvf8TXgmCsz7Sm9hGQXIFjbYsDDN1fbTBjqkAVidvXHf0JCNpXiCuVYoyNCO%2FtZSY65wMRQZwUsp2C1AbmJCuEZItautrhUxpHJ0BxTCMkY1UX4o1OPTS8f9hnCf8M70x%2B6AVs7772LsqRNlV4P8WomoCRTcUqridgbDTBfrxRWQNf3Bbl0wC%2BPInUTYjc5yUYwblkwkFUblO15fk4mBIai%2BJsUqsZ4ppObC%2BkE30OYeuk1Di%2FPk2l3tXeIiS8nO&X-Amz-Signature=aaf2e24038adb3d563a285fd8d76e051333e06c7eebf46a6ebfac144309bd4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

