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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJH6K4GO%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T091515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2BWRTwBE%2F53ddCYmFz0Bh5dkNkX%2BioQevb6hro23yzQIgettWcK2q5bG0TY2yY2PkGvBBjcoUee7YH0OC4EvLL3EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2iwz%2BoQ7D9UQtMGyrcAwRJ4XRx3EuNL5mZlqf46hUMzzcLiS1AUVk4r7YRA43rHaTn3uPynzqcKwIUVjw3qTzc5T2rKAwirnJqj6g2nT4mbfGSJglSLjLGOFekQCMODn0JT2ZkR8c%2FpVkfyG1ByVasRUP2M%2F2%2Fy9JQlhZaMmgJ3z%2BmpBCGB35ce54MVz16BUug9%2FVPfwF5hRt0DES3JVs5qt%2BW5q%2FZHjTEmGBf80adUGlXZynPjFuhbOLnnhHNm9qKPUyp5%2F7EDf1Ua%2Bz5xVWw%2FN0Dtik5oxfaOeuS3Mn7KI586oC5dwdt72kOViUEwPnWCrf5tTFKb3M%2F976vci6wGQ0ZAilWhxRM1FRp%2Bq806jzTqb6fKdFDndJ%2BqfynXgk0hkijAcZAOyx1immrrU8euXWV%2BGBVo4wxe1ImGy3gJz%2FLUl4amwIh1lAyVcENmg2xbxz4cFmk6ukdDNfoNfP5IbtZhPHhftM4DPVJQWjQvhhyt9c%2B%2B8NoY%2Fkuo0lPaJlNGq9agRTGGUFUxvfjMSZEczg0Hd5i3103qjTO6To7PKZxcjQVSqUM8xCW%2F%2BqNTxE6RlP1RQozkaqCPCnSDDqtXhLga6YljzRkmlyfsUJgDefBVe7MYQewjWsobnj%2BpKYntK6jloL8GTK0MPqspdQGOqUB8Lk%2FLLCuvSKKaUTe%2BdAwD0urUV7QQ%2Bt33hf3%2B9FT9mTEr5gbB9OVBAwDg1%2F2pMyEckWWX%2B4CoavTT7veeNSitjMTLW9%2Bl5NxEeRM6yci0AMxwES1U8KAyBQ%2FptExZ3yJqQNLAFWyULu0xAhqx%2BF20xCLZWOsR9QbJmE8lRlOjViVhTbRV4Mio%2F2vikEVCNc3LWC69rHF5BzrnxfgYA3KfgRZCpYw&X-Amz-Signature=0d5a44d09bbe95d915e4052391f2a922995d45633a32595acf51380a8d240006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

