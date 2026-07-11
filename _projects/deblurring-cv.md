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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SX62ZKB%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T213654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIEdhPTv%2BehSrBe%2Bf17%2BHJ%2BWQiMjCb4ty8M5ckMmNAfV4AiAHxnsZpM9k9qiPI8g7gSHEhJPx5v9IjR344DBg%2BmgNSyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmVYVcrjj95P6YZUFKtwDbPKc%2BWjQQ3%2B2O9%2BUxBrZZ%2BFn62CPUJvLvDocSPLWscSRCW907Mwy8FcxW1DK5%2BKUnbh%2BacuppGTud3k85ho6gB%2FqNPR0t1kgcvOBNXWr0Kt%2Bw3z3FjsTeijAIhBWNFzEVY0XGIeZ2b9OSQvLHZ%2BsU%2BcrBgVm9nbi9cfodHQnOdkzkw%2BiqMMtaRnWlzUyALqyD0hPqN715%2FdmVvoHU2HY9vWidP9Y95bawv8%2BUOQlMeHAYAOk31TCgIVjHmuR0vXzvkbUxNNLDCPVxa8DVY2Fu833gr4G4RL7uf4KadZ%2FsthUPMiPlsC3jQxRK59C%2FZo5yaOEGdqzo8J43I1Fprerc7GOn3d%2FyI5VqzlC2YOQlICCPtBtKDhDtaUX98%2BJXHOT8pH2TK2BDS1I%2BfLKkUg%2BbtQHXCZwq2sEUX4Dg07n42MDR9Isnz4kyG6RND3AauiN65dheo%2B5fy5qtaqIFQz9bINqlVOciLRkzOb9FMG3pgDxWSVDrHiyImwlTOlC%2F5JA0LCXM1cC0OWMbwM0bWA0YZbvfjsrcvK2O1QdpeYOrHun4PL0iXK9gWFjAwMS8b6BnQN4hNzC0Net2c4mEKB7el1%2FZw0CkVVGVbJ4dhCp6qpRJCttp5DBSOIYBDgwsujK0gY6pgFOE1FrLZPpjIX0yxm2BErHPUm77cfCHKYZ9EH1QDsOdJIVrIlI5nY%2Bto%2F%2FAAoyQMw5KbO%2BWID1M9PCdkf%2BpVijhRwFzPbEu7kCgtpW6AeBVC2bS3tr5nd6jbj8qjYUKopK0qL6OmRP21XofrbsBZ5F1N2sBA3QKMfHQ3JdKW49MdLsoSgwOf6NgmGgBIeYBSb6uaOsCYWiEhL3XmKuLFpVQ%2FaS%2B6bZ&X-Amz-Signature=795022e2c544afe84ba544b115e053bcc7163776ccc1546544d002838532e31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

