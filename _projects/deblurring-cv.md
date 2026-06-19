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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY35EUX%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T111057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKrZFpNsVJJ5BlDgTD%2F8exTWCfWtEUtsqsKnfy%2BZn6wIgSWeQX%2B8SdQ5ALRvfYXBwhxY9I08ocKisohiP341fWw8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe9iXJEb7o6WIdl4ircA1AYKtVbAmaofD9cqRROMBb1g8rV360npzOJlHp3U1hhQodh1Esbra2mDqpD5MrnR0CCjep1EEZSVrLd7jPe17mqWvJWCgKZG1kTZLCiug%2BI2IzNniAq%2BkqmJwLh4Efd2MmdMmGd1yrO8c2FwrutryNtHN62vn4iC7FUqJtsoFDti56Spmk7%2FKbQUpaBk9cDbzOjLkjBwyRUsJScZxnczv4TKVr3XW5ESilOMULFz8mHITRyDSQNeYIIGGKi620lQCaFlcHXnMMMeRMlkQtikQ24Fuy2Sq7Mm0P44IqV8YKW3NrBB7eY7gPDVPdAKDnZdNy1PPIHlCjU2xXDyXE4EPbftbRwUZjAJCccZn55nsZ6kQaHgo%2B%2Fmo9RWRx9XVu71aXRNfvh3keE1%2FtAfSZSzCkJTg9EwweK%2Fwejx7azfk60YRkCnh6zhrKN8mb%2Ba7ZIR2zHB1HymWt0madzwh%2B%2B%2FxbRm6ThR1pOCL1GhAWa2G38zBOGeQIw%2Fo%2B%2Fo%2BFcNON%2FHB9GDvuIvqsi1ngL3oK0elmn5d%2FDxXZeD5TWD9MDZ%2BUaZwWzr95ePY40h35wFvNUm2eVD%2BNt5z1OKoy27hGkQPjkYg4CelDwiBBvvri8HrkCqv%2FeHu9BLNVZhpxgMOem1NEGOqUBwcFrFGsHWLxHnXLwVYdr4hzNZ5fWxznoiQgnIpot%2F2Dqx8PV%2BoBuQJkOOiXZArS0mI6yZ8YvhMRgUmQrDjVJQJP2Fg2NR0dpuwR0P6vmqVNjbWF3hWdEWYpBbFqkVrE%2BoxVBQlQY6rMlgJOkzyyB8WLpdhhC5WFV9%2FvEti0ZW4ILn3y5yusYhsJTpfGabdIVIGhDD6KMWbm2ySpsFwtdXwcfDUEU&X-Amz-Signature=31542364db937c610bb8f8af47ef4d63239ab9d4220e003442292c96f36f6014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

