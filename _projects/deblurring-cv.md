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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J2MPHS%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T095439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDYteId4Q%2BHi9%2FX%2F63o6a7ksq8y0mm2XblhS38d8VDltQIhAKi3Jj5virUl152zfFAOVx1%2B63tRy546s4ET5jZFW%2BtTKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR1uM%2Bc59JyQ95xfIq3AMH8WtwMmR%2FYZ7ogXLDATKfJ%2B%2BUJpRAvo0AW0P0VX%2F19ALgVQGwSt81sEOimPT0tVJYyjE3iVxSitPDBoBnYc6NK4j4z5%2FmYZoT7gppQTgqQUERX9H8UeYvfkl5Ly2Vpy5wZ7mrXUhwppR3vqUyPgetekgyhWdk6CiqCa4y8rdg2zACMGL6zrZHZs%2BzPsIqppsxQEKKKWKTz1t2J9b8BI7xk7%2Byh%2BuUMYsIDglA%2F6Rm2gT7yaQChdAMFNIz%2B6xJoqyPL%2BIo%2BhMK9Z%2B%2FBmfKFvIblFERgvhMECt%2Bo8nOqC0WEPh0SYGhRh68J%2BExdKZ%2BbueGFu%2Fc4O0LEjyHsAYGvLYHGUitUPv5tGKKHbRy93lVqJn0iLgb1tMouEVHo4KrJgQHvrCBgZ2bPR1kwykImB82ngVqcX%2BDoQc83lXOv3UZOk2MUPdqNCS3zKbJMrwv5xfHqcNOcELDS%2F7%2FtrwpEGVvO8SyQy5waLfxZcisW%2FXak5SL2Fi6u49FMA%2B101bFwK9tQEhWVRqwvvaD8%2BDlcCWbKxLXwQdgYe7WNQpmWBtXcUC1iWl7g2tI5eMXXQxPCrXVuxgMAxXvE8t7cXMUirxPrgxUMTix2dG16OPuqPB%2FbFzYp7vklkserJcoXTDf2fDTBjqkAdnQ4G8jEWopsnMYgmRuh%2FNfW0faxMeeVIe9Uw163LgFVbyTu8te4OXuSKqh8o6matV5Zsxw7B02LgqfERCWc6Uz1bbMnx6B7c8A2FZrm8dRb1wYR2PveD6UHG1mhSDQlL8QU2%2BPeuwMZSiSxSL%2FHmKu3RLUPCarN2wKH0vFj%2BhiVq0DRWJZilFQI4PhLJrlmItdUK2Mk3yh0BvP%2BdmUn7BqAbAy&X-Amz-Signature=16db0f1e56f71ae7b15e02e8dfe742a1aa03234e4bf441212dc6e799fa3899a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

