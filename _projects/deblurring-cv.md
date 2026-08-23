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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2GAUDQ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICeubn%2Bo8PUJ7SAVAK24wXYhBzfBY2YmVfclm%2BO3wYxlAiBRdz1uWCVjTVu%2BKqp86YwDV7whJT3P78U0kSjPAW9J0SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7T3aIGNuJcEBx7oCKtwDwc3LvTtLJAGmeft7BkfS3H11uxVdSeCfJ%2FY6vfG0Ica1aIvXBFEQbzVz4lP68JcS76225mEvCbmClHTdK0ffS%2F7%2F0fpIeKmwOcFDzNMq8HqSmh3WbckzjgqvgeKQ0XT1nqsCuFnpIvjPvNmY3LeXl0iizbU4axp2uQ1Y%2FHm0iXih2pVLfJf6bbmblK26lnRqkdIdDP37k6GkrdwJb4dHIUgE8O9lU176MfH5TdSSh9YHoIYONndJRVsGI%2Bp73FHf6sL6mMua63UFinKI6DyQu7Ls73aKQrHHZPNdGx3NnArDS%2BM38WJoZtw3dFKcdp3pLxCKjegDAJ5Spf90yxsAy2xUfCDKi8HijWryimoi9z2x3ZaVX3gWBwnIF6VFkyyhgC8t7NZqtF8oOGxn30ZFndoJBp9K8ZzgsTWcD%2BXR85S2RMeCas%2BlD3ojceqi6ihwi%2BD1BcRWbN3e8DOOnqoXBkwm37otYkuRR%2BS1IsghaU%2BZb7jwcGWxt2lfCIBuzv3uXGM5aWpHOGeSi%2FXB2Xjij801uR%2FVpuYGnoTx%2Bk4dyqJGXWXKV2zYJTcWCU2FGMpii27XUWwkHF0iYyqfL%2BrYns%2FLYG5TuxeqNYTWQRLVTrfjn9zJbKZNDrPzGGgw9uas1AY6pgGk6RVYR1fmcO3T6laMAkjSMgnHpS6LseCbM6QFeJYylhlI8ltgFnwKzYR3PLNhzhsoThJ55zVP5ISZqCKS9RYRpyK%2F2SHD%2BBpGsCgCaDF76uAlDDYjoX9hbQuM%2FSpzTqgL5o9CI%2BOLVViKEybBOQeVMsOhWkBXxELAkbcWI6EPvv8UJdE4jI9FaC7k%2BKfzFmSaG1IjJKtih6Xvuf105WhUvJIRV2CH&X-Amz-Signature=59d1af2265c53ff29938895fe14589332a9e71fbe5774d650ba3d8defb7565e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

