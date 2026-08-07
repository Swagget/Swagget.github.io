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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ENXJFXK%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T103940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJHnOvHc67ShtAoI6OjMX6%2FAaKlC%2BcLg5KzsGAlfEqUAiAtYextS3WxzmjupXH88XTazL0B5xMzII4iuSPjCZjjryr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM44Vu1ghdp1N29M0vKtwDS2ZtZkng%2BcddiSoOc4sgOMAvZ0RHWuOGrETwjNOL83mVXmzp5ZOa%2Fk%2BDBFyWIy2c6%2B0tr3cyOJkOz1HvNAx5OAM8ydm1B8L8DE%2BEhRpBbbuKa5cZfedsN29YCulEGIvG0LhdyVbVWWIxYCve1GDX%2FUwkm%2FYZeZ2KwASxFatNqxBn7KWTuX8uvB5BMQIF%2BQqXi9FDCOykuyH1QNwnT4YGRkOJp%2F2cYv%2BbMQ9y5STwst8c1GvSgHW9ei7P49pKXSmpvnjqAqs5tfmCeh3CCeT30EYQxNCgUDhTA8N1iyXwKwi9i3e7jQDgFi9EktZA2JJuKskdfJs4dw4hv7Jp7CFbigLCK5Q%2Bzs08VCkiG9MSoWR0CtbOM213y3ot3YWLGMZZF0BpPtjIZacFIah2GX5%2FHwUtUOa6mn61CwqQWPwHPgko40wBVMByKnilhlYbGuaJGVEecTAJsHo1u4Gr3oaslus0BxfIu5x5SU0Vy2zrMs81fr0nXfUxpnGzg4PJvmaQPjwdWySAovDHiDqyuTFjuMWDHM1YQywWxpu7w0g22MuUoEYDqgMaxYYmMAI2DFP%2FUURcEwN%2Fr%2FoRxDkigs7o9qiitzwDPBi6keJbgCsAAV8OkqH6DgjlldjTrbMwqcfW0wY6pgE%2F5vc0vRsczDkvoUHWZQHHhALh4Tsm%2FNgvVft0Aya3sFwQ9nWOS%2FrekZ69euFCO8vlZdba0BfOO1C3%2BkVHptNMU5eojo%2FoJBCydokYZ3gO15c3GMUCCq0fSAb4qObkG4Fi9vTyFHTOvFeyiAAg0kV1jXG%2BD7ZvFZbeH%2FN%2FIAWdsjB5nqqFP2880JlTCP4fzkQPMFYGATKcic2mI8gfmXHh3%2FFal7MT&X-Amz-Signature=6d68c581d2694cdc0573f529de8e69346991302ffcf6221507e16c658c84c675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

