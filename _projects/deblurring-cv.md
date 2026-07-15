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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLE5BGF%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC00z6xKl%2FO95qFS9q857KE%2FRtBO5KdUptn5qrX1%2FrEdAIgd%2FnBIjqcDS4kbHXABZ%2FzBVnznzw7sZ98EoRWk5yccgUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMZQnwkUppqNtwlXsircAw7c1RmeNBTVogkfw1whO04uFh1D36OtCUW%2FXMdgioJ6q5R%2FVkmQllyymArlolmtEe27hpJHyjqoGtcE5X%2BJ8jmnQYXgpy4k9UCYm%2BsFj8K3EZpRuRsBqo8Kcddf%2F4IKFgvfriHson%2Bg3gNthpB7nZoiHTOmUOvSVk4%2Bmn%2Fn3ZRklhzBxTsQcanVsTaTvU5J1uYisaCQBY%2BgDUbUF788g2UVLb8XPM85ItVXAeQpBaoX7gSBKZleSFiGrkrJ%2FNZEt6qNwVm4z8Uge05CSKVepmfW20bYhNpRaSdbs1t3fCpgkKCxqbvJivbkHaTM2l2Z3nKXT1Wyy0OUf8z9rMJfjRuFxxeu7UXjDiHW5SpzER1LhzbUfsxVWSyujDadY83YeYr7H7pNBj5Cv2yU%2BPl0KvtT58citAMixwjbUUnKifUad90cfaT1dYb%2FaryeKi2lOgcGQjq5Na6TPSZpqqAMnJTVFJL1G4lWq0UY%2BLXYmaZtpHBdyBiSalyDmSHBHJpIehfjwP87bGYCkkR5KA8%2FZ8Ga6CE4qAJDzqSm7JqNF4GjC9HR3mmzQGJgha2%2FS8Jda6ixd3y96BTsLOkU8q4mfWWLm2%2Fn5nUhDzViDdacaaeXth1RVPwGfFQJXOH1MLXm3tIGOqUBVNDl93Vn7FTI36viE%2F9Pz4idb6ZwFbN53NcfFU4yoNWlkGHYhZt0TfEqfGSGdfzHq%2BpsdwaN5NZxVxW3sYmR9CkkIuBwt9DTLwar%2FMyw0OTh78ZRTieeFGR0YQvwakvjn1zHEwqx30UwZkuSIyu7ur5gKsoWzj7OKgAG1Zaj3b8GGsDa03nK1NdEclZ9VtIymvt6QhIrTtyGnJoKzXH5oHobtjwi&X-Amz-Signature=22baa2fbd5f037378b3b1fa851f580ee044831ad2d22556233a550b1503ecaaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

