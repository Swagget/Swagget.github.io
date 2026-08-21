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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6GZQ5KK%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T003204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoZfyMnE%2FrGUdRxFeYgarGj1vkT2RvtuyOUknLLoeYyAiBtgJ0qZDy85FISuIXcHJ%2FJ%2BHGFJjjn9AF6fX90aRfC5yqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BZzoajIEvx4x3RllKtwDhe8cBh0OujssZKQUZyoYyWhi%2FtVrSXpGnWgF2KNx7D%2BrVGdpIsD1uklit8uQjEkocD0fh8LBxX7VL807V88%2BWdA3XZQBH9fOp%2FOoXlcW3iK3W1S9WEbhizxoDltFR8uqmSKOjo6crBugYVeA%2FrPnGHO9xNks%2F2ifbtHYDK2%2F5VsVeE16YzWiFl7KY3kcUtvC1Ao3yP4cBmQtY2%2BnWzS09UXvH3IcazXufJnmZQcbMcmMUidg6xXFd13fo1wgCTwZVO1x%2FObFfDlLn%2B4lbYaekF7OQ%2FgHJNgbgUh3SxiRWK8ZuxnvVb2KM86tJBKLbfiFjlgrwdhW306OwtW%2FIshafTATuFRIEEFCSPDccwPw%2BOkJidCyZuQS32lR5sqJDdH0hEw6khWna5rWdqtRGjiyPSe4FAopCRx8HxbD2FsPrqEDkEqWK%2Bn6wB0BO1D1yW8lAIIq%2F%2BFHyJvDrgXeKYfhkLZs%2B9rReoyJKQfZxLjlPA244FS3LAgYGtW%2Bl42JBGYkwt3CC5QRrNV6kyrHVk2inLr4%2BQgyExZ5RTxiNl1dTveBKn5DS9aDjUIJKTea%2B2%2BYwA4QqRKN4ECaluxyYFoPQ0djBPWneKDsqooEk5zJQQAThAwThqWDU5xRX1EwyK6e1AY6pgGq9yIWqXWBQ1ZEAVOVyAOy65MiPuNGZfEVhGEkgxHV2RAOxzDGWOVy3mUKihC8SeDmvYtbgicaZYHsBMNXBxfxvOq%2FpxP2wEsT8%2B1kUnJFEPw0rfMPq02R3COMvpvKqAdz6JPXtiqNhU0laE250WULFl9KTwhvfk%2Fa91Tqm4FDsOEbdDKW3wHmLvoZzmSfqi4XMmTZlQvqLJd6A1YyO35ZZ6v0TBmn&X-Amz-Signature=4be53bd967dc9a585345b42be50d8957169692004f3ec6726ecf42c4021def38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

