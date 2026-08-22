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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOTJRWA%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T033124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FCaMAiUVT1Su%2BG%2BHO%2BqzWkwRvUGcDzzgvvZOPffMn9AiAtKxTM0vjwF7iHZWopwAFT81kHw4YsIoTRvLta2wVRxiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8rXOLr2WwZ3Xp7VgKtwDosgUypJrySShgYlK0Q81FQK%2Bk5tnCISzFgXK1qiHT%2ByUMIrhSKpan6s1N2HbFXv45K%2Fa01wzfjbitlhIktorrIyuS1R7Q19dJjbASGtXD%2FSVQg%2BoOXcbAuWIHVUxQ3Swr76SLFjcCfFmjbE9%2BewPd1pRGCYffEORLJKbuYLMfEbMElt%2FARM5CJBkONTxumBMp25JSxbxbk3wiE0cKqU4luMK1qi2e9ZLKNWfPC6iuiJSM%2BDgWUYjTZWKkA61s0kQ7Ju8RlMvqPSBBKltP7V7fRsBZOw%2BUrGN%2FQNslc99XBdHPgQizvLxY22oJhlwaZb3Fx%2F9RIET7UU9KhQc5oFHHYVWYJgPkWEOXU9LtcuiH0tfD1f2AzAAsVb5fTGNAFhan5LF%2BEHokspibNKi6RnhFF39mI9FZIB6M80vVCU%2FDi42db5SAE0xGY%2BZqRbMLSVJ8pwgKvEC612XRYgmY6gP38qVJq5ofZlIiQEtwTbVdGM5S4Fqkx%2F6OCSxOMGSgUdePziTodSGv0POrJfdjh2OgT4tCdBxTKwgggj%2BGTWVSi8Bw48%2B9j3qQ4xi6uZSF4RYvAROy4wqWYRZf9XMq8t1bqHtZw%2FjM6BsrHcmEyIgCwkcHyWO9uMqm3BcZJ8w9IGk1AY6pgGaOgg85wjH5VC9EfBETsFJ7cI7C%2FIuHkNsvcohrrquxQRNwG%2FEAYXqjaVjNqb53lOxb1VxJoDbOw%2BKhUQJn13iyX9WUeW1JKwjnlMa3VcEexmW1EsN6ClthgtPm7yreIoRlbpHEiKHk9jDwcUFJiQKBummoNp6gpBTmrnCM0TBKf67yCQoY4s3heXKpVdfarHmp0L%2FUsiuyHVyC%2BXg2kbXpZekBtUF&X-Amz-Signature=b9839e055445dba5a8cb3910fa00999d09de1a0df42c74c17aa7ab64d594ac17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

