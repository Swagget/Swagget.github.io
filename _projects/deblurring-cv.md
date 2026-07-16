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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OFGKCDJ%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T234508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIvYxcgyX2BigayKZmTl28Cf0%2F8lQ8BLBjoBalJr0qJAiEAs7wsTSku15T49ULWejpBM2depCaX1bouXXgcOxWFsxQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDF2LhWlbd%2Fq9c2SVoyrcA4zkx5SIGVrfHzL0SkdsisfkG94%2BCaSnyIMK2ONi0cUEsKDOF9OisKZgsX38RP5xHVlBo0y9AO4TElk9Fo9YSJd1d6%2BWSioJe%2Bx17KrhF9D6x4p5U7fBDFl%2Bxao3a8t1dQvjTQqRE4sUATBt8IhZ2VsnWIOUdrvDBbQuSChKCaVJlSW87ZwDyXMl%2FZ3qzQLSR0kDNj5FjMdKlhqMLS2YRwbJ%2Frmo1Z1lA2AqicTe4NDG%2FKfaFEGRu48VNf1ly%2BC5fRFWNt4RYk9UVppn0qnQf%2FCgKbs5%2BNRelKyyC5wH41%2B3zZ0YAVxUHFI37m4PiMAlI1MyUfZN4CxapB6EmOWMhMssUXxwzXsgwnZ0vdyhdAB%2BOCqFPJdxBMagU05pxyMVYoBHk%2FI5QP18LywZGqoz4i8D8UNPZxUJNEzB224moiwi%2FVUcbM4zy2byn7YsqKdBNnJXFFFVLEOk6PeFuiLsDStq6TmlAmwgxW00TWV2SLBoJOSoM57640prkst2%2Bw9GWFekFDq1EgebU9alDCZhVVtQSBv4M2nXkfAt%2FJcdZ0cPUEPgo83UYHl6GojHV3UVaz5eEa8HnQPbd5kcFWRAA8n6FzIZyOQtAmgrZWMJvxBV%2Bt78CyXHZP1RELswMLq%2F5dIGOqUBwMg0nJZntSZBXTdhjrwtCs%2BElYqyKHTQz533EdtHSlpTVfdTHgEKe%2FS9h7w3teHfgqFaHoJCwHKRMem%2Fomp%2FeKAaA%2FuD%2FNko2t4%2Fy1qsp31bgTumlvnvt3NiC7BLMPF8DpNcUqL5Xmk2s9s6sCXkiZSjUlZ%2FR2J268FoipeD6OoJQAb2JrfxOwYIRXuGTumrR7Dzw9cn3tsOH0%2BVaSLwVgGJCzpn&X-Amz-Signature=d640fded4a839bdcabeaa1e0c00c3d886c28e2ab29bcd57ff0c1adfa5fc6b4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

