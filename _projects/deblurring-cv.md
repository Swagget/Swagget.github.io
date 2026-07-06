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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIND7AX%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T211753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZEsbzBUCs2CAjw44O9g8HoGk3%2FSwTV2sY%2BVl%2FLhC%2FcAiBjf4Js373NWG9qhNdQmiv7zAK3XeUcRk4W%2Fsg7QP5dRCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMKPoUKh%2FaLAzwus04KtwDx8RJqtv6%2F1qRZHKTVG%2BSgoMZW0VSCRyqqn8Z8nwRl3PnGPg85HDzBPGptdOswWK8zGYy4ca%2FSI38dQ7vOB7SS4JU0bePvsmTJFR3MtvuU0xmdo3Si9UUvZqpNuzV7677aihfazr0uKIpABuDFGoBbkOx44VFVrWenjDOTDm0RNg4ZeeH0DdwsWkXI9jPPfhVl7eNbUCRRk8FjgiaOIwR%2B64vKiH3pZZOXhuE%2FmCL%2BnD5po7oQ5eh0sW8cbDLHPqc1DrnUKvQLFkmlKN%2FL9zF%2FpRXiaZcQu35Q26lZRSPmjyyJhDhlozfMyJrjZ3r7OBxSeypewGpQB8WFCWh3rJ8aVa%2FQd4gN6bq90dLBAmeS%2F8maHwO8H%2FD2GZ0pPxpHWqalbbgcCgA4MGSWVB2IVRPGY028aPSbRT7OTF9DA9KYyG9lov%2BqpQYn7pFMoTlC3%2BmbgmYjp8uUc98tBZRxOT%2Bo9DZmWm1B3DDy82CoqjOfpxYZKY5PC9y5Bi2pcVNmgIx7hPlMgELLQJo%2BCW1Ag629kC4XxTbTUKNoJjLWmKqk9JRa95zptEd6%2BQ8Ae%2FhpceZEiY6hItAuNWlshj4vdBJ4x4%2FaEM4AUNNWk7Q96Pu4RuH27IRUtk0CWL%2FW9Uwmq6w0gY6pgElHkJ24NUwzx75kmQJIqBo9YRR6mJ1Gu3oc%2BpB4%2FAJfVff3FcEZzp40cdyg1iMpZ60LFtZPRA6nYO1Q5ZKhCCs7p6l%2Fy%2BZlC4L%2FvCNpVYbdKY7mvkKwiWRlDSZFvzTxp%2FQaf%2BMhi4czQDupgSFMDYhuhzsaNd4jA9Y%2BQqItHZfHkgj36%2BidNlM4bP2tDY4eDuWbon%2BASCjP9yp3fTGOwTd1dMdjfw%2B&X-Amz-Signature=fdd84036a17032dee6338d7bda3927e7c927fc8ffbe5bcde9869cf37d0db3ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

