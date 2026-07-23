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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBENTX2%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDbTqP9kBJFUu%2FO4V4ePDHdsu6NGssNJx8cYV%2FO9jCKYQIgImSG1gPQo6cjWzto7uHfHuiBu19%2BbonVlgEszfutWTUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgAX4J8fgjMCnBEBircA8FGwRq%2BnD6UYdiiFvN8o4HKdla5DpCB2ASJwujBbuwSSz%2Fs4WdjtJs98zame%2FTjWunxadieUJ1ew3gd0RYxR7YrN30Fw49y7jx7Ph4RJi923Wm%2BAs7MXxIaSZ9omWpqI9b4XEOFfleKsn92Hrokj4RnnjNwXNJt%2FmgaptrfY%2F4c6L%2FZpGmwPwWSfGIGN5Avkikv8TjoFKcF1AlluHJjLpntDOvP15GBdwGp5jYJuMrxgbBWwJNg5CvwWeBL%2BcVznX06tuGiWRTd854eBYoKV5TDDV5I7ELBweCnznXmstSqQVW3lCQY5uiWMItweAcmA7N83urKGa%2B%2B42wZ29hRe8RtUI%2BT8X2CFYLNXiib8j5TSWNRvjNbL2o%2FD44f9Em3UMHkP%2FXGh2rXTff8yuMLsuGnjjQkYpbRsZ0t8WIC45shU00AYFFxQL1Z3xo4CqS9lgaBL1fgAuPWExJNjJi1q06wTFdIXVVHq60gl3A3bm7o75wWtvyQS0z8cvQBzT%2FfXodykAYXcwYs2z%2Bs9tv2Kcn4QJDm9csPY1IaAzO8E4S7viG9ShbmqDnphom%2F%2FY2lKkMOsRVQQukwQb7JeREM39lXuP7ev99ibHGh6Hb4vwNtAvn78SAqqpM09jH9MIv8h9MGOqUByW2kbhKTmd7Nowsh%2BTAfdcm%2Fk57gR%2F33gtuYXi9msFBKNNAFoEaT97QHtjoeu2TFm7wkws8JdKntRk9I5AOxuKfX8IK4z2iX8a7%2B5kXsLGWprE2QSPBcut63hBDvC2McnnXN%2FW0Khr3771PDYtsE3%2FmFVH%2BPpyPw1f5Jok2jYAmf47rDn2TSv8248W0cyOMV%2BVFbGSv7XjOf2MCr9XygJd4hr3Ia&X-Amz-Signature=0f10d7902b5e6b1370c332bca396641a42eeeaf1a68daa65d83914f75f679bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

