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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VTGKOAQ%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T094641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHtpDfluEd0kIFDKxGYW7c9npAiIAJGnogSyHBEgBTXgIgIKR1tbkNGVz0tv0L3ivjL6wY2tfGg3DnD4utHxXTL7UqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHMPDxdh6fRT7bwWyrcA9xBHMNan1EfHkTA7B3pVRZ6BlI%2BFnMUEZXXt7SP8uuVAEUortlFBKOcEFB4oeR%2BVntTOsOxvVmCVRuAeN0II%2ByR5tAmkZDc09uY2DONenoLq4WzxSByH3zoB10KLKCpacU6GLFoSjHPvnbllIK%2BCra6oSkePv%2BbZ%2BTcokY%2FmJzFgf32Zs0dXZA1bGpFrpC7oKWCPhYEcz0NrnXEo%2BbfKAI1ymzpMUwjEIp3n0aFritXAn1zSfmMBu%2BANelyMxiZ40WzTcWYXH%2BSa6GpTGgZNSxOrKObN3RFsXPAZmaZnRqQ7S52GqNi3szpNJUi5RUyYvPBmcMVY4CliKOetXnj0tBx0ZVNm4ZMGDvDbNy60j5%2F1fV1khuBoHP99SbSTARt4Itqx3QoLKiPpF6zCfQXCgudS2Rc%2FDmVOJdFHrGsjAHi3PzDWSgJBtSZRJ97Ag0RXSMzG1EXoFKZLE0L9fpR4ZCoRviCIriCCrGguEODX%2FgDT3U7V6UGnYDvysl9WACXhYAjCd%2BrKPHjqPBcqXilnKQBKTsPuMPUCzvPaxPBvw1pkuIARPguxqITeTYX9NlDuVrvKdLog7bJnpwf2RR4T3e7kF%2BnZIdyBT7HxT3e2ezG5PL343Pq57U%2FTKEJMODK69MGOqUB9sLo3oW%2BlqTPw%2Fq0lPNazxLqpuX0%2FdtxABG%2BvOOxU78%2FuFM2FUBL1kYbQ406Mh5Itk86M908UL3r%2FjeaMxRiKAxT6PjQuFfe0J3Qhc%2BqmEWGT4qBG6xyl%2BGveTWEuZnA5PH6kU5O08hTcIc7t7Xks4cXvwtF6wH9MaM48%2BE5h5HNeSf9g%2Beuvk20kqkUuwqikAl3W9w%2BqASWiACRmlEiuhnt5yez&X-Amz-Signature=2cae7e3f41ba9647d5561bf68f53e5b77f79f93df30cbea842686b1fd2075997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

