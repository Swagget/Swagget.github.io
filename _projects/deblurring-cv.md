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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOUQ6QE3%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T210142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIB7SCWclOONFKhyFlcB4Mez1CBEBC%2FBtRqCCrUqghMQdAiAJ%2BraJaOTT4MKNtShUhLIH%2BS9Q6LjgP43TvxzfgJNncSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EFvw43gaohVcUTbKtwDmioK%2BqqyIc1yt%2BM6n57EpLWFZne7EZ2wWeBFPww3vPnarBspl8amYqg4%2FUoAI7XKVl2MyzSaNPeg1eKNVC12CSTiHh8DdG%2B3OutYKfVA%2BRs8JsN%2FJ5WuvTvTWQti07oeFwhi9UeiWBNebN3m9xAdRjMWOBkga2UqmvsFNkdGE94J31c37XoEKLOXoHkzfd8VfcTtYc1sSxj5LcTXpmuaZctXuCcKXF60uvwduw1iaWU%2BfKM5scz1HUnbrHBDAqmnA%2BvPh06Yvf6QAGzRIAJtVvsFVScm9lo%2FhJ7q11RF%2BdZXwDq%2FXlVxuo7vfwKydgnV6E0nHFJQtBLKDAx2ZZ8hzL7c0EvGi46podEw4kCoOzizWmmyooLhUottGi02aA%2FqpcNL5YfL5lde8Lg12yoOqYyJHKhr3pqplb2i%2FQe9xgKcjcyXPLLu5GZ6%2BbXCO6v%2Fu01yu7Taz%2FR7k4t94JA%2FWs0Bnfj2rOIG%2BI1NanAWQtjpCQneMDMSezH2%2BeNs6EcYyu66E%2F53BdxKtJSh%2BHYufF%2FrBlthPxjFsifovPzA%2BOPd7wSftuAVKQS%2B%2FeFEwC%2FgWjuu99bJqDxn4rjadPhdnnsSr5hJrlw2uuaQbG92JWr5JOKGkiTtWedZaGEw8eng0QY6pgERv44H%2F4MHFlvVXKa5DWn%2FfjHK1Jt2zhFh9tRbNRemBTJDbuOPafbdL58EwvshQmvgi7bnjI6qH%2BJf6jHrd9ciiD%2F9pcPb4HdsKpd%2FOhAnRP0FPel6J3I5zUK4fEzo77tfO8RHEf6uql878MIn%2FSngF%2BQWevMOR%2BMFWX3CB3neHX%2BbXWyQ7u%2FokhxVR2oc%2BjAqk6NDGiEDFLfi8%2BN0aRhwT2TUnuee&X-Amz-Signature=c7cbd690909cbc8626897c692179ec79c30074e9dbc70d1984055eea0d4d321c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

