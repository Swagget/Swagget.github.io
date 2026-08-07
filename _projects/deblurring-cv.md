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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ523VUI%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T015808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDT4KlKodYwmIiGrWBTyh72w0Vhtxj4gq86ghyZ%2BkwgqAiAz76sDUsEp0RGsWtaFAwcSIeQcaWxgzpD0%2BGPyaVk%2BUCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWa882U99VBmQ2mMMKtwDlQsbt%2BPbkXaIazTGO2Im7IEoOStNoHbFQiSjufbxtZq9yS9kH8IceTfntedc0EOD%2FliTugqeDIFdDWqVHsQKdUoaLx%2FWZhsVWT02LMrrWNGino%2B6TOYiDJDk7zDIKITjSFVj8dBDRgNWBuBMxPTDe7tj%2FTqxZzvpwxBXxyxX9lSKS375mMXbeXSg0Ni4q2EH1h5MTZp%2FuVGFVLcnWhkav8LtDjCcESdrLeKdh%2F1m%2BsaabzpBpVbLSrjZThgfnzzqRbqFdC8dwdW4xtASXyvfEt%2FovKNjJlbSkW1TDBacv2vHsyaHWJSRSXtFlT4rLuyOKcaPvQMlZikv%2BBOPOKeit%2FnxscqJpBLqKPZsszzhJXXWIR43uL%2B%2F8iqqUxcDniMfkqscDdcKlH9ehYUhDHfisdrWJvT1HheA96Qf3NdgFaK9dswIe44xjI6H2PYKGAJqVPLUwIdSj1QKp2qCfQeTAhZMnX%2B%2FNsmO32UvLGWYDF2QmQYVDlssDwGe2LTHvb40k9B4wdOL%2BShfLDDRl6MBPnL%2Bwl2GejAz6EGvwXi23Uoy8BXMnYae%2BJbNX24DVFAqu13PgDgMASSrYKouJMMVpEBBuIKwiLttWf9lEoPI0qHHYln3AvczZl3ypt0w09XU0wY6pgGgbp6bA9JM9%2Bu9ygu2ABT77xpkfVG4DjbdeOltn3oIjANTObCgcjFxezu0mGElBft7VGKm4y%2FZeijKBgjS73KGKnAju2KTQU0Orl3mD3OyK7AFqeKc79Hs7gkj6HNLkCcCkWJsWOS35vKQwtZPtIPIX%2FoMAMIhX1KhVRHr1S8pnEcIO8EgEdoMhMcnHsYhKu%2BZs36WC1FQJJ7zsxBUCQlCQlIsKfOI&X-Amz-Signature=65240be952282ef7b057b00c7d8251b558d110aeda5c47d4e2fb9e7bc1b2a97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

