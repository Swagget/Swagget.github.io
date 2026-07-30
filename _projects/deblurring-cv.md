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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J44DJNO%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T122031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASCxDMxlt7m5xIeLNUpDj4tH34PEMUZ%2BEWuaREeg%2FkoAiA9rNiHNyW5q9e3ts%2BpbYacWiLxotNEgB2Vpz4gMGwL8CqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME89KDAZ7U8ge8t8VKtwDiwA5su%2BvCzvUT7XZ%2F%2F0nNH6qcqTnAy2chEkJr0Ri1sXYl%2BSOoy3hScJ39KdSLC%2FVZIuAcTgfmQwxFxqcVvp7FVRtUL1pwTGojpWo0kg%2FtMTUsMEtPBQqZi71w7QMynCl0qpzuezozDOGVGCK2UuWmcQ62FAKmGiS%2Bl2hkTI%2FtZS%2Br3nNgZwcfy0CghJ0CuGlpozc5jzv6w3mmFSmW0mrJwrFjxIBJOE1EWE208SuKXeLvo1j1g%2B%2FwC63NW%2Bq2jlIpRJ1i%2FcjdbW3Tu%2FKc9ZsHtXlpsPaihte2zuQh86VPVWlT5FTP%2F2GhIX0dlKgFCxpw2%2BPco4WhUSjNKb6%2BJjZargpmZdkQJfiIyNSu%2F3LLnf1RXTufPAAb2%2B7OEDja1wqJ8Pd1yWFfZeu12n27Xd3rS9vHlL8raGDPwXhx%2FMH0Cg5VA1gFhU4GPn7MMpTUvI65OIzHlhtx2wQTet31FDs9h0%2F%2ByAfT5qwh7Ht%2FCHN5VCrRe4LU3zjAJqx7QE%2FxRw7rXOJlJgsJp09hCpZWcM%2B%2Ftkpt%2FNp9mbfzEgKJX0NX%2BnmGuNYdZSsHEwsormeqpw5SHGU1l4Evoho3QEQtjSX2v4iS9jm68xPCA2f%2BKfiW2Ay7p5%2FRE9%2BNFRdCc8w1vys0wY6pgECo6B3RS6oI4%2BuU7qMKnemgZRTTFCbT8%2FYVS0GmLnATsMAxx9iKJhXObgsEo%2FLcKHwLhFX%2FH4%2BOpOTHPrOefSqNBeu1Sv638M6IwSfMUMUUjeqmZ49IMR9pAUDYbczdRtLIYnk%2Ff%2F3pz15mYy8csAvVbzWW3eNQ6V534RrEDmy%2B8MBM2SxztlbBGHUsDBNmcK%2BORcCFuRNT1GWvTP6I4%2FNHPldAPqD&X-Amz-Signature=b798b4514ccb022b90cc17774c25e9dc57552dd0c356c39749f0557972c858f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

