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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMX5QZTZ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T170911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDuUV2n4mA9cHuyIPHMfzAZVHznpvIN9fB%2FS5VOGXzMgQIgQo2BOafqdgsDNNPP5zNEUt0SaPSMrWYkF1caoJPslnkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKjihW8pkdvr2HevyyrcA6KON1OmRUwT7hvZDdGibKWuA%2Bomd3khp2Ea4J00RqAbxZo2VYDdJ7B9ISSsGuwScma48xnL6%2Fvt4VlsZLb28kjHgiMQQElNagMDuCa17O79w1htTppbDcAg2cPLN9U96VvSJC8rW6FEbfWTZbomR89zc53v5h22L35eUF2YfSp%2BDw8Vcj0IVWEQoT2JtZo3LS6H%2BLTt9kPk2pPiIdVGb543VnDbuQ7AJsCpShIASOfNfwDNs8U7H%2F4dteoTlmZX0Zxc5dv5EkiWnE7JwcZ6hyDhR3to5t6iztSxnPkshnqabvSWwobXKekFm9aeNZDu2vpTOIwhmKZIR2R2EI2pl5%2FdKLPlnQnreQ44vK4g96HiCIXv04TXy%2FuFHD3dnfnSQehTl7T4rs6A6IDOnF5anorjrkyMwwCM0BHviy1gklt8gDim4V5htVDPo9dJQtVo36CtNxwteoIdfeBU%2FMbIkai2EMJMduY2JRgt5mcrpsEpZr%2FcjtqSC6umF4G6%2BROu3b6319mzlRFWLf9JZbL7e0CvPFPhpxgNBKaJA%2B%2F5S9%2ByJ3iISF8sjsOpkhRm6Hf2XHolmKqZFnH3qBlyb2VEOnAxA3cd3968qRaZrumOEfvl24kK0kByAqWvKjBsMMKsn9IGOqUB6l5N1CqVLarnWhRwg%2FNzm07ikPCggiep6in8wMgg%2BSPLkPIOvYkN2Q%2Fu0bVbcoIpNRKPDywHHRHczFmrTYrWfJTOoA%2BDgt3zVW7cWQ9H%2FsEbcosznzlGTiTHHfsvA2JwHex684OJo%2BHqa6BXU3Zx7rzkHpaa%2BYuw40h7EK2rVjlZ7aO2VCkJk6TVwK%2BJpu0uLJHfDyxZ2z3iFfHgHInnTf0L3mg0&X-Amz-Signature=255e5c191f731f67d71dddbe3746becd9a9027a04fa5de7cceb2d3e58cfbceb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

