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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGWUTG2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T122850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCIQsKPWwxVTEyRHOdgJUCt%2BP0VhAYqsMgu9ZEmWJKIiQIgPcvPHpCsedClJvyvfewvYSbV%2BU6lZVyYLTpdPWJkIe4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwMEAYhC5CTrx5RvircA8PqqeXv6IKcUK6j58es4IlmpY4KPZqo5ZNPRT9m6HGHX3KsDCUXhW8MVmShzvJQr%2BqDGTESDTXbDPiAe7Rutk3iawTX7TRHMnBPh%2FHzOQFPVEnJvS7j8QZn8xSF8mqaFSffcLudFsa5davbxFo0V0%2BIqkMkLs1SVs6hLLMyNavRzTt8p4Eys7oS0jZT%2BdXI%2Fvt%2ByB5M7qOE6raOkVM6RMwHBp0gPBranN6OXLZRHFwIEmEiXvmE1KgWoQfP8DD6GLRpxxX2rEvhcnumGHpFM7rj8ug3zScE5CTYS0Iu8c9onc%2FTAJ4m1TQeFLu5KZL9iWCcNIRJ7wIdw75Bamx2lHnARK%2BWXb9l5DA%2Fz5f6PJANwgQlMA%2BsnhuQJ%2F7AgAmpNOvOhDBeus5FR1sukdTCgkpTVak%2FiPHg78stXQr6svw%2BM5uq%2BDWJLT6cvt2WjS2OdyNnd%2FCbtpEZAgHM6Ev4%2FXjhw9Evju9PDq7vLSJcgur9w3nSUe%2FnEWrOYD4hBUTbFQ%2B3g1loFXmNB9WO3P6yElg9sFOgO2T3MUkXUc4IplQEUeTvZcYGgq7gWAOTrKXqNIQPyKH9xbYgfLmpRVhxXiyonTtNXVFBP13%2FIcS%2FSSa6lRbmPYEu1yr7PnYmMNnvn9EGOqUBjOyYf7NJ%2FSRz4bMUwUFO%2Fe4UWPvGzdrAgt3wsOsooPGIQMhyfQDE830BrCwANGzDWKBjziY6VHrYCOscpP5N65yYt85keU7byT1WsS5l%2FQdMXiaFYar7aEOqbdcO9rjMN1Sja7GIsgY2LBhYdNppQ%2BZkSpJ2kfZh1URznvaU6yoTxLc7Aqie04TvPwCoBQfZFlz6%2FZLOQbcvWw5ENFrucn9%2FEBym&X-Amz-Signature=5d9ae3f5f2f0e49761ec665ec7bbf86c26d7a56d8ef6aeb46bdfc40d47705a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

