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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533HWYFF%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T081854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDDzVaDJBIR8l5IxzKM6JzihKt8PoSUzXF6oV72ITc%2FwAIgSGKeJIoxJhJX%2BuTCbbLG4IKlIdxBF67C80aUhptOeZYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7gfL8meRzXOqmb%2FSrcA8HTJKGnt%2FN4ikJzuMcCGDNNEIUGYNiSamkLYUOOPIckgH5J3mI7NRF0v2NQsL1Sr2iqn3VRUJ90JSZ6qlBiE9JZJWZ9TAq68SUi4afm6jyZbn5U7we2v74Un%2BRPUvqp2zXs4ICsc82B99gnxb24XEkpBJ80wImcoBZTGHACrs5a%2BCVUt0Up8otoIjN0FhJ3VYO1NKWo74dULp0DCLdgK9xb3BgdrinIjyAEH%2FWEbZ2834YFFHljqOy3BJoxyIzRtISSXrIFiKcN9JTj0R0FZRC8QlAt3yijruhF82An3dXYJW7m7HDWkgB4qGnQvCtHCyCwtfhPQfbLBqxs9VP8KwmICxktrvIrPRbxphh1EBdDlfrPUnyF6%2BtGcJL1KheXM5466L9LujqApLkfpLLvIQlVukhjVS14exH8j%2FnVcXzZbo65Z1zAJaWgusjyYma0Osb7rnu7j0h%2FqLixggYGZsAqYzrZEUyzohd1oJZMDe7lpxFvd1R7DWXaVE3LbYE1uJ7hsBV%2B7bSoK8%2FyvEnKXI%2FQH1WEQgj9wNMRghkLANYSGMdsLGftwWoiKHmhlBhHnz0GQRYdtbulFkYJ1u4QgNsFxW4unCHEsJXWZrjfpoaL5hI66lTfkWJqZcXiMPjr3dEGOqUBOcwZtPT0utdwH0k8l9oA%2BuCJCTDe%2BRHwMq0haPSo%2BiVpOhV3W70mV2TNKow9iaXBkxN%2F%2F1ie5tmcPqjEEFyGWr5lcSR%2FZFiKQfGZvmjXPirv7zyLpti2h7vrMfVL4olf21AGWWZqj%2FrciSM5mBsADCamBXbCSIDxJl8WtzSKAMnqhpnCXtXHzC5C0qDDFlt3592vJPVKwnDggwScI%2FUYmqWBnUxS&X-Amz-Signature=e942342424a8175deadfd3b54d1da3e3207f3b521a47dcb5b1a5c9755db34bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

