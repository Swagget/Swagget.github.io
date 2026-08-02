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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFR5VQA7%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T075937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBS3OVgfzmff7e%2BYLFKyjbtuguELq7IiPQld3RRu7ciOAiBMhrkYGQuyEknd3nx%2FAOsHjdsrE0qrKt7w27TZTtvB9yqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKkLDmlwj2xKXSW2dKtwDcKFQPUJ8%2FbAg0WyGjrIihWhFUbgv3xqWt0sE%2BrtAeAluaRjA31GzRzOMzvMxYTAiBBJ9YzhWLkaaNYK3mPtUl1irICz%2F6jyvvAAx1kc%2Fu44YOPUcpioEdN3OGgiesD851Y0ymu0ZgewFUdwdWvhSD7bdun8yUovskGmXJa1DNYdVxNCdhFJoXVset5q58tTaHSabXDH6nPWscjAMPV7dTgBU1aw4tTMbMbQLvDmOX0y3kq046s3jMIuNaCY7V8b0JQNTAN3VgM8ndzZbb0d5KJQQAOUgPE9jWOInyCnTdLam9WWFp0bpuM0Cp7Ey5%2BfDS440bSZn0LwAi1A6rC6FOf6ol21MzHbvaPRRosrsR0Fuw1D2mRB2dkCwselACJxWDOX5ARJPmX%2B63Eb%2Fl5HRP19oXfm16bsIgLz34s%2FBB7y%2B2yWG6UBAlhlL%2Bu%2BbOhgkSDPNt9bcQtVIRMbN3BoIKlc0jBxL7v0nAV56TkXYT24etX29KXL4gUJBtYEfSPHr9%2FDBbCf62dOYlPmhNKDNOq%2FrlFAlm4owiNMSKI5O8zrzIHGobaMq9XdxTA5moKPIPlQhxzQYGrgcjxR%2B8Va5EcRFesrQAkkfpphtPxWzhahTozHBIrSnPmwdCbEw3%2FC70wY6pgH3Us3XqqyzpsasADBNhLICGPjiozveV0USLVk8l1HINkNlUba1itgp0EldqUxNdjLS0krQrhtGjK2x3Ex11MA0%2BwcgP8OAwDu9Kh3D2hld6fsHYkX3VwO3cFG3WVJbCWJDm0aXev9RaBnjYbApgswsyyx1OADwlqaN2zhTVL690RhjNndNvSo1hxeVh4Pl706hIHgvVZx2hIjmEmgyIS%2Be22xc61C1&X-Amz-Signature=b24f3d49e3117df46c105b342f43ad51be67cb9458c33c93166c292593efe1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

