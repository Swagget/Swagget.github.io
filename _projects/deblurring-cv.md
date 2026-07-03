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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAE2F2A%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T084345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIC7UnhyUG1ocIDRctCLOY3xYYmqV19VEyZUJt8M7x%2FSfAiEAksxl0INnoJcgDmx%2B0coCxHFgrY1ln99Ry4vQ3QBdSjQq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDLVB9pL5R3h0yE9kMCrcA8Mv7KlHMrDw7ZObXYatG3C%2BDb1IQ6S2tGf5MnQh40j5GdQ13J4Qa9Pacyf9cYNzpHHyTKhPxsMU4F1FWNsaf0%2BnErLXZKU0PCtll7gZ98ZIT2jtck7tHkUMqEZW47pfBFt78%2FoFB8RIBkdCizIbZhk%2FarAte6B%2FQmAYInpyBH9ilJ8QkdQXZLEVkQvZyiw9YDwrnYv9vSukkuBMM3kBniHgTFC4Sn5i94f1DIPucIxRb4ANJtI5bGkayty6xPea4MENSl31TGdd9FNi7eZbPauN0AqFyAHWWNyFuIKpFUcY7ZhACieZpwAUYJJLkl9OIIHP0fK859yEbhMVTH1sJhHSDB1lLfzNql7Ef0TJ9F8pYBUncLmlhK0IUSTQvPRDpeZL3p3o0dWqKkH0hDe14WE7cBfTOEwG7PY5hkAlt8ZQ46vltELVaTnSbaAt2LYVi3HdvP4FAIQh51fWC73PmOKEqa2J4vGMGYFtq4hxCp5oXFKXW3RCCrs0CIY4j2K9ZGcdS7vs1a3Lfsk2qf0Ef73EikJUOghxgET%2Bg4LYoK%2BVYjIzQVPkhq4fdPnmR1K%2FxgfIJccIE9mlWE6qNzRrHNYVdQCMN1Ga5dmLG%2FE4GT3BOjWl5ehvUCyMtBv9MMvGndIGOqUBonoOmrrpz2rB54DLkxpCNszIFOm5oJlohtoyrwPORHvoDHfcOWts%2BxX%2FqVKtt%2FbmA13xvp7iWofGWaiDQRWbW8Pl9CWrk%2FPLzsrzpVvpLxenzgR2UqYEq27%2BZ9yFyPJ6f32ubOOVe7o%2F7XzHIq8AimICceyvmcqKiia%2BDIuHQ1SLRV2kM3QWLFfYVRli2ZxiM%2FJS4lQLqlrC8sjt9jHn99wPloPZ&X-Amz-Signature=b0e72f3db257a360f9974d3c155eb6eda199d756beb8d04e8f65787ee14e63f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

