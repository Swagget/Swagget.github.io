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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E34U4QB%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T155820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCqxYxTqVDfIEsO2mAGqOezlNlFoTwH0BHCu5hxFCtQMgIhAO%2F3cXWe6t6hv3XoIrVJXzmnfVpbOPH1ROGSjxWmsU0GKv8DCEEQABoMNjM3NDIzMTgzODA1IgzzWoLz6lDFKTN8o3oq3AOzn3dQtuPjDGMc3v1rZUES5BPubvAAJdL2CnNmjHlKiP4jdEgG0IBa97dTzg1plPMuRL%2FBdmSiW%2B%2Bk6gFYq9NX2WXsEfY818mI5Txf5mk5NgkP6OZbftgDFbwKpwaVHYiIEwgl172HFOFrq%2FIJ%2FDFI8EJFnrJm9%2B0nnq2yllw60Ah4v5w4HgJqCU9gXBF4p4kl1e1knwW9yH%2BvL65FObE2%2BZc4iU5RVxIzR7JDUH%2FZR9hi%2BCVuO6sXCMWvmm2Sg%2BxujOTjaXWKFF8y7qicV3Z%2FDIzY%2BXcRz8vypa2I72NvsHW1QOMvDdMua8yzdPbcwofZKOYbgBqmNpSCXlXYng4z4crr0dnxlRvaukmcNIXeD1v1AzhoMQWZmnrIRXOODyiXiTIKxqAjbJFjKUSsAL4k%2BfhmDUt5ha6WrAEXPuanXzE9PQR9mDjk%2B98HIXY6enRKrtvdoNtTNa6MP15zoHK2%2FY3EQpZdnsHOGSDaVFX%2F1iiqGTyHZsGuzUhCm%2BIPLZukmUnt2OQArKc5gR8IbYvJR5tFsLu2gD%2FeN1IdT%2FVtQpQPELFyIeqf%2BVj7hRSPg0f80kaUpiwXh85ZWzTiQ3pqbcvbxFnbJkYxlz%2FZ8AY8hAfYSkNBd%2BHWaCunsjCn8anSBjqkAWk9ThSGC5Ms3ZWfue3UVQZYba%2F%2BNIYNg6sLJtJnsUoS2CWHqkpzEtDBjyrQfd8B0W70WeGSrixTZm2PNRzCcpjTHVnVso0GAHWOqYpyX9%2B8ul%2BUgE0HKHoqPrAakza025T1ahNuruNM40cGKwTJ7LpOyne5qjgppHGIOfeksd3CzU0fX9aabbVEW4XyQgdSpJ%2BOjDZCyzKyau1r58Vywz3wUK92&X-Amz-Signature=2925964efffe016b5ff701e50e267ceea2f4c05dbb8833174507f2d0eec2d54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

