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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4GTCWW%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T201910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC2vXn50i6QXlEZ1RbKfQz8oPJ5SCowXuMQPDRSJ658fwIgHtCzHtCBpFNpmPfYXteJDIZJjvwoz678UfnEsgAFm%2Fsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDBVcbfCc%2F4f1yRb%2BeSrcA2G9O7SUSGRu6GlDmCKQjENiqLouPPmVKWqJj0kjisJBWvlqH%2FANtQm9lD6k9M0aEf5kW6Qdjrt2ww13nc7mXw4ZREtbiZ0AeQxJBul%2F0IqOhX%2FpPNQ2FsEq0ARZ7NrgA4reIg3q2%2FLGnaRvrDuWhbR8YMbmotwnQo7G3X63ls8EWCcndInCsZduE2GtMzAV1vKH4U4qwa8Sx9gxELMUiUhQE%2FSpVOjUx8VJBFUKem9Pu%2FMDGcpPPH7%2Bp25YbcfOwnhvYoj7L7kazOg68CSQEOjcG0327EJYmlmxD1VweJ5guqUtUJKTIBZLStfY70z5KqFiqCAWhA8x7Kr7a7GstEKvqtlAnAqvnJFuqpcwKA11MrYlyRlXyCjRuT0r1pF54R3qGfp9l8DMggy9OmC9gTIp2CKThm%2B2KbAmYFUIOM4bAhAaDHx1sDt5fKi4pxLwc4ctLMsXOELBay67Ftpu8nHetXG0QoNCbM5TmGs98Z3SfXUi1p6oTTTVG8b4H3tu7GeuT%2Frsv8U%2B8QRArvuzTWnD3KfGN2LkuXUyAOkSfv9r2H5emgMmwUzrNVVL%2BsO3CjhokzyPaXqX3l3LyaJFyhMr6WUI36JNp7QWlA8SzCKGE99bGn7y1uCHGWpkMKPv%2FdMGOqUBi88x3LRC0MgKKFuyDWfsuLNSHTFbleqHQhgdzzBFdQErVR0olcjan1kcQJ184zkbakbkwBhy3o%2BZrSGOTejgX02EJ9iMhkkWJ4RaTUt9SHHKJJXT1psXYpBpCIlPzQ8UbPZ2sZCMq6HKEQMe4ni%2BgB%2BZJDPXY6sIMwOp5ThnFY0pB%2F3tSUvVQ%2FDpfdhNBp7SRww4YgIXsPzCL3M2Qd431OqrBBnu&X-Amz-Signature=4e67dd15195f558fef6679026c49228be677b1df377b7331f3baafe0a695f6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

