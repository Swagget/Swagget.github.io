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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227B3J54%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4d0%2BBHMgt6hgiv5Xw5Z%2Btt7mGNn5NN7%2FHiTnpFOe3dgIhAPyeHTio1AyBbBTYnlo2rrrga7wnkFjHbO7IdjBtivHKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTu4VTaM8sgIgiR1sq3AOpRZOFdoFscne7nsUZwBoXr8hA9TldullQASWmGLA45mjopa3vJ2KQo3rVrg4X72J7Eejf%2BYO0XpZUTCiz93wLM%2BBWmNRxlMjHon6jGZQSDCgsd3dSxLJ6VuSVn8v5BcsoiHvEw9qPzLaNFpd74O3qLVvPqP%2F3vmZAnH3xuDTY1wtwNrDW8bMy15%2FMj4THUGs%2FJW7G3zbzsRGbaXCokuCQVNVasVfYXFaBjX%2FY3nTnBwLe0F8%2BNWpBRPX81jwIGMksWC0d2i2sbuOxdE3FNYq1dn5a1p7Pa%2BLHsUA6fM%2F%2FwDgz2JwBsSFbFxUxhsTO6yjNcn9Q8t4HFw6sDN%2BPdYltRHjC1VXEDpAGK%2BsVVxlYV5dH%2FQh09QfduwpvDsi8shvSvbwy8iy97IkwnD%2Blb19t2MSqbtioj4ZAvdhScfd8fLLLXxdHz2uzCCPpWfK9o1aFBbEiygdkzAwkmiW2Cy8xaL2Wup9XIUPJiiswjzQUDIGRf%2F%2FR5x0oIh22tOfGtERU%2BD5%2FHBHAcm%2FvYj2f1EmmneMelt1%2B0J4ryUDOW8ZhqGyAg8y4KkzA4hXdr1z93Y%2BW%2FIhhLx%2FXCjing1CzWk8Xi%2FfYRNY8E3iIz%2F3vfQXR5i%2FnQgmwxrtbQ3Nc3zCgy97QBjqkAVAbtio80jetPuXa%2F66x33VbPSql3G7%2BX%2BmKj3j1WsjKFVZue%2FClDvphKgNiPLvTmfoPmtFHgtKx%2FGQtqj00ZUwvzANhtpJLse7AqtatLSGgP4EInCJY4OU3mQQF8SuhThQXvVNqJUje%2BarGQC359mj6gcLbQlZoBHcsrG8LeVBTAF%2F4s1LtkW8VfPrgJXgSw%2B%2FFPpmvo35rAyuMOowqYvlyNNwT&X-Amz-Signature=2a85915c2db2a93fe7d07d62c97eb0aba31e001bf275e75fc9fa97e709987437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

