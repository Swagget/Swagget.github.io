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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4TSAZQ%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T032750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCOKPz3VQKWc99uDF6vmsFSoma0Vb7MNTONGaJ%2FJU78oQIgK192xlWfdZSWUzT2fs%2BMhT%2F3FmlZiJbMbirmOEmJAXcq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDEjRADqRDiKaSyXw%2FircA094M%2B%2FZbn1%2B%2FAdinLwYBbNP8%2BCdRh6EFZxn42ZHlLdmQupATWB%2BTPS%2F20nrnvJSCyFZ3HIiXEv5izS%2B%2Bv8Vh1UNVtgQqViptVGAIjg94fhuJCFGvBzWE9eXMHSXziVn7Gq8QpY3YL8CDSaBY7ifnDA6sWEhbBoxxswXTXevuPh1UVrMCgB7%2FtetZ4Gz2uIPSitnB0jReDaVQ3BFnF31khzsRHg7uWCtjwvw%2BHZt02ACcgWvtXQHQZLJz73qhWtgXNaisnX%2B32AjHi1WGwHbFipoo138lqgK%2BJLeOJcrlzzlbhNYp14tTOETKmv%2Fyv6hUiNYOFVIpkeEDD6ygHOxp%2BRSU0bCZxDj4UiDbrpjNSuMjigq%2BYZMAo8eip2dv1q44%2BaLfSC%2FHuT%2B1jVAF9V8Y544EWEX%2FlJykoR4XuH3fN26GubXmz77U5vvHp6vVPTa0HkpNRHoJzDicpMANuKdovkjnhRiq06KPaUWJbQM%2BPlzmzsZ%2FzeI0TqbHD6d5DQcQS89fck%2FZuiBtFEcjqc5v%2BNGiSM83eb6Jos%2FiFLKuV%2Bfr2PktARqqpP02gQ%2Fix73JH7zhNJNPRuudseTDmSIW74k1nos9x3OgKjcovE74ylHpx8tzI7rHNp5P2ixMM39%2FtMGOqUBPRnc9FWqrjqgwXUwgWtBBQLiIFboi1WC4EhhlyWVjqA35nU8N%2F6mB%2F6VOtSIkXt3bQ0J1muGVnDvWF0tsn30%2BCPrnWREXLhCJOTfnv%2BWmpQQYK8MDXrkFTj8z23Foi8i4zxVW1xf6pSX9XI9FBLBL0cnuF2X9PBaQD1k1UtDXMzlH%2F6loNw2UX2YdUQ%2FFOEjhf2NoSRP2xQg0cX7xQhnZWNTS0dn&X-Amz-Signature=d7a1a8791c6d35a5bedb98dbce10e3d7986048b9b32e7194b0711183586db6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

