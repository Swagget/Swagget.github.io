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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IEKTMQ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T073357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrfCTJx6BGe3yD2WjdTg6ftxSXJYNsHXVZ4cwkeuvi3QIgF2KiLNPEAIwFXyz06LPDx6n4Ih2Yxjpg0Mp1GSEB87kqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpAixm1EI4dX9ykBircAyFBSoR1%2FNa9BRyzBKqREXi1fZCdWmuw0KV7xy24fByn15LpPETXjEAGHCtV2QUQS%2Fr2UmJj6wvlgxxdcp1mAYPRcvcMpfoxf8D2JUPYewhBdVxQFh0zClvguoTWdVnTNknJh0l1%2BK3WIa%2BqxSVshDcy4cHLYsWNS14IOHAOuUJ7Ii%2B7VvSCgE9yzaH9rEuqtNSD%2BAVJjYHBPc3BiKEnvndtwf7ff1xpDB%2B3q1BY6MlTt8MxEntMMY7LA9urUQ2eQaLBlErclJ%2BtbHzek9RhotcMyDOUUgMfTxe9grID8jUB05%2BcyAYvzKMJFpSu3yHoLbnGd4lwS1JIfPtnYZ50rqGyivIAuSKeeVPaTcjXokL%2Bz2TRnaFA%2B58zoS%2BGGNXL%2BNoHouyRmeTu0PFz0kfWhHxGojXvsOAFxhkFTQtVsjREuA5ah%2FtENdtN8zFMccJhfrlrPRolL5ZP2bcqwujHaKCHnz36BBudj4AKA%2B8OK99T1ahdBtm5ki3p2DorJ6zRe2H%2FBL8BKJmm5oNhf42oybh3Mbswf2ocFRmvxiQSzMRwQM9Sgg%2FYBG3GnNM0qbjBbLDLG6LjYoCm8hHUryWP9%2BhY3iCkQIDNqNIUyFlUC%2BpZtDzu6Zq9m%2B43eUOWMIeO6tAGOqUBKB6TnhDMspVdkYl8o24e%2BQmzH9p39KToreESTMH2%2BjqbuR%2BsadOYDqjP6CLkmn8vlvh%2FhvyiijY4zHUlASn2%2BREq2MC4jJk1ylpxFImkN3IlCvBlFHhRvBYvrvKgUa5ZVrNGtz8xg7uU532laMuM3KfwZ5ytSJ1mZ9PLMMmS5aYCXVPoAsM6ae9QUUQnskVMLCTX54EXxrkvrHktuUwfOtdqxhXl&X-Amz-Signature=d9eb34b52361d4bce768a5dcc166d4b1e73cf7a965259ab56c8a47ad24907c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

