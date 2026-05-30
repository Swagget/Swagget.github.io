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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQV2XV2%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T142607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCOqCsC0aMEOX8gSd2QH6syHsJzN%2F27Dac1MD9xGezjMwIhAM9c9EAEU2YSKDtJD2%2BATLN8bibGZar78a1jMCvUFjdPKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEuva71JW%2FPBA3jjIq3APZYka61ZByOE0pB%2FTiNj7uMcAWbmzrclmRr0W%2F0iji%2BRDakdVWSzkjsIt8oxsg9rAVmXklkk2HUfQFCCllCnmCacmthj2%2B5i5kIRAgzNfY8jSeaKSowPBKfqfool3zUg6MTA5fVhREjOzpgjf9FlG4rygba6Jo3SaaUNBk6aR8BBbGy7B%2Bj%2Bf3riGr38wRWadl7W6CWJ6iBBZW0vLmALGbU%2BAyOYACrzIbsrYc1M6N%2FPAovbWwNff7tqN7yOPB4Wv84rwygvMwGTiyQhkgKrgg0gTzZwE03zzbtooGtoGbwrXeSbtWNbkrXsuEB92bIeBzbDDv6h1T2keFDiEQYje2JgZIsvLNVlKMM5QIglN%2FaCHftIVc8Q4ECZ85W%2FfBHImlNidoUIUbNe9zzre%2BcF%2FXj7mOze%2BHfFJ2%2BtEDB2L9qK7bCLADDxZLNqfv2ZfSXTHdjwfeZ1VM01IluEz8NgyNAKnNed1Eyna%2FKgGkJFjH8Tlmz0iFxOhxEklvY9XbRBT55Fm1LczG252I7VKaNdZ57cXcGrzXvYVUgIrUsQh69%2BfPxYdKKpWTH0DkXqmuxiHAKR3EfS3nBz93OS5sxVcYFIGecmoZVU9FhefbZfP99gVTVaJPkRIWObphITDd4uvQBjqkAY5o60oSsSIWuSq6dOJG8JanWXCvMKlB8obRMLbb1Iby4BZrF0IeqMFRhRDzjcEsKyqjNkLDHCGKXuIJl6vvNynkUne0yP5fg%2FxkItx6rorG5ktVFjfH7Z9xp%2FeLh6Lkig%2FuMGoCcrAwFs1ecBYtRu2bo9zSMEOVdZ5I39Rlp3NIJ041xANUL7PyeU7quR7ATN%2FYy9JlQMenVISC30oj9m2goCnZ&X-Amz-Signature=1c6881fa24df8e31f29b30e299cf7955bd0198e6dbfbd1342a46bb77c9e56c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

