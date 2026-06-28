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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BIVGLT7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T204902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHy9KElpdKwoQh3B%2BmkQps86oMMhx78veJxo8%2BBDf3owIhANS8tXErmF%2F8zFLMyjeqITSu2vrMF5rQNBijpP0g0DYAKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu0jI%2BFncvTHeWo8cq3ANtjSnwXi8ExNkVZ6ZcO7DhewII5iyuZDEDnWUnm9SEtZuGr8SmvQbUZWBiELr6rpYfHAoNl8oFd9nQaFbrXPuUw7RbNRt9IvGyjBjhCGDCbkW%2BJyvUNU8kBinr9h6An6n4G2k879m0p9hYT1Va5vhIBk1FsLayRtihrYdaWjYejfOCfTpG1bGcHxPE4alq%2BFYLBKIFemU3Qyem6U6zGU%2BsfLpftBZfoGlyNqu7k9a%2BwGK2mXHUaD2UWB6O1N9dgkJUfirlMqVJblRydYL1wWk04ciVUrZdswKEAUUPp%2Buguya63zmDpso7YU2BUzP08JOON4sq8pd7qRigx03Z%2Fyx7eRK6Q6UCMFCuvScmo%2BMW7W8jHtPTfdPCFOG4PUWkunl6AHq8hBAWtqbTlLzJSW0kmXkJRgWWaN%2FXEkWbFMOGo50tQrj0%2FyR4a3r%2BoN6fyt7A70qxyeYhhsjMGJCbf2uM71%2BXgHisJoP6akxSFKhmg%2BFShaxwkc9q%2BUJczoTFDhGfnW6UPb0nWix0u5%2BeY1tBj4vhgCnDKAcdlMw38mDNdDoDEhc9Dd4S%2FWHueuKzOK%2F0w0f6cm6pJQaud%2Bp9WqSCSlkVarX%2FC%2BAC%2B1tmr9UGWk8qSfm0mcq8%2BqD7ljDQnIXSBjqkAZQUog%2FwUTiSYcINeNYpHodUc2yQHyCAFbRC89oOkKjcWscemHw2%2FwlVV64%2BcgqPWYOB1936mZy06yMlPHeB%2F%2FtcPYQw6TyiVujU9yBlNgIxPpZVBbe9hW492%2FgXmMNAXzeaz5Qs%2BG93PGtOBdANu%2BWMehfQXCF6vQY6r6GhvZgGvdlQc8OA2GAtCW1x2aCOOpzdXiu9EIMMVYZ35AzCPTZO82Fo&X-Amz-Signature=5d65ca9a788e773c844cef584dc99d8e579807fcbc935e7a02b62d72ec72f4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

