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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJNFTYC%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T184338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLz4DEuNs0184yzN4GNf8EDcPEqXJCKKJF4TJ5Aj52nQIgdqkgzkGQDHmTgzaTLqb9iFC1Kw0jn5%2FTaEhxFWb02x4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs754kwXly5%2BS98ACrcA1SEEy4H2oiGn6bep%2FWzAir4etK%2FAitQp5i0nXKW9ESDU1I857tbNWjRi7sUDJED3rz4VX85rc%2BN0EgJighyi3vuXqarZhJAuHfdgdaHnlMqEJz06J7JeD9iYdEp4kqJuhYkcM6wVSIxucXhyrbx4uco83CKqHDXIQGwZJpVDBjL4Mp18L2uMlomkq%2BB7toIksnMWPvLWAYzxzha%2BHYOYOtNnZVc5rnwllL7uCanQU4cYSB%2F60cJSGEts3r%2Fkw3Nu%2BBn9CfbcedpRFgYiA%2FSol37JfDZJSJCCW7ljFugNhL%2FxeNBnTz6tM8IA1szSw2aGqMs%2BF2TiEDtfj7rzCyR7HE96z%2FkjlMN%2FhnD5mNolb6KHwlZs0PjQXAmAAlrjEZ8anGuf%2F7aKJdrREj31Q%2BeXANuB6Mka7mjoZWZhB50iBkFWGc2c1Utqd5OnpnmNo1atKaXsUejln7ZAV8knZ%2F39fKAEjjP2C9916t5K22q9qqog%2FgrpJ9XRm1yNMXlURbndp3YjBogZG4N%2FLhMlStthu2QS1h4NBmPptcullQgIKqKz4lwaolxOcLheNPq%2BtDfMuYYAK10z%2FiCkNlqHOu9cPc%2FVcTbTN7JVxDA5bspcFsqxfpZKhy8w2yBg1QDMPGe%2BNMGOqUBXJ5cG2VRxntBYAokmKE8Uyjw0EvVYanUCJu4ZfwuLYQm73OFU2AAf9V1UXRHHcs6qEWYFB6n4Na6mOvgLXuDGfyE8cQ5%2FJZWmLOJpeGFp%2FsPyIH0ZSVKo%2FxcFjG0zY9A8XPmT9iqbvxLcLeD9ES%2FTPhicx71zWW5XvYrPG1eeTysXkjgnmidHggUTm3Jq%2BLPmeb7jKlz1FSd7fIFUnIinQPfdxvU&X-Amz-Signature=d9c2c987900b4ebbd1a1121414f1d24202a31f6c8dcbdd1837719380e36265ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

