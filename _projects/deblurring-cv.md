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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SINHIXF7%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBJYexLfv4U6MvN7SK%2BkQqrgrGCrpcdZ4yqqU4hWubeAiEAg%2Bag8FcrPq%2F0pEicu7C2mtqHRW2%2F5f1ncdnYsarDnD0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGYeAJFnSzpG7jNfZCrcA85w2fm3yuOwgya7iVQumOxOj%2B%2BYn0tNQGVKY%2BcQkVjJUYWjuoSMn01vry0b5zpAjnhkrdVel8gyd8naWvmZCr9LVP4ds15L07tAXYfaAyzqauUuj6XUUJOZaxD6if3whEKcZp4Vfop4t03px%2BSssmT2v%2BqGksSo9LPzwQtg2aCO71s1Mjyaeklqc%2FrMfKfImdLzo5NFVfjjzcHj9XYb05XYz%2FctP2nRPzEdicXIHjsrZr5U5TDVeRL%2BEAeh%2F%2Bh1Rs7mQHTrG1kZ%2BSwYkwaV49T00fH%2FXtNxEj065dDRKT0vf%2B8p%2B0jpl%2FhOlXMrtvtQTgMNFp2SqDOcP85DiIS4Br36SJwyj2SDvFjih4dkxEAmxcKE0Xoep6vEZsxwOb3u5U3%2FjhxXZ2I8VYgApafsnuzb47cSfKT8yz85SfMA%2BnS%2FJo8fiGGHHcTEXafFCBUvSdxI3AXcf3PRblpxh4EO5QJlZMakK1bY6rr2YaQ3jAKpaD5dqIYigkNnEa5%2Fm3v0JC%2FG06F13BpyIm5eEKaCJINAbnntWONwdg%2BvWh5wJyz9oDskSusrZqg9ael7dcvFTs86lmtgfqKDl4BkC38NLA4Oc649NPZEAluwtKwIhpDmebA%2BbO1J9zBUXySJMLyt19MGOqUBNmTBWsagf2qUHbxKLs4jC00VcrbZt1XqKKDGorLAKq0RF2kQanUKiD7vLcGZjbV8bO3s9aM2TP4FtXb9MpLgmQD1KumWDAAZSborR74c32WF3w7RXWpf4DikbvazEqhWvI7gPLxdPHVW4TfN4q%2BqzWgT5P17X2BnnX%2F9zY4lcYGv27FMQzmqnF1yoQQaLx5Xi5dQ9S8m69gDn1R%2FyUGwvlA4Y4IP&X-Amz-Signature=aa504482461cebc03573dda6be18cce0fb58655f2cb59effb4370042aa790fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

