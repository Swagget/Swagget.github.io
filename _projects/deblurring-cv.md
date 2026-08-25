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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622APCJF2%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T003031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDwvdDbwzf78u7sHJNVit8W%2FCOlNcRIxBwNQuq%2BNSuLFAiEA4my7lY4xdbclegmym8M%2B6%2FVVYbpgcKSZf%2B8fDAif0g4qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG88feH%2FgWf9ymDFyCrcA8dZeN4ToJenoh56PawcWaLrQqbYb3pO2Ok55DicfCij%2FSh7d7d4JQFdp6UrPcZyVlrBWJ4Ghadb%2B9ixJEc9cgkH7C2AK2aKy9bvHrHqrvlAiGwgS44o2vtyJbzQ3g2P3mOyPGvgu%2BKnaHa8I3uN3iPTlr38ErRxVzOO2VBm04t%2Bv5Mgv5TdVKqCYWP7d4JIltGH%2B18pvwKc2Ew3wmuUSOvaGL4kgY6Ciku7wAW%2FLTp7graieZ7Rm4x2hdW3VcX%2BrVQrw4T%2BofEVfS9QSPJkgc1TfGkssiRzkSxadiKEj0MdUHNvtzb09UF54bdV4i1WmBEVWPUvHlVSCa%2BGX5kSmfSL%2FuJZb%2BGBqUX9D3bZyWrgq73FlIk%2FHJPeiIQsw0JaBycEuht3WAzL6bXmUSbQy6CUPB46y3UTPhDoruNXPMtuDnFXAoplnWAfiiIAILf%2BQvRVzQnwppfvszjuYgKnQoxkz26g3XVTSNnHXdtdaIePBQ62KQyN9IRQtXOPbqJgS9MhtvEakonXX9YwyUC%2BUEWFDOwZmOPFJpEgtrzbiqxjfOlBtjgkYKcG5O3yjUAlV%2BVK1UtuZ8QEVW9ixnRjH%2BBJdzPM9tHLrzf8ZP58Dsv1vJzsUesjO6d4Ml65MIWNs9QGOqUBgMZR3wReKJzl4dIzkVrI8OrWXU4zpBmxevEYPbqP%2F%2BalHahgSLwyzb7T3HFe8cPbbGPxY5vP5XmmlwCSrG5%2BfPgSZzIIZ4a8DVw6sAMRbJpDPLrGEOk7CWL1y4Qkb9LkhdmmMxi1hOHpKKXsmyubIePAlIkJ2qJVJmJwhIHIuJkvloubObTGX%2F1bnE4mcSjEtbZBwFeGp%2FgrbSOcqwLiMT42o%2Ftd&X-Amz-Signature=214f30873d923c7d256a8d7d8c6ad73e6f00af20bec34e679a9bd78def1c0e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

