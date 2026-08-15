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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIRRVXXH%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHQRE0St9CmUC66ahKaOu%2Ff28hChSiXG%2Fa4cBIqF1X5AAiEAy2xGqLOgcd5gB8ISxODOy3n3ndA10AHKB%2BQqIHHS8nYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLS%2FsfoabWqR60qB6yrcA9jjRIPBCXaOMGXc1I3plsMW74SqQJLEUFtrXi6ZFJYkPxNgsO4%2FX0vdiiv17GcLF%2BaEhzxY22ObTCCNk1kRXlXTPeWVTFCEXHD6PjO6Bo98YDbu%2FkoawbLuCItomdqOpvhZtDRLAJqEE2U%2FuLLpgu5qCFemL8kSVlvAnVgTmuoUB7l5THnbWl0%2F%2FFVQc5APiXmTaD8ZRSXYyP1T4dYf8%2FGUBHd4H49aPic0br5BU6P6W9efLNJ%2BvIoKTtJA9O3oSoxEn6xpFtiTeslzksxQgyblglX%2BQe2ho9LtgmlPdMXzf04vqNZLuS5WUjm3CDLs7fh475EjcVr31czWlf4QnRChxyPBVopaJr3gGlLmnk%2FQQcrP%2FcZrLgoHReRD1UFOJS5jXHDlZWzyhoZ26n1Zyhzbwg%2FWFmCIBWQFtJnbEAURBU72yuq%2FbWiap0AbrQ7Hg27Ef7HFRxQH8nGllr0q%2BXy67KjGz1HZ8RCQrgMTbLPcM%2FVHayX7C7QRy5nFTtw1HPIJKen%2BBQf7IDDCobaHJwwx8XrYChgS7AiKhKdZIgcndXUGszSI1s1mAWLKaf1to8Mv1%2B146y3OFrH6ahIfpVH71D%2BQIx0n%2Btxy0kO15RgWlLQcUrGxEWezFbx4MLO4gNQGOqUB9frPsyZAcwGRaR2v06ww7%2BbvP9UDtoxFrFBCr9%2BUam52cW00VwPwNjdKqAjidxl8y83VXXG6BSDXCD4KYUILeE7oW3Wc5%2FTfitsml1mGnA3glswLnmAdeGkD%2BfbdE27RmWXprkuDK%2BCHXcvwEQUz4lB%2FFSSZvUeSo2BAMCJYnhRtbBB7%2BT9NtV4QjpTreU3HQYxNnWpyGZf8L2qZ78yJhYlzIpTB&X-Amz-Signature=da27d6312cdbaf21c0682a1591317de9489e8ca5d61cc5975ce0f7fd126679f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

