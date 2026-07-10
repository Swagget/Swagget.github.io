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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISWH2IC%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T224645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzT7pn%2BnTgfT4BcIIVa%2FaQx4P9ft22EAuZbi%2FklzAdcCIQDAiKPCIIqeN%2BV89oHEZgoY9zYpm67VHwcVLFPbVCxOLiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTQQVNF1rd820uEjcKtwDfQz3h%2FuK09Yv8nv3gy3PrF%2BWpqJXYUIOzEMGqiBIaa60x1UUKnYjXlVFxxnuyhzULZ8S%2FOc62fVKioTBa9Tdehhgqy5EHyMI9TijPUsMiFNyu88HMCAjaxaTT4jtJ8H5bn5O%2B8DbwKb6cP9zH2n%2FGdPwxO3wC7Pk8D%2Bjrk0Wb3PJKiP1zB4%2BqHUzMwm%2BJQisVftl1RuEFwWWoRTq9T4t8eA6Q8m4Ucbk2OyQRijVVekF0aI%2FcdoaM9Mr9VacjwRPDrh%2Fzbbw%2B%2BRPvQoLotd3U19sYZ4TTq0MipZYnzeao%2BugFV7jF4xdkTXawpkCwne%2FahbbTR1ujTnDnmNiudVor3kckHpUJFoXwdZuPVtLqqi7as7GsB5k7xBu%2Bxp1ibB49oQ2nITfIHFeAMUz%2FjuKlgbKt9axyNPqepwraEuS%2FT%2BlRdGj3fUT6fJMOiWICGr8K90FfaFV%2B38tj9mpfGCgffCNhpSCv6%2BC49DoYlAAUjnaPj0BN3lTPOfXll35%2F3bUI4HCor%2FPLZ03mBytGXRLHCJA%2BDEQ8HhSuQHGhG6v2dcw93CfTXtoR1c6c%2FC4jcavQnfGypmNnt%2FsNEP2bDjclqLR7cSuhtOgVoxK%2F6KJLh1PRXlVqIaNmOhmgIgw89HF0gY6pgGEtcwcbCi2TMwcjmHbVkuN5OLHktAwlMGdZYfiI2sss%2Fy4%2Be6%2FWCMbPzeMRFVc94UCxin66fu4WZVLhjshHVL%2B0kEq9QSigtXHfkQQ%2FL352lZ9%2BTyiAsDLrxon5E6nypE1hf1pEkn1x8gYIcsET0xofS7%2B9Oeu1%2FKSea3SFHBX%2BqOkvkcE0fbFKJ4jE83zIB9FCxhqPLBA%2Ba8SNeNgEsxCD6VCR6Ri&X-Amz-Signature=1590e637086d59de242d36e66c1bedfc4f90f12f21fe790b28fd43e8401cf8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

