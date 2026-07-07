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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDYUK52%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeOSYVdpXmxTKrtOeIunsHpN1Dhb%2BqaAYRlvIIECYWzAiEAwtowToknlpQ%2FrvTffJX0%2FChTs9%2BoDQwwGmm9%2BeMfhh8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNIuJtUcTr8XyCHl%2FircA0zNA4T8Ju%2Ftb7DT7ZKvA4b7AAmrI26uPscPTybIxKRcW7rZrXib9uvv%2BipwiNJuPNIkNvNjvHLH6dGPNFYtnr9KjNqqbdMmsHVr974uxPr0p897l2ZxRJx3kS6kR7BzYjy%2FJCXkAPLj5c5mSTrPO6CNaTzRcGoX0z%2F%2FKYRnZC88SmcewoJ2kFSRvIQOY7lSQ1m1AgG02esPrXmJbooK%2Blyt71qDD4e0FQP%2Ft265eJXNRqR4VBTP%2F3iAPOh3Nwkja3oDkST9ktnM66qsry61akBIq2C9mkZuDKWs3obGsHydRl9sg4b61GtDmoKxQyfRMVYnepSpQuyiGVPBvPrtcx%2Bcu2pBHI7%2BcEZuz%2Bz5o96RGh4wMZkI3Ll3HOl7erxjFlSjoV64HSUNlxct4YVkOOohNeVnkQXaronbH9cp3Au7JopTfwVSfJXEee4PTE6HGyg2FswrW1oF4CMrUB3YnnVMs55o2JgacjgHO3qwPOphBUgipDz8ady44iPEp8C1Ygh35CE%2B%2FtHjdmEqi4ivwVWwQrMa3gfvcyq%2BjPN2gmgixDf%2FAYRNJxG%2Fy7NKoeZwYyqUFDH4FBf%2F%2B1XOgkV5YUa6XXJsLeVbjbZcyuvfpP5uvn1I7PWJYuG%2BrrdDMMmusNIGOqUBM6sa%2BTqo2ssjPtGabWrumghQj2HrT3EVwfB2%2F8kXnsY2GHAzkYAEL0fFydTqAI7wgeEV%2B6ZCGyarrgFQPpUSCm19qKlc5Ra07qR%2FBwjqxB3lbSltKnH%2Btl0MtqRNqz9quOhrXOMc6NLTig2wf7Y1bQxs98F9FM3PYOYUFf5Ktt5sw6uMwcOpmPhB%2FOjz3Op3JzxBS7SCQ5Rvhq6PodJ%2FubSrI0eT&X-Amz-Signature=87ffc1650802d1a761faaa911ed9b08518e886d26fa61a364dd98bd56d3a2843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

