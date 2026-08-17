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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYXFV64%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T221103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3HrbIOPlBnOsHMEbzWPao9JVh%2BsFYQ8Sd5uiK9aolgIhAOf%2BOdqeuHTu6wLFazeOX0XI1I%2FP5%2FTE9SZTsVxGRwtmKv8DCE4QABoMNjM3NDIzMTgzODA1IgwxGvi7SrrxCM9MwdUq3ANvCWRiPr2LcvkCTN0jaUwIQq5pVRcduyfPpVucQYU%2BNJO2DvHTYD3gVmk47YdMl1PefNUKYTu9bohirEu7LFzUCTx4adaJDYzPCeaqKPgx5VYJdZqMpGHRsw1LOKn%2FX0f1A4rOG3GlSZWO7LUx00V%2F0V%2FBECcvg1CTjUqwNYfgfADN%2Bhw5MOhHCw0eqkrDvUFqELqMPyYidYNdIeB%2F9S4ISEfQl%2FJtSRFR18patuJqfzNj7ZJJBn%2BIcOBpjwR4DpCEVoGu8MhmJAqOwMmOgcEwsIl8WCn8krxg1FNduSHtMJUhmwbudO0L2IPPcT0RogaqtDxRrGpKOYRUctUcUQAcdJldIoUPoGLt8Ik3In0TKyzXay4vJIh8x9WfhDwmrUKfbCg%2FLYpyOtrjJrxHfNClv%2FScYRhq5GAAsrFKxHz8gamvDNl2puRX4eK2%2FEd1QdQzRVrO%2FGWTtqL7hdDwWwICn5XS9cwDA3uuJ%2BoXprrfbk1V7nUNeBNBcLCGYekgslPJQ05anAAseUcwax3%2FfPEwscEakn%2BykAuU9RNR9vyrBTzEOD7%2F%2FWT8J8goe%2FDhIkP6kbPeXfRKkPTdQBgyR59aII7IAKSiX7bCq2yi6ykMH7tqtmzpCphBUz%2FqkTDn7o3UBjqkAQfydVH1m8bT5OfS5GnOB0mFz44AYktWF7bN3oja8C%2FrCysaxQI7Z04moB0p6j0Sqy0kAVJa8bYUQX2rm2rRWdrXhD%2F3d4SyxzA1kHbCStwcyZvXF8VBRkr7QJ6WGxKshvrToxkbOeNbE3CfFyUyf8d7fKm72oDS60EFbV5lorw79GRCHudr2tVBNFsl4LBDLmuuOnmEZMxWk%2F%2BFeJJvwqwiiDp%2B&X-Amz-Signature=08c5e2314ba6b3b61a4e8868088e73ac97a85de2cb74a9a047480a6c2f6a3744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

