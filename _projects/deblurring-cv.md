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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3IV7MA%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T203140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCosQgZf4FGRrZ1gMWW%2FXRkwJzVMJO%2Bi3Xlq4Blyq4k5QIhAIZgSRtaJ3829v1Ns8f394LOK4g7wk%2Fc6YlJzv35I0CgKv8DCAUQABoMNjM3NDIzMTgzODA1IgxtDSU5styVzbCDuukq3AN3x9%2BZZUtrTiTUVlDzvBgAYYMtrqOp8h8KBKXzrvrlZhUf2Iodw8u3aBFF2bBFqYlVQnDWOzxA57fXZb6eOpINd0xx2NNnfM6XdrqFbebdM3zI2z4GfZi2ujzp%2B0Lymsf02SSJxrRIlRhRyWuKFFKmA8itrVEDqHzIbxpHFZ6h7PO%2BsyEHx4fzfJ%2FFb64bWaeLYY2OUmr3JtD7yDiDGfAihVcgtb81hLYl6Bj1DkNSjeNQPzloEQVtaYPTJgiH5KhredzG25xcbQD4q2x0JZwbt18YlOtHtuXW9G%2BuVAl9YYfIf4dNTI%2F69fi3uQ3dGufevXt0vIPo6Q4r6XCE5QeNxMD3S5ZsMDVygMJfcIjjA2mRQWrNOWm7Tmkq1voK0BVlzZntW1Js%2BW48f6o8JwO1XYGq%2F9iwHagRR2tHJ0vNrpvqygUQGgGK1mAoWdv1k99G4NOp1iAVYv7DxgLa6G2C55Ficcphnqsg%2BlSs5N6T%2B3TXq4EJPbxQ5Dt%2BqhmyxVrHMUU%2FJ7BZ%2FS2DLbWBc6QQ8Cy45BrdzzmejaaDBrRQGaceMPDw%2FLohBxTm7rFpCjCgXuDRXFvgr8HHtSoYi5xl3506Ki%2FBTrblQQtQ8S5OQiCcGo83BlRQdqZ%2FUDC7zabVBjqkAXm0X%2BFwzV3lxIBhS14n3L7rek9JKfXKGSuQxyi2sUWHJj%2FlNPK0sY5DtrHzqwaNkNKHEBw8%2FaKm840uZdHHWIzmPmltJX5nAzizcqcZHWZsuRDFB1IsNHKzG71BYbJ6h1gKCBn4I6yKuFI27qI080Uu%2Besapf7yfAAZX4NqtpBeEJTxg6yFG6Ogm5mWEO2BG%2BwZkpADNAEUUvpNkI5NWKNrYIJk&X-Amz-Signature=4d3580d11a68cafea492a2d4afc17350b39ca82ff9c08b475b1e8e6de69bded3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

