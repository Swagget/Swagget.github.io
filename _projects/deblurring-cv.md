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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFVVPAT3%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T235830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXYRfd9%2F0YplpkFS0GJ9OAdsU0jZ%2BankDMxEAWNwIhHAiAgAcGYDZEhBAmBHAE9jYbNluU%2Fql%2B7GAdafTrjFaN4cCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMya037Q9mD2XzdLmUKtwDt6sj2RDPeBjS7hluO5JJNe9Wr7oH0SC9vHfGJwNTi2QLHt9RgpTgw6HSfNodtqTbhKrkIHXA64KB1QsPxO9QWpaeE2E5Qmo7Mg8T2eK2RR0MTFbw4z85lXSXkPXsHSCLprm3xyIY4v%2BCvLzswNWSSJKU2bIRVmuqIM%2BBX82%2FfAFYv5eEbVMvVQQ5rEyTkjTGHoK5dQCcajwl9iFkzkUT0RomHLNG5iq2OtplKyxqSl0BE7tqqCKYs%2FnLIxZWAT67ZYdeRzd5U1JJt0Ced6W5D8CK%2FJIcg6rev7t6HEoIyhGCIQkYjn4SX1SMH0WEv5583xO1eQX%2FYud7SIGKp1GLrjFo%2Bl%2FgBFi9Bb4exXrvDpDad9CZ%2BVG0qRgETdYz9xBRZm2K%2F43TG76NtH%2F%2BXOsXklJXm8bGk15WjmOxJS0T3LWZbL33WlB9O5gpbHCDJK3Z%2FiD%2BmDH5wSuQPl8vJZQ2yoewEM3WCV3dFumDkkI66aR5JhEyOh2MLWglYkdxG3bB%2FR31O%2BicY4TBMfIQ%2BHq6sW1ZGsunV7iQDLYrbCs%2FJJZP7HOocsw8ed09nQ9HqsHZLiWsN5rdFwINs2CmVNOxAxGpOyrYojAWQYBGrOaUt4AZU%2F2x7vwXSazsERUw7Oq80QY6pgGuxYnK2yqgUmrW77fRDxb3m6v1k1oETjeKJhIvWorIBmQPMjnX69w6f%2F%2BD3mCjuwD0ppCojSREnJy9lCFhSQlF0T1x6i3tg8lLKpg7FOF4Jpk39T1jq2St9JVLQi5lQWWbGw4urqst%2BMJhtQAoViV2wUASiwvuo%2Bg%2B6jol1L64TQaEaUDHaL9vBF1dYyPErUc1eaoTFZMVUo%2BgkNIgaodTmHHgdKi6&X-Amz-Signature=e0b36993202e37b1a09adb7053193d6a37584e017b0238109c98a8095c92ecd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

