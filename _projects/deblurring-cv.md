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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2EDBZ6%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T094009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIF74Q4EPCHWwfg0uP78J%2BI%2FXenpWLJi179A89ikcZux0AiApu3g7swnWxzEoir0VkmyAh2D2mWR0uwDLO0bdKwTUCyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbygkDO6GliYRe2FrKtwDO802MnGqfQETIDK3m66G0YLSuD3EWM9QgD6JzpDBMzGeJ6b458hHjS1zluefyh7UWJViajbcFLSqpTWS%2FdtoMZjen9%2BVjtPxxVI3bgT4ZWODX9TumT09CeW70%2Bxf6KZQxifsPFGmnU%2FMXAjrPtX9ighwwfhm%2Fz4FDToo0p8Q590CXozGYEOa%2Bhj9sBsfM%2F6FLL7QCBmmByzNX6N6eQgAJ8%2BMqSB1dneye86vnmBYlmQZ6W%2FtpQpWdongAkBD5Bip30H9%2BnP%2BhjMp5gPGRl1p6ai0zzr7x5j418tDA0l4NGrNw002znMydEbL7gvXlkTpjLel5OWwqWYLrmc58OeWoEl%2BOJPPrT38M6q7tmXujbmmzji7iH2aL0NGkpw348z%2B%2BqBvZpSUeq%2BkB9Dz6afU3QkGC%2FaDS%2F1nx0v5Aa97paoZWMT%2FlPi%2B%2BiM5XGwtwcuJMM1uA3AiFGCLhA17vv1FYRQjGEXdK42hBiFoMkaDhAvJye%2BDZh5Xyf23PXKp49UbCtMjGOTK%2B%2FoswS5NbWt5ZaiimrMJmdvWQhh9qCA5yCUbd%2FqbGmdUxDuBPVQneFDg0Ssfcd9f2jy6k6LS8vqX3gLuMdSm9ntQlayQ2Ct2OunXx96PtU1YET2rwzUw9O7v0AY6pgGP%2FVjG6T8mV1krH1vkKwGDjA21I8wBYITHo75dQgPHt7h0pjZII0N1DYQzIBcdGM%2BskJfS%2F5OavTg3AKY85fubOGP7NLFtBXGRh6VJcbHWUKeQEH4ajhhMdpq3cYnRzWFBUUpqqpqKrYLo6QuX69SgXwRS3plPio5%2BAfjNXWVE0umD%2BOFdNxgfh%2Fda1YD8kgZjWMt0amS7e6f5htD3S6RQv4eGT6ji&X-Amz-Signature=7f825ad3ee21598e56e04da241023820576658b207ed37f501a5696ad81838cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

