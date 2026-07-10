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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJEOJJL%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T015712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FLNz%2BZxambfv4P0qfioW3FGEVfnhlfkDWI0913ZXizAiAHoM0fq9SjmrU3QowIvLXFqLPCN0wSr1iaj6Ial1Wa2SqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXUGdlU7Ql3yEj3X%2BKtwDLoMVML8SRlCe70r1puzmK%2FqnO3xC5%2F4e0OV2mH0rIx3QNJ1UNxZumDRxyUypDpiD9rmkOZbIyTnu81h15ZAI6DLQZ40qlmpYfdGYYBbXmgYv1Il5NRlRkI6jvk0kT5%2FpoWqfkUYpTG3%2BT6n9r7Bg7ODVesAn9qVkFGgemQ5E1MBHJLoaNlqSxLNWZsPVrKhXDRNbGcJw9uzVZdbXfGomAroFVq2y%2BFqgAmErDpxGvQUFTG9yp8KEEXv9F5%2BLOf2jhaqwVbomh5Pq44UDOEUigGNjSrk1BAD0tdqvR9EmVuJ8NDmHuaQT7iq2zGrqa%2Fi4GoeNq0WH9wsC4TKbXbL9Vj4oIg9GOBSuDjK6Wkl4BPYcAoeq5nn%2FvMgqYLxHRs195Rggrfq36rX2gjzad9uXgEXpMhX%2B9VrkeAzSRU8%2B4mw10%2BO010EmrN32NaM%2FrNAEQJ8%2B7BFsVm18BbhnUhFF8fmZZxrnFoUM90pk9yoh3ojKcPxzPWOTa%2B7qRPRgmJMdTraHVtRGsHcD1A6baDVe5UzUpudmWkn5Ey1IYwC8OW%2F4rciynMnwJH2jhJeMxgm2qm2qkS8rGmlr%2BnIbAkX80VCbZFG6lu98UFE38UHc26tobyz8hdDCVUMf1B8wrsHA0gY6pgH%2FD%2FK30%2BEX4ZWNK%2FFwiqVjCp5T%2F6MAUiu3jcQL8e0S%2Fw0wE5vCE4gxkiFCAa25DJ1FiAEU9I2tBKcZIxmGEKK8oNXe7ctifUdEwkGUv0yKlV6jemoKTFAfTqGfPY45R9%2Fe1ffdkN4ZwVj5%2F31WJSV5x4YYp2P5q5eo4uEv8aYB%2FsF67UTDpA8oEmHoyZi3LzluTaVf%2F1xsHmV5ZKiPtUJcMNZ3Q6Vx&X-Amz-Signature=fcb70cb85213e456b5849d4f6377650eed2d01d13e89090aa3d0bc9ae3b41637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

