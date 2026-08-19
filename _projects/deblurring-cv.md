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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMFWQRT%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T142048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBP2g%2FtDjHP4J%2BnAji%2B4uInBOULNrWSIV%2BZ%2Bf5Ov2sFAiEAk0Y9kFxzBDCpnWOXfqWRq6VREhAy%2BLRa1zXvWw0baVIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAbLG0NW4lY6e5CovircA1htRuyf0hGzhY9nKNip01HQziw3r%2F1hFpcXRYrcGiX7lASV%2BCZA1z9npK7b%2Bo5zntKhlRlymeYhCtooeeNxYl1mzHy%2FNaMG4Pbw%2B7MnCILVLk9y7nyK0uEEI6S46ptiKhRkpk2kO%2Fh0Ci1hPh3npA60jTyw1MUv%2FxSNAXCMGMSoINM3BGAFl6DGn0sB3Xvo5oFEiQvGRgFEj%2BvFPiJTp2tDqN7vnjiYd25PHBaj7rUl0Bc7Qtl6hrda%2BqbW%2B09H28KhbmDv8UgW5zT7z%2FY9esNdTDnew5A7k4wk8Vrg4fFtFvfPymZBSKbOxdgDPc1QUhdyhMvXivx0g%2FcPFas5Gp1nlfcEX%2FFpiWxM%2BTumcLu1WLM4wEiUXTmBwlOLx%2BkRLrt5J103P3%2FvC%2BIUpOPPULyi%2BSszsfDIKBLjc6waGT%2BUN5RhAYyGLJrYu1gnLl5AT94UdptZ5vlHeivOCJ9n%2FfRFzl74AsAI73AHeby19M1k5VwMYhXBnHWJvm67c62VJ0gMZS5aNkEJY1dJpkdIRVpQYWX4czVoCJccWs3QYcffPEz0%2FbhQ4EKlNL4cCtRApqn8RIKF%2BBaJq787o01WMUwT8nvLypR0jkUhmV357FuLl0TjVrPEiHIfH9icMJ3cltQGOqUBci2hVJXtvaM%2BBbkhBNvZiWLV1rMdgVooqiW7G%2FSwicW%2FgK5nkvXhPHh95rs6gT1FQyZ0JcD7Y%2F6i6UudgCfhNjTnpd3Qp%2Bkv5OiDxlm4YE%2F%2BN7mEFntOYxeCudhjtrzeeXF0fJ7teTM8Ef5OEVSJ%2FTS8aqnlhE8DpPMjpj5dNqio9PCEy3spAlVavj1VVb4EzunOkmAYQBpXSt3mywcbvjnt8YMa&X-Amz-Signature=702bbe630e16d638448663871744117487ae3e2641c0e9f70ef0b830a9acbbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

