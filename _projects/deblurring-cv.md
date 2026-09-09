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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623CSK555%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T180441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6o0chNBKnSeZ6LG7ehxSd24rqKp%2BHU1z1PcLDkFeJcwIgDa3LBE%2FMdTtUFyvHREli4DfJG72pvyTYxcpfb5HKKtMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKgY3UTc4GzQSWX7VyrcA%2Fd0sOuAt2jXyqtfcMS9PfVxxWw65f%2BpQUUg9XvvhaplmOCptM8b4dzrGXYyR0PwzfmknNSHz5Q8ntrgBUGvx%2FicfaI%2FfT9i0BJyosXXeUZE6fSxqiqsUbl41RIVO8QzsYbPbQOLIxer8Ex4ZQdBzTCjHirJMD5DdmqSUkJua2s3FKlvq8NlCy3rpCdA4sKsiIBqOPPBlughr81weKdprvs4sj0fvHvVLNCWsQRPQWDJO4HN0mckjV6NRAAudJQ7l5Gl%2ForAe%2B7AtxlITX%2B8sTHvIJ94ER6rS%2F%2FzuXpWNK%2BxVSxVFWXVdvKYUv42dMyufE4oxb0bUc2Mck0l%2BAxQqkA7EXAlLiVt4nWhDu30rgrLR9nNzLlPYG8a39kYynpDJnBzfMLggekow5gA15TVZ6CbD%2FidGtuXodiG%2B82bgdI4KkeTEs9IWB%2BKV5ve9V4ehbc8Z2X2rO%2BA2EITLzj%2BKQLhPtItvZMOauzOD%2BO7yd8EzUx2YQETTAchV9vqy6p2j6BViIELdQDYEPU1qrfA%2FLSgF4JLZXfKI9TDi5NUMo2xm56Tx8VBtrSvQSmC7LovDMc%2FgEyP7pFwf2TxHhRfi3znrmd0dqaaOhTO1ZkDtfWcy39fwXOFpjUpN5cYMKamhtUGOqUBOvm%2BYarh5AKjEahrmwEsXg86gkVhCM5oT28i%2FpMa8Yd89O5kVKGGYiffTGTkPB9q0mas8X2ZMafDjKoAQ%2FEa%2FaGmz6AIZ8IW5FcprA9pKx5t1uC%2Bs5a8s%2ByzcAM6cKbfjoKweUrH1pw3z9943VlZIMRRp4iALiaWrAEUVh763a2N9%2FAR8IlKma9yKt6vNigWa1DLn86Ix2DuWLIXw1LTIdyouUkt&X-Amz-Signature=cc2da1972f2c41287a4b908c22d2ac70b0b8f56a57584ab1e893896649e6fd4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

