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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7BXSN2%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T225152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM8NvldgPbfxlKUHdJCIY4ZSTDOr5RzMG4%2Fbp5YLNg9gIgaL3AHnKn1S0teLHUGO4BvyEHZye3HNF5E6O8qOz1OSkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG3%2FhgPk7ER7sNEz6CrcA1W%2FTAJUuCo3Sad98j7MxM%2Fe7J4nWvJWMcv8du5R7PPLd16HBqfY7YusyoCTQT07t73M%2FwcVXpXoySYxvcaDIz1P8J4rVf1IJ0qTYgz5JzFjTHnxg0B47gWxuZakSIk7zEud2MvUR3uZkF3r1ABZGA9jH3rL8XQqKAoVgwLgle5sJdmgEn7hYS35%2BGJ0R7aXSdNmnWwVUIavkP%2F5cElhWDkMigl0f2PEwXPgJ9L%2F7xDphif9oDnA6lWLa9uD8V3UkGewBjD7ERJXlB56bXp53Gt0kG4nyL4EtGA9odFyV5T2j9a2blAT1zdzxuTjTJq0AbuAtHVPIuJh2T1tX%2FxY2puJ8xf1a21JiH2DV9ijNZJyXki2Rbds37OPSLMIreJH%2FsurCobv8%2Bvk48h2JTCRuSD6i6ERmTMaUfuCy88GE%2B1an6W%2FabLVLp7QLEII7LiPUdKUiYzBnZIxePSe8xNeeoWuO03HwBlOZuLSxBEVQZEZePLtykQLj0XkI9rbg1gne8GBKmgc4tednqKz%2FOck8jgTgBO1ZzutfHlPxUYPVS%2BjpBupX8r5OtKnDynnkLTyqs2tW840BQqk%2Fe1ks3ZaAXOFs4yZRNQHUgqtzBw6UREzLKvRGTc8VQ1YZJWwMJe0zdQGOqUB6KoVAWyC8cePTAjOBknSV96vLEPI2jIHuNuQ1WLkBvCI%2FoV231e0c%2BbbEEUwlcqTmke8pjfszDJ23Fn1tU9o4acIxk1rkK8p491zaJLhAj1EJ4xKNG00R%2BKmeA1FExPxVNvxDyT57M8B3iik%2B4C0KzsGzM0yojuqbzUTTcx2Vr7d9kVGuQv%2BIZdGFnVZzMDQ1m1cQx31sHV9YrSrtrw4uHRj7ACl&X-Amz-Signature=7fe7a55e4eec42f8bc1963cde55f710c41bbd1c6a421184136473e4f73c1c9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

