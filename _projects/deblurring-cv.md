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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUSBMCJ%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T220333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmB%2BS7vCY9YA%2Fr%2FyKRp1cX939M%2BsYWVRrLkza4ypfUTQIgIvXNzuBKdgE%2BVunLvV4jylZyL0CBXw%2FODzff3ZU3%2BJkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBF2kiuy7yrQK18UpSrcA1bDlOL0II6CYG3jKJIjRf7PmPIoUmA%2FOHckGi515KMqjk3B3JhenJhAnj4e%2F4cUu0H07VQonJ6vvf0jPp9HChgm6eztbD9MejKpcr925vuqAxbhzpq7GzFC7CDkzCoR%2FCuW%2F3HIRyy8bab7G%2Beommn7T5b21OQPtpdYAML2K2BKs0tsNzUFlfEq0piZP32KMwso6WIP%2F7YB3%2B%2BstyGmTeDy%2FVqiuaz%2BFxQxi3xP3e7OboensEDckCqeL36LhqKV840MKB%2F0iaOhKSBjVbl8cE%2Bk50bnF%2FVfHBTho%2Fnxx4Q1NiqegpshdTLUjQ585u8jlGSzk%2FMA9VAjD2RHLE52d%2B5rsXsLkeRm46W1IV4vqN7qL3Eb0x6mQlN4scRxdkmjsFcPCJ7VVgnNyxSY3EMTEee8S%2BiSlKf%2FdP%2BRcw8sMpHCap0Rz4M2z4DvlhPrW7ze4p4tpYrrhS%2Biq27lPidR2mndNfenecrpIG1C535OCxErIMzW1hgcR%2BOXpXuEe8sTm1Uu%2BrI59NeC1aJtkmix4lpTbkbaNBVWjmJG181fM4FUDSrXQLISiX5q63h40vwJusV7qQKW7VgQS8hhtK3w6Vw0SwtZH7AyJV7Yw2EAoupiiD8I0HsWRq0cuZ7fMPKen9MGOqUBeJytm9769VCGmn3NbI9OhrD3EGjyfUWZbefYKWiIlC0dAbfpzy2E5IBl6londwJZUYcZM4KXHCDC9DbV6fGRCLJ16yDdGx0m8GXvcUjkmk%2F7zEotABVEq4S%2Ftb%2FK56QNzFc9b7FfehjNEjMd7nK0J0XfF9%2Ba8Wk0Pm0qxmP5ckWEpJ96XXUD477%2BfRsd2J8OwnMwr%2BcYQJn6YljxyFkr9Maql0fC&X-Amz-Signature=8f6715c4abcc4adfa651b6b120aa0cae51d5df91af0a3171301ac437e6007e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

