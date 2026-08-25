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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOV6YV%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T133831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHUdPuopvc3dPAJE3ru2vD7n2BSlq9tT7xlFbSQtRE3vAiB19i3TA23Tyd4mQ1x7%2Fls4X%2FiVlPwtcZneSoK7MB86Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMExTl15akZUZbwPCNKtwDvkyM0IrRSyGIG3h%2FrDQtQlFqGwKrHpwxIkoT9uWIBjQeWVSS8GrIeb5sZTT%2BV%2BpZTxcrOuzhItbAmgcE81Tz3uLqHqrvcmijb4eHAB0IKk6jFDkEqkO9W6C1fgQnTsTd8OJHVuWy7ceVSJjpygytWHU8hw%2BZf%2F%2BbctnDnwhKKC0HFwJznd5SORYBuhh8u%2FMYScm%2B3wbzeadf71QqJpRUOFOX6wbbOvaAtLx5a6hPIqoeOTq%2Bfzk2Bb2Dc2alcUSrxa80lDeNPRh%2BcSkfGfs%2Fknb1noHrsz3%2BrTGhwpjdfWiLrtvjGpej%2FGhz6TBRuhN2dSgaYl8Dd8AHH8lxSKAHCKgAEDVupmulVByg4chDRGq9wrnemitPWvD%2F4pBpOxo8cpSSVaZoLSr75rvW6tXHpfT2hkKctDof%2Fi0bVaXdRKGS3lbnxoNg8dVPgLtlp21WmDHl4oHefVStV8c3XBtaq6m%2F1rG6Lxl9X%2FpW%2BMptiUR5MUhy610x5fzfOpA6eobpUBYg2RMromq3wjx6XpuAJbKOc%2BFUpaPFd0rJ2uZc%2BUTcWQhLfRWMQeUx%2FhG%2BDvuqEfheZ99bWAxL4GSARj4dAXFZ9irVv0XNkPeUwoNjJd70PxWWbYkSzO7WUXIwl4621AY6pgEoYDVAA0ok7OLXB7yf5RIXUApA4%2F8Kj4mEig2o0o9KoRlfvrxqgSa314tmdTj5elgXEhyddetIequ5v9grOJQwj8hJrIy%2Bc9z4gbtBOW7mJqt1%2ByzI0%2BCY%2Ba9AEXUvXkdqqZ1OIna%2BA1%2BiUWsGva2FjM1T018SW58e%2FwGtN7L1TzXMQgRlTXxEP4IeHa6WFER91u2BJsV6TnrpsANlibTSf1Di7j6K&X-Amz-Signature=4a0a4818973f05e2b96a5195958b41da5c751936689a3fa574a78cebdcf85ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

