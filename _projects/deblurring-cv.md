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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VBFK26%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T170501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDsor09FIsJfaSMs5ppPqsgzQwigChUct74HCDnMbpt0QIgMP7mfh8fhh6Nq73dHuw%2BBPFgq8GNP88z6DmyaHpQeZcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFxcNYpM1jMLMUbYIircAz49fdVd1jpnDBUfvHR5RcOvjuNznEocaEJAExvZOAZf3wX8ECoGyNe8zinM7YcudgI2EYZnojocwzt8nTdqPHR8qFgb2Mdg1mR2IPwTYQsFsZ%2BBH4tGQ61tg8uXEsSNzbu7lBxoOz8DQEt5NBYmTtgaYiI7O1ZyDpcBAbW0yU%2Btzm4aoj8bNwMaEuedSwUtree%2FUcnDKtLNR6CLGh5im2EgSI3cV86cTPlPWSC7RgbeVFkMt42SJ2cv3g0hq3Aw8Lejxy8DHj%2FGuzGSmugimF%2Bg1txMbqYe%2FdwS0t0Rg9il9TyyUr772ub2QzZpjmjjtz9kc7m%2FRluwxTWhP9IDflv8NC3eRkd3f%2Fi7HN1YlLEs%2BSgZSOVOTF1KxW1JzoHkfPKVPFy74zJC7BeCtJRymwU%2F95hvmcCcBf1KSyPUSZr8N25IeThBG%2BKjwrnMyjI7InghZxe94zqxQNklTDSKoNE4960e1mk%2BD1nUNya4R6ga0IGm5UWe1yUnousX%2FXkMzTu6aHNwW1xmKlMTG1EjnDw%2BxpSYCrIVH2ywKvR3dLVyEs0w4xwp0i7hOCEnjkABvvCvR6zTlyUPxYlKUTl9C97GwdtymkN%2BZ0fnYtWdRkp%2Fkbleb7aiw5oCO2byMNLxqdIGOqUBKwBUlbl1cp5BiBV35OZsFH%2BeMf8xGIppvwLzZxas4uTDOuMNuzLzqZT%2Fn3ikTFPY1eJdy4ygI0IykvySiNx4h6TqyQSXRUTggOfal5ZjN66ZP0QvH6MRjw9BZpNpsxIyY6MuP0670tgypMIZ9xbISx1x6dLF1TmXtc%2FWWEmcfN%2BYURXWnto3DA7OZ1oN%2FtVYiO5K4vIfPpOD4UWG6Ee10ecCBAcL&X-Amz-Signature=8aca24a1dcfff46c2428e36db25c0085415e57bced7e5c0ca3e1979479c804d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

