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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634FNMLVD%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T062030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkcCaFo8utxKgReJnz5zRkfizTn4p47O%2Bt33PeELEYUAiAERTjKU3G80vkJJ%2Fu5NI86A0FlecDOIg6zJKjEJcyJ5Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM7B2tGIlwYZdGK%2FSuKtwDrSph4N6oVMOXnYHzo%2FqedOi4fdDUi%2F2uDCgQzRjB%2BHIIUSyR1TONc7Abwj5Z9DDB757JSJXzkajHpoi4w%2BxaZMyS0J0b4%2FFw6bftIe7TZpiCwYoFkoKuhSOujWhwb9XV7o4X9OuCL1WXwvIQ08BO0JwTf%2Bb4TwAQrSO2IOsEHh2UreqZtKP9Y4oGI89gx%2FT%2BtglDNjsmOxDEkKRISqMsRsV8rX3iAZba%2BzzDrWUcgexiGGD9n36D%2FlIXmaTekKtRne2z3tvCwLITv8%2BXeinfGnIJ%2FEZgGALVsjsqUZ2QOxTrshDSrxqKUcivhKRlxjt266G6i%2B%2B%2BFzIOS26R6OkVusMq9QOGy3pewqNBZrs7FQXtOaz49u61ogF%2B%2B27ATvz9Y%2FLbbsHi8dKP4svOjdKrplWZPaugl13JxLEFv8kn4CLsvd2UT%2Bj1Olde1M5GEfE92ac3oxj83wVwGrlDqNzVo66Xc4cwOKyXGL%2B%2BN9RxCtvBh7CoDtrkHF%2Fp8%2FkGziIjeqeUj44oZGLlJcPGvSNpp76WmYJTob4SD35wvuawGsvLS0XlhuWIamR4J9PH%2FFjmGUhj1P7YggcJJiJvFmLhDUTjlu0Yqhukp31agOoq%2BP1ILrQTrmalScTQIbEw7LWP1AY6pgE9JeJ4M335Er3L3pZhSPbG6echOJAADRL5xscXiT4E87%2BVjTOz%2B2hh39QbTEj%2FZuDTZ%2FynD2mFFjsEnPx%2Bt63RRJDXSVC2RLP6zRM38sFnRl7hnsOrhxGi3iUjUKhKpiBfyVvb%2F%2FZnMZUAiV8nX4g0Kflnb%2B7WGHGjE5m%2BvN4BUBXh5JxpHu8qGh5YG3cztYF55oPw8eMTK%2FFLaKOB0Fij5I8VD%2BbT&X-Amz-Signature=9e0f99d5ce8aef7023d3e42af4554b95da95dc17ac1e7f3ae1324dc231e866f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

