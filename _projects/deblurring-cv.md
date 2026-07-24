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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CP2KRTR%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T144047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIExRHU0VLr08HTl8Rhz8MZherV3%2B74eoeIAPjFaOLTnrAiAWMrVhTeQCFG3URMDV4eJYQjs6BfdjeJ4baJkl7W51qSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMGqInJVELRRVm7%2FJ0KtwDA9CbevVaBFwHZeIARTNY92ZqIrJgA3g163S2gS00PF0N3YPbvPpGjKdL6PfW33YYyBLX5uufj3iBNkpDm6z5sXitBoCvUz24jp5ahI0Ce2%2FEGTfLYbHTV9PzCMdJC3b8wLBKGjeB3fulr%2BoBHtBSQVtccVqdN7D3s%2Bv4kqFMf1kKDZWIR1PUqldGoyARoSoGPg9tlKPRUx5sYn3sxPN4P7QXsb0Jy0FlRQSnjmQrTHo5EfxeQlSOr8%2BcJ9OpwkT59JfrYIbtACG%2FmaPYPKxSijhb0mToRJeGJbR2lIv8Do9o8I36SqRH5vPXILL%2FTY%2FRpFE0ByLjtORhVnKiI%2BWzmIKsNoZMdrZUDN0FaO51z0WptRV6yfGxLgUr1wSOCfLGbqJ5LzI7tRueAQpq97OoeOq04eDP1xNBtmjMEwZNWoTPImJkMX0%2BPKkdMyoblGWm5RIMh%2FlUY2e79aMTJgfvTKB5O%2F47bGjmtt32W%2BPSiDv8%2FUIj6Id0lpB1DZV8hWLCZGR%2FPL9FhgaU1d4lmlnM1SKYkjbVn6OxToVz%2BJFMAlEqjcfz%2B8IaosaIj9LfVA%2FkyZcPWP0OEzRYA%2F21GXwiYEwydGj8WXlR6kqOYQ2nbJR9YGmlRAiTvwiBep8wkuKM0wY6pgFtek%2BJz%2FdT%2FMZyEbwcfgtCpj9Har2Z46mz%2B1ZNmncsmPhp%2BNaPQZxsLx3jXA7PeaPfeEuO2No5w%2FaUQ1vl4xXeIjzMRE6vbiWql54aIoiB%2Bg085czcts60%2FMxPYwRFXAWlyd8ii0cB1yLc2yMGoAMIxGVZN3tYqstDEpiyWE4xXoTENM21TFoRveKvR7mK5tanwMkXvfQrH%2FDFVhR7%2FVqlGxpU4TVo&X-Amz-Signature=4146596998c0a79a817c19a45b0a123dbc0c5819d5f5e540b308a23db977275a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

