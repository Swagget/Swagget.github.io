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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JZWNAY%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T014719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa62OrCF3ArDWY5Yl5sFfjgDmHkz5J6nVayl9C1t4emQIhALklV3ztG7WRIf7WcfQgi1LrkJxd5w4Metf%2B%2BYRhqa7OKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT5vTGoX1g4%2F6Ct80q3AOsoRpVGdYVv1c7RfTeLRHXrobToQkNXJTYzexlgLtULiTG2Lfcwdlh%2BsL9N20lQei3SlPJSNPD1V8UO4%2BpyDE6QJBYsjpq0Up2HG80av0QrpgjvzRyDvf%2FY%2BmvFkkI7tNBACibr%2BJH2S7cqWkwRk37zQlqF7m6ahzgzrT0xqiclZqsQ3fc2l1N8FGeOEMtdtQqg%2FfH1NWRHgBBsFVcEmAVbaB86YCnPDS%2FhK03LMt5tTGb5aBb8qplCaeVSTVzk8fevqeB3DhEC4HWWt4HBzCnoOauSXatSC84Z%2BdkxYxYBrGnbHY0ef6C0cr6bipcZ%2Fx93UDp09ricFUyWH5SpFECZ6hP7d%2B56h5lPib9MwR8nOdbmUsoNkyTMoV6BjYabr3vcgsc7tj3qRsj2Uk7BfQCDq5Ux79FUsPI0cM5RvXUj46llBZUPSu1qWBrFXoQISUIZ1ydNiS1HVEvex4EB0AiRb7B4oCIeYAfGkMWsZPtKcRFK6Dc6oVQE8UOQ87RFHyf4D4Lh%2F05bLMQJxNysRE%2BdicqfKd8lX%2BfPE5IOD56tZmO4HXFeYLcQuirUb8q9s3r9HkxFoA4l4jq7VEzuiJnrqXgZ7hokTwqN86BSi0RGXPZ6y%2BtQriCrgOmgzDMod7QBjqkARgxgGxqIskGSlL1zYjv2WXfPI%2B2UK1MAPJlQXv25UTSPxkVViVa6rTXBpRsG2F9ssZ47LTfbL4s7UFPeehoiYVRLMLGMVqc8orr4x9jESF%2FeQJZe%2BSyFWPxF7QADI7qiFOtYap%2FqHuLKquhAYRfsLco%2FyBttJ6Ou7C%2BVnDT6JpdBtXYyNtPs%2BHlr06kA%2BcSPrxZoEpT3fqQTiHZJgWslzYwDYbf&X-Amz-Signature=ca660d52bd838d6733463e6670c5df5a87d5aed82c177ce99e72a1b2921e26e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

