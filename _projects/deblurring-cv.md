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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2SBBFL%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T212306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC6QkH1u8aZ8%2B3vka17HOozemk44eD1h6SIFvslhnnX2gIhAPXiLL7Es8aoK45R0EiV7MI39uklaIN%2BgLJP8o46D%2BxPKv8DCCYQABoMNjM3NDIzMTgzODA1IgybI0T8x0lxPcWsoo8q3AMyRuLhw5giRTZvCiwMpr0NWQnyZ0WAPYG8H4T1BDWcduayxGnTINU7rwBu7jD5A3yt1z1%2FYvHgpOqpLdbgOd%2FA3B6aanEzzUnLLCSM%2FRA2DJZP0%2FUxvQ0cdApKmrib33DQdeoVQZKz4XHs4VXOsjEQH50GWze3M%2FgX5FAqVJl8k%2FnUQxq6%2BxdeJ6GBDkxKK7RNURwOmQGe5HNSsVyhAOp7g0eZF5JrbcGc%2B1pUjpay1YsoAsGY0EQV9UHx0l9X96jX44fN94mF9XxvIMPOZjaGVucpMuAgob99oiV1MGBc00R4UuDlUYzPRMOz7HkvKX972WkAqSoRMshh4dq1Ymm6hTUAud5rHotXwgcqWoZmo%2Fk557YcgRu8Od7HwLECIfbSb52mYGfKCQcFGSJ08yWAgd1FmrbFKrP7iM3jMGGxFbS1hQtb6KE%2BwQjgBgjHuoFFpdRJ9YQYQcUYl5eEGz33p6DPNC5cV0Zs1zcPfS7%2BHNKOt40hqYQx0ByHsgIfpO2AiUotwF3u%2FuX5j7UmESK0tDr%2Bv1F%2FeqsmPvWc8phcMTm21DPq6n9Uix2aI0Av4AW%2BbvRjAS3tTTu4ysNclBL0CmL0%2FSIjS%2B3JorP6J420bQyAHkj%2FsitQrl1U5DCtsL3UBjqkAaBIcN%2BmOi3NZCkyS1YWWqDpVm7CRczChSvmiDumpfvYLixqMVUcWPY%2BIYYmD8K13QCC4l%2Fet6Wq0D4UjGPu%2B0i4Yg6MWbM5WaF0sKI1l3GzUHso%2Fsiqg1MMJrAIZ9GuRHjF9i7BYcR5WL84fGrxpwJvB18q2ya8YE0UFa0lGCG8qrNhY7Eju6BbrOnGFrohfyjzLQGDP57lys9KplR2fi22TjDt&X-Amz-Signature=274110bd9dc133219ccdc5a3e2af22ba965dd85cfc0fc79b16f28d7af8736fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

