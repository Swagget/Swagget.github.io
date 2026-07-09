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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQQY2OG%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T161937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3GyUcQ1FD8g8Et26TatXnqKEZiGxlDHnpkEbOR1eIwIhAJXNtvi4hBw7uTTL9NORlfusrhnJ4aSPSF2TW8Q3tXzjKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxktyWa3JoEbWnF88Yq3ANZjWsGyG%2BNhTyzuNqU4bLQnSE7tYcLSsTyJqLQhzgMAiuIwWzKOGCeisqNV1DzcA%2Bo1OoZscC8qhPjuQNyHlNigZNNTd4nmg8d5PXZg28vY3Py6RxNjImkji9a9SyFds7n8Is%2BY8qGib8K4cgSnUnpCc83T6Wdm8a1g4tOlt8f6Rl%2FnNeIzHk5YjzBXiuh%2BfeQ3WYc1VPYjsCoewzv61VknBsUKZpeoRej1VsZCXXGwuJj%2F3fks0Mxl97hM%2B%2Frdh%2FZJ%2FS9S43h3oAGXSa%2BpxG8ZsB8peFLiKTHcRzvRTAFVj%2FQAKBWt2BPa%2FAFeCwST77MZ%2FN1ZDloS5GrK4RSn8QYJ0Ldo7hNI%2BRTbztE59U%2FGZod6mcZOYQw4oNnZEoz7OwUOCWIhpN0dNi9r2N0GZ%2B1UjrjaOBQsMj4VZuWhpWfHr2pHXKsNIUMNnse86F24gFOZ5KaKIDq4Okv64RVLzcwUgK6stO6vYE3BTKgeA4nKQnd4yTtiupoSt5Dfdgt2iax0RHAttCx488RdJuAEKdLe2IB7aHBH8Ofk8TEDDBtSCwG2gQLZKlS8V%2BBEo%2BVnVbf4R%2FCq%2BFiBmu2KVYmoKDsTsmEUWBbXw%2FakDoJoP8YNLA8hXgaSIVnJMmGtDC2%2F77SBjqkAa5bWmWxqMxgWQp45fcpOLwPAupA54dnIBmwVIAvCg7frkHIJdu1lrt4lNXb%2F8rFJaRX6b43%2BRcIEnzcrrFQfgI83tWHIU0LkzeX%2FsP9F6M9M5rr82IqI3mhd5ai0%2FVRYgHa53stqN6EJsXALTi7nNkcPIg1BiwFBwx2rT%2BMJKLyU3uE43ixuAqc4oVvlEU30W9GUnCY2Xndd1SaqxJ34Aqypfz%2F&X-Amz-Signature=bd5c352332d6ebdf6a2c881e98a6eb6d8ef503b0c29ae8c144b3cac9713ba658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

