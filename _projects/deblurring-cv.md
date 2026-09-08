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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNNTONC%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgT%2FnE24nju%2Bddd1RM6c04uSRxMxezO%2FtUONTSSSkb5QIgFMr8RgXqKlPbWAYQ0CuflZrHgHHIqs1do1ixOHubhCAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNxmMpFjunoArFeyCSrcA1SSTGunhgAZlt0QJUOytgLlSRWf7v6Yb8YtpIJTLYxBy1CGbDMZ3odfyeP%2FJ%2B1dFrjrm3jyP85A2%2Fu1IUN7D8uODb4sf6vkcPJaUdUdDEjrd9XVSTd3W%2B%2FrmNB30FxGvcgobhE6coO6jNAHw51kYY%2FM0h%2BQQOKsV6Dj2F1H8mxIpQGM75coosA4lCL%2BNK80wO3T57dfZCz2X47qF93ojdcT7Askab0ldh2ENHJ98paYMob84ho6A6BcwLAqayqMh59sC3nJAy%2B7dF%2FwWi2bLQQk72wEbMO0eFkY7rQU6ex7yHY38o5JLIVykaKUMVLqbUVp13YFm13i01fvA994G1Ys%2BIo93M%2B8f7TOrSlSrw54UqFXz1R1FHOxuf%2BBy%2BSXKguJrpjI7gREweQy1%2BjwqNoxGNGxAz3Q4K4OysRUgy32Xf%2BjetowGzUMx6r1s0nGn9v3%2F6ReItvv2JLmnCPR64W0NfpEp36RW4hY0Brmq%2F30Pedn5UYloIU8EoeTp%2FQXNl2fM1lVlwHfCAUVXNBmMANtsn%2B2bl%2BcI6%2BTcDnzABbjYODMlmEC8TexURW3S0lgyCBrobPOQyn0cGKCuHJbfjUJ1hO951UZ2EXcRoEkvyZZCt4Wc0mUfuCrnCBWMLin%2FdQGOqUB1vA5KAiYCuDQZCEn8%2FQQ7FpTjye%2FDSp4zhV3nt33JgOxGcUFqbKyzWLgn%2Fq51TKuhDiHj4pL762xLCrsKiHB4DzAakcNElbDjKM9taQt%2BUO0TtxUka3amyHzOsya6vcu2B6DGj3Ux2SWimFEPFBT0ALqw%2BwJDlkCBLGDo4323z%2BJnDbKMV7RqG3IU50Fihv23hwCBU2s4AEahv7gObVAiKkMZ045&X-Amz-Signature=66924e04fedf15fa49f3ead4ff102c445f389083a12126bc852bf3d3663b33f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

