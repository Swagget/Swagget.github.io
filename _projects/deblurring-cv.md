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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX62QMYF%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T231129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDESUDkwi6ud%2BIoohdsp34%2Bsk25MhJ%2Bd2Aebg3JmiPn0QIgKjVABwP%2BeOBDgvf5WcT0gQVrY2QLH%2BjyrRhMORuiXYQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUYLHj09Gm%2BU8QKnircA3L%2Fq53ZwIegtk0AJto8XNXmnAE1dBEFPyvBrbORQT93TR135to6DszDmMIEOnIEvpI0KR6QBwcVII4oa8%2BQFSkGcQCKadNdDOXPUZ3ahIxrFtzyxJXDePZMkROjjqbBt2iuXg7s2EahqAOxAj3GJN7Fs6gyAFnws07DGCPcqzy7qpIbDNvz0IofDiDvIvsPSkbndi%2FFBU6q8i1xe9FJ8pgQyKkMTSWh1ZD5oyMil3ilxlaitsybkJSkj9MEov1IG3sBipsjVp4UCA%2BUdAH%2FY%2BLX%2Byt8NdT4txYEMRodEokVrkpVhokm62bWvaKAVZaP9oWVYVjHVpNLJNLr5gVdTvoW4nwcm%2Bgj%2FNLdw5%2F%2B9oaQvx0BRNgqyGWdAHBrOCu20j6tME52y4mav3Z5V0vQbawZ23awiAbqwV1mMTNUNsqTi2VrDH2BMF1LaXtK1zZDt8VEsMRzWfgPNInvNWA%2FjG0rYZaVUWVRLkwrd0jTnEgzzCmnOvmhNV8xqnjCKzSbobLiZWz1GHpZJZ0C45Ws0i%2FHzRHE0Pb%2BhiP2ovOx5erW38ArYPkbSgzflQ%2FtSPnrd0QUIp1ZGY4G9EAQkWCsu2gedy2WdlVNYtjf3MfTNf%2Flc8BxfMSKJ%2FdDQUzaMMyDo9QGOqUBKVgAVomkOyTlGR2USUwutrFrLJy1cwpZjDcxmAWekrzg2EcdbKL%2BFxFqZkZ7Hb7XGBFMvMvPrSTXfBuOJMPzAiUIVn2R2QhE9rqWh3dkMN1vc91zB9wFNToPq5DUfb4ddSXCu3XXCrwcrQt2oqK2D1aDBH6lK31GGVVRwmHgo46dzXwbqty4JpDBFqPdbaRkqYS9MLLVz2EiTCMNteDnAky2JOaS&X-Amz-Signature=97a98a44f41a799e4616271e59df796f6aa6353ddc5b58e24a1d917f012f88ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

