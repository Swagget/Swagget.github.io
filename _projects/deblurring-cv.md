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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTFYHCWQ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T142050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIH8yDuh2ZGzSBKhyDiGCLbL2YHt15WUS95Mnav6XGZaYAiEAqZ3ckVS1faEOz%2B1yqbvr5WdAAcHDXeXIgrqHf1dU7UUqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BG8fU%2BMdYelbfwryrcA73tGlXPm%2BEZfjAJQDmPWo9Xjrzf%2BifzLRsLK3qg%2B39tK07md2FuqFdiApg1dYKmWdISLzKEhkpXW0D5svguxMMPDfJiMTltXyRDr3GtnVBb4b3j0hXqSRLra5HtVbxGEbEIje%2FPla8ZGip1kNauQocfRuA7o5vSwiGeK7JCfVx09uYxDrkDmVzaUhapOtsHPF7OzOv3hXkUv3hYlJVFpVINgH%2FeeS0HfKsjdZ0ix8pU7ibl24vncGg2afkXgJZL1ng%2FH9WmgEcymghvDd7k5kn8bWW6UOdsKLZanJHgWNEoOxHY9ZPdUoMpYEaJiFMLDJx3SVZDH65wa7rgGJbokqb4lCrlRPpUSjZ91t3%2BEFMq5rd76VBTeAfWvAwdIc%2FpZDEi8cQptRKamtGZLAUkDdEAtLSmXBdFYSzy7FpXvcQvmGw7sC3nyGvSNI3QTVdTLI6xHzMNZ8cTAWfOpVYN7vrBbV6PThst4lCGumBsk6GvZI%2BuB7CVMRS7wPIXkQQaTB1VMCjCIf0ArmL0pxEBeHFpelrJL8eouQ8pVkPKODyumtZSIEvWalFCXCTprN1DQMuM3VXteY2BNNgr6VL7hb%2BO54aJqlOocUxYpJJ6N8Q%2FdzSjj7CjLrThw1lWMPaQvdMGOqUBQ64%2FgW1a7WhmOcqb1ClkiUTEyJj7QrPIUJILbu3lYjTd7W8%2BQLyn6KEfKGA4nCQoTXa%2FMZ%2BktgXzI%2BRO%2BApDFbDMZloleME9s4Hx8YBfUmZbRik9vr%2BkTsMLQzkL%2F6iweccnANqthi9%2B%2FoV%2BYa1HdlJlFN0NVkcnfgruE401XCZ6YvtC5kC05hvlvcBT2yonAWWPWBntmwu%2FEUfEz8mqOEeMB0yb&X-Amz-Signature=d0285fd1364f9fffa13f0291f0cadd5cad0239642e90159b08201f25047e1233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

