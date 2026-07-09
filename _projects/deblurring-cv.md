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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJICBQBG%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T134039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGy7qD8HKM5AkBoodWh8DkBFpAOMf2wlYR6unO7YaKVTAiARteEUiB2SNmBwh7fzj11n%2BbLKPlKXCqFtYyYtIwqpryqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuRWKt63pUOnftbmMKtwD1Akfk0QFOjIOgylXEJwg2HY%2BSQZQWmCINpZp5DSEFxe%2FxfiGskH6XEGAFY6Qk7hj%2FF2d9Fju3llE3p4y2vCK7IsKhh2X77FP%2BcbYw9Go0PMfDKkZhn0AHKLqRny6t5t2f9w31DP1lEgo%2Bbu3pY41TpA%2FvWM%2BbO5R7nr%2B07iaSFkutA5y0JYJvSODXbn%2Byu6IdA%2BDppCxBxRQ%2BgTWIV9RF2E%2FW6200mHaS5qotkB91Tpgkjt%2FDNS10%2B%2BqKa%2Bzw1w7EtsFjb7SFJFhvcpegn905hrna0CXgIvNZHhrg7X3vK5VEFrw37U%2Fewx1CENHrSvRPyDx%2Fq4jTL9fKumxw9tFx%2BlUaAUwdhcyLCzNvWXaNUbmUYpxaqnxdIPCCybcZVwmQ8xxK1A8gr5P6N1mps4l4OccGc7DZ4bYEobfuJRYACbnJHDnakcDF1TEODiUsdyrfgGw0mwFbr%2Btmb2J6OqhOs6wwggJo97DftI7QF7%2B6u%2B2%2FCFIGiWQf1pCdjAlxkK2yS2ePl9OwtvHhJfwEUTo0RsCiu6Oc8nwSqyHZQw88biBC5qArzVF%2FWMgQJXEWddNaH%2BAzHyrd%2FYkNwuId0CbDCMK%2B4XAyyIXiUjEzTkxjANbJTyQMaMjmJz0PsAwmrq%2B0gY6pgFCv8NGO%2F%2FVYj04Lald22%2FXdbgpWIoPTleAUIVGxgDCOv9HVe4o0drz7ISSXjKg0vOjH4eVcg2GVffGU40Af1MyRsnErm7k38zbjzjSSuYJXirCTAik5GUcoRT%2FdkoqabGuo7xpNSzf4Jp8Ho1DVUuTym9aukvE33wfav5fysumQ60lq8VSpOvyUogMINZr%2FgmUHPeHZrLbZdrhcSMOv7S4rDAvZeaT&X-Amz-Signature=1a8e5af41b56fad2e99ce7f4231b308ea0c638e16e01bc6ddea8b165c30b2c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

