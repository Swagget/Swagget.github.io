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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637L6EHF%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T234438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2RfMxE%2Bgeq%2BzlPUNn9r6%2B%2FW51EmvHCf6AIAGjULGCkAiEAop0jrJ9FoOTIV6aKqAT2dXDZWx%2Bjm6GxIS%2Bw4tucY2YqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6Z1MIiOIsePU1l6CrcA1GmeJOxlYbQMySm%2B9qZQcroExyz%2BpsFfiDsAuFcQ3PJ7RP6iNPBECIpGfLGj4u2GHPFlrXjwIbkWkVm%2BvTMHBOVLrrnZ0YHF5vaF09jOx6L%2FOQCa5zwWMmEZNkzxkYpFEM2w8k6N94Gug8ZHz98JvGlYpsh3Hq3qGTYvBaUvKpRCgTg5DUzxMAnirg04zNqEJxtbYRbeJlkR5E%2BtXXfMklMbSQKyVC2pTK72I%2FKE1WUxaWuX%2BpaIGfGqh%2F5gcTRmHk%2FSpZrWYmhtOaVHxDFg21OCInARjKg1PEh5mlwRWc0BA76p%2FIPK5Dxxh0BBLw7mjyqIbHvob8SuG4RHEasXGp%2FMK7i%2BhDsEOq14kJU2BcGF0cqBodwLW7EoiQdF50yKesVJ9OBeDBNH6vjt7GkJlJm9iHB4l0oPyAkc%2FAQBwwZI3mJCzxo6dVhM6ndGwp9EcH020Tfj6lWdgUuK4ok%2FI32k3Ynpe6Zk2PXQ%2F9uDuo1dS8v303bNUZK9bXmbUIizNY%2BSxT1T7IXIJRZTAay4olzrx6wHf9jQBfeFpYvvhdVpEfUZXOpiJAk7WAw5RTcrv9EZEvRAbY87oQsHfAWmstkOG6i53rWcuemLqc1eWl8XEBOJH2ErZNEncA1MJe8%2BtIGOqUBovRFSSBEIcvilq0g7%2FHTOlbuQ8uUeUKHWh8bnC5S7LLQJTCHDTOgQ1z8cCHQQkxBT6r%2BfAVeboFvDdX5oKnDUXPCsAZuN98eQP4xsGt8x%2FhuWlvye76MM0ZacABWoOFmqJs%2BqUyVlqu7mYAc10KcvoZAeFAZFjgVGsXZcLT4Hhs5B6LvIuc5q%2BwzubMkL9ntYeMKEB90NGxsMd8LzIX1c88u0yPf&X-Amz-Signature=2085975fcabd4d7404b1b8c3092860593e206d0d986bb9c95c83884e3a734a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

