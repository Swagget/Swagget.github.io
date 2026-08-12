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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DBRBOX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T202939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD1hF52ZbtbF5P2Yxushwb2L8BPRs32v0jOYGSsKUmavQIgE09VOMCA7XmIfJqa879bSnEjYgk65%2FhltsUeItK89fUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8VF2TG3snAekDWACrcA1naksxsTGv9%2BpMrp33wtjvGl9o8bzmObSOFzYIFnuJCzY3BgZi84og2mgyROQJGwq12tiTHoe5jKCVMpY%2F37PVrzUKbSiWu2VnssSJ%2BKuniSYUhnDSTyG0i7KtgZSLz%2BsL4y0GX8Okr1Simgyce9DhCSy9fktCGP5zd9yJ3AmiyY1tiaRlqHbltRv%2BRBqlO1Q9jn1yccjqySkFQMt9XUnqJJL72EA3C5HgM5WogC8woEN9Fe%2FHBF5g2vHolBSFKnEfrqFpGuqqOqx5ux%2BcGMcUAvdYUEPVCn8lBsd3s5295r33gz3DaIyjjjdH59QGWBJhwpXDh6UoBkOo5l5Yb8lkciTSbXhThxOMSVKLVqUODYI6iPgXTlhkMo1HMxeL7dAkkiP06bgjBZpVk7q5s5mjGS8M0DlsOy2GzuvxbskXA0qQ0j7nndZHTuHZ%2FtlHMkz7uPtsEwIR09a%2FTuWgMSW9DOIHbzrxvDtYurs%2B6zMDpaEchjVq8jwh35WPIN%2FzX8uHc3sIuPjRIW58kCbsVywHM%2BLJ%2FTJKjAQppfClwc7aCdWYQgJ3ZPTSECNjKjcN46X7eXSSlPR0BrsZEfMziG4Z3U1109lXF945jLHsQZ0z8hMBS6bHErvEW6fMNMIeI89MGOqUByu%2BSISscFnH1%2FFpfoG7%2F1PlkKkE0iEmQv%2BwZdDlbKQXvnfMYb6a2WfzHE5VDBxtKwo5zDXdRKdBNUcFGRG476Eqv%2BzGPy4s73BuxVvRtNgkhn8p%2B%2BJK0t13V1KhS%2F9Njh23HY3K7h6XCSpr3ftWi7YId%2BKcG2K%2B0adHvNd6oP9CoFL2TR6PsgdHxKGjNi1xKxcUA5XiVLJXD5v7btohJUDfYSEg4&X-Amz-Signature=c832566432b08fc687e20b27ed0c426ef77a1f959cb0e6577d5d50b578db9e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

