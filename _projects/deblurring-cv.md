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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDRZCI2%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T060224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnAeZ0d%2BipOUltUsInibzEvm1zG9UxVtF6PF4Updn%2FtAiEA7K5U%2FK3FF2A1O8GSD7liqGwCojo6qN5jXmHGj4cfalYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDI2eMV4RV3WgtaF%2FjSrcA8XuJY6YVJa3VCIVZ33HZ4wrsCiYdC0OHRQ3%2FY016R7YGKr8M48KY%2Fu%2FQi0Tc4jpavxtmHj4hXDMSeTpxyqT7rlMHwAENPo1CADWWxsALXfS%2BszKDK9vQD6FSAUm9TWiRs8ONi2BCkdbF9eLNSp6w7ef3zs5S4smNlAFFSFYqJ6DL%2BY%2FR0UXnWWs2cDrHSW9h%2FteBKlrg8myBzG2C4zZ8%2FtInfStBpmBAeAYLjX%2BJ4dqvmX4KJMANY9ybVYhs4rlKXddDnSaVmnORGuj%2FXXXE5kYV2K4sfQtnOUhQGrm0yr1bRGfcWrhQJnpTq22pYgDy%2FIMGYhaj5CbS2T3EuNzeJQ3HXDnOsoowAhdpNpISI1Kzx4NbKil64Oo9fKprb8k5kKIn0yU9NIDl8bILj7b71sWPWuSYELAn1Tzw4jFq9Uvt6hJVoXdHc4cdeMwlfBSi0uFDeZaAbae9%2FJwMrsSEMq7RGjz%2FSJWBa6Wwc0S%2B4bk2j%2F%2BeKy04fmFObsamUDv9%2BqKAt0IKXrC%2BkOP0IQFfOdrRm%2Fe9kH7eugWxUdYJSfVbKBPXnDOXF8ZimUBMXwgKJexAXyzvDNTLJJn2JiYVqO4YIHH0t1I%2BlgzyoQHDse7GFi9MdJ7U%2FWAhLOlMKPO1dMGOqUBWOYnGG36IioZd2GDsywAyPDncO%2FBjF1mpXNig9r75zLbRAWqI3wErR0SxQ5YRZsVIfh5Ig4LJp8N6lyDZJhQimharuS2UlMnn2ywhN4EzNfdcJmjzOr2%2FbRSIuuZV3c4q7MGjCo%2BaPhzpGajzfVn8HYpb8H%2F7HMopkOZh7Tyei6Ti3DMbcHfPTUcW2IEWy1lTAzqQy%2FzLLot9PVK%2BDAwOXOMlATp&X-Amz-Signature=94b6f0dd70e7226b87cf1875cbbb6184cea10610ba7092afa9b2468d86f93896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

