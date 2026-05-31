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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWO5WIX%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T224509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFqU60QWJMxobFS6c0bb2SiUvGIUiUiTfRQKMEz8UWQAIgCaTqsfXuD%2FJZAeznfr8ZJV0ngDgOAurpHnLNfrpkn%2FgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE73v5KIkaBhr5kHACrcA1ln1oJW15vbpNF5ftxwSVAIB4f3qsbRljJXjM%2FGu14GbUX%2FHnDh6ajulQM2Gr5nebj4hMNVnFefIZeykdskB9Yb80Bw1Iwy%2F8FKbyANl%2FUfj6NIXktZrH2hrU1RKP%2F7o0LodYST8AZ3Fs7DaMG9FqHPC0CjGBRBVLzId22vqpWprGGJveZ8IJmdE8PRTovc3Urq5GDYiMOpllHfsf%2FetxjLdM7AY64%2FpY%2F5O3SV9U%2BD9Fi7uuvIRwbucmNU5MUa62bsaZBnv%2B1ZmFWznahehgPga%2BKLZs102K8u0oeulgIqx8cjAHtYWePmUSwO1M%2FKGM83qrztR0jTJO%2FjZsALN1Ti%2BKevZ%2BZaz4gL3QA5WmiUDsEYvEtLlSkHZRx8mdpDRo1un77JwbRkwrqtAJMWoCcsPzYrwzGL%2FOYzZ%2Fh4A0wF1I4BPr%2Bv8GirAhT%2FTRyW2kZ2vtNMbISmADyMevVt%2FYFclsOfiwl0pffvwL25z0PD9op38shQDXTI%2FfztTDSd8BLg9QI0fKriZPOM0cNphtR9v6ZGYWmgiFMuv%2Fz3uMpK2%2BD8ihEdHvaAPh35gxC9HrfdxiXEVmrDCewF83kotP5t1bO6Q5UUzmELcaBuVWUhRuTSm1B3FZB%2FSslGMO7g8tAGOqUBhgURvb3eb%2BGEqaYg8LuyFzQ9XZCbQ502h8wNFswIpF8rOymgHYznaIiOzivzTWitlicIiDPwxjdr6pkbxkg08T87XBmao%2B5Fgg5yhxUAruHRCmeDHXgDLr3%2BvzrALUhLR1JsJkT12tXF%2B9H6q4oDIrANSr1gLC%2FrYUhFf04cfu9r%2BFjGJqwyMyL96Fjx1G2%2Ftf5p%2FxM3OTG0wYDoprlfQESGYL8s&X-Amz-Signature=19ae21cf38c18ea70f10be6550b9b66671f408fb05e5f8e52b09f7391d475f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

