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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIA5QJB%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T143209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCfcBO%2FkOJj0oVDsRbKWszWwNFj2OUGeYEzJTxdrnmWawIhAMk3ExSN5WjWuZ9DqYoC%2FbpT4BvinRwHNFb2C4j7x20AKv8DCB8QABoMNjM3NDIzMTgzODA1IgwaYjkwLgakmjeJ%2BJ4q3AOzITuOisBFjAvrvAKg5tfiafWmoHTSuZ9SpehjGm3QaZFO8PRLqW%2BfH50xcyS1mRxTe8QDgcsfavUJBUIXftS8Nh5w4vfkrw0kWtmjapd3gPV8eta8fgvrCCP2NBMErr15LjJ0Okk0xRvTTaCgtWuAUpcboNh2WavyFtpcbg3wJ%2FkFl7TW%2FlPmQrz6LHSnb1bCkq1tnnmLcVmKoAoZ6c%2B051wgqB7LCl1All5oPr3TUZ592EcoOcOYkSly3e0c3jvj07mvbibbBZpP0nZqu%2B19U4VHFqfpAx5PI3EjOIZiZ2Pr4qe55nZsHG2SzjKzDYhDvLi5l2NCoesoE9cnrsUFzPu3tiLFqf0VBA1hOvxSlVOjPpqVY2%2FKXPAC26kKTQmQlyGz%2FPYrjRhe88W1a4MVbZFHMjmHfc8XdhQwo5%2FyTlFbzPi53s5VIHWge28eoZoCOsjOkbNiMlfU1xYS93uJQQOI%2FKt3EgI1qTJLkHmRvnOaYaPzU89v7kDq1MZQrEeAM1hh1XbnLOSG%2Bbqr8H2nPITfMR5tEwS23bvJcjYeTki29i4ZTFYCq2tPyWfYUcwVef1h5PDI%2BCuYt8emMMkU2DfIPuyIaOlr%2FamGHKILWI4MN60qvCrZTH0DVDCz5LvUBjqkASKxXrSIMh3iTwb18sEU3Uj5zTxb5mtUWJqCoAeZwFnKeddG2eHzBhdJYgnigbFlp%2BzTGvCZjN2qeR7NXGnTo93IkkAW2JkhTcs01%2FLajX6s1Azt1DRfHNnlBqDEd7EtUggfSsrhAa5P%2BBw4Iheks%2F7xVA8gO6%2BCRO9vJhIq3%2FPh8oul2e8Gb5tQxr44jjG1mRTINs7CfHexsoVJit%2FjMiwxz1iD&X-Amz-Signature=3012f89f605b907704283d690efee441715676cf1ab98a326d510f0c5186276d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

