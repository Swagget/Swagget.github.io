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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBOQAXPH%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T185307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDp11kji6cSyE66jA81iiCePpsy0KbM9OkMIlELWIH6%2BgIhAP80X8zu34MHflTTyRYY8ak6zudR8jNqyFzHSsdNEd2uKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzch7mugg7nn3HduKwq3AM3WPumQNeyqK97ONtAx9H3ocApMR%2F7ogUh9paN8BppBecQMpZhS%2FLoO6RNxLNx4tpWWU5GaeL7mlWEqA0eGSrtta1HpxhYYsOhVb9edKvBmKPf60oEJjN9bCOXJcye6QxwEoXozdUjCIuNqNt%2FInHEkBbgE5gjVrwNtigrJWC7T6ZoGXQCs2RRN7W6blfpUerEpAO%2BKi5wSQugbZlFj7NTGDo1T2Q0y1dUm8WRfz3TDvlKlESTttQknNw%2BqUOasPYdJMxIRYhpN%2BQYX8ZZg0xwUBjUZ5Pia5YCK9qkQgwEeitG01gHwZXq3j4luj%2BBY3XibZhrknM6N3a1nv7Hk5DLd3I9uSLngIz6cUkj8sJADU3prBPnGDcxGmIjOgHCVBPKfQ5ZEyxL%2B6FzP9iOE0eVO6Pj1ibzGbFWlrWktUM%2Frp%2FcQKIiIk1NTJHratT443o4sshdWbryOXfCY9B0OcDRPTdn3BV615NCTpu5Xnl5aFO3%2Bojvj75lqrvhEVP2ubMZrpKsNTUimAiO7UoXDbOUYZFZu7jDw3fqHGDFR8P9UETiV4mBafJtzqlXeI09e2WWd3veTjZhnuG3H%2FAvnfhDljOkqdSiWjGvp9EfNak%2BcrOmZvaVjqzAnem9OTCIzpTSBjqkASxkJgLubWxsJAY3A8PmGCQ4SPeKdFJGnAaXEPr1Pr5GNAnzrMrC0aLbvwpPgJLl130%2FtjAqinNr9uYmTGAXcWaCHBdx5U1j8au0Jo8TcW4N4tXfPfymSsHCJm4NUnsUA6PTQV4QCWpo3rIUUKhEhiarjOmBhPBUb%2BHphDWZ2kUabEfVErFvgFPpWUFUH1nxwKpLgVhuQ158c1R0I2xtovBU%2FpAA&X-Amz-Signature=131ee760937670f1b15f53ec33661bd203d5262ca3cc2bab0ff6aa216ba926bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

