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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ543X6L%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T144530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIA%2FlwJPXmtjA%2F9UAIVpVjTwM3YJyMyBqONbW6ty0KVPmAiBgfezHnyXuiQ2R6rFA%2ByeXNErhv9eJnYluayAp%2B9yDUSr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMyhM3ZsmjCrYRBp%2BXKtwDw2bmD4bspQ3FmLJspC2uoVsQy9VqBPRk8izeowKO82ai5gALbbEAWZxCAsBxXO%2FpaSmTGHCw2CfKppnROhqr2uzsUJnKiuVaCgrryCfXBWjEjFItd2GG%2FTZY58mrVpZ2F8hQjcPEvcJ2NAV3LVwRfXXb8Mmz9MP8mVk4xllr%2BT6Nb4Mb2MLzXbXdv7npVkCElQoW70IFoOmGqI5uEbu1Bsm6VQJFic1TvUbhG1utoSHz5sFzWy5tdkh56dVoMZKekXM9D9Fog0zwZ6ZqPpeapalK%2BOZqhSv8As3o2KTbwc5lgKUE6YWKs4nR7iT2uuWvbQwMTYex8KE80MoX1Ca4%2FIh2KeEe3PsOQyOF2FpIlmFSxGY%2FqEEM7FF9Yb2aZubn9wy7sMXvNXXseyjyX4prxvoIKsep1m1WFKzN7jl7wtywascYmcMqQ4xC9Hm7LOPUp0GqGCuKFS4gO0FbsJd%2Fye%2F25xPCbIOdjb5OE0SZVIfoZIUeTBhxAPI4jIH6VLHc7QUy%2B69llv6RudZlE2BXgt6p3BlIHtHabDPYACnW3qLxXCgm4zkUkilRJHlovSz9RnRFDOjIDoEDSLL4j%2BCC6qtBLNBPeoqsKZFAiVWZwU3ZBp4qiFxT1hikNXsw%2FJ320AY6pgHnHMM2nfKdp1piaJsqK0iRF2ubCx6hKpBw3V4CDBd1oFVWQRKF%2Fhslpsb2y2X%2FFElqb7jXQBbcOC3dLJwTUNyZHKRr%2FM6R18ncUM%2FBRWpTOOz2seqy7xgIEgXf52%2Bxtmuvl6THMIHvgjd8qoFKqM%2FERg98jjimqoiF3xUA0c1gefSX9QlUvE%2BW%2FCBCjEcC3ihiwfySpLBStzUYJmX0ZM6kr%2FN2cb%2Bo&X-Amz-Signature=36e6e93c071b288b729cfb915d53621f1705b5f33857e9f40ada60db69044129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

