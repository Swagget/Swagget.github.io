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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XFKLF4P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T235021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BDm4bZQ18BdsxoYtm3r5ScMHY5c2C2OC9G3QHrfvW1wIhANYDRmS1%2FmiyYYb9gfwCij4ad9uHwpIGTnT9Ey2%2BOPTqKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP96BVB%2BV6ngi5bloq3AO7baUWEBcrEZCO%2FbwO68sB7%2B0RgJfnvtANrQZ0O1swSG%2BaMDqUavokkwfIUG4eJhgr8U%2F%2FWsj08TRm3pvc1wTZZNfz1z%2BcTyyfEqBGssqruDFSy1HJu8jC0GI9igSnxSDFOS47gu1tMx9SD9ZuSW8Du4VYNJyRhAUFGlSVREMqLR%2BF3o4Ms%2BqyKBp7WaFU6T3EvQGfuRRIF2QoxJyyaUkPP9GVE4OJ4VlYfvhrAm7YxwXZHKtUALAwihS340R2%2Fxd5VYvUetADbUHItVswq4JXwhye6b64Z1QmyIE37ehazYvoWHS7XXrZzkRcs5SPop0XjpxkQplD6v97z%2Bk3qT2DtNAJv1KNPDxF6MEekUZ84Bh2jwggDbQPFsz6Sem3HRx6m8Bsugr0JkEtXWEQyN90GGTWfJjP2JdGFgVRdyeu55u9HomApIhyYVLC4D9FwaF1nmIYvN7SbrplHJSgW8hAQfHb7zsLTzIFRsxukXP2cuEJ7AMEYCk5qwnmFKfHp6k3Bbp73pKHInPaCAwyyX1%2Bm%2Fdl4B6jy1TE1TSTC4kupF7T4OQle9izMq0H33ZzwmZv90r62i3eo9Jt6YcpurlrZaVeRGemSwBb2%2B0a8NZ1NbvFk%2F%2BW0gEKb6WLzTD%2B5IvSBjqkAZeKNunvyBQqJSy6VWYOXcAWT3N8CE8njCzwpyRrs67y%2FcOsSp4x%2B7BEecRD7TNNID%2BGvPZDYw4P9hwpmVROesndE8BCDcUhlqHZVMUaWlKClOVhdiU4DC3dgF6OORBFiHmdHDEma6KEP00IRd9E6DfM6veYbq2%2FJAFl1y58s%2B6SYkh9KlDgDQ80WtiKDLob6GJPXdYSUfsDhexGQOkOBet4%2FmGy&X-Amz-Signature=8279886c11a36518b58bc4815482274c8ff8e02b3dbad9f92c050811b01da6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

