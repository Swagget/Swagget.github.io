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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ43NUJK%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T200522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBTqrPH%2FKXy8ZfxBMN3ZdtuGyNdTPQx9f2GIo8LyUQwiAiAidygwzxr23C4RKYblY0KDXlE2bh%2FI6iPXSFXYanqOAyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5nH%2Bk0UCJhNr%2Bb%2FKtwDA37ffvmGQzfWNiflWYtDWajCAkZq9LtLH5%2B8W446GQT%2BNH2x%2BrjIuqTRdLzVfRIpw%2BBehViFc6dRGIlJs%2Bdr8w7UBFNxPvqeih1pOCrpwFcM4rIrBLWSSHgux1aVpLIq8IEQ2x7sbzVYTmzTOHXKBR2NgIgdNNMGyrgdEnKDLVPFLt1aCvwNd6debST55GK%2FgaQEqTg%2BDkP5DGdtJe0sEHvKgsk%2BgjalpOkcaH%2BpnNmDwvyRkokVccduOtUPXxsqHUeMNHbrYp6hria8xwFuE5SPJOjUdCje3zBBelhM4qS3vqT0X1%2BVefnqI9DntEX2%2BlTO9nWIbxx1E105fGENfn%2FIwilezbNC%2FsmIOISaXG9VTWUyfJwwaZSa85Grb8d6%2FQDeZWxf5HmxLndQA7YpY0dye1ufWdUiQHlxZOstnRZ1UYLM2xKXkewr1d4mR6WeFGgQcRCVIV85e1qUo3eylLS5lJGiCFG2MP7oGqV84NItI5NWSvau5kNcOxIaXtA0fvThb5LjR8SE9nbBn2nMB1Iwp%2FuLACJYI3z4kiLIvObBY5bPLcLdFi2mYd%2FH1HR%2FHUXMjMxumYfhoXSD70HHTjrXYJqKc66a3cmtDmXeMC36XR84GVdDWWX8jeEwzNGJ0wY6pgGeZF1cZujFSZ5%2FJuHEkYtoinsvp9YWM1awO1vY532ILQQlymKBMCurXkf5%2Bb6tH2qjoXhu4tDcbN6wqVdzodj42afqeA0dubihwrqimu9inkOUshNrBTXw4CTpTJzbcDnLGKb%2FtKSW%2FhrxeN7YvU0nx1ryFNawj8aUId7SYDMdVY01xq%2Ft6aG69nNTCZkot0%2BNBjBi22Nf6bhPP5SvT02UhSwBf7bG&X-Amz-Signature=ceeede38dbec6b3ff2af129b64c56a2a30d0fe11a2f2fdc02a367ee9b397b1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

