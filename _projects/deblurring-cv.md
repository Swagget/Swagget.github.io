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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQMZ3S2%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T021206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFIyx5U3qP4URq3HDyV9Om835y%2Bqv2AWAw%2Bu4RUnCbdHAiEA1Hxx0F5%2By9eiYUh4RZaWrkyZ9d2QBg2DXI8V0%2F3%2F5skqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4BwFDaISc2%2BfpHQircA0uz9OoG9PN16AwtRNGopthW%2FXQEHIaCDcV3%2F3hnci%2Bo4bOmOCY0AGwGn0sPf7k8uXrCz%2FLOKgT%2FHSCwu543Suie8W43uYNoLt08XWdnlGGqD%2FB33J4C0waqmcGdvX0PuEzCcf62l5JweSkKcv5CrR%2FHVOG%2BlOWFQb8U2EpXVE39ytICU6J3u96L9XG06wOJKBq%2Fqe96otT07ewI4Ien2VYQX2IejJMBI7i%2BegEUUDzOyW6aWlWU2rs9axCPAJEGUDdHFZ1u4UO1vkm3VjwkSij71lv6aX6Kt%2BAgA%2FgfPthdUfjG3pte489uJzRbie3DMcY34rbTqU5ehBA3HRKoUoHu7MiOXeh4g2OhFLnO38OCFXOZjFr6inoD%2Fgu1d2JUVcD6WXUq%2FdHvSKzePEl0gEQhQq%2BR%2BrAJ%2Bs15Ht8qP%2BYla8%2FxqYqYm3OfFpVcf%2FpvJmSq3uzTT506tRkYyM9ZVzPnjXImNiaxIBChwBupuTxoSxGfNFoKYrdkVKmWmClp9vt%2BZfa82eNJXdn9HaXwrDJCTxh2suxDh2C1QrkNW3%2BXA6TliLz7ZRjZtDIzgYZk%2FEPY9uVY203zUmCHrWWETJaGOgJDhV0xECqPMi4WGS4nwY5Ym23cKcvOGhsHMProkNIGOqUBvcN1weMWBdVJ2IJW6d3vayIcohzCMrbPog0W82d9aNgifvC9vTjNjimsqqJzAt85J1n04S%2Fn%2FoMcgnA5uBZEbPWAzL5tXusy0S3akN1MUJCtRdRzke%2FZcNsr3B9%2FLmN81aI36ruDW%2BEbYzaCLGpkNf2T3%2F0G8CVntTRzexdfppdgrCQ844IgBbtlUtri9XBaMZWBZZB9%2F2647wgYlHbLsT8natPc&X-Amz-Signature=1263db5e8c242b718b597e1b280ed56bd84fd38a69556ce6a583160a7a680dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

