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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWOYNDQC%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T133339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGBSSpvbR%2Ff5H1%2FpueUSsN248e%2BQi7k2VQ%2FpbX5tQgXjAiEA28G3pG%2B6KiHDYg74J8%2F2FfM4q4MQGnLcFpyldTgZQSQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdh%2F%2BVUryRwv9rWXCrcA2Lk8yP6VVjFxdFTF9Eo11w90BQRNSq1eNoh28Oj3N2kpBDLuV78%2BPWbV%2BkzhpCAYM9nbq2PnieFszuxKjzYhOfNSlzNkvBorYBBy8AO%2BaRR9t4buvkHemxhckOVC1D3IUi0HoaXjwyoTUi0KvK678P%2FoPZHwXJ6w7S03YweTIMnppPN7apxa3p4JI1IcQ6iBsRJQxER6wHN%2FDs0FXGuESHVddihNC9hFfraVM%2FkrY2Hu1sezfq5CsO2jGRB5rCtWj5oKKm3tqos2%2Blv15HM0JGuYdbJtUfJnGWUSTaGI3NoZ20V91NuPuGgF3Kld2HKW7Okov2J9ucrvd1Q9v1D2qN1V2ivSD%2Foi3E%2BgKnYMlAoGrt63a7E6ywj%2FcbryIBmevBdAKs%2BWtigkfq%2FyIZ4%2FCRwxr0Izor%2B1vJRKNh9N7hDCdumHurF27QeY8QR1mKSlYO9yIkMCYaO5HKvRObjKN0ygrTZhUrrwWUqMFoY%2BzoulXYFmcZ3GIO7xhwWK9pfjqTAgvtJxBp3lVHJRDcPCNExJBLMlBEqzzmH4ifTftxE3WEH1AXtCdyiSrHXVlUF0ydTS9LMkB%2FJfj4JkAs4x6YXRxOxaPqCjAt%2Frgzk2DCud4SgcMSdIWN67SU7MP6tk9IGOqUBBKRaJFgVsTf0WSvnlA5ewEdgyk25rKQVqAFPUDxAeM47fjy9cWUf2j6PKFhw1x8MBY1DKakqoPHA0CXNiozXf7D2hK2JKEAHY%2BKDGtCZPoovjUxUM92kgZeG%2Fn7HwWNcHeob3O6Uzy7JgMY%2B8AoohkDpjVYLQgp3Gk5yfB4AYPD%2BcgOFYjMgeM4ZdYfLr9V%2BMEkOx99k%2F3vcQNpQjsgENoipu0%2FM&X-Amz-Signature=3ff3094eef64f3631540a1f7b968c38ee0999b180eed4e78e170ddb1f7031439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

