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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM7DBOP7%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1b3pUkjlMxlfDI2XAVzyvVwdWUaqQn%2B8fQF0thGqtuAiANSvcfgue61K4KVeyOw7l9%2BtSdDG5GaQvGfUdqu28J1yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMcpmtomVkrPdNN%2FMjKtwDbswMYMh%2BGd7wcXKC%2FsA4h7SM%2FAp5ejup87xx%2BLgxP3fl6RPosrZY3nC0FCSVQTDmBTgg1ZQtwpx3W%2BtunpRUGU2UstJ20Bu7Dce%2BbyZPlaVjavc1PmDZj9ZAJZrYrPF1I4610QankHqws7PoFuiAGPX6COUEe8n8CIzjjJbH61QaXSwQ%2FTqoautPqzS3VAw6GNlx8LQfEi2b%2B4er88%2FYwMqmRnB2rDgfegLZXDLYwhPEk9YdKSbnl%2F2OsKEdg7qm8qSE35%2FEg%2B8EMY53ZNbUYYcmw1NVn6NzsL4mPTLYyPQRRAz%2FUvlK5ftOXRS8L7AkIM6WB4h4O%2FxLaGuxCKBUm2lyTpHd5a3PzWo6FZPSwFKUNULMMp2qWj5RrEYIzZlepz7kdiz1%2FM%2B80%2FF4cpZvS8kXSD6hg2JJ1YhixI0ujwnKyGh5DGd2C%2FZeqDtN%2BqT8eJptvGk4cBEnMtwTpGV%2BX8ez6tuGoa8lYs0ZXkRZJIfdhTxzzdFPUOD7Kl51SVzZEwaplYpVy3OHPYioJ27wYzgpPuKKH1wO9n0PG7Q39CyYTKA80pJftJGQ2OnNGX9JfRLVsnpSJtknLYS%2FSRk4O1bQlt0END251Bt34bdMse1pzkcTDoR3CaJyWfgw%2BJqU1AY6pgF3wEt%2BPtc8dqgMw85vH4QOGNOYOWv%2FrzvYWwV4ASmKyrzMyRuDK3iEHV2uWgkzzKLeIww08PI8MxgAv8CQmXVlKcSshUViji0kSaPzooVOxR%2BBMOboJHp96Tims%2FlObzWDMt7fMX657heyxMsjMoaEDKpm5H%2F%2F3X76QjzhZ9Pbhwz%2BOkVxQzfCgcrkLqrjeVqSlTpVLPk%2FaRhOlMQ1R74SZd0mYgb5&X-Amz-Signature=b6dce001ccefeb321c6c8636f9098c0528850f90dd485d89f5e2fb374d47cb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

