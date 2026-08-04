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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVH2NOM6%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T221014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIAVEn5By1WaiHW1Wm8smy5QMw6xSYOxlRzLzVoSTiJjwAiEAtNk9%2FGTx%2F12OFzYv%2FBJOf2vYvf%2BHCODKF03KGit%2B1P8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAjGHkhbCVYfQHCLlSrcA1N%2BoFsy3hjtqiZHLI42gX37QVp8qacJDWR3%2ByCiYKktS3TBGWqfkhXpgd8oI2FSRr0v1zc1lnJCy9Qa5EB%2FpKH6qkjLuy59xk719ddUSDli6ucT3%2FxpKHaAVF%2FY0gcNSXnTIO%2FfPUXe05PnBrSGHcULL%2BS6%2BFVPJEEIBhd5iM2LRrilqq4XaHpevqLHqtckeMlPh20uhRiM%2FHF2efs%2BaJ%2BGrYsX7HawvoHJe27%2Bi9zUIsiyDjy3OrqY5fqvd2%2F8z0zT8VGz0FycjcJiNqny3N2bkVw8rzGdY8qkYAEK%2F5m%2Fzrfp0ckg4BbrACP0F4L0VFsQM576un30CNRJH3EtjpOnbhhe1l8RTsurGrt8eA%2FHFMorojNkhUA4zoSJjesB0j7r1sxMdZYE%2F48YiWLfMSgCKMwkbcmTHg4QJhOrtBfMMXd9Od4%2BQcAQnGUxJJekrgV5fLk1m1bwnNuKb40LAKIpM1KWN0bDShOYbS2CrsmJ58GjuXeo%2FmGhHQhfFvgnV7dgJ9TbToX8GpzHJ%2BMLdUxCiYYz0dOpJoa%2BC9tbJ6R4b1IETs4CW0khvAPtENTG1fFm5dkSe2szVV%2Frmm4dsHzo6bT83O5zXoX2%2B1tKDOPEg4ZNFfgSy8Be762%2FMOO5ydMGOqUB2ukKf%2FQDbFfIcfADxNg2zYP0hYdDLiYNtYbuDgTRoXngyDdwuNYieZ5JnpTeSYH%2FrIci40tXENPoegEUfO1hTpoT1nYhVdJxn%2F0Re1Pz3JLO394knm21gj1Q1go9zlHKickkMgj0WUWDxyVmJYcPT5jtqfkQY%2Bkgn14C5AaDIUSIEHlNCEqd5NjR2rkAkilhC6V7e13I4HqbE7qNRLiZzkUMvwp4&X-Amz-Signature=9cccff2635c2a5cc1e9d6600f8c3fecdbc2f50e909f72cb036f9ad823ef13e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

