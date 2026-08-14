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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJYLNLW%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T070311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDQqWXwaiKxoNRALGrR1fjzF%2F8S%2BBtPV6W%2BztwrZDKpFwIhAPlsfLpPr2Pw9IAJrOoX3Kx5oMpzYWaVu4tXyVcA5H4uKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3zvJWfsX9O7NfshMq3AOgErJJPUEfFc3RgCNBUt0rVTAhYHra%2Be8XFA%2BS2K938pntYYKBynCtOB6eZZCvKrZCJnspk5aRGYGo2ckCQbyvLR6U%2FmRSX0UtCyT2OSz%2BfnIw9cDfMvKcVpD%2FUD5%2Bsfm%2FIGMR7EX7qx38XBUGRyMy3Dvq8VDHkpNKyiopPH%2BMpFzLg2BqVYX7LagMXSMGcFdXXOw6rDdfjTon8zzWnuJvUdjL52lTgwVRDXuUgu%2B65Tzy2tZghXfohE8YqlM0PjxCI8F0IZVDOwKFnAbfLOin7KzkF5ZrmSwutPVls1%2BFYlHBIOtwwUmK3TGdKl2AN3G7xh9SuqSDBumE3uxJl8JgoCq2YnsMl%2BMQiWrHFW%2FKgwGPrrs5zD3EYg5NkJ7tHgV%2FbSmhsIG0nKpwT9MeFqqF7mqoWPq8UsymCclr%2Fp7ZfeMfbNgRALSYKLbwT2Y2kuRffbkuiH15G5OBqPyIZkhAPqgOV6bOk0ZKyc1CRkzc%2F9jaV8wMe7p9xmjtkpJK7tKjDhR%2FW5lo3ddiUR7d0GH8kYdUZQsaXyEOuKHxF%2BpHtuRqr4iUOWNm8Solh0EKa%2BAjerQhosSnnv8Z8TDsKiApTnLOWMeCGrroKp2NAGtJjGPU4th74ZBU4lq2ljCS3PrTBjqkAT2Y%2B0Co0szAtTNHM7ExbU8uxMXcsgAqJ6BswA6jqLLHyP8msnEEUe%2Ft9JiXY8MAm%2BI17S7J16WY4Hve5jh1uLSlZ4AwJh8Udmb0xrqqBgaxR263fUOuDJ147mOg4xXq6eLYftM4un5gHuneGaxxvd2YhHQo1R6MYDEhR1LASyVzx739NF28qllnj1Bsj155e38QhsuHrlXuw9wFUmALz6OpgHPf&X-Amz-Signature=1baef2255e70ef1c7dd0d1b7686427a363cee29a34ac39d8d006585b58f61df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

