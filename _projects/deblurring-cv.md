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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV46HJBL%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T204847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDY%2F%2FJFtuGTIcqvnnM3iq6dUuBM9ONwNgRpatqJeGqCUgIhAK7k0Rl4%2BQN2C%2BsnrD0g2dKvUQrZA2pCk%2BE3QUy85SRmKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc0994QCQCsVPDkx0q3APbXPCR%2F2H81FG%2BmyLn55vcU0I255j9yh%2BLCWR4B0vFkLXuRuj1lZFQNkQa0FQMm%2F6U91Cqoxx98tmD52gYcspaI1mThGoVO7mJToBdGI6Qeg7Gq75umdgobPKY%2BwcWHkSNo0eXwkHo%2FzrHU3RV9Aj0mTWwsEvRAqrRcjupX9unjWGh7CPVq5j9pCQqf9LG7Gl4UDLcNDtYPY8uJAZcjNDao%2BiQVHUTXhy9jhbPOOgctnfQk8tGA%2FnOnI66ZPtmO3MsDM6GNXueqCbMJB0krJYCAfpE9wuLLDcbDKWiEiYKYozAMYAmo3Jg24MktH%2B9tnJcAheJoSmYif9cop4BUMFTm%2BCABZxO%2BAevM0qwJL71xXep60YOJRelnhYf9h3nMsDhk6Pe9ouID3wi2NFkSNaE1HLl4Ux7vCJMTdSbMHGBcvjdbYzLqLhO5pASCCrsph%2FWRhJdRuUjRRSTpfGjWBSmcPyT2%2BNieQ51A8hgLKESPs52o2CLF%2FERNqGJhRT4d0Wl5uHkzKoSVELcwIDH0TG5BaEcx01rUrC6RfVTNV6ByUQCtxkixU0RR37K3KAlgE8nxRMgUDv26%2Fz4tzDNgqOEM3dX6TTp%2BGwyF9eRD6Wuh8CqtoA6dM1yDGCgrzDl75rSBjqkAdoKWxi%2FKFYJOUCDraOKEeatVshLgLVDL%2Bqfxb0P7TrA35lYNnUxETbCegx3VMzIITXdzE7PIJkQhfg9W7HoWspQeonEakLvTayHbYXoYwnkkvkRQhdG5CjLDe8SNfgb%2FOW25DEV9iZPjso2aB2%2FRpL%2FaX%2BvqonpqxwK1kOuT3JXd9tbE3Tc%2FerlJh6RHql0nYHHw2oK9NLFBAklLV2%2Fc2RnI42E&X-Amz-Signature=909da87253b594101bb37825d117ae5a44cae3d2afb824e4947771a200523af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

