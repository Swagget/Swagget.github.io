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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONFEO2J%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T182634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1oYNsTsy6p4wA8q9aLd7c9vFwyoxJ%2BhB9PETEvmJDTAiEAhYHvl8yEAVt%2BAOEVL1tkc2stSIjjR5TQ7fq%2BrVKKzVQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9yuLhBryKFEhOS1yrcA7zR1J7f0T%2FOWp1lfKoz6KtSzQA%2BlzinG74tuH0mvshH%2F6UpB39xV9Os8W5nfeQist70j4X9dATDzyQxrPZgpy%2FhiCPUv483kd6k9KeWb4NwL5EWFnRyvsn7uvOEZMilXHXJly73695iRUWQn0z0iLSMR06N523oeLkhOV2JccK9yl448s12hxl7zue9UykaVfz0YVM8VGAlnLJipfLy%2BooQr1ZQYgWgSrrxZLkfoeslyT8rZ3jc%2FQ6OmmuoPdxcFhg6H9Mtdmz2SD%2FmwnmWhVQe%2Fl%2F8oY7zPp33hXZnS%2FPXZBsCxlUVkrvQnuWpfoBbvE%2BWkoUdR0WY4Wi0W6Sp9tJqGIKkowaK4XM2InYNFaAzs2xKXg%2BKI2tdY1dSFaEPzE9QmI2BoY7%2BqtpipTm%2Blfn5Y0K4xCCnKlxpkwwddb%2FoyJd%2FRh0pwCuxIhouBXlepQseDJFtWs4gaxREXp73Kg%2BiVpf95smOWq0nAglCdEqNgCuAhcMs8wADeSwbPNBdKPR90BUp3GxyqxCiKESepbBaWmbPV3rhkdQHUsb9SzPcxPoRWwUQhTrTB4%2BBl%2FJiafjxpMlwHOjJnYJcfl3U%2FehHc34LG%2Br%2B8Zfgyb17gK4GteNnqQKKv48wD3JdMIrxjtIGOqUBEXH1yNwoFui96LslvxaEtI%2F4E%2BE6zMV3hPLov9di%2BwEmcOw1rRxcZ6P6LfCO6fIBqx1KumL6g9jSicxDOmADa3jX1YvWTItq4Qey8Z2osuPF6BDk1ULsSQutSW4saWLl8UN%2BoPUO4OOwoNxn0WBighAuggusv%2Bo8sbgXBy%2FHfu3RU%2BMRDLhhbi5lUNOSboHLrQLcLAlOyf%2FxZqdW8%2FsZiIojspd7&X-Amz-Signature=f076539f055d476312f9851d79e396ba43e794e2488c7c9d46fd57f035448e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

