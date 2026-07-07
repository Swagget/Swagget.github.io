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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PMBWCSJ%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T153807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxpCCVQdiy8Ofc9bJAwNXwBVvLf67C4XqdzvwwpCH8DQIgbmx7nktirXZAu%2Feu7kH770nWZD8EV3P%2BQxBBBOm4Hsgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKOYnFT5VIPUEJOQtircA7UgPRxSthDEOX%2BNHh4vg48aKKZrWGlTGZ3pt2p7UF1EuLHKbMKSTw1ja1JFyATVOkgBTSPkqNjiZQeIo2ezzccVZ6R87MNC2nlKbMaHvnUTqExTybccO%2FYTx4Ho6SW817z5%2BP%2BMiOGTnZsqfzy7HIEGKaVAwDIARYHfyvD7w723FGIxT5J6h3xSsCvg%2Fjr7m8SqPjSjfS08xZaq0CtH5PZKmKRl2pMUP%2BkP%2FXkQN3RU0M7jLPwQKHmvV0FvRokWNU4lCJXco8eFKfLIDzyBxPS5ZVsS68wfTtPtBcAyxBGg7ZFHjGQtIkZqPe1j%2FK1r3D14ebYAzGNLw5ZhPaAfAvb%2Fn1sBiTsRkURJbpOx3TsFI3dxuDfxmGXGpYaGegun3vvt%2B65ViYLc3fSSNLL2F3JOOg6H5e1PYC22M3LzI2zWI%2F5uvJjiBxa%2BsYjTuu265pCIAh87crtPpiIwjwZvNh2OUDWOQeElFCmZ%2FZblO%2BnV%2FYFMQWcum4odG%2BNqB%2Fmm%2FFoSRtQumo%2BNxT1eEqNSCcBW59LZ8j5e5qho%2F6J%2BOF%2BjuO6Zm%2BT6awPXQJQ1WFJVUpbECP%2FDWFl6uPulmRVtHokaSLCQrtdljr5R4YRHyqtbShuk15aOrtrtE538MNistNIGOqUB9jbxJXBrDlDvwhBwh%2FgJ%2F2SqvToFzcJHYW%2FbC7cSuXdtZ3BwJxWJCdXNAsvwzU888uhCUdG6Kb3pFlEXJOYWlPQgylHQ1q9jM8bxvxTcitER9qKCcPOeETKo2Ij2lvswCN0EsS5jHWqT5eyY3aXHlY6oa%2BWMSET%2F%2BQcuOEHSS5PWT38Q7x4EChuKxxwjRMEpWBM%2BD5213GDCfvCM62691Jh68dIJ&X-Amz-Signature=7e2dba051baf0ab7ef234c5a9cd9dbe07eea7a29e0d1de666331d468db68c6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

