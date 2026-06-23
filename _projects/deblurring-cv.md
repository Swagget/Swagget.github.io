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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWQO3BT%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T221309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIC5aCjj02E5dUQhP21dpKFWe04s3bf0woJBu1RsCHkDdAiBckR4xv5KYMVsOWh%2B8Ws3ppsZjLY9UG64vyd96VHc6Syr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMsYmIEv1KT7FnJ3pSKtwDs31AASnn4NhuUI6A5idQz0W6N5Rzld%2F15W4AoVJKt5XEs%2FVRsgGHXQ7AmDtb9dEgwH0zp8o7IyDD5jX9cDkFVqm8gWn3qNBSC8m%2Bc4WwNEUYbnyVd2Tk%2FOVZsFnTiH%2BpHGIV8B8mrfVc0pyKxqM8wqzy2mgOnK22%2FnX%2FCnP4LbUz8QfBn80nt8jMOEekyGODWdxH4Hvo8qIdpkQ793R1m%2B8KG0ywsfZ%2FGcmxIYOJpjK9rl35Xx3iwEPZEK2ne0bPm4fUBwTBgY8bkYKQU2dfuSZ5m1XBfniALTnfxYpNhE9ZzHYERijQ67v%2Bdo8eGOyVi%2BOO7svWxP5LkTqgVQxmaSYCu12TnvtsrF6Sw90W3QJ6M4C12qZq29H5rsoWTR%2Brfdc9mtN8GmdYsx8w7dE1p5nPHYVhtkNqYtuYHpNF2Q252CerqOs32b5W6BporSknVM4F%2B9Kj56XQ1FtCOfl2s16f5PfbLBERO%2FemXgu6EikGZGHSiaqgNo1RJvJ4IktswCq4U4r%2B7r4PJq8z65%2FZOxtm2V5uyX2Y7iLWQltz%2BEXzTnmSiq8uQj4Ud6PxyEjDITwK8jfaFGzibfh27iiJgPGoQBuMpzTPxX6q8dqlKxWRVI%2FfdTmKSAdYmpswqOzr0QY6pgFbaGzIzSF1yxxUMp5y5Kpqh4RH9G%2B5NFs%2FGfW6xVwNBqx1eDSOGt5yB680kGFFiS054zi%2B50zhKZczNua53c%2BbRkjlCnwi7h6fJ3wCS85yMc0HFjYDBl3OeAHr4P%2BnAwyNd5npVW5zrNoqh3YijuGFXokLPVc1PmoLCRHbmzMEMq8NmwuN1ZgLmIdydrkOjZdyJJiybcLzvdsRRTSs23k0QQ4Puzjk&X-Amz-Signature=ea146232888bfbdfdf5349d87c127dbd1cdc491ea1bb8ed64f5af1ef84031d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

