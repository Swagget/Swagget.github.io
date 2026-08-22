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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJGBEMY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T072110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPmz%2FbAmvRAM9H1fFnTPTIuot3bSbnKHiyD8vGGpBysAiEA3kK%2FPxa8WJQqgf13sx9R12cWRk5ANUFvrw2khJGTtqAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUWzCgqxgpY8AoyaSrcAzfiSIA7Z8cOCv1B1rMf2Hvo7ISO4FX%2F5%2BK0BVkZIrTEU11y3FCLHmgZFIuE%2F1Tl%2Br8mcLt%2B2nmDhz3AxheeHs%2F%2F9ZrouWnOMV3E6RIux%2FKzVhIvRiIfmeHC1j22sp7irzoBWKlrG32gbCvSFUVe6PwyhY7a047LT8qRdHl014kFl9niLpEOUp75v292DyMoI2mMUQcil5acNreG2BYw5AWdEF2Ott1kJll5l8JpD2YV8xwsIIUvGKQPquPCvisnVmZ5oJb3ei5kT%2FountOZvpDvfA7MkBbPgyf6%2FGJiPY377ERyhVbKFYRSvLOv%2B8sGqtwmw2eX7UQnQB5mLLPLpQDo%2BbEMoSrHv148ILPbODU5ZUMevCWqKCevlG7m0Vs6E138lxfGVLovgy7pW00bq8svPa2xPIeW9ptqiouMOB%2BsGh76N94NFR4MdPl5cdQ6RtciNuGn6ho9Amvog3JhgmmTb%2BlNgCazBs%2BMAwvfMZuCAKqwKnHkod21iMb9YPmROZo8dRu8wbhTHIFRAFoLChj%2B9hjF3X%2FnqSUyPs2s9ZXmnIktmkmOiQtdmRzNTcZJ5OekLmAZI01IV2Q3caD58fJ4l0jQ4iPTV57VIio1NV%2Fe0%2FMAB%2BnMIDcVLrIOMLj2pNQGOqUBX49npMMbhmV5ykWO7Qr6I%2By%2FnUCZUEoySS1teYwC3GfKQHoVG98Dlj5Lnq0Y5NR7epIXDRPr88n7xGYiZ1pz93Mi%2FBw3BTUnch7BNwp8%2FHCZd6i35bebgrZcgYtSyf3t3IS0%2FNcPaU0eEW2pkbqb0jlhl%2FGc7hj%2FmQrKU2enDoeoi0OHLFGTqS4TcFFcxiiSfqMLASdYqO5FxwVeUDvajKGxOFTP&X-Amz-Signature=6cba645a903e6e71cc47d82dcd205b49ae136c595ea0d4c13ae660f715cd3a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

