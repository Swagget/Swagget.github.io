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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDS2ZMOQ%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCx5QDZ0yb3E3YMpByxx9XL%2BqgRBbxezh%2F%2F2Hgu05wQggIgTe0JxdZbuR9JYQNE4GJgINx0wrI83FTl1Rv4g6yIlVEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJpWz%2BOWKjo4b%2FLXNyrcA4ebrynIhaOvMox8TfmbotQNnn8t7VqHdttPJDK1dzb2C4NNrRQKgPFer7G9f1Dm%2FPSncJxfGbBBwykJ1DJ4khSp1DsYYYibaXLHaKwr%2BCxy8wpPspdXNj40CVz9PKnnmJQ%2FNgT5hhyuQLuceFOicrVYMhhrWakogXxIiDnZqcWixAu2KlumkcuI%2BbnwBTnOHlodfrAQIizurrPw2DskdIPDPlaIKGKT6HQWL8TbZu9VbSNqK6ArS%2BNnr%2F7skSS25bMaXtSQd9t84hOhxJxdKIuoXr6pAJRh7izMFBIsRg3Hh5%2FSKVCNIudjN8SbysJNHwbLFM4dNb%2BIQlpRuryS9olUqiFGzrbgTwaK7m8G9l7r1Fclxde2PjdqAVosn3GD5XnpdmM16hM%2FdlKMD5FrGCXxo%2F6wupfXTaxHDT2RSAC91TZ6JIjwhGbXw5xgQ1bwxWmmBqsbCi8y7rGbfH50j6MQkgFbUPKY49PLALtZ%2BTAm83mM5BT%2BNnSQlhDpr05lfzw9H8K9uenrOa2YywIfcXkc%2Bws3hwbTwK%2F0eRaEf%2FRLVWrasUJrbp4y66WjOkvr6OAeAe7HkefK4W%2FuazYhZH73zdkdwAi1JbQt0UNOlE5uRtdL5JjhaCuBFwd3MJG8g9QGOqUBG0%2FBW5Chf28X6LVnu6u6RfKbPVDjmd7mbFyNCuiO%2FljFPyH99AUuITz%2FvBLQQl5FHUiqLkQPr%2B6CaQ3%2F1uvlToisha6hfT8yG2AooBY5M9n%2B%2FpUlTsAcvm9OSpDidShrMFffEid4twYRlYC%2BdI%2FmWu9gYOyymu%2B96WQtNTe9jK7TtMGIlSeQRC6P5fN6YZDoXredlaXlA9o437f0do0GX1F4NhYg&X-Amz-Signature=8887764b2be5666f8d4ae7cef53ff28f9db353f74e96c63c2a96c2b60662b9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

