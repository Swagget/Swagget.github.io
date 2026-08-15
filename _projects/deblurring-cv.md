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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCCF5W4%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEQb5ppfqCIVXXmh8Fsu87DD%2BU2yaa4XKUYm1SM3wnmcAiB%2BzxBR%2BB9c1bF11hflYvcKg0a8tMhE4r1GceDbLqcidCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM8813Uzn65DR0POLBKtwDZ1Gf%2FZIV3wjjkGhBKDwgPIWn7StdSLoww8w%2Fp1j0SbbTgCvo1f%2FIFRDl8D69rJRm1TjpPwFEsi%2BqY6uYI99KyPiShWu9ZBOWzcNSUKHa%2FK2%2FKOeg6DmSrVTNjIG0Eit%2F0Rn99JKrRr1qOJIHDmtGgSr27N3vzeCRyEL1Nq0pWCXLQiZrq6ysjnPYq0ei0iTflsTNQGVhKXJWcN1CD71oAPS%2BNShV%2FWQWDZRIX9y5RXPJZ%2FSdyRebgXTTFoUwAcT2jBwY3RWQ%2BrWf8PhWfgDcQXef3uSoJPr3m9OPHB0exNOwhSHi%2Bm3H4B5a%2FGa72y%2F7WKd8aImVapIwdbpnQG4QwSLBPU98kpbz%2FLa0hB4hINd7PLmbe7%2BtjufKHo69YxrN2YGpmgmJEXdkOPstTw7juUgnIawCT0BuKuI%2BtHuHiLAUWQRgW3Ny%2BQYPCUoZG3UgN%2Fw7%2BV4HukX1yHbBCsoVvFJ6%2FBEds3wJjRMphvn8WXwsNzerBTGM0AjhWYSv6pW9AdTFm11QfS1xIbxMydTFjpedzf0heBu0t7kXDt8xr3tZgtbRIFGEtjL69gFSXJ%2BuQszS1NfBKQbx8McZUgXiWEiWBDhJuPFWRx3WyCEXc16SUOqf32UDqyNqxAow5uyA1AY6pgGYnMfT1auSooaRBbrJdGnMVmHwsLCdYIypeXCdzLo%2BZJFkzjJuQk9haHFXB7J9V1knLFsFp4LmpD9ACtrqSTuwiR1%2BHGBuCc91fA1KDB5LHKwu%2FE9sn%2Bh8v0bJhKzbw8gHryv4%2BGAZ3TRxmpvL46SRn%2BEHxagsd9FX5rE%2FE7U1y9t1wGGpM9lJo3vEG18JTJgcISo6A5ThRh78Amfhfyb3l4%2FP4Fvx&X-Amz-Signature=3ebb5b43ecae5bec1927e13eecec4f94359110ec1e5bab50d6b1d5de630b1fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

