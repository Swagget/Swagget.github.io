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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI4XPIN%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T111835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCTkzwa9Lwn8ukKtC0SWoz8hzk2F8rfZh3mC4UEO3uhxgIhAJSmc1q5rypVsH96o%2FOXo9q%2FrSjRrkg6f9%2FvdxSnbb%2B3Kv8DCCwQABoMNjM3NDIzMTgzODA1IgzTEhXoIS%2FR5xEJ%2BIEq3APJqv3OK4SjcDlj1RG2lp%2Bbm%2F2bRzJbIZIzAX%2FUzZ6s0ryi7ifsojHeoqFageDKZy5%2ByhgbYlMHIKdQk9W2mdmbLGBg6DAPP3kZMeo%2BOEvvqdP6CaPTpG1X6p%2F1SxDy16ovcZkKJIAmYDFrmK7aoWLLZg5KDXz4Xlo%2FoV3lhltTES4M8nA4DVJSCC0lxLALAafTImw%2Fnc8OjFu9E8Wd989lGi7xGeUQgmBq0iwyd5gktNi3rzQrkwB%2FaUIfu0a2rCW6eeK9glUf2U1KtUzvbicJC7ISNjZXhNwxsha%2FW176rP2xTFmJwwKSr7XjUWWIhlPBkWNGFrG3IVVA%2BioxUnfOFBI1u6aBjW8bj2LoYI8ItB1afXL0yitohb1gbtAUVs%2B%2FxWEf4GW7%2BIxjJ6nuTZAV92cYOLdu2l6LSrSLNfZ8gtroBagLs3iWOWxCzFdHLE767%2Fq%2FcnraIF8jcT5bREpyZK9Uh%2Bs6u4%2BTSyo9iJXZgSLuOM3i5Y82WMmj22MBsb8zeEa46qnaJIubDRshIc3U6tsmwLObAQMkgkHkRVglTs%2B6qQk9NMp4rUUQni1%2FFEsBCs1XtBmuI6n2I4%2B9QGEUL8iaBthOBlx7Oe%2FYqgFpF%2Bsf4nZ761zaHnlGwDCRxN3SBjqkAUs1A45EoCN%2B4yTOSdEe%2B6HaecdJwlgsWT3ZrzXkBGOlh8S9EXfBT3hTUV%2BA5gWC9lj5oxLtnJh6Qp2QzqetmgpFaBIsTc7sH%2BlikQnztqmR52sPQZOmhsurTM5sHw9M1iaiLzV4w4RjGo2QiKUD0TowiqadQEc2szB73zcMU%2Fitp4LApgOjQT%2FvhxRx2veN9QamLihKT7h7q9E2RUEmzTv6CPwm&X-Amz-Signature=23a26d0a9f27179b5f3631e8f99c5487d4513cce6e8ca4de1d01d992338f3b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

