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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZEYART%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T154320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD7mEo%2BtjIrB7cRLOqqfbtkbG%2BB7sMBILCZz6RHeIqJ1wIgKfwU41QcKQl90wgQKFkiucjWQA3WOsW%2FiHR6fU4kgpYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXL26DizgQZhIF1eyrcA98fYKJZhZ9nw3TwXfHqdmUNYA1P45khWlhTeHJno4BVdC0%2BxsMmGzMEou2cnu0dA0OU0Volri%2BL76j3tmu5D2K7tnr8SPPd%2FcMWzBEi0vEwXE23Ifuc1egtCoET6uAkipwOeHFE%2BvhqkqzETpaE78jb9IQ3OOoBBTGIroSQDfivg%2BOZBUD6jBtyRt5gvpd3sOWhtYTWLCarrG6nEe0mfe68%2FycLlcwoL1UPX%2F8Q3kZUyq3se5Du7OArsEMSDdzsis%2Fu1NIT4wCvNmrh%2FOIKbJ3r2YuLho2YmGGxtobKEI%2B7quQK5MXBI9va2dlX8pUYBqaFcSqA7wnb0C8%2FlKknl4VHONA8%2FVb1sM5WwE0zygf7xavDmPeioysU0I8KM8oqnQJzIvU9fVaFjHhtfs1dxEmWm6ZY02jfG80G3ggZ1gN7SwnLPvToRgrfgvVAo4dnDKkJc8N%2BztvB9lOt9A0b5HATKQSylGMcZGaPEp84Ng%2F4AMfPsLLUxq9d%2BxJZKDvf7H8FnMr4dZdiV2i2pVQ%2FMx%2BLt8XmaigB50fLJjC7HHym2usGQRpdp5PhFpa7%2FxML4%2Fhn8ARCzuHTL%2F44cGmCfLvpqCS1gxyqv%2FL3CXT1otV57VCOgccMLvyP9d0%2BMKSH39EGOqUBdckVP%2BcKllumCHq9auh6L18CLoDLmgR7Hl4MPrTftaEUKPYLfbhLeGO6TyPU8Ta777zyUVCSI5dvpMjPGSXCYTmJWm6Qn%2BTlMHBe1AGZW%2F2%2FYj1C72fcC2yO9FkioAKZReb6Rj1LTCnN3ovpk%2Fpc0hJ4i8aqkcHwaycgpqGF2zqB5%2BC5JsYFcRB0jK0885rbOEgmhEnVCq8hmkAankUqdIpCal66&X-Amz-Signature=831975b46a39352e9dc69d693b1b9c06b19aad2e4bf4ab5a57b6ec4418845491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

