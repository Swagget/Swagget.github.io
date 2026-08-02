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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAVIGC5G%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T012441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC8JPwZqMsybKN%2FAVD1Xps4Fyc2CeRJOLK3wWqp%2BQxf2wIgCpFh0kCj%2FbLLzMHjN339UZtCvdEAii653RUH%2Fn%2FspJYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4Wb63qWqE3V7AdCrcA0%2FgPijfz7k6haoKv10fZSv2sKKx6z4qONdyCCZ8jFtfB0bXzapfIkT8zceC4aB28xo%2BVmPB7herwS1aK5EJqf%2FKYMugr6%2Br5mUzLNE6EJP5PqCp65xG%2BEKCOWeaqBJjFkx2J1FLid5LjQxSY7WreBopxHddt2SCEOO%2FuICDmC5Xz3UzIpTmKbO6pmavqtDzTDPtwpHvWm3sRUwXJ0AM3aL7Y5A0ztojF4DcZvLml0NkfHpIIbv4aWpHqpqt88jzP2SGq0yP1cnYgCv1xQRIBKoj3kD294Wlxh8qHRwXBYYwjLQErzKU%2BinBO3grydU4MSfG3SQNcnXYKIUdzagcSZYoZD%2FkiVdWvhv2xyFurtltF2hHl0r1DDFmoo26CgTNRN%2B1eNCuIT%2BukiE4HtP6dBXC%2FhKLObsk7HdoaFh54TLaOEkBvF7W%2FxNtPvFxfdtwM5xyqTveWBfJhXx6tTWuLh3ZSna7x9XDZwX1L4N%2FVxWNwHbw1uSDTeBTcmsm5cz0mjbvSpbfYTuokRBDf%2FwaGTLQrJ%2BfGUXTLRlGYi%2FajKHzTn8LkW%2Bu0%2BByVcTN%2Bci1kT8FggB04aEHBP3WV5TXCtcafTzR6ybHkdBe%2Fn5CPGRusqSL5UwmJzJ3Sd5GMN3QudMGOqUBqJJXZ4qmHQ5mFVlaeB5uPr4sIq2H40UXXQXfs2eq7JvajOicQSbTZk1n1AH0uAfq8Hq5tYuxG%2Fz%2B0LxavrTEkkZ0TlfTehjcY1U8Hq4ihBbsxelF7qw1xpjJ8cMefb863XUVzpnqXUD%2FDVbNiAvzoMR11Sea%2FCIaEx7SZlop%2F%2FuCntTMm%2B3omqk5oqZJBsiyg7hFQ0Ncpn3jDG0NoIqvsol%2Fn8jW&X-Amz-Signature=befae0e796afd60ba5128d7a84901c2f0880444df6075ef848762d9334e63c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

