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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NBDGNSF%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T175155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICm0mCbtEiM2fj%2BcN37lthkuMyZeyvbvSmOOFaS0d0x%2BAiEA9f2A5HP%2B0xU7mehpAesFfE%2FdPfNzMxJyLreW8UOAh4IqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWIfpwh7kN1GDixDircA%2F2BaARSzcS3OxoHLzIa2Hw5kJVe01vW0w2ECOPphkC0aUQ5uwPKHYMGZ5ZmQJYITssd5YzBUv3kDmP%2FxwniNoojgmUYbna0v6DKQ5KZHH6mvayPmb9iFATYOlqq64Yv3UryicjbZZnQm9kpHDqiIPS%2FmOixWsPWbUZLd1UwcYeg8gXbKVg6Z0B6mU7I87%2B5F8KMENkim%2Ft%2B4r0H2f%2BiyeKHWnFTMuWv6ehRUTrlq0GY3SrY9oZEDWznQR%2B6HlaIhIseFwiGeinu0UdJccNVFwm3MTxy9FNRPifCn4TbbdX5LTSsR7o6cXvFJLFm%2FSFGcdxJI5ndLYqPF%2Bzt7MyhSASoKJuOd1bGW2zcftqvSjjbwNxtZ55Q7D6D%2Fj5qkd6ETeopjOl5RPEPPs48BCj4fuksOBnojPTBMLt1VoxxlW%2Fr2tFAPjQofYUDQFpZKQ7FReMiw%2FqTsAm2jH9txRLTyr15%2BrkIgcS5wyhvLhitQ1AHuhhCMiQy3EsQz8R602ZZmvFno5xIXM11Y8gjjrBLweXpCXXG%2FaJIGSsGVDM4bSpU4QKmSdog%2BaFYUzuE%2BjpqxCL%2ByvwwGJEvDOBhAcH6pMZ9H3%2F9yaabrlscZevbF8r%2FtuDEhEJo0g1vPUUBMKHB0NEGOqUBx5JDWzPlNp7rxVnwfqK8Lc8L2l%2Fr1q6uKTSk6UQ%2BopcDbDe89qPJlfW%2Foduv1y4OOLc5mPraS%2B3W3UyzysG3Ul5mTNKYxyOJlE0h51ZaEn%2BTuQfw%2FfetG7p7AEDaL0fDvYki2p6KQVajQkdWDtsqhPJixkkdwiWfXfX%2By4G5b5batzDYc0VV02DNUEya8QgdTumtYrAVUEjzZl4r4vKcU5skPjip&X-Amz-Signature=85c4490e6b91110e1854af59116fac91fde372bc1131db83356267ae40d82c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

