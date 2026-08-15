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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S65JSCTI%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T041728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCHLO2EtJCKhwll33cZAiL8RLnRoMMI18ZeQxvOUzjEZQIgf8XALsg4gSMRY50ijZnhzY0ClNe%2Fwp1tGhXO79GJ4fIq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDFdDnGjRg88887YfKSrcA4Gqx%2F1Vq0wF%2Bk5cDkk90bYRu1x518rwr7iLAYgRn2Ln5Av69inQjrWMOL1c2i2KLpXwjRKf0Y%2FirudjdV3OQcTi7jdvJx6DA5MLhaeQx5qlbOS5mWGt1%2BLzZ8DgRvE06g8pXFMIXEFlXTwgLoG%2Fc795fE2wUWd10DHr4bibqv6Ni5ajv9%2FHyRahs7ql70rQsHsh%2BjbG08%2FWSDEuw1rmnG4grCJVMFXnfVMxzuUN8c5HIedQc8KpF5bOeblSxGFytEBNdnQEdPynlp%2BK26fUohy%2F90wWM90D7hj56oSBeSzAhcEgnhorD1tooAYyZQRGYdVLP1kNX4x2%2F7fx%2BDc77%2BBfNdjjFxaLr8vdBKUR8Mx4un2TFjot2fwq11lvrd5Iw1E9LksCEvRd0DYMUCYcFgWFSYbN2%2FjUqL3VBPLg1xahDgiRoNcOEgzQ3NvAwREuYUbTR6AQjZtlfyDeDzNO8dFEzji9YlRCCoUwV8o4Pkt9W5J%2Be7egAj%2FSXSwiRM4pk%2FpF5ysn8TM2CU8Ifh5UYyYaUqF8h%2Fo28DKAJ3yA8%2BfQYldnfyDIHHKgOuFGpvO40az%2BisvrSqYyiaQf9C%2FLT5SvTwQRGGd1Hoh%2ByPjqB9ZH%2F0Wntey17vjk5dpDMNr%2F%2FtMGOqUBE%2BA%2FIkzTI6gs49MjSHzPAUb3V0ItG36KdB39Kvs%2B%2FnCq706XaPA1GBSuif2jCSfiBHdwxS6M1H9ICHLcpw%2FbcjQExdXOlV0MUKe3cXTQYDIixL6xrsrxrAVrnjt9RPA07PYVLTlWTrdyCMeVD0RE5ev8Fdz7yA5sCMTiaSvICeMgyWiIogVhTiJJsg9a93EAfEt14eeZUQ%2FlsEedeDkRq8bPVwut&X-Amz-Signature=aabb0f63acf121a8d4bed8ee9496adfb347c07ddbefb8e923fff8a6577fadcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

