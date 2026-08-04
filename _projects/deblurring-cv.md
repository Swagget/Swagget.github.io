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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDWOJGH%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T205939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDyHHUsFfZz2oQdCQO67TyMzEiSuVduvUPJR166et59VwIgPiWPpGIuX8rPxuAPMNv1wF7%2FndpDmc54CHpbjThMNfgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJm1B4odRScwARLl%2ByrcA0i74mOq%2FVyMm7K4XVHq9Wf3MEzVfvQFQs%2FMc5Gd8KmloBeLd2%2FV19gUIo9G8H1mUjt0XbECERK6JprzpDyN7B2MJ4ivaOGSfD7rJpEwdEFofqLgIgM46C9HaoK2Zvl7K1k1fOSObUm6eOgQCgKP4QzWSHyITII96qfykFPnWWVrcEkL1cvOt9t5OP8HAmFFVKT3pAXIdzxtdFvnSnu6AkuHgP7FOweW2ocoSm1bIvQFtPdtHMxbY9158VYSR6LvJ9JomByyLK5vnmJKIa51T6RsWqtmxtbc38SJpZ2IMAhp1ICNpxGkKP7wAMrseMipRvk5PdAWjWWcoDu84N%2BX4vA5U42AkjvzXUo%2BhRdrUDm%2FAf%2B3vPzfqUIFhp17cPBOluZqGkUuak7E8pLdpP%2FS%2F4r%2FwuRdpU7oVY0t2GBCY9QoVw7kkDyJIq7yaNrDJxfCC%2BzZpklHJcTKZe%2FUibsXiwQjAj6XRqOV1PiCyS5eU7M6Kzi90UTpuAnCNpj3WZLZzoFtuV%2FUJJ%2BBE5nvaDK25tgmpn54tlrp9xDj%2FLHr8QOSeA%2B0DfJIEBHakRQo%2BkFeXvzGwheOcx4V%2FGpRVvaWMSZR2d%2BSwRhxV3bgWlmODOr54pr15y88TX37xYlqMNOQydMGOqUBomB%2B%2BvDZpRU5t86BYqf0ENP3yh46XuzFlgnXtkC4Jl7hIzhuH5omhbolqyMngnA68nD3w7GEJMmSu4VCTW40bCED4Qtz%2BWUcBXVchJ%2BEZspb66jyqBqO%2BLNNuRcLvdsQ8%2BM66O9i%2Bq%2B5nxWE%2BAXYtHr26FVrc8AQuU1aVdMFTgf5a0zHPdCVjnvJS1lIaUhTFSk7yM6zmJsuwnGmB4VVOP4JqzIe&X-Amz-Signature=2cdd2982d5e077f8759c4543cbbda419e643d3d66694c6c6fd5197e300565f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

