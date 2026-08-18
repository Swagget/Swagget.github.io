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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAOKL4A%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T111401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQhNprCV%2BJrgtiZpjQuSNO5TeBKK343RDN4%2FxPA7QGDAiBX69V6g0gHKx32NPvMcSWhgUl9S7%2BmHLEV9MEBRCCGmSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMLb7TPGrn9BfXgmn3KtwDio6YRihN3s6UZTM9PSE9nhocxuw8TU8W6ZUz0EZQZRYLBONuyUpF1s6NBht4YJrSQFfu%2BrUeftQw8OEAe5JmQgVDBx1KC%2B6%2FjEBqDNcUUL7wkwSaktsQ52PVxUwPr8bXrDoqzusjrqXzKAY2xYIwTKirG5rmUkale2j5b%2FQCn1h3f5zoA8GD%2BnJipYrPgerei0HldcWz8gknBDPemh1EMwsEXIavleQEmTbT2vyeaKOYt39hy4Xx1GUG5%2FYka%2Br9hhQSMA%2BNvmgLKF1LbDfErJIK8TffWhSjIqzR7zawyqJZpkMV73ruBjR0CzJMwi59OYryN%2F6aOZeT8H7uguQjTcjrEpZFp4fQwPW4SkuoTyE49%2BMDel06MKBfIuhMZV13lDEqlW1pqGrRbKW7Esm51E638gAx4SvZmU4PhX8IAZgHiqa%2BV6STclkrVHcMdqGW5Cx5ucYjjFhppRVneQw987%2FkGuoLuR4Sjt9pKdggFi6YDCuRhpNMrp5SgW4gotRNw%2BxyEUYoyUIEPexWWVRXgipnW6dX6kUbUJ0rqMcH1NQkYbJ9qgG484pD72EpYnZcRBqhntnoOJrJFNw8yERtNKicZZKWBywSzuUXevlrKnsfwwkcz6IgnOj4mgEwwr2Q1AY6pgHv2PcsM%2FhvjepKAFrYF2vhI4gh9rOOiZ1a5lSoUYMXZ0xYfMcRXKRVF9im9RiCjcWQr3b9%2FlbEssWcdaGBAAlwlor6akAIybu7XUuJitdZRm%2BEi7nQlImH9rNkIMzmX7V5aRBHxX2Ktnpc9OHqub0%2FaZArwSsZTASL0h0bBQwKoJtyPkJMTpHgN8lV28cbeZRI4JK1EB7JCTyLkMQiLghihxfCONKj&X-Amz-Signature=f8e90137b0bbc6f0554666be7a14f11a60944361b8d731c17e139b925b04977a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

