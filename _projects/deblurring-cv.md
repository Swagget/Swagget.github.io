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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHL56ND%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD8stGMKubGf3131Prk6z4NfrxSTTm%2B%2FHYJyCKgSHuT0gIhAPNUCHkTa6UMATMZCcIXgPkag6klNbs5oFHmpY%2Fg6%2FW1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igz6UCqhLXJlJ3s2urgq3AMRKCo7PbQPeLDSBNuFXJgEbXxQgWqquk5GIu1ZFrKqXKtqE6SubfZ0SuSR3ZoZML4Fqk%2Bn8TWBgdICHUU49bWOnvbZYt808xREAvywML0dWKf7D%2B96z4yNjR0HF4WOIK6M1YJiSnb562cSNXSUewQQdS9L%2FM8ioXYR83xRxyGADEcD9kdnSsmN6%2Bs97BbAmMbFZeHLYRkLu5iPncB5iPBp4qe9gm2%2BPF7X4Y2Q%2FnIHAk9OdWc64yn4wPQMi2Lz4qWHdSt4mtKMIXmVMMiTp0xjrS2oht1X%2FNhS55jAQOV76jpeupbOcNK6O4Ocn%2BuR1ogg7O74ZeXglN9UfNzWWdadYhN96E%2FyI%2BGt%2BLuRoL%2BxGyFBZlFPfzWbwZXY7jGoiRYyL7tRPn3l%2BHWPTgB7CsgIfPK0DDnb8lhvcHGGZ4H9lwj52wgEQxNneAs3Y3%2FHNy9Dz95TopioZ4ruYisd5fVx1q0ldNp1ZknypxYlpBYYYtKPr1YQ5%2BZcvx1N7d3oyP2NzU2XD2aBCjItoGxguuIEYa%2BOCz0cZmH2Vqx%2BPefcW9i2dIrICdJnCu6H1j5zkkRjFHwq%2FYhnhG43IKe0vrNRhzXuAigkxrd8P8LRUxAiL7tD8%2B2m9YXqxKBXpTDFmoHUBjqkAaLf%2BtziB5oPQxJpCfCb1inAbjqXssMBzHhIIApcLjjfGVkFuLC6%2FIyjJFD%2BVBpJRK2%2FFMG5xpYQa8Q56AmF33dCkv0z5NZweOcnOJQsh4M%2FSZBLl9Z2r9AlJ7zbfwZuTtP1D36iooOoA9KrWlHwSlxM6GfVPge9qf8WncXJOG7MEuY6y%2Bsv17WLDYJZnuz8wOKqIxMjWP1t3wGNTxUnJpbS%2BMAK&X-Amz-Signature=dbf8e31fef17f30b39590d526293092549f3f4b1256ca6fef38a5f565978ce84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

