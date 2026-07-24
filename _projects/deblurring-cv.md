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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2DSIHP%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T012147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCLhMVa0by6i88PscvjpT9PE6cttqXo21HaeO6QjScU6AIgD0G8cLzoaHefRkImrjaUGfJg4cjIE3tvPPVR1cyhGC0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGl8Z4ZT4W%2BD54DfpCrcA%2BAYvXHiMMWmFEJUpZl4llpRYf%2FqpP3wAATRDF1tiy5ZvxeCs%2BhgA7JCd9TTK1%2BP%2B0iZ%2FSCLvJ4F5%2BybxTB%2FZnh%2BfN9Z9Iv%2FieSqkY6O6nlXabe%2FbEuoDZfAIwwXSEU3TRkxB6%2BViNgNNyGynfNK9JU6VLq%2BDRYxtIIEpGHhwBArWmk1d1PZ720jAC8UuBfsXD0Awx42QPDOOtHsG7%2BXQ6wvZVUpgYtxZ%2BiAf%2B1zOL5Hq720jE3%2FIzgqpKQTjh6qzeK4%2BMjhEZ1DtDtzJjyVAnlAvlUUgiXoJ7hZ3KKT2G9X6qyFJVv2sWoCrW%2BcbQJuaBDHIFbiYyO4p56EZpZPSbgsvp9MR1BZIi2R00L3iVtASx9Cfj2XwY0%2FI0YyNq1xPV2Le1RI3YGs9jd3CAi6GwMfQLu5C3F3MtLHRDwyqQcMNI22C7e%2FO76k93vZ3hjtYLlqM%2Fqd68RfypnFZicS3HUfCWIdk6J%2FkQDhZzyWKHJlEbkXg0IQOnXuqkISQTISabqb1NC4bnKwJy3UBZXKcXO3JtzqzQdRFPYpg%2BByd3gmhn0Ol7V%2FvEUdx2WhLIVUSZF5QwzlGaYFMD6mmZLhzG1GRX0EInlRiz3QpThaXXp1bwUZvK872J4C7bpjMJXpitMGOqUB41mWnnKCdrHCy5MJrlTeQA4p9ogEl1QBWuNZdASjLeqBXlTvi9unpYY%2Bm8T246TOB1whV32rUcbbYAhYaMtw84E1XKC%2F%2FdKm1LS8gnKrPYpo6Ddc5XM9mIL4DNYvqnZrAKt2i45ogWBXMV4IvhL1%2BXFb0qCc0QGSjViQZzYaDHRGA0lNQVvmIGBKO0qycZCXd0DRsjnH7mE9c1LtKtJWaNndSOzZ&X-Amz-Signature=6770eee4a27d92446a7f5d2e79d4f5d4e4a41e3c4b3375558fb4b23d7ae4dd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

