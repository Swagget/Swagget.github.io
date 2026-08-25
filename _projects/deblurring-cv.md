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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFV6MG2R%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T101854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIDzJCNuVDU0KCjKNKhmqcdOmHBy0wLhJiNR5X%2Fa4XeWoAiEA4CrLMcWB8ygv%2FP62d%2Fdmkos7r1STbkugvr7qT6tUO5sq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFpoWd4s2FGFCLVpTyrcA4qnQpy6tiks1iKA0f9P%2Fdy6mCKNqbImgQGzbXhPBgKbjbRIOf3aAM%2FxnRd2MOV9JDNAF5sMCEATtefYaLaLvjX5tsJUUCujkHyIzwrQylCh%2F4XHXbU2OIF%2BoNzDO72mMvH8BmLm6DG8MegOXYT37X2yzwLl4%2BWUzDK5%2FukU431fLo0H%2FOpODHM0uLU9lFsRCXxHB4OUsB6f8KDO3cQDUfzl2f68zuqxYoQnsG6rFOYXTxTvuUbZRqfKYZ%2BxM4Dejlhn2nNTwim5wmfwpQuVrca9nBTZ3oKMcmqh7ZlBxJCII1tKNJ9jrdLGdqYFp0cPRHFvaIlchV21lCpViPs86aHoLug%2FxT78JNlGzrW0VZV%2F%2FLvOa7w5oLGvVXyFMB16U%2BkGXbxnRC7yie32SIXfavzeugqffCvN29BAwsyPjiIhno3UAD0X9eT%2F9XcIqC3V6MByxj6nX76NaYEP55H5cc5Qig0eXQw0bNCVY7QNE7GreeZ2Yzq9HJRzTVpeUqMPNU%2Fj6Rt8Rc7NOdllLsUdgZuW7y36iwXHfNiacHws10FU6UOBpJk4FTohIKxaPKmTp4blsbFNwrADkx3d8qayHGLAGr7%2FjmjtIhDI2DjdvB%2BSXm2WZpK6dTE%2FodLSMKfStdQGOqUB3Q1FYr15ymjQgkhX3GfdA8%2FEnZiwNAoc46uulTPfdFk4Kqi0k1MLdjjg0q36cDCwEMmGyxucFvjH6%2BIjIrcNyCSYt0Fe2ZksWXqStd5BJpfrxdBopqTnbJkVuWdoZLs4o4w%2FOVz5fyKXQWZw0ccg7GX%2Bz7R7loQk1e4hCHbw4gzUDrsrfqUPw5jjQM0oa1JLorU482wFgH2qXVItHRzwZcRxGZX%2F&X-Amz-Signature=028db580d80a4932d6c2bfd8c4304fc93a05f183f65ebf4003e70e534a6774db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

