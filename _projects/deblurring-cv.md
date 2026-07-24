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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Y2MVAP%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T224954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICDw3DtX8a12yUCXe%2BaK1Eps81PH38FKjgQe4luMhfyUAiAWy%2Fo1Zt%2Bcymo790%2Fm5j9bhz%2FDP4JSRYT%2F2Is7LIYrmCr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMYKnozdUgKk%2BED%2B1GKtwDvJGMf4WOytRnyj58S0wtVBLb0PS1IUhfiwf%2BZaDBrH5ZC9ZcZ2S6jo6cE2bVdR7MVcvyqQZYOjSTbShjeXtkvmdsThhviCUaYwd4X%2BT8KTSrtE%2BvkNd0uR4fb2mLZUKCPi99%2FW2eOHYY%2FXt9VnX21btFrCdxPotxH91kLEPzJ4EVEhVEjo6PGuptN8SjPyOOfmww1t%2BY%2BGfwN1GIfzd0L1uUz%2BYZbFAX9QobCp5tjAmLHzw1xpg7dwm%2BpD8whszLDY0SA2k2Q4IsMND3XSeBC4KRThfDIgalwHsIT8hvzamEob4co3OqBJsQeP%2FXMEqsBSYq0tVCb21mqQrBfji987XZy9anM5bBv6ZjsY5SaxE2k%2BWlp%2F1UYC906xS6cJIQ3xokNjNw37CEDaB8MChv9R5krqOoJsL1svxxnq6%2FIU51BBwgwiny2Ov%2Fg%2Fq2qqBHJQTUGW6TZweZ4XKcVbUQDEqRTv3ZhUGQSwHfE6%2ByQQY2n2NeHX5e21%2BfPUK69kV8kNIp37XOMU%2F4hZLaLWRq27QzKQTJbePh8OMMyJp7%2Fsm8md6f85cu3JWJSg1E%2BbSas%2BA0195K%2FpgrqdFnyq709BxMhTGtmRJu89unyt6UmGfpOMjle59vexq1v3Mw4rSP0wY6pgE8qvBEO6Tizov84xxNJHTCIefOLPVSRCvXf4dPVRxgP8ff6M6g%2BFpVdFx%2FjApzyJRl4bO%2BXSoM42cheY%2FcFDVYJWZmQVxvISzh%2BccOFYn%2Bix9Hu2z8ct8BHI7BWj7VIdN%2FUUzRTsOiTaCtYzAeABtYerxbT9E0Ediu2lx4o5eXrW%2B66tx7Cyf%2FM3g2%2BC4JTuA5Oh%2FJLSuWu6AxwFIF9ilwa0PU8eD4&X-Amz-Signature=fd62d8243ff43decb88372acbaea9ec0ff0e8174b226c1568dee5afec7be1363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

