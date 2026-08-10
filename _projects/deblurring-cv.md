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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3RTQY7%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T090359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYF3KGJ0%2Bumvz7iQpqxQ0T%2FLfKsEzY9DMssAUuElXB9wIhAIOMXMR4njfQG%2FCVG%2BH7aGgkfB3i3W%2FRoAA5x75ZPbybKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIs6B87QE3CF9wjhkq3AOpjgxskLWyc23epF4j1M%2F3pdmo2IZb0HcteeIwJjpqjosHwXLnYhVT%2ByggD7BiBLKgoys%2FXBIaQQbyUKSlwbpIjI7sc%2BSW4R%2FoykLEpRZi%2B7Lpjbve6tmNBX5TKqh%2Bn9Vfw1h8I8V%2BkcrSPpg2tW8Bd8QDQh4tXWRFGDoEi%2BL02q7h5kUDiMCCBYoKf4WNBiOY6QDPmJDnOf%2FCZlMNxgJwUbKhWIwSVU4Rhi%2F8FchlzpnHY31WMuUfrYTbC2v5z9I8fg0iXL4MXxviKAfUezE377%2F7GDleEIrVTpJQEPrzQiKUbziZsCv73Zc1ECVY%2F0zndPOfNiG%2F6lgHGfMWvOBAMkwTwo%2FiRfQIE%2B7mvDfgBWURR94SBj93TWcKD%2FWdAzSnLS7yMbbYZO%2F7RpmbmjyFf8%2BdPrQLiaO3i9IXw9HT1Ik0f3YOF2QZQMMYEoPKx5gNPEKfyXrIxbz%2BMAX%2F5poSScAvwGRE6Usy9mxvgpXwCPMfhdx0neGVFyuI7fanZ1wsqxKOcTtMUD6M9weaCExox6HfCBokLc7WAADKS754XSoc7T1RI6QpArCeHArrdUp0v3cS%2B9yLTCVnSGonkKjrbgDdOvO2LPWFAOcDSF1uV7WOUji36PKOlVnAAzD4gObTBjqkAWfiWpEyyzi7gRuGPw5XkFtPg2mxxI1AgADvarham9S%2Bc6ekVpZLqvbL8FdtTDuTmilfvJ1DaKyfRif7W%2FFSlq0EOD1kpfWIYkPSl1nOhF2snBnSoaXILhtvFBK%2Bp9ItYVLqgFO%2FP53eDrZuvWulvtV5cVDfWMqqnG%2Fb3TsUJh4Stm8tCiIW3nExyOdsXwTTBnU6ENTSHmy4I9Vzv3PgdXaAnCI1&X-Amz-Signature=5f3bf188eb9b0ce70181faca323fedee9526f9ee44d323b9fd7f024fd4473433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

