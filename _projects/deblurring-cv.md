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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJMVUAS%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T005022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLQ44YZcG41cUZbz9%2FMWLJrwxmvedBED9OPdDmX0XuwIhAL%2BqmhYOrzCTFgBwcANKSHsx%2BnahR%2FTqBgvCGTJU81MNKv8DCHEQABoMNjM3NDIzMTgzODA1IgwHEe%2BikIhcw2OBty4q3AMa2FmOzxg3jhzy6ZOJH92vBb9u3rSd9aocGoWLNDrU8E%2BX8dS%2BtAhmHek37QuJIc%2BH2IDPIl1qHfA1ss8kb8OHgF0oS5YhXU4JVOK9Zsas%2BkxaAn7lKaka6VF%2F3DyPPQnR61ff8yNWuzud8wd%2B55N6yOW4Or8AiCln%2BeeNBGgjMqQ7wDjQWzoTWlfARp4aRNsdc4erES0cTWAS63rrP2lCcWXvqMTu8t4kS8c0XexDft6Rr7CLEC0ZTp6JD0JarO0lsyhrD%2Bai2uaty5l9vnvN4WAj2V4wD%2BOFrgNyfiv9vGdw4AnnYkGYAo1%2FvdovFMVYwOratrro1%2Bw0Ab%2FFz%2FEjh7kF5KlHvdOol%2FOmN%2BBI6IJZBkxL2AG%2BLKdMBrd2ICZFjFDK9xmZp59D2%2Bd752Iqws%2BBs%2B%2Fvt5JVksMy2Xkaf15%2FKGW7RGHGsiLlYVTRSIZVLSZb4352Y18%2F2iu%2Bpsos2C9qzG1YSyERKizWVh4zZa6DJqPNCK6oeI35Tb3l0oEWv6Q%2FSe3CmYcahRXd7NTwnrVz%2FYSRmJgsBAo2xn6lY2AfabfdX5RzgCZmlOWAzjSWf8PoFhwh3FKJjwHF23CYhD8bhrabxHEFVt1cL1UzgGseYH%2FwkM2MXCu0ATDi583UBjqkAYO3UVPWBwtGOE%2ByiUW1LRGjtOlPKa2N7su9Oo92Xw1SxPRn%2BcC9Ov011jgF7usbXNNaE7MY2Z3KRJgIkFtr80I3%2Ft0014of6vuZvF2dIjcWqD%2FDaqNVaK2WR25aXy7OlBWGrRTbMs2j48rOOm76VIi1AIeaA%2BZ0vcouu3ia9CgTsxEj69QsUB5THQQErXL7iajUMjpg5rjLSktKi%2FSwl8HfIbUk&X-Amz-Signature=0a3de100ce8c73c9f7b3c9aed28d7ec40f3850867e515ecf0a58ea4ba53ce9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

