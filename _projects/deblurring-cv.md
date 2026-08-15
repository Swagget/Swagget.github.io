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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIP5XVW%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T191154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICV9Ve55TJ8okcNlVa%2BDCvNOcZFojgxQik6Dk2zd4vthAiBZ13rH%2BYnD5n7oIjZzX3sWBs0i4GZiBOFrUY5FU00a5Cr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMgNO%2B7M53wg5YrRUpKtwDvgR75kzuRV9iUD4CrmcDJ5k%2BwRwUkJgl6xQObATD%2F8AnWwbYSY%2FpHHBysNbJBH%2Fhgmi6ilvQqqP%2BZ6qMmaTsgZwnbI50DMlT6MtWsiGEwxxXdkeETEqA5DJqrDqidvi%2BiO1gPRsqyGApGgKGp9EcBL5yzbPq%2F%2FqOdEY9D%2BQsR53P8eSKizh3hP4m1cUEKaRSZuPyyysq7z5wjl%2BuunwKW6Bf4qRi45PrYIx0vJPoIE8U8Gk%2BE0uQ%2BS%2Frnq0r5PO4Q9RDc3ipl9JEzhY4DGYM6sasJKMlicc2L9zRU%2Fseq5dtJAj0FY4xi0mO2Hd9vTA0pQSW%2BOUEwv2Mk2XhzczgTKNiUSqD26d6xJQ72W0OWgd6lqF925ymSz4e1u%2Fr6LXwXCgz2RFuxbESamqm8eoh21yztU5wSz2ruYgs6KUroyLBvOfmtvIPsxa%2BKXWS6PCS2Q1XDjdOug2GPSIcCdU6qm1kqSrHeayMdvC%2BRYK9BpLmpB7e14%2Fa74618qVnxS6DazznxAR6ecrHTLLt5YOvNYBlvi9bn4TEBkKr181zv8Atnp3eeFDrS4IT4Ee8RKh%2BdE3S%2BFOAirqMuW1Qe%2Ffp0AikUhQOZRoa0Kb7DKJsW8InzfrFhh%2BmhsfvQ1gwq8WC1AY6pgHvXG62Ku68QO%2B63sKEUUad34RGcGsCUfyMS6Mujbic87Ki0KcJn6WD78ne%2Ba5kEUQjUWgBFCdIhcssPEzAAIBqkQVr60NFwXsfQ9KLIWudnJ7I58kkNSnj6WQPAvFpZ2JIyxy33Xm6PesNP7ECimaL02dbJk1tJKAmIJ7geshj5h%2B9hyIqrettdUc4%2FEeTSmuVqhODebetOWGUl1rZJKYrakzXnyTj&X-Amz-Signature=c112d18ed61ef2666f276a843093986668bbfac58c17328af81f7b330bf90cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

