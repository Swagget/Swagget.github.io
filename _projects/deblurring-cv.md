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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXMDYS4%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T225553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIH0dlJN0jk5vrmme9swTOznk7GRgJYmpSiT2tgIUZ6DsAiEA92DcbuKrhzmGochpzVYlliSkI2Xlsp3jT181lclYBYkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKATvWxAzkH%2BJv7L8ircA5Hif5%2FVkusXDu4iYYkbPFO%2FxMYDW3j3qTHG5S%2BWqfQPI5A1gUZ3wyFTcV%2FaIxRG5IoGze%2FGSoXL1T84zRmBt7ZvNZ1mPeTvwEo2teMtAQKrkPiKnifw2Aad4DYsgMHa0sCnznc2qf8Pc5ACOaiWwYO5TY0Fia%2FostvJExc4PYZdF1Ky4rTpFQd6rwI%2Bs%2BPBf60nfK8Rr7v8h%2FnX%2BKlXthK4zMnROu0JZqsMP%2BsDQSsz5VZv7zwmmyz02SJHcOm2zsejHbx%2BkzIsal6rrYQWdOE58tu6DqBNmdptgTE3XG%2FDC5S0qoHDkWL4T%2FTGgUlk%2B84xdeHeXoI%2BNvT1jrwxzMqUUQaxptYwiUCbHMbOBm9JKfEUUKXdfcHKmSqfA5bUcg5%2F0l51OqRe0TsCV6Iebsirn6VpGK3ndYrofh8cCYm%2BJIfkmTF%2F3QJA4Z1FgXtrAyiTbVVm1ry3AbJpfd1plUZiJu170lgQ0s89wSxU%2B0ENr7lFTwWxi02JE0ttUvSVS41Zs5rLNlimje2p%2Bkw4x43GBRcAoPDk3s952qGEIMfBcDkJEq97TgjpkaL1wN7BV6KdMTIsGoTlXtu1bFCzsjdFppc1TbqvWISEAYeHunf1UOigN4unBPKV7QbfMMGY3NEGOqUBreNR7%2BNdEv67JLAyanK5df8nwpD%2Fn5z%2Bt%2BxO3%2BunKI4TgSUCKyt5ZaCGFFcGygbXdcv442qs8ZoZLGF6ATHTLyopWj5nglI8Y7pnck7qfC2rxRSD3NCWICZ6QUrCG5bjP9zor11zFZ8uefruc6%2FFiQXuZbWA2VAVZpE0HhK3bte9gEOKgj17ffu%2FgsuHltWb5Nt5dWkUnpGtfA%2FTuJfa%2F%2FkPyDFK&X-Amz-Signature=84ec197e6449bba76f44a3e1cfc9780a9ca0fd79e477a29a7a7bb7f910a14de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

