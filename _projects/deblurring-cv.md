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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT225BBF%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T204147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7qjioXeqB9zuMcaKATU55o6jbREDpiZGMPjykH94njAiAsWGUQBCDGXzdUp6sRnbQiV5400wnvIDDH%2B%2F%2BIDZenmCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCuQlEac7rrtLqGLrKtwDeriGu6ECSgfzFN8zQsMG8rFakyv8qTEVtUiMEFC3HU7o1z42gHWeZ5%2BqLmPVBg7mporfjBn0PP%2BkoJCIm3jZnrdN53427VXWf6ZDAMGLqQAIdiVqhQ8WwNP%2Fa1K6QAj7s3nzhDCHg0RzmAYi%2FtWO2xXjWVDR2IDLvkxEHBz7nJS6sWp6qv%2B0JiVtfAMJ1VZDeCH84G7OTUbtEmM0Wz0EOQbNnJ4oYW1GyzRniEzPEGlYV5v8mqLTQOOjFsT4p9Eb0gx4l7YtntZ5%2ByHB99cVa50V56sYl65jN9XCl%2BkabBIWAX99K1EZv4dzD4VRZj2o%2BuXcNiRjMiEbOlKW3KKLH6EOJ70sIz4htoPMIAf07Va99edRYODgBp318JZcq5%2Bk0FoLYvjsARi6GMrj%2F%2B%2BvGmDyCrHoYVI9MUxHL9%2FVLyQbcfaNJZuKRNUgMAwRkeA1PL6e7rjCmTs3Prf%2B%2FIdF2yLBy9LYii%2BIXSHYcbUhsMR%2Bk%2F9nrs3pocXLboCjk7HIur1o5Zl7HKP8nAmIX%2FzBI6Nm8keKfQFx6oI7bjVu4NUczggwVqCnjzIK4ey%2FdwyPba5zwo8OkvjL06npEEO5CTfYlgvhTKFqOHhw8wNv%2BfXI6koVOW9nl7LSpP8wr%2BPk0gY6pgHnZ%2B3zLkgIRUxUEqCOOnwlVXUurVRDR4PCnGt7IT1bLr7t1N4ePuQJdtFzVu5xFI%2FAirbTOS7Isf2KENJlrxBYuL2YQ4N5cnErGOq4UG%2BI3VZz6YqkgoqwFgVQgGFqQegt9iXvQYmLMR%2FStq7T%2Bkefc%2B4zWX57osS4VLQ93ENHL%2FO35GEn8shRSmke%2BcJpRiZWKySw9CJvlw3fu237LfsIIybDGUbN&X-Amz-Signature=7872638d7b814cf11fd6486bdcb78720458cfc02599078f326303679c6bf2eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

