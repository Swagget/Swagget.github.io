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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJ76RA6%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T191055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGodOp5IMQIF3Y2IpBG7vocErGYx6pDk%2B6oVf%2F7UoujMAiEAmkDh6ZZQj%2BG6alPcmeVSwUuaSRurScPzCqDbAe3Qk0Uq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDG%2FRS7Z1OfklPHJ%2FjyrcA4%2ByzHT2lXearv99Fc7FLhnx8txO7bJLOxoXtz%2B7R%2F87gt6YyT4SU6ygEdSzXt2FrupE9uAsqCIUaE3%2BLwYhiuoAO3SWq1jt07rb62r%2BOrGUC6vxoGU3umYZXe6l7sF6WaPz7MNOwSm9ZL7khdWRd1IOI4Y%2F%2Fk0KUZnmvCyNdrvAmgad4bWTws7ig59qNC%2BfBedUsV%2BGJYXoofjpiFF2X%2FPM8nLpocmXsXjHd37Fw0yYLsBoKrKNGBOMuxFp5MgImSecq76F6ByRQLs%2Bl9puzPw7xG4Eu2HvRjPOhxa0QdJCTTSp0qr%2BXAG5RbP3MIxB4yC19Hl0pSB0coE75H3YhLVVlxdBFztWeylUOau9fH4wNVs566vI7iw5BRoEPMeBIK%2BQYQhhF%2FVY9qRfSbVSpI3UUCiKHwrzp4pBhFOFrPiYiv3tVAkBuXMKPDTRt8rOq31OSO1AIFAPrvF2UEauhgMDlAa%2B2wy9y8Xtt7zn1vP6exbSalTRgY0y1QO8tFA4O0FzB4OLUSF7N1dKs2T7RJB6rpAW0TSSWfzeo8GQm1Zf6bYdvo%2B8n8JYVpxD%2BwY6SlSXJWDrgnCYclco7GZIlYHcLC21%2FVb1on7psu5A3HAAqkeJgqMJr3REHdCCMN%2BKh9EGOqUB0MS%2BROdeInWBuaJY0plYjagc%2FgX3rgJ0OQq8zbd0dgjUsksrbidCIYD%2FC5mK06KwNxwGUhTEeglA8YVqJe4g%2BW1eiYv%2BE5Ajfbm07FECDME7jCbgjm%2FH9SWac%2FdyzRav%2BnjfR1A0xYoBgnrY%2B0vHDN4FxUfMpPkCRC%2FqEtwf8qBH8MZcZXm7FUtuZSuUHFlLRcdE9jGi8Yhqk3VHdAqYOG6ytDLb&X-Amz-Signature=ffa1b9a04e0e1b2868f1f572297970d32cdeace1a160e331e841889e9b682a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

