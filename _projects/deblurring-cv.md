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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQY564Z%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T072841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHepMkfHKz62EifwKKw9M0lveaNLmVSIP7%2F1%2BhWxU3oCAiEA1OZaBQOhNquJl9BqXa0YTZj5s4HFbnLkn4%2BHJRISTZAq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDL285um%2FlPMCF9IdeSrcA61XF1Q%2FQm6NrMmXslkZcUpPwVPAOK2kjELFFsRuTSFGmZLuypnHO75%2Bn7KwvJUPBDnODvAw2RSSQXN9hIg37XKbykihKWFrlZsQKT7OC0WnG2Aj2PuAx4bdv9ET4nS4vvwaOvAVoxF2dRGC1MyKkoiAg6uugfop9rYHpSxPGJHfgmwtzJ%2BZ%2BoZB3zluYiD23RJK9Czn6K2YjrTJss%2Fpvvhqn%2BMU7i5Fs5GgNpCmlZ98234T8dhvp7GKMttLQtB9qgi9yfJ3qxggWog7pOBBs%2FVQvA6hq9V0zBEh5j5fren2zbEokATnHgl0W7swSTG0qEcHe11P9tCmmv694PFOkmjrYF%2FUv3okm6h4FZFGg9KlxlGu9SYgKxHmgv2FaVmr4TGVikOWHVwERrABO3OMHqsmWp6Mvue%2FE1%2BrY%2FeC77IcU5EseF0TYb7NNdX5xg5ARG8qH0N5MQXVnLM2W2RANmwu3skfHo0AiG6ri4uex0jUsIMO7lFp%2B5NLikfReyPljLWqoggHw5qSogz9%2BZOnMZJpwoA5oqgEGtwTkAzx6Q25wQH8LQfcWIMavi5Sb3gYuwiQikLd519Uemda2883rfjuhub%2BU40Sfv5NOZhUrpMMxYPSb37e8doaHQ9YMOOHxtMGOqUBTrB4FpyQD3gk1G2VCkqzcANH%2BbhFZMyJv5te1VGxDZVenDnLmPOlVepRBqz7NsJ7kL8Ki8lyFUGnSWCeNWsF5eZxw68axovm3W9fyk3HH1sKKgUbBCBlHjyfJ0Lk77e9NOGfmc2aJmbR1wMgC%2BP8SuzJnHb7DaGUB2ODhiiaUfjt3P7j6h4aOfMfP84i%2F6qIwafYv7lJFP7w61hRr%2BLkxAawBgOC&X-Amz-Signature=86f117c7a454d37a4cfaa409ecfccb3d9f9e8704ce865e654b3b8e6a9a19bf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

