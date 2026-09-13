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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXCDDQL%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDRsazFl2ejrYz8w9TicPDMDPNmDcLFNHxE9ePjgWRRoAIgV1BpcVBbftSUlVFxpuqYKo%2FeWxmqJrJ6JaoyvM%2FcIngqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7%2FuwuiXrA4%2FIiLPCrcA0Cxci%2FrgpYqc32vM%2BdJ08e9yem2wh4KEudyVm%2FtpF%2BguGzdaY7Qy7JwMo%2BEzh1uKkAwGFZaB1X1C%2B9jge8CnsuGqm38q%2F3GC7c6rYfmfS2lNej8yZgVcNzBvkHBurzHTAzMhxiW2bnFhuv6ftkx8Ubm7Jk0wu9X6SJWbhBexpt32WotWGG6bNA3WWCs3F4rlb7KoK9uWxSvQLEQ4Q14JEvI2TG8fa%2BCD1Fyg7%2F5H%2BJqyNX8nN3w%2FAAYxlXygajnmuN%2Bs1qc4dYO6mz%2BvmvuIE%2FNl5ce4LRYJsOlBPinTNUYFRI7xapPAJim8nxLyFeZR2PO4109Gz7RypTqyHP1ENCaJnhtyFOjViMr7QPGTN1rqkHpgR5QBH3Xx2vqlGI9B0AygEDzspAlBV5t%2Fc3CmCjZSIpFcKA3H1Ey%2FbBndug4hGLF6cu56CdqJnw8c0qMpzepgD3SBtbfPtpz9YTq56m75caFfD5yr6EVAcyGba8j2su%2F5hsvm438QQOV%2BYxInrXIFEs8WNi5g0ky7lKk%2BSIRQ1JT%2BfgoKpLULL2gljLmbfW8h7qqZ4nQgvrFcTDaxc2UYppvJp2auIEZExHlDduATaJ15ooWoIFFrdGjdoKr1b2MrETmySigJh4fMNvNm9UGOqUBl0a1jWgQ2he5XPMAcgHlEYI25wLPCJN8fek%2FPsNc%2Bi2Ts516Rb4Z2YJTHDCT05u20KE1nQLRm4UancS2g2ZQxLArxpN%2FrXjgmZuSvQgSKn8nw6CzvL0nNzH2pp57k%2FNR8lXJ6paip8iAYO5XW6LIomQN6NkIspff0HQ9rngTYAFa5fKj8oJqJzTMp2yUu9gHtjgkcHEKhAe9hIjwGD92zSxD%2BEFi&X-Amz-Signature=81e37d456396569df0763664c3e137077d96484c2326ca7d547b17bc4e86a80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

