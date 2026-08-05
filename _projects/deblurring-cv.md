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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663237GSS%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T220254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEQ4142goayHXLfnGNZLtYU1dbND5p452jDTxj%2Bb6ClAAiEAtdqliw%2FEZa9CutWdOgR8X%2BdtXckLylJzzQEHTPK5ljIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDD9wV%2BQIPcvBjQXUOyrcA6j651DHNu60SJ3sakzy5gt1rk22ZZsHmRHXXlFLxZMcm8UBktw%2FytlIddKhDsYpnL0QT16zvWpMXyxYNuUFtHnL6aj2EN%2BAkQW8%2BWHHCta%2FVqLOga57i5ztg%2FsaKVTBqdETZOkVbPU7%2FdcUXB6GKbrSzymfXaZEv2bfbKEEJieX6ine8rthsvmOFMneMtBBu22wvl2gqUBELi6fVfKr0zB1EkJGVItkaN%2BXEhYZqigbEnsLbo0fpJ4Jh7MbwlNvkx0yDiDdDFtYhFCmvOqY9jV3h2s1UV5BhPCwzoSVE8gPXWhamAmKvj%2BrFF8H6Eqn6qC%2BF4ygCMpjMw6yh%2FR1lasY78Iz2NIdsf1ruw5hIZpNXjHQNeQ6UonKv%2FoJSafK%2FxeF8uYlA%2FMx1bE3hv%2BGrwUYqOL4IkHazQAv4aB9krjAscn9ALT41EODBSfEG7zF%2Buqhqsd8dZxxuSIr8hRJ32D%2FgBmpaUhIk%2BxwOTXtpCk%2BdwgGhMjjEQn0ctH%2B04BnXm11wBKyC27epw1jTyQmwkN1N2u%2FbLQFARfE4KvQQvI8y%2FO4NRSG3Y9ArGIJe7B7Kjfmw4hIAicTmEYvkPfV5emdg2WOAWKiT7bVC2NLkA%2FSAbD62CIAkXtgIxkQMPjSztMGOqUBl8ZyIF%2Bc1ZwWtrUfqsuLxSfOtvA7kPjcjVq4GTGvPiq%2BMZJnqRg5%2BiSaf2gghRVUZFFC%2BUOwBaPrVYnpSaXhEqKaZJVpMVuzvvxrUuyDm63dUGkG%2B2WIvA9tNv36h65KUJwqrNODopIHFrq9u6rrA3RlpVoBOL9BT7oNf20Bssjtq9B4KXT3eIc6lAWsjotyYOfxHF3VOWLViIuY26Nk9llg7aeb&X-Amz-Signature=9f2219402ec9ef44ef84fa2fed1fd424ddbbcddec560310ea3ac7d02c67348c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

