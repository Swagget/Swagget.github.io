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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WSU3BB%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqQZx7ULRoEqhrqROAQvU%2Fcv2ZBb0ZoVcZfX99tp9hbAiEAh1H8bWMs9MQQvdjb2w8LT0O0YWPFlyNTSf%2Fjk%2FD%2BVYQq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNrPE4yqrgLYlWpizyrcA8SfIgudTe35rVa3fh%2FkxAWiloZ4dgKxzhiA84K857RD9AxCfW37S%2BvWbgJo9CSPxPIIz7MqRq2JW5ufi1BY%2Baby4KDO4RNzIXH46nAmTZhi%2BHVVyT43xPM0BV3Bkd1yS2I14rDmpAWD2tVekk4TP1B8lRTT1K77YViKxoz0bPBB1YbDZJ83xKPN3NoNpB5dwiR25WnG3HxTSwk8K6EpoLpz%2BSTUt2J8dHkai2C83Gi4d2QAaj0w3y4Q7y95p7HNBDpmonwa%2FfjyOX53jYRsxoB61gayIvWe55v6q1sIUAF3OyIln11xpFZzmwMjxDfpLnHxbBnvY9DIhDpI6Mjr8AQyc4tE9kC2MtC8hFzfMbkp%2F%2BEF%2FmuLkNrOmF0o71oR3Wnq2W1s8vmgrRUTSae5vIFKS5ufsIbmxp1B7KV5nL3YgY%2FE1ZJ%2ByfaVvH9TzEAW%2Fw2iSxLzYRgWYmtCv%2FUltz0AdXO%2FdjzLZHic0lKyv6KwxSXWPuU3GGfAqSaGqruBWWuuEximHagF1Eg1z%2BtN2FIBe7N4a8x7utIFoiBrd3SX1NJjk8G7wk9TFKw3%2F9P8SaooshJE5Ha5jBo5R1JAnKJiDO6ccZwlJacm5jjQ3NE7KPacRSjmUrFori2WMJKv2tMGOqUBkTiuC4J5rJdhLXbpXTQPEnRYXAzocakiTNaf8%2Bfw48CwB4ytXWBVNxiaIBdKD6CXOPNckFclj27TTxaxAqRuoAF9zIPJT3y5To5XQYqJxbVmhP2T%2BcFN6kC4Se%2BCjeAPOKjbof2Di9BIX0JZzUIeWSCaMZDYmbPspFZjcasgh0YuOl45A4iHjeW1sv3Fbnp9gHNKCCXood5%2BM%2BcKCi%2BpWC0HQTcG&X-Amz-Signature=10b8fb6b2b21bd31a2aeaf43f4376c6aee64590834bc2b5863c7ef18b288acca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

