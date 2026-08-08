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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5CD5JUX%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T062908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhk9bosCuqyydT2PKtDLE0dEkQCy8s2BH68fVDIFQm5AiAUaYtYAZIv%2BPVAfnB1hEvArXHq92y0s4D9TmXUJtkWXir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMUxS%2F8c%2BK2EebN4vzKtwDojlN%2BcbELHJevDEJ1oXSINAC8f1En4CohUje6GGQrFP74DYDBwqu7TSFEljuuzTpTQQaadHXxcc%2B2g%2FUzHhSWswcv4P440tFuL5K3El9WQ4uf8djww56SKyOk5Rg%2Bq%2B5Scq4qcvNXi9ui0nOGh%2FVNQXTm8fB1x66hbKJ7bCf%2FHt36%2BS%2BdDCwbrV7aGwXXKCysrxkg%2FXStG%2BrHoOgIiwMbqbD6cp5QYu5GvmtB3A6Zn4aH1VnLzQUIriGI4nWJ2bcvhwXUc%2FihoWH1otK8hQ7gkyDgSiFuj9kmsk6VgZ1w7ZXK187parLIDp%2BAJaIfhsim0ApWVD1NlRLN%2FDr04MmqDMbSdcBnCFlRS7XM8UOOPIcSNMK%2BZ5OfiH2mmEoAUVkSI9O6btRo0VLqiT5sxPAadh%2FK8CDpPKhcxwBG5O5PYp0EwSCYI3OFcFoi1HcPlvbcdUvlMUeNl3Tk%2FjBdU7uc88clAops6xb9Ht0I7t8WG6Up0YyYu5b2wjO4LxyJUehUgDFze4iZJ47TijqJgpim6WO09QL1oyfMqeBy7jGAcPkitFxUJAMb6vMYJ1xcVaHk%2FHhVI5%2FUmQaBpk6IWEhMfvf7xbaItmFWamlDQCpfM9b1gHfMr9LvCRi4yww7%2B7a0wY6pgEyahY56PUw6cJ9HVdm%2FKfrPD%2BwVIIiFGpCaCkD8XAcmQqzzmJ%2Fo42wsN4sdK0qPL6kMhIMogOfU%2FGXy0CF8Y2xXrNSlcjUPO5toHWXvOo64N%2FZ%2FC9%2BAFiUJ21gt2v1FQEgFy3PzTRCuNGv3NECqIGBdRCjK6CjKNImmi3RReZdJBU3dkjv%2FT7S7IZ7vfIsNY0LWQeu2zYRQqi7bjO2qUig93J%2FM%2Fba&X-Amz-Signature=6116707b35c988a7868631afadc1a68fd4c63348db45b3bde847e650f2cb008d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

