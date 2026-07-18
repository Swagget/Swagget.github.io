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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5NRAFA%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T011437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFn7ItYKlo4J2jhSElqSQjBwAVrDBxNoYG15X%2Bq%2BByyAiARXo0RdCRjiKQPgRCGXusfIzdVrutKTbAdct%2BId6q4zCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMfdCyNxhCkE0UxURCKtwDuQPZFpQ%2Fr3BL8CsfM5wZe9S9OstShnzBfvwTarfU1FuMvy1L9eEvQNBv8sZpMYv4AXAkoQbFjjf6263%2FiJxeU8fSGBVTlP8Gjo2cxFOGu9sxfuAec5JMIE9G7dpmXwnr8uOGj0L6kAXU8sQTyQvMJIioNuwmbHWZoFoOFvLaz3WyTgPTLpSPDshY2LfT6GrPdiY%2BL0jy%2FWUdQ5nKfEtqOeM%2Fb12LP6%2F%2B8hmp4wimYXI5y4U%2FS0di%2B0JmS8uvLvNUP%2BWEqxGGL98EKc4qms9hlr4hKP%2BBulasUXDLRSXOCVeHUz6apNXxvPVyx%2B%2BtID3iCManHma%2BdwBD5iLp%2B9LYCZBv4N%2FzvHvmXWnaDSV9e%2Frt99WjQLfmYDN3NaX%2BAOrox0Yl%2FmCBRgQdD7Zx7FikUMMoQaxIt%2F4SfF0f%2BGhJbSw%2FcW48qn0sy9ZYWjWOUs1OqYuG0CObHR7ER%2FkeMMcpt5Tx1r4%2F6gwE4PhMglcRJ4NXXSsnea39osPVrl5jL9gybrS0NFLKgp8nKPngbUpUwbO94lSdaou9GREdXuIPUH7fSEJ1CnPapf0W5j%2FExjCoTzs02eIrL37l4%2BVTsxQQq3%2Fc56RgL2R6RW%2BLUXkUWS3vFxGJyAJ9gTLG5bswzaTr0gY6pgGsr6lCGtEl7wtwx2inowtA2G%2BTR3tgesi6X1WSgtmnSTWYylns6UfC5%2FyUjUh993yRFE9Oslxi%2F%2FVuS7peRwSRIUI0v2jMY26pa5WpVZnpj6U7lIIi%2B5scQi6O8trhmxKwMC%2FdiVzpdFq3zT6jaVNRRFc0RcrGAmhsYGEDDZYwZnojTn%2FGS4N2azXnhDwk81c89Ar6CbHdLU0aXkRfWdp2L8pYpAq8&X-Amz-Signature=89c69eeaad0aa43d2f208400a27fa30be4e447cc3c01696a7a5ffe3da6fa7f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

