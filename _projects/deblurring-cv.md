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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGOD5HO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T172052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHvMNeJPN3jZWuu44Uq5wsMfrCfWsWF9SUMKqXVlz0hMAiAbBifJC7zk2LFJmH2DlPwodOQV1j5FYU2Klv3iDh1HKyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMBBoYz210vbWibWGzKtwDWa4CDgKUSHMq9hOl0JLw9k0GvKqDhGX%2FbGxxTWtGWWN35WZ9yoi0nwfybiKvb4Ahn0F0NFU%2BGEQO67QhpUmOSnZNl6pABXOCbJqXAibr6w1By%2BvLOe8L%2FFRZsHH7%2FhCOwMhqSgcIVHP2n1sLL5xQ5ugRx6rKkvr2JgLNcZM2t%2FzmS8sNAlG%2B%2FPZjQ2bV8d8WVS3G4GlUVq6HQZNkKr%2BrwGWst8U5nvgHgegsktXnIerkOjNerkPpRsMclcHW9nLtmWJJWTU2NXPJeHRIKY%2FJmqEuWl6EmA7maEDJkJJNMj1FnSkaIHhMIxp0CUPO3avRFa1V8FJYSo5iIzTG7AXt4R8WQewIAjJK4nowkcEujQa9KnE2WY97E1cL0rGhwoNK0YqsmYeL3YX7TMCPMAk1nIT6U%2FNEABujb%2FnHW1OApiXPDrQRXHNfVPiug0cw3Z7tg%2Fcot2OCceGTuprAtEokHz0Np8%2FrOCwMM7ytAHd3sTIT4iVXoe4m58IjVjUdTKHqgcrFe5978bRt%2Fh%2FlGXkGy3347nDokhbPBMkj%2B3iYS6g1OMTyRfV3MfdvwHPWiUTUZkvYPDbrlCqhd0jxm20CuBRHeal4Spj045KeYVrW2Bb5y%2B%2FuZY10D%2FghAVAw45a31AY6pgGNdRJRyDY5eyKz8645%2Bwc461bcvI0jpZC4JFWVSBJdzW2Fl70nqIbMjK9loi9Nbw5s5e73HcyjbFl4shTLF767QEdAzDBt9Vbw9v04Uv0Jhjjxkx%2BkXRDTjLKgHctil2AL0Dcloy0FRCYZHXETasHrNMAa06SP2XbgFMBRA82uBHcS97IfP9%2BSBvQ03vIAcIxgdzyqWHdT4ivkBWtyk5wYMERiUAlL&X-Amz-Signature=c92d493808da8ff11cb1ae58d65d214f6bb87228fcbdfae9b0c8491e125e453f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

