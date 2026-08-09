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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCBCMXJ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T063404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr1fjkB72g59u6DM3ZSo9yJuYBpdSKxXzu5THakz7oAAiEAyEqJizvyHz6T6JcIphBP0rj%2BBdsvBmFV%2Fp4IUlwtw%2Bsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNEEri8fkFX2TZ5OICrcA8EEj%2Bir8RCHb4hK203q44hSmdd9k0ogp5SGkeifR1fZuylxo9fS%2Bs3OJt7s83YdlhFNDeuDpKUDngMLBytj8T1dognNmQwxvzB5CFirxlbt5uBNTPkTYCMpF24ERF796RexU62RE1en%2Fg8r0ct6W%2FOxP4XdasNud5jCWjPFKtad5%2Fxeuj239WzgRes6gdNaI6H5RDZEzFLfGL4ifCt8kPmoi%2BxElmSb1c3m4Ff1G%2BAzYJ3pJQORkM6edueU%2F3pmbl681zp5RwWgVJ87gA4U2JGsf4ObnpwM0vv2Bro8EFjuTH8%2F0I4mEybLzv%2BZJa1QavO%2BKJQ4VSotBZ1bex8qvzZUHJaBEjm6UHaNEBOuuhHxPg258kbcAPA8EcRqJJbQf8%2B%2BkmSSQHjJMXpAdhiWRMBp4XhBe1drOie6fL2T8AQEWL85ve%2FOYWnt8YFl2%2FckAXVI4igM%2BKixlUuhS6FLE0UBTZd80Ud%2Fkl8UjbrmCBCeRoS8nkS%2B%2Bnaj19XnWU%2FP1zc5StGsqrvhE%2BkJuiQZGKfmLQZ%2FFzHlgLwXKIwUBNghL564oQC%2BbopGHAHNnctClvkz9gRQ%2BTzNxFT9rMJGsJFqYc8B2TIQquxz3GugBl5E8FzohsPa%2FUBJgLiBMLT039MGOqUB7GN0BzdG6IzCI1wka9fox1a2VDgRwa6gsoIm82Dk75HyGlUAJMAboQFGhskSGbVCfAGYJ9%2B%2B%2FbVRwDf2N%2ByLK5f89fAoOMXp9sRnyF%2F60OQPJ%2FelIPD1wVl1GPBDv0n5e3tnjgFItPaVICDW9IvQQmjz9jyJY7Cgk%2Bm9Al2U5qpDliEIWNQRQ9ZzjwGkgQ7HujiI7hzEthrFhYpeJw3lqq0tHFun&X-Amz-Signature=cc460d75dfc81a8d86cc3d7416e6881f2be6e7ea7629ba857718099478a90f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

