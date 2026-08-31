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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6GICRA%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T174418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3HCJZq94Kj2j%2BMqNKh4xENCeW63Ko9rVkjjjEhiBn3AiBSAaLlMZwzXCDJ34RzceSplP%2FurRjiTvlt9gY%2FgCx%2FCiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uZKzEUHsZJYPPGiKtwD8IDkkLY14Jf2gfOv56%2BXK1b6zxmx9i%2B8RW3xAjBI3Ri8nLn24cfFd7xGX5dP76IEWxzovM9P9ezQqDISfm7jeYzp8xXvnogmpbk0BRuFyiyeYutx8ndq2D88X7ZvfT2ynlgnWXia4pjXeKG8BSsXKL2hDe47GO9Avj5%2FNAPypPZlYF1sR87CrRFPKAcKC8zj7hyVfiuMzY4IaG8jUZLWBDr7%2Faw7hYq1kdLDId%2BYfD5q86c%2FzzHCISKyJOtp7ZepQC%2F529hhQ4j6XfwLvA5aKXgsg1O8%2BYUxWg5g%2FjCKE4H6dJ0cseF2qdvT5rg9Mp0jP9r4acksqgodhKYBeFiROp971AunTjZZoYEigF35llZCVEPkLhV%2Bb4Yc7MnEjiIxavGMKi43sgz4m%2Bedf%2BRHUz6u1pkB8lNN2Gpv23AmaSVK6oh7K%2BKhDyAKHyu60ADgM5xXWHoovWV8V62TUNn86FGpAMYIFz57mbkSSh80gMMJF4pczGPxmDQX%2FJibVvhcYknDMewDi6QJ9pX9Fc%2Bv%2B8qcNbVAn5l1oxoV5x%2FLnppNmM7kFT2ZAc9SKRf%2FKgqqOSELqDmHtLn%2BeR5KSnrqgCpkKcW2qqCLPjnzf9PK2E0YVSm1UYT4YxDPuGQwkufW1AY6pgFci08uIKduwfsA9ZIZcrK4bJ9qQTjI5ZpzOGe%2BEcA3%2FrF4xLvSOJ%2BkvYKmxFDjW1UF%2ByT%2B4VSYIWqiApQdMelyre1xG6CvWNq95m%2FAfxICSJ1ePztVq465yvH84eCT9JvDS42gGUo%2F0LGuBrcI6C04eoQGF4kmSYbav7%2BQcZhlU0tn2nmZXjBhXxQwonTPmueqscvEb%2Bdp429d8bXV93cftwLo9A3w&X-Amz-Signature=9af835cd89f55ec43ebd0105b7cd81c267cb4f91cf6486d4cd2dbdd5fa1ddaea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

