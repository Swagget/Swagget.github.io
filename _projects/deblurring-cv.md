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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIVJM6A%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T000631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIA4cy3cbBg8qpiqIa87BBwxYj1EhsKKYTx0Jlf%2BeCXHQAiEAuyCjJ1SYxlbWsQZx1P5hhbSI7pVe6%2F%2F3roz7CuA6LTgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpgYqwY36mzmAsVeCrcAw5MLp4FrGhGVGr8%2Bt7oXkULUNqOBEtKKTdr%2BPoqgsBVgusgMuIDyZGlPAn0MzFk%2FeCDrOFnVIwfwfHqX68sEjBQTSfhGa%2Bl12KFTVkYe9wshvRrU%2BS0etdFs5Ft0zB%2BQUE0jL1Hn8aG48STrFQBGsjHdcPdnMPazO08%2FEUtLf5pwSBLzxiCaDzx1XHK2zvnYDC5MOzq6YGEaYDzEkHr7tO6E1ZnfX6peBRpRIklMvQHe%2BDDmj6IJ7kCsCL7VifKj0KJ3LaN1LkApnLpm7JKFPHVvGCkrtwQk%2FOR1NkK4nYiEWGfv6b%2BAawKOArPsitmnTqBXcy6XhtcgBA8cw4KTpNHsbbLYO3vvwQJCKx4dN%2BTot66ORXwEReX7C%2FGfw7uXBSDjghBhmqyzxnIT1eVbNTV%2Fb4Em%2B145eyE8EuLPAbJ5SszVx7jmcTkElE2KR7WW%2Bf2OBZlU%2BGLqJYEGFWKOGjkJOgwKbQiHPmNbI4B6hh7chbphedNehOfoe4T8vRu3vDM08sd5w4UTnnMGXxFzamPf2liJrVguv1DYbgVheuCJl2dAG8GrH16S0gyzDbWG%2Bur8F5uzViXBvZDO4LW4WzMopooiJ%2FNNkt4H7cvw32YpCHjropk%2BWlM1jvsMI%2FFp9EGOqUB0vPaVKxl3QUnKZImymikX33NEcMZxL6Z9%2Bm%2BiEeGXIdNiYnlrvhanuLY%2FTa04R8drajJ096r66FoZU7OS2aLTsLWISaxD062GmcerydNtVvtoBvhXnfIR8vX0Awh0Aoea%2FrcKJghIYqllUchTK6Sjhf0FYMw4vceIsny5a3zXqR3ArjOImoHwt%2FmJbMbTz6lebmL%2FSROqIWtU84%2Fx%2BeZUJM8ZcCy&X-Amz-Signature=c8fe24ca095520f520e06a1685f19475ff0b10cda52d734a0454ece7ca08f1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

