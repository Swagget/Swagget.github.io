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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDOGLID%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T113715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDLrFwNitrxQWC5IPPfobQKonC3chaMluynJrTvq4cieAiALlLrORhJJZhy5JG9JzoARMS6NOlD3uPL56EEA0C3hciqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQtw265YNSaWCkGaTKtwDwc5hn53nP7%2BYhK4sgO1bYrE6gcgXXEhNkAl0k%2FN1NPB5J69%2FAgBiRYOVHW%2BhbtkzdQ08WrGMYuqrh5%2Bvh5OJTXFx987y%2Bd7t7SUB3IeHPVE9%2F7v8IEb2hYzQnR68AyY%2BdCMdHcOFn4PAoX%2BC%2BGyVj6Y0v2ixoLO6Hvrp34muypoueNl2T82SjbPZRE7zTH%2FNYN3tSUQnprR6FvnFT6GPoifQen4we%2FBIVFD9GDsc1zEYckeaCTNDyvRoSA6cN76m61%2BMG6hAtd1goUWQT8ndjXertePHHZTZxlw1pPe0J3ltt960exb3TT%2FNBl1SDahpWLgXV%2BnUg3cBYkIoId8hddreVAmcA1MdZwWbNWxsT6NLC1cgcm6LfClqyPczYAXOeHwgwzCh%2FNJXEl24G8znqpWRvvA5OYbRSQ9v0m8aQHyQFBxDVK5IDBW%2F3JWdrTgjAsiEO%2Fx4xmAEw8%2FSP3nxiW%2B4SzVtVxMTVL8c4xsPLEPruNeMq426IlqITfgQu9HsFg1sX29Ey5ebu6yXgW4dqRS9MlbvTapnv09ctwlPZSP94zpq%2F%2BfG2aekerbAuR1HxdMcs4IUZ8udnQ3AEdqOBJarfs%2BDUWghbnfhS1d0gJaCNEQUUricGRp251swwIXf0QY6pgGwUM9zr7KGVJLFBooyEeYNFmPBsQTo5fEFLPoseOn6QIwu9QrP1%2BXtHzlWyQAAxV51bTmwVjPr2aJISApftD4GfPVTT%2FYVE%2BzK%2Fpvm1V9ciFGde%2FpLK%2BisjI0uhAMRapjlgtTlThBkzcpsUm0qZtK5NKFF4poAn6z8S%2FTIg7AK6GKXgffHeH8FReFQ0s5YHXAaZ%2FmAhR30dVFULjiVVVmHRkQ5Kp8H&X-Amz-Signature=63d9500e3135d58d8174f356c34444430de1bea424412c8568f54566c5041e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

