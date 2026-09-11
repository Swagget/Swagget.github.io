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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUWETB%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T115328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbkzopNjffmKHhcQh%2BkpWvLz5cbz3zU8xynyUW773RxAiEAl%2BEsjLeNJwRUy4%2FtQfEHkcb2uzPOqjLGuC1E8nY1t90qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5oKVV30vF6hliEESrcA%2Br3tZQa3qqQZqxyssiuNvyLM%2FMFSOc7QB4qULTvIQEdctRL5uJ8jfgXfKlwDNITTZh8d4dDz4tHfXiZjPDMXZ5ZfsCw8V4p9YA39G5vQP8kmtLC7lWbBJFK9%2FDTgJBtmp05caALKTbZNRj1uQhVGhQfPsmzWmuZYe%2BMRfHRjcdVTuD7TbrCm0Ji0B%2FfkoOTplYCQm0RpFtebyQjHGrW1S79thMSNwdSBJMVN13P9tQ%2Fx6o0Ea8ZOeJ0pv6Y8HmfAONJDFQNPwDRGPhfpd%2F8eV58v8otMlT3Z4bNpp9WleVLDWFUXX7g2hZu%2FJwJg4QUoiuk4B5GtLYL4h7XHPfzAlVGwnj3F8NGU4PaHcol8wXLdl2ErFD%2B0rN%2F6pBdRu6%2BaxnP9APnV3eHXfVAYb8rl4%2Fz%2BocQLt4B%2BRPsjZIn6OJoqqeUppijNek5j9MrQeanDSDbSkXvfsE%2BXS8jWLDqJel%2BXJm8i8aZZH0CGwx0A%2B5GTuqp6t%2FCZLD%2FKmXEeTvjkhitIn9AkjpkaV1PEXog%2Bixf8wmxIhE%2BrOMngGyy%2FxbwmQj6UZwUXJUR5yF9%2Bp3XUuWArMY7WzxvW37WcOyY4s3yU5Wg9iJBvq%2B396CNW51Ixk7Hn3caVG3naIZ1MN62j9UGOqUBN8GPtPw4ZeK%2FGs6Rtaja8JWR7Vmq%2F%2B4s3L2M%2B4IrgnTm65p8DQpLe75nZyV5Fb5vywBmT9UpWmD4gmpGz%2Bp1vDXqO4icww2RZCGlB%2FQq%2BGgX5eojJlbQJmRRDqoJmvfIDcLc6YYp%2B3wmgIcpJLPv%2BHLmNrgUnkG5H%2Bys08%2FynoTUmVYwDGTqAwAwIWZqdoOXo3qqyUu2rTlfvvdyCxKhpc%2BMGlVF&X-Amz-Signature=eaeb8a44ec9e175455639b2e416aad2102b7726948ac653b7992ed0ae5fa9f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

