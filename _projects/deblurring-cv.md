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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGRUIXP%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T035508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaD6bcL%2BGhe6bYGp1uhYNuT%2F6fbXXJNv%2F5Y7sE4fPhtAIgRqprPWVDdVYxfLWWQ%2FolNSKM%2FAM53H3OiBpmXsH8mvcq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGG%2BpHYSSk5OQiZ1UCrcA3HyQNM50a%2B94%2Fuj%2FW0LLG3O%2BVkUOFiDm4wMZRI6nZWFcpNiQO9U6iV7mBaMKPdcCDl%2FST7fJQo8VANy1NKgG0GqrXVaqgFgaFZG5MGFVf4wtUpUawFt2Jq9vP%2FAsSZGDzfw6562upO9UL31AKQ66EA9S8K6Jpcl4EQA40XINrYWMUOb7l%2BythgFjenVDzs%2BVjJBcV%2BA8iR6MfgMbNkIehlLExCJ%2FNpa%2BvKX1yQTiYYa1UuQh9hhzafkC1jrVn7OlzD86qjcqk52bOt2npKQeBx2ocIqSjG%2BFIBBM4O33XzL27NAenrorPJig54wbLxqmV9GZRAwOocmxSWnAScAHaEQmm0gaaYKajCLZihCNx3VI8wHw4B%2FE%2F1PgyRd7Ga6xCq3lBjeTQxz4gImBZ%2F%2F3VDaMAYlQWqtg%2BvXf39hL%2F95lvDCSQaCI5EPmpDMJejYCAlAGaQ0fYoRrNnQlXAoeYyo%2FltRDZgCalYMrUvYBwCIG5Lqf0hKJI2wrXqY%2BV9xHJMMrTnUMBpI20jOi3QsA5gAjOkO76qKjYSkCvP%2B%2BTBW%2F7qha5lR0LAM0e7%2Fp2GjQgKSW0hD5j59K5TDsH5iET5EsikRqJ84K8e41vfo%2FrKsPdpC9aYV79nTO4E8MN%2BevdEGOqUBU7HbEkHmbfs6f20Y25GY4aMOe1AWTPICWKl8KyK63l9uvgaSMqW1e8EyPLsIeJyt3VmzQyNmbflF3aB8MN3lHINHXouiLIERTORVk4y8xB0%2FHNZiUMzp8YeUxS2KAg0s5rPUe8tQfu8AhRtPajP65nyhum9ZVGqIs0OHliGggx9r8Sd49QKKpd7KHAXCim0XLQR0ltKTlc7zqAF62Ywa7OmiAmp2&X-Amz-Signature=47b85ddf47ce49bfcbfe936f1394a75e70f21adaa887b513a2e4183f47e43c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

