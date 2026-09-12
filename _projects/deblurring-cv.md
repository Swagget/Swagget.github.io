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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEJWJFR%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T194508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGL%2BOj2Hm%2FUFHlnQtUpizZwXdyw3S1IwPjt2KDIVERNlAiAyZX55zA1TBzJzgluXi1viKxh5nahoLEBJ0gJGJC0S9iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa41T6hA9KAIloTGzKtwDph8jvDSU9AH4JP%2FmnjpD8P9xAX8DOe3drHhiAgc1FLrgWoK8liLBAmKw68qsZVK%2FtQP%2B0o5FxT9b5aFd7%2FayXuo9f6QOGv6VlcEF%2Fp3QjHCrWcwEWH%2BCyRlqswjIENtfRAjhHFynLNoJDp0RRiGpdHzSn2hZ0gqzSz3sg9hzAHU%2BeAZh%2FfiZQtlXlI4HmZlpD5DCLDEDdBncZDnq%2FAXcNwHtxcl93emdevmJkgni4uNDIPoeq7zP9iOQdb5tbVlEykN12q4wajWcmmj2WdR4OBc75wnHyXnSe%2BZz6%2B%2F1OFLg6GRaZa9Sy4p9V9W30VKN%2B8MKnJIki0lOFx6%2By0fveAZwgb9rPQtUSm3Fh3n1QSVezy9zvoSeEobe%2Bo%2BruRtgdSXjBH2oTUHF54TyO1cyKlvX2DhBkvAGJVCQ4Hh68lpLLMy7u7D6aRSiI4TH2byPMEbW%2BcOFFJueH%2BXxUnFF7ylPcAQcmtWtXuk1oUpD1HOiXLkrCg%2FSv4VhIOYKmbvgA3tlUjFvMJz76ZlJs6OvqI%2By7%2FktUfODOzuUugW06uQH7e3zIU%2FbNw1k9DyjaZX95NitGfnmXLLlwFK%2F7ufZVYjROSMFoWKV3R5ktbjpnvIhNrXtXwEXGyAycVgwkMeW1QY6pgFObOXOGSqiC%2FFw4ciifGwmSvt5VAbD3wbbFcvNAF4MlP%2Fh9wKSYKuJhb3TalAWRpMYmZxlEZUBN2%2FKny2IYJE1nXKM%2BuR4Wx84bS3mYNeRugaYghMZUW2FDtFdzMjoKoYA%2FXnEDAwCIN%2BKzRBI9vfT4xfnxsz64oY5QhjpgkW0wkyQufA7N%2Bo6jb9JEa0kCG7wdWxZ6SROdW5o8x7CShUoqfQQSkG9&X-Amz-Signature=d5ae33782308300fea34454bf9902f9c9784277451a96f9a5a5df3b6eae33406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

