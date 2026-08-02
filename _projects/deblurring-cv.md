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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2Q4BJC%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T164250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDSY%2BGzKbTfD7cGvh1s98xvoWoNIDrKmHLYgNsNGyTilAIhAJb5QTt8Pr5kSuujIV4Mqej8PXmtJ6cZsGZgFzR0m2QeKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsDP8Vryr77huxUVUq3APy2F4DbbP1GVoan82zCPcjNTsgGd1DTUr6J7LosXzzi6HSSS4oBMQPHqKbHJDBJauHjdD5yxAt0K43tbTE0CZSR6EHCUY9ny7EmNBCBWeHRZGwLIGAT2XXa9p6IoayWEoDbooku3evESEovnsf6rSlha%2BRjzWiViomYJKFbfiCbzPq3oEoAulPyOUyHFrzytMtfC95zqA5Vy7Y3n%2BNtPAy2xioZlRezLCPWw9%2FyoULGReA3mbqQXXpDQ9iIyJ3SArz%2FQDKVRV%2FYLV26pDfhPNNnPiYLxRFdIN5B9%2FHhgrql%2FWB9Ywo1qgRRqf20KYAv3B1quETOzD83UBVoPsgEPRNsXmZc%2BLtTLY763KZG0uMFCA4vsMCWP1YwnKIaoIC3%2BbGn5q8yX%2B5%2FOjiTc3tIqXRU%2F2xG9gg0Kpx%2BCPNI3UN%2Ftoyokw%2Bm6QuS2833TUOuRS%2FFQjliwumli8%2BIy4gPkl9q%2B7xpjsMbJtUfIulpzKPkMqdhn7glWANrgaxT6W66h2cWhg00pbu5TAfHpYjuvB5p6fbh5Jq3sHjRCBP4x%2FfzA%2FMreTvp0HvVAvzCs1XWzjQZJeAhViNmpqYYmLAZXHaIJYnmxtbVsO%2BBRKdh6KmpxVT%2BlaBu5Cmau%2F1OzCCj73TBjqkATZvJ0JlwvN8AsdgOijqbWx0M9x3HrelnxJWdlgL1Hg46bkamS1RczSHaBZW1pPGYXF15ec6hIk3K4gLK0utiEkfEFdlhNzl2muMZ1o3wI2omwMG39BI1wJrG5ByNHvvpfJK4ecO0bIrV5Q0PdA%2FX6wQ9N0hIuF5%2F1U9EnHMBl3uqTkttkyEhKR2JrADsKMeXP3LvI54KtrCTTyNhx9pPgrKwXZE&X-Amz-Signature=22ab728281d880827c080c7bf6957ec29fa04b7c608a5c6852c00a97bcc1e927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

