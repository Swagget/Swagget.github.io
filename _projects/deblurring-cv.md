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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGLPLLN%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T235221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZq%2FJrpLCiF3ghEU3V%2Be7Tc9KhJkFeJxtpHi3Bg3koCAIhAPvFwloMJI60Ssuni3RszqEoTT9XA1FY%2BOJeJ%2Fxw6k7fKv8DCFgQABoMNjM3NDIzMTgzODA1Igyc3ot9iJ29nD76nTAq3APmslpu7amhym6HAxR2QfV0QX%2FpyjfdxRBZo%2Bjc0eORKuSMGPRkFQ%2Bgl01Y8Whl3s2g8596H5wxFvTGSaQL51TrAXd8TBf8v23FJrwBTjLhDEWEWil%2FZ89Gk%2FIsZlo3OfbXFRB5qUBVK6xOukOblEVBMgzUKM8VxpSmv8yppOfbZycZadHRdgoPxCKZoMnC%2B2lV0khriwlnWaTJwb4GtJXv7Ulkxv%2Fmsod7ACWw7pL1iWsbM8bCDJmBjW2dAkI9nL%2BU7FN9IqBO6V%2B%2FXuf5M6xmkBkz6%2BQ0Zq9dWzg8yHjAIRxuWMtFeHQLp%2BiKBCwnDP%2BOy7QeJ7oi0FIO5ulupMphdq3zs5smDHn6MUfSHQyPdeHhRwV%2F%2FRnRRjQ5N5dkRncYx5P4Arf7ekFlMvqzVPoNp2m5ce3Mke05%2F3JDT9Dt%2Fuwj7n3GoX8ZV0nZTXRRRld5wbmNuoNmYhFzOZ9mmReV7zGWYL%2F9JmR%2BXdsyGGQ%2Fy%2BCmsGKcjH%2BpAaCQpJzf0sR6r3YRIR2VV4gp5Onjv1G1fHo681yXAxKcE474B4JgI4d8mg9aZZJl779SSRMvifbdFr96AqJA%2Bx2uEI13wl8Vu7edbsb%2BLr%2BUS271KB6kEmfpsklTIYevL%2BMrsDDLxJ%2FTBjqkAbC2TjGWVv3ejUSjyzDgSf5konGvbRj%2BTFwhRbktoEaKauf%2B4nmZiZhg5yxmtLzazkhleKt2njjN1bP6FCyo17eEdSTUAsX9%2BqWLmcmbSUBD5o4GKTiwkl90MrBI5IHGRkpq%2FH4sNEua%2BZdGAwJSdV74PSnCeIURvkRITf3GNQh06twtdx6sYsLQFAS%2FtAiA8Y95aS%2BDB4MfdkVB8Uw3dz6hr5Vf&X-Amz-Signature=9680bfa71f2154f06391f86e76311289ce409c8f876caa24bd4677d72be38e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

