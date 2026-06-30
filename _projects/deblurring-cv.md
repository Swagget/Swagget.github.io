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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAIPENF%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T220622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDNoK2BEFKfhJgWl5h1l%2BzPpbK3zOOsC98W81z%2BDwEsvAIhAI6s4p3CRw919VpDeaXbktFM0jg%2FTDf2YJoJB1fI%2B7CpKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP2e1oxFkqX9pzyt0q3AMIF0Ajc9S58%2B0KIG%2Fl2nW0d1GichzqD0UNy21QYT5wDMCJ%2FpNcj2yMIzoL5%2FavhOgGyAydVGUuSAZjTfod2dZUVvhy7QuubMkiwO8krno4RDaQRR3foRVgFNA9jN8Ke62yxS3OSGnjtqrICyTm7moDz32uhPnQyFYj5Su%2FmsilnwuBULWjfE0RJD2S8PefKCOS81XJcN4FqMbVFmgyfxEg4rmPC6q%2BTug1iJ7AjYTp6FQ%2BxKwSSEdjq%2B9YBLj%2BhK1tbniWg7Fbo6NgLlubA31aap%2BOSKz9m6bY0sUXsVOXog3l73lWgDru5ywP8rAWPBE9aQInpDhVfwP5fYttQ5TS%2Bnv3NGwODLpjGeaJ7POPFj00oPiID1PFNXk8mHJTaBfUEDBckacLFWk4HH%2F%2FoswMXYvhCluy6n6YfwCwBm4ZauYw%2F3IG4XmKXYL%2F7q7g1mLkGabRgGxfaiNX8EyZkI5u3bui6SDTNgldKSl7V9FNGkQrYOLZaoo5JFkF%2Fadsz8OJpfG26MraquLew4mjjpYwPrXN86P8lTBZrOPuNLUVLKmKnElaVvK%2F5BFf1G57Iu49cKfmbV4eo7YEDWC6%2FDcMdKIYSBZBbEpVg7dxE0MfLrRgvPHB3rX%2FswQpSjCv6JDSBjqkAZ5GXsJpCzW4mcjTHVUYZEOs7pizyg8XvajkVI1w8LRg778LZWGoPuKi87fOsb9k94%2BUe8Hn9zkJYJqXWiXa6kw4odDxrRXZRrCiWb4mAuf8V0G4UIrffdlNN5eyZDQxlCuJT1NUuZQnsJqW5sVfjA%2B%2B1uhlMDVJHq%2BnptSx0BH%2Bb5wVITfQVD7NVdYtL3d%2Fzjzr4GyNS8sV9sWKkxW%2B6jb0wx5t&X-Amz-Signature=bdc66862aed9b2c8fc77b7b47017b5ca8d2c1eea03d59dd376a0ae60a702c98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

