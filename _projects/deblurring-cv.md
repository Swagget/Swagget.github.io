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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56DAJGX%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T203824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlc%2B2o0QFxwfZhyJ6iJ8EAGYgbbtnSb0uuiCskdIJXoAIhALK8WLQEpyCRFG8pSupfr9rZAfcXPMtYityhCn%2BxJ2mbKv8DCH4QABoMNjM3NDIzMTgzODA1IgxvGbFh8IPhwtxXtk0q3ANBtZnh2Q%2F7zDFadUUb12Z2i7E6KQbae5JGupoeKx7I95to87hVDajKyh1lZGUAFO62TjT289bMrktKqFGvd4cHjMp4S9mXzx7MnbNffBQaWjYT35izqI1MDsp2aR3o%2FM766m6AmjBGnWPHewFY5gzCJYU3Y5omOKj7F1%2FM5pHl44kHyY92SKsYdY%2FlJcbpRFf5gjyJNggT7EtZn1eA71roomqVlvkinYMiAtfX7EomSKQaOlW45J4M8oWg83ZTSlY6MpMm4LmT68pmUcKL1KYzLBkMi3l57cZfCT9x7jRg3faH%2BqblvkIKWmSa1%2F34P1GJE3PLeCiozLo1XdpdwN9JW%2BK8TjhETnlzNp0vsJTzJO5ge2qCdeqoFuwaCvrS3XiiPN7uYH5m%2FTWwK7khFNy%2BjqPY205Hx6aOEFR2YrZPxh4pLmqabjdfoSzaVqvE86vk94OBVt%2BMBS%2By6IUPN%2Br24bsamEzTxWEZL9zI8puofGOVuznvWtw%2FRexBHkPek%2FKBg%2FM71Wo7CLO%2FwKzLPZ3RjFvyniHLc2CwICyiT2Xfk4crllrmAdo419TWBGQjwA9Txc2D0wgY1WFzuqtGKmvbgxgGmnA7Xk%2FNMMELpht52t%2F5tSxOI53iz7Q7%2BjDEx%2B%2FSBjqkAfxCfvfa28Q%2B%2FYPoMO%2BWARZCtSgm18GDHRKKLQf84LSZ1Rf2NpTGc2KGQbrze0%2BV7R6BdjghIweDmkefZi5SV1Aae1vqtMrmukdB6igjZ85vgC%2F83efE3Dz6R0iL1o0%2FUxJGnCurCnCTzxfNdaDQBI4zLmZyJIT5F4sdE7Ot0fE5RYFiXnAf%2FqDKYm%2FDntY1b%2F9Ap8OcT4oMaqF0D%2BYX4RT1ikjR&X-Amz-Signature=3a98f97b0350e100aa63eb924f1a5414e822a8850a702e24324aaa24adc09b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

