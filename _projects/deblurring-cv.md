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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCE2UYUM%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC7WMkP3v%2Bas1jT7HnsPvWEpHHwy0yg8qXjskRen502vQIhAP5816w8v10Ow9mch5oOZFLX9TKFO2evy%2Bh7yOfYYMM7Kv8DCBMQABoMNjM3NDIzMTgzODA1IgzZPszsDV0hzwHhBUYq3AP%2BBEFvAHPO9QCD56g9opXxGLAnUGzBgv18yWMtEZgevDrF8v15ApbUdF7dGVfAAbq%2Fx3hg1Tzdp00Ap%2BC2IzXzaM666LUjInbk534O3uvvdzNxH5LuPI1tDUKANTuHTZeKXQeSEOQqwAsy7wxoH7Ze6oEJtZwrFaesJUBoewHaZQbxKu4r6CchdvMPhUKtsuLRiwSqqByX8xwlDe7dU26mTWJ8%2B1SEv4rs%2FISxKoEaCBwFOTlK4ziGsQddXCIP2JlRIcOx3CHvN3QjsvpypDxlVXMtMwSLXsq7wlE78FEK7%2BENUSCFYXPaZDtAeXtQB9IaNli652kvb73a2hnj8QK2CvF4IY4ICXNHfZky6x6td80Zoq8e88vN7x4IDNOX0TkK6tDNTPIXChB8ZKLKRZ8gbR4NGUrRUH26T%2BljmZlYQc7S9p1%2Btd1cefO7K0hTH3gmTMVtNRSs6JMgFJKzPr07oK%2BLsL%2FAKIq2uAEdalt9wSomidQXySkmWhPalDcDKGr6tpj1xNGooXyDUqR9sqPrqopXWhZZflRjdK%2FD%2FsxWtNrYu1iUfOAHcagMX7ly0NJJ%2Fo7dVuan5DgcVWkzJQifNjsbE7qO6b5j7Nc%2FapxNFOLIpxp4zcuwaJzawjDG64DUBjqkAZdOb584Oc8%2FXM%2BBDvpPs5UgvgqZdFEq7KdFztXFapiFo8UyQEGTn%2FI3VeX04EmytbEEucugiS6FyynclQIO0dSIrOFxmbnPhu2SC54BboOV6hcds9MIYSImvzDdyvRucdn7gt6XESVZDQkoVlZ%2BQO2Z20EVOol%2F%2BhB241rzmlGLhfSo%2BlRvYZkBFZoA6pCneVsT%2FsO0ftkK%2FP9OznV94ttDOAvn&X-Amz-Signature=92a1392960d7f1469c7ceb537627893f4d310cb6c4ee632fe977038bbf150cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

