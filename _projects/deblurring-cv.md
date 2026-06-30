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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUG6YK3A%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmdZWJzDro6QFT4GGqt6TjYzDqYJPncJcRIVx%2FOP3VgAIhANqcZmQZnMyFVjsHB%2FZnE3yDmhxDBbWbYEEp%2BzrdvniuKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAdE5ypg217J3Kjx4q3AOczpsP8bCjVcExqxQlJRzWXlFyx9XB9jGKEfoZY1RvNk3%2F2CXTYeRkBVn%2Ba%2BspsSkrIvNi3XDFDmaI5b%2BQTbMAuDL33xD8aZSHVehXzyAZOivYRU%2Fw2HFE46N0drFuXgfvvigsfvYNY585mX6dxrUnVo7vifSwdskK7UGT2sv5KwyDkyJc8GDqh4uvyFXknWJBsRfJbRBxGw%2BGIPikAjISEKX%2Bmk6gdKmwZSM1il%2Btb8aqsLsBfnCPboUYSZfUQPflUMM4bm04YRuED4NyvGf%2B3RoAt97TT2D%2FgkLCiKfUnElHEQsx2AsMf8LeisxA6fBXBeI7w4mH3WPP1W8nmk%2FGZF5VMgxKW72aqUwWFGfl29XIgCXbCyg%2F9eMosdZoxwPwHS6cvVcb%2BKUwDMBqy6N%2F3wZCXA58EnpF2Ll1IBTH7vZHGdDNC85Ogtf0jaT8TfinJA0HDJxKsJZ8miaG7Fs%2FnnlKLcrGbIS0AvWXUL4Sim1ew28he%2F1wKEnpdQfuX65JwXX4ofq5nniKiQrgjNFnBnteTDdveX22%2BC7duuh%2Bl8qugZybIRAXvKgJOpJkAaiJEdBNPu5g1CGviFh%2BEjHiPhTXlQMbkxpZ1zEppjDWh8Eg%2BiozlDXg8E%2FtizCPuI7SBjqkAWCMKv%2FtK8zDjcbOLxPmBWtsT03S6pWwl%2B1IF8n%2Fx6ohfmF1AoaFFCqa5Hgc46dtxJ4OG2%2FpXYLxtOlYyp9JWeJXjdcGQjUqmMCXDdl%2Fyev1JCAdsPYoMnJ%2Fvn77qQVFUgGOqjUiXK5kxE5XyN6zBAt%2Fz7YSw08RirNFfVlIB6bi%2Fc6vO1PVEDjXoEEsz2NN33LNAYou7Jkx08TIcQp1Tpn79mSg&X-Amz-Signature=059860a8d904eec0925b40588bddb36ccb841c2c64536fa0760bdec095ba73ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

