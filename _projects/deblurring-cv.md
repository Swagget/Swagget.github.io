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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNLTSAS%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T065107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWVQ8Rqp9hTsB80zRn85EdP2UyiyUgnsLC8w2l%2FJxDBAIhAOhIaQlD0xU4Ilym8COstVxYstwq4oJZA8lwXb16%2FHo1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgxwJiSiInIjL4bTwjMq3APNYeVEpAsCqbGxj37SuaZQ2URSbIB8NX%2B4RlR41YmBjlbs09a7pXD1ERhym0EHmbo5IlwDm96GrvQ%2ByPQogbYnN7ZEjsBuSir8N0LisxbNNxTr0soMheh5e4xQY7QkuDKZeVm29MExNwZo6jyz6QI0qi5StkflZ%2FdJVD9BSOUhBNdAfo3q1toJAYlURapS1H%2FRitH%2B1CPpUgd3zWXqUA8Xs30vPUL4KGklUI5jgwnlInNS44MNykxfufy0WA4PaD6MwDgBAPyRjx0IQPIB7H6Rn9vNnMLTQjy1myJOxQd%2BfPcxqtFQxYq7fYKU2pgtCW3w1qBl3C%2BOPb2mm8gLtqpNjqSWS6Nfp9sSXWKxBOCvB5%2BsNk3B6fLYN7z50hlS4cs3H9IZapnekK1cwUrvHKK3Zk0JovSfksMUYlELz18b9dsQZc3XLQMKjvYBr8Lu9GkolJjDRaCUehQiwJ1R8xA0eFK2%2BckmjP5UbIwAWaogK3apzqIj95HVMLiPhICTcD7pqCpDOmR1VcxYOHSRND3FrSURgjjY0WiQ4z5TflEzkgpefRVVO9s1eouHBwmumexmMmVSg67v9Cq7W2T9%2FACOLNIw4M7wN9zU5FGTFvpn3ncgSrD1AsXOtDi%2BKjDpwezSBjqkAWrqlEHq%2F%2Fle9egHyehsLLXzBqy58CbVkv9ucTQD1jF8dGsE8CBtYy%2FLf6wVdNqH4%2FaFoxGRyrABoLb6stfJd33BUMks9j1%2FcXo0OW5S%2BdyaTLAbyi7j556XiXIauO7MbyG%2FP5ZqUpSiWopdmq2%2FapdVFrg98%2BneqNjQxrIAini5AQ7%2BF2fPML%2B9gpaCY2v%2FQ%2B1VRbfS9wWiXtJQ%2FnIjE5h0ttOQ&X-Amz-Signature=674e6e6effb42f6777b9cdf364c4e7a0560012fbf9808332a1e0700e79356d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

