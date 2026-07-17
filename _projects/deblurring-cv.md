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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZPQ4R3%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T125639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHScC%2BbEyUgpPjfedC6G7oJmHX%2FEvT9nfzntiWdY95DIAiAxzMrdchzfheNuKkT03riBPWHKEW7TPfKy2oaZlm0RISr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMvBXhkR%2FIQjytTvL3KtwDbF2ezNQlCpXkO4mlQ%2BE%2BIVD%2FWBDthDdkVhllcSbKSDQE8q7XGUMFj9wn7Ky%2BRxY%2FoyQD%2BwQ54imw3wzAq%2FjJ49ULJUI3MGv%2B%2FAJA5qKlSY9bsI5kClDRPiaPZeLKEqaAihH9ME5AXg8uEljBlWyhOGFLj5OInPlvMI4q1gulotbhVMT%2Bymh7I%2BURT3V9tRowtI79eMLNRYMPuWrGGJESG69oujcNoCNS3yjp6DnQC4GU26Dx1nSgeAtiAEkkJN7WLkYJE0jufMkdQArUeoTr6NUrlwg4y96kiclHfhlJCSKVzO3C%2BsSTsSIO8sTlto2GPSbQCmj6CDzxZCl4WEkPAtzprwz7LRq0nkLMh31PL3w%2FPIHQIzwAQHNIWd9LOy%2FXTSAncUz0rdj%2BRb3dYvY%2Fiyle%2FzX7TGVHVyhPxeCc41Pp7AKznw9a9phZK5APGSm08iFnEJa9%2BJpmapTHMXmKCioAdeRzzTgKQeILpRHEXiL4ZyxJRoILc64JTpH0z49KsPenF1N0ng673whKbgu8n0Wb2yXb6bpzYeB5%2FLHDSHHjjNnc4GyRnlDMAD8KXhNRexzVJGxtNEoK3cgXpbtQotcRkKQBl3LaQN7RRYY172vbzzpn9wY%2Bg3DG%2FFowkY%2Fo0gY6pgHwUiB00ZH4HlXl6C0H2PT507Qz1dMT6NroRytv09jwDf7vzbkSx%2FZLg7UlMWFUj7UTOIeBTyQyS7S88qd%2BHuUxDVdeBE8jetITTfE4sVcD6%2FTjXm6L9sQ%2B2SprB4BCMYUUGoM8RqOYSVCZR%2B5%2F%2B%2BVb9pli6YL91dr1lOi2pQ0XJ882szePxeEAM5Oeh6IrxbmmXajm1VDZiaXmdmw2CKz3WvxceHs1&X-Amz-Signature=378681db1bdcce8b7221eac52445ffd354e071341d0315bedab1b9a7ba6c2f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

