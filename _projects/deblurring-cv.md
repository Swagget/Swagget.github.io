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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCJWIPR%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T183813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBeYNX3ejjZwrjMZ%2Fhi0VNHkcIMAff7rYB8iXTR9gEOUAiEAycldtwkvPc2mGOm5wesynXGYyesFqfWMuxpN8hL3pxcq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNvR6mLv3cjhzmPzDSrcAyRDV5ET1EHh8SjqT6J46r0enUjUgKm8MwWSuFbT6xsa7thbyq7AdB2SZf0BIiifGhOXJFsTTNaXWPchqXBIj%2BSAWkNMRCaPqhXhhVKcmmlpCUJo0ergBO58TjJhmxD43mDzHJmVPejfEQKrUYqI23lwp3v6i4%2BbU%2F4RRGUQqBxUS1zDY%2FsvYpjPIPoQucbG2oI1duSvw6%2B0ilvbMJZzu5nNZD9bXWHRaXoWvne6tIMKcssWZfeK3IS0Xz3sWes5nR0bZl6%2FFxi39XPEsh4mAtgIXezzC8Xf1s%2FOxIDbK%2B%2B62TuhnBJ2F7DdY6OSf9iDI0yep7Sn%2F0OaAh6jEBhhWWnp3MWVDfUA76jcrsTo%2BiSu2O16zbdBxdbdtHz39WuzmVX%2FeDgCoOegMov35B2ed%2BwN6u661Tbyvq%2BzTFKr7kJgBOv%2FgnGvXyRn6OC8ZYVQFE%2BmrlMgjDHSMRyarU4Was%2FTniBI7Fg0ykPuk3J7cE0NH1mUc%2FfQclBECQYQ4eDbMEqOVYEXPWpSMh6EvzzsSk1yHhpIAQdFS7wYjpSN%2Bp8nDGcRy%2BOEMHxd%2BvQdGpeDlL9YMz3jon%2FzeUNWmDxIgwW59yjA48uLeODxSoYLOuZCEqQWDEofUY7pYOR5MLy08dQGOqUB1S4l0gNr5nvERJruXtOheUaX6stH4ESR6wzJGdF4Zr5pno96PqXSmNVG3zBvVu8gaZBZrix2Rywqjvn3g03dbb3sAMMZT2TTHRRGJLTeIfotCci0A9yt5tV5iyBIurk4CQ0vzxXudGaPjkdhaTJ6lehGG1pjtce8kObqCgEbbBhEGuwnFaNYZQ9gEF0B0F1LZwbdM8j1o%2Bw%2Bm4ObWV90TAvKVi%2B5&X-Amz-Signature=e1e984130e59ce74bdedc6bded6ad4f0daecc77d7d5272d6ebb4a52fc6f5e672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

