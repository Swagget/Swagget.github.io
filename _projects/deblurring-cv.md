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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5CHL4M%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T202713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSzVX0ae3pFsVhQA1MwyZ%2FdJ%2B7yM1yP9w1U18OA1BItgIhALwNpt3hb787oPMCYmCslCDNI2U%2B%2BA2BayWASPStaALkKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4toNxukbsy7zYPdQq3AO6yJc%2Ba90LhHOXXnc%2FoVX9qDE4VN5miGE8kW0PYqHZeppEQamoenMuK2nvsv2kv4GPySx6e7mT5EfEqaMoAG9x8rzauluIgS31j9VuEEKKG02Udfv8hV3QxeC7ShBzFzqyaYJAAWzE%2F4%2FxAd7V%2BY6FWVwHJH0xLObJsWgsIFyvgUAqBN7aXZsFUINrE%2BfSO155WeSh9wdJ1QVIeavFqvBsRH0mm5rO82c5lYlqYQA5wYsWF4i0pXRBiJXXpjcIFJoEdV%2FsKzYuDgwvZM6hoMZixaBAHBhMI2yDzSskNUgOXukYv0BQqwB4tT4z0Ovws3Opg71Kqc5RaXb%2BoS1vVCQZoTl61XelgJGlLWccg4AbmvtQVnwzJvu6KAbSxe7lY14azi284pVzTjD838JITaFmM64J2cLIjQPahKwySDZd35l70%2BJwzhvcjwSapFuHxGL0GKJ1Kll3od3766BHriWs1GWo%2BANffoMSCZbpPSVkL0UmC%2BCkg8%2BiKcp2kLxTC6PiEBeVdMjyRDqSccBpAuhH2do%2FsB2Co5Twn8fupRnE5uZCXOzBth7V1WAjCDvD1opreZGqhQJf%2BJhO4PjKRdZoygTxVet4WIdZLRueZ2HdRgJq5XOfT7k9ynhoPTCHoPjTBjqkASCyyNJEcKrJ0naaJO6x3K9WexanReGCeEyOKS87bmPnkJ6BF5Mafo1qFvIvdu3X%2FljSSJk1rXmrXRWbUm2liKWIvDgX8ndqyxNi1INGFXek%2FllcCRxkteJvgzxnYRAYQHgH%2FPqkLqkAIe04NFHILaSyAgBP%2Bft2yvD4Q6dGrZ3tZ1%2FsYcz0%2B2IDWFhPV7DB7Na49QPdpP3qpn0wsH5C7QOS7LRL&X-Amz-Signature=b5e256da27ded663ecdb3b711da94938c0ce2f5439b53bf970ed3065bc39328d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

