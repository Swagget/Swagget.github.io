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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPPLZG4O%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T104831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBXNtECZmhtQD0j%2F7saJpoj%2BbrW6cUply7gfje59ju8yAiEAvuNNUMQiSmTLh8wJIvMIC2xgClNHsuvPT2jnz%2BEQTFgqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPyH61kFzq9kuF2MircA5xpE6FCV%2FtfVyE4IqtJgs34fGQqXKIQViwBntLcrPlXS%2BPzNrTA0YPwVkMq9LAuvrLkUs9j1sHV9emmwE2zi7SOMvWRFjpiHJkORPB58rru%2BWjm0VK9lMsPA4sqrpI4VFIa63Q%2FpYsWkKifNGkD2xuU90YW%2FRkXpteIZH3LhmO%2FfOwhf%2FnuOpTd34Y5BeseR%2FROO%2F6F26ytf0MTY0rUp8P6YGPNP0LuQNmm%2FBPVPtyuvdg0yoOe7DOO1%2BP166my3UeSiLqEpFNmYj7wJR1GCJwe00LqhIQjkqCMc%2FvTfrK%2Fllnl8VnXiHe4ZLvialpMOhsWoySFUbLnaVlTY%2BydQKIwJEkSSDcBRgvVzaxGaPc6R0%2FSsidk9S3YCu5LSnYRBkHw%2BKJhbuau0DW9NEQAnonqzmeZXqxOZvY6r1%2F3XWyZSUkmdHGMVssCHyXHUXnQZrdvInsrjiKU4mDU5QMu0bFgO5kNln%2F5ZUIFRxTmFj%2ByeRRBDfPLlGaq6IFYIhxyEz1lUomlaqztCQotNJCMLjqcY43dl7juztbCTkV87gskSGQ6rVwBB0IGHXj1ieMp01Yr93ak2106gwXIZ3iI0SjYatT8m0aLeOmYmSdmPOecZP22XByO%2BOb8HyU3MMub8dMGOqUBs9UVhauea%2FepSaUXyNx7w3ySbhwLVnfxfrdrOfD9TGxiQXqGIChoH5hbfJwDAax7mZ06nXU0HKVYy3RURH9jLWYjlu6ZSD0Puoe54TNkaU0RLBZirGT1bJ685d4oHTFvFl34MIWKrlOAqN1B5WejsFOgiJCeWuv3zeCwAIN2AX8H59jonGLiiUxwPSNjhv8BcD1OM2rKz9qBplZkR34sVmQmWGic&X-Amz-Signature=cf5f896a706a86d1c422282491fb24d54f5d751371476304e872bc58f99344a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

