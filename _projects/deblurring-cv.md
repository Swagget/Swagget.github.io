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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWDMO2L%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T150536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGLeTeiZRC3jVN%2FKNzTQ8hgs899bWVfwlYCTRBxjktHAIhAP7h26fxPSuh%2FMwAmiBR4DACicAZ9U6Mcn9Mj6M0MbtdKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzijEaiKBSTIpB%2BfP0q3ANBKJP3QWfRkz0VN4YRyMNNfXIA1WG%2FxT%2B4EBtMWMISXvEVehv8tG%2B3%2FoC%2Bk379ZycwFp7QU0OzbITEg1J6w%2Feu%2F1Gg%2FuWLQh36HpwDn23XVRD24blffXb7xKnZO6Zdn9MR1JapODTXgE9KbUPqfHtHPteozuaIqIq5E0IHtpsoc46iOMge8RmQVjkc%2FJJasHU0brvqIlrP60K0IeH9MCCDcECpo3kAbbs5cdMiTa%2BnQK%2BnJtaQfId%2BNqQlKdP2S7OVT5Aowl7eW1l%2FD%2Bm7b2scO%2BFYcBhj%2BLado9S8v0tZ6pDENaxtSiM7N6VYs0TVqBMXHPYgKkooKc4wJg3ZCK4qUc05AePh8fd88BjQUmrltbeX0PeWtpFYaana5a3ftT8tnz3HWUZnWs2bjeYC%2Fjxn7qjxUHrqfNwckyZNCuUfggnUgZlEUWWiIa%2BFCl2cQ%2FlUHosCVPHs6pcXIm5EznvM9zxJAjTlzKDvyfkdOBxuAFAESx%2BCSjOH%2BTXCq1T%2Br7S9ZbtHMZlkT3ZFXSpD0DI%2FcpUXlU40XNrQP%2Fyr328sa9fRrAbeb3m2%2BTrLGrlxx02uTdhAdLlJWKsameXx7hAx7U5tl2uSGhPcu50BqrGeXmd2dtWWgL4A3AXcgzDRq7nSBjqkAVcTZF8SapaEESVRQJ%2F4iTwwUqpd%2F%2BAtMky95JhDtVgdeTnKmT6TSnaJFJ3wBxb%2F%2BRDH5wzwSwtGnPyuZt7Bx4c5JBFWLI%2BxZO3ctC0WoHn%2BOTkZXNNairMMUXT%2B%2BfobA99emGqgHa1h68A3n07rpyYX8Q07U6woFOhl4lTx4VxajCY2nCp8vQPpOV%2BmqhAhTSH6xNGHFjWPgOYBScW8xSwvH1ty&X-Amz-Signature=fec80df4b05e562cc1a4fa108f96572162d51c46cd1154522de8390cf74a3477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

