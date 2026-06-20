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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVMCYSA%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T114940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIB0yWBoC70WQ9zIM7tDEv3RHVu0VFtAAZlpPP2rzjN8JAiBVpSsDRCho2w1%2F%2BW57cfBwp4yVoLKfkokcwgsvIQ8omSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4mt%2Fk43GREsDiFUSKtwDNr%2BXTpCElqRRPS8aryVcbgi14gzxaB6GKckRmANz%2Bzse0XflicaovroWdCgTJyaHVS15Fu2uIvvJqtS3gzvwMB6Fez3saaRAP%2FktwYs%2F%2FYAiY%2BPnH94FRKwMojxneMUtNrTG3I824JtHlbgBE89xzIM%2BLeYzPippteeXnw0Ueqi3ifIpusGkgAueL9i%2BWArt%2FOM%2F%2B7ABIab3zDi%2F6kLjVB%2BpwayaCF1BVPxa3P9TKFLNT2em1p8eaNIr5fLiumZiT6ovZDAZCMLF1pPUJ42sBfYRZinhIJ8bcy6eSyEARk6XginzWMU%2BxkVrturC5AuQGF7FuLyoF4I4bXfSy6o7HZx1z8Q9mElMgKn%2FpjBmInBMYn6qVECUZDq5lLpCbtyf2TrYCoI9Fuar5OyOO%2F%2BwETKA5GeJKXWYNL%2B%2Fgw3o2F2%2FpEfPESXPEl4hPuQVrOtYlw1x6yhoJKnlAHKHykZt6CHLYURPa8f517qQ9PW63nSXu%2FA3O6iPtVl41JqaZv8mn0etOu7SAeAMQN%2FdFEocp7FZxapt2%2BZfmuhMt3jEGjIl0%2FhuaHej2%2BlcsCnWUFS8u%2BVILj2RKvtGKAnRcUZHqA5uD4jlLpIN7XLhPmqxIWRotrcgSoVg%2B7aLnFswydHZ0QY6pgEASywe8hz8SGOP3jFYDb4bg9nJ%2BcSftQRDT2hxhhBPgLUrOJiz6VszzT5G1Svddw4y5uHdZqZhC5ElTFifWQR15veefQ2Few2j%2Fj17MCnsnhxVuQ5NHz5sEKelBLOXgwyrqz6fDZhzmuSYegHHgHtQAg%2F1kcAPt%2FlRcUqpAin01wK93%2FK%2FdPadeRxFfDQFeblPm%2FbPtt4uhIJh0lQnvu2lQEMYcMwU&X-Amz-Signature=2fde8789fcb7edf181bc312722d53b208c53dff112ac31076c16e7b77b8c5567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

