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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCRJ467X%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T084103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMP%2FOTAOUaVXh266rQMs7GTGNYbCW6T%2F%2BUfzH2BCvq0wIgc56kaUnwTjwC5BOaChI4N6QIOsCx3TSpG%2BhINgU9QzsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEHKx6B7tEksXefhircA9WMz8mgPxRqAZD%2BxSFm1MHMbNSepqyTY8%2BGwRxcTpgNrXbIitzycI8Qf0AMB4spjbOMETtfMhQ91uqX1RcAk8%2BOUjuYcZxmlV%2BdvFKs3DE96Du3G%2FGQX2oreUHavfHenUMIYHaROX4jw9OS2dxfoW5i9O8Mp3LpsidJ0mYld9onPAtPC9Nyl7JmOUoJgNq9oVIb8rDCXS9Tladq8kNfI6929LYSWeYOleUjt83ILDTWNR3ithXCHmysA1S7NNo4JLkvxGZAvd%2BJ5kpVafrCt%2FEtZvrYCYLDwimbHkC0oJJnNmzeisabb8OJFpDkNC7hRjkOdddlZnHskH8yqsqmWKY0rdYL%2B%2FZS6rjmFoNuiURXFRV3EwmtLpUjRhmg%2Bu42moGaXC9Xya2aTkDiZSFfQWtg6HKsDORkEUxl6xT5RD7cxHlvTLHtxDBPmEQ8qoZFYi4kW7Ig0ZqzEb3zgn%2B3SFJnMcvZU5ajO0QdtmO1ELRshlFixNKqu7YHcFnYvOZENqiV%2FeG88AhZjn3oz%2BelV12MHNeqbSh6hx88%2FKFC%2FOlyRc1%2BpBMqU8x4IhwOHrxT8LU9SUy%2Bngl2liDlH1ufbzBXexTgH6sjBFz1%2FQIiXLe9iU%2BCmJmwTbJ1rnDYMJa40tIGOqUBMZ6nx2oq6kB2EpsXh%2FhcfyrOa9eVDnk785eDUVofwr9lCoXwhmLvH30IgNBtKJlfQWNr4X5BvooM46duM7RAMrxkMHCFtfCFrcz6x7pWznVDwsSVsvOFkshl%2FTKGTF5r6CVumFrnUZ3gD7dW20KcHJThtkotUljGbUGbT9lO7QwiCEeX%2FG1627RxplxS%2BvOVbetA3yF4JYShJCjQl97HKtrRZ52f&X-Amz-Signature=2f5452f99bae525efef3f3c4d7e6598573459d832d33d73114920792aa696716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

