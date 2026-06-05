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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PN4A7TF%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T211452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkO8iqzKbV07qkuTkZNPia22fCCaVIn%2FnE0sFc7%2BEaZAiBiiwqgKbYib2lEpqh0kyDIUDQAbBzFcU%2Bhl6vDgyVsjir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVVI2Dt%2F48WKVnv1kKtwDew2ZKGzSr2GXUnN77ehgt%2FuSzx2WkMA8ivA6I6txFmERY9Z%2BwuYxcr3dPtcNjnYarH6XFBs%2F08gBJoEX7YESZg7uvilC0FbLR6XmE20ojFhReDwxkI1c2Brh8lKDlvgyOSsGNGJ5NOpbG7z%2Bnf%2BGz4X3SzRi9FNHxDx%2BTxaEh8%2F%2BiG765MlSyS%2FWRY8aRLWnRMM8zuZPnJJiU1mGyatLsf1egTkxshOHJUP%2Fd%2FG%2FIb31JK1cUYIOCIbquQ1WwjnhL2ro3SX%2F0LdTFRgcoCNhPMSv4vd0cJR9VIqss3BQJEn88VGt5kAbGU83OACgIoW4SNquTIRVeC873WSX4CiyPftDczzVC2ouHW5Q4cxGhlY4Hp49frefcp86LAQsRx0oBB74S4A6IV5WNclI5ZYZPvghG6Cb8now3cwDkcj2dqLFprUvOr3%2Br2xptFlxVChAXCAeNL7wwNqzr%2B0%2FFe25w%2FtS0%2FeRrtwrWY7%2FB7A%2BINugf1CCAxhRX8dofplRkfwqSkuc6ojBhvo2uQ3%2FWo1UFeDuu4Ux6PqbDkMIKgE9IJr6w6SQQuRzvhsFoQTK8SqxPOlh3gKLf1N8oqINT7WHFR%2BHkyR018pD6hV0pjoqGTl5dlLO15gfJwQWdKow0LGM0QY6pgElGWp016v%2Fez%2Frw8p3UOhXDKT68bxxc6m18p4%2BURqJcLc%2B5zd0TAklY25p3PEgx27Qb0Rmws2x%2BUJ0A362lzyxT1AitEGlzovlScHvRVwLm9ScCLvgzAunNQdFN4aLpi7cSFRQd14yuoYXPzmowgDO1z5Rf%2F8kIqqWq7Hyb3UUYRoy1NHJ4pw%2B9trvsF9zRMHHjoegOsvM5eDJUzaB6TbwB9DN3B%2Fq&X-Amz-Signature=b2f619272788e5311b6c5cf86549e80e5e46fa37c6d6f2f8050ca8d590a8ba0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

