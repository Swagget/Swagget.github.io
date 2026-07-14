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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFNIM5J%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T200555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIEtIe0Ir0tuMrHdWOIuMtIdXOHwKLKG5oDy7fxcwqNU%2FAiAvTyui9xmMojOEAu3AOJWuT49TXt8cWMOQv9glUHkKnir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMdfYeNMtEwV5xWnUlKtwDxho%2F%2BWbcbE4SS4Ii5YQI%2F2dvlZR7bZCFp8mJDOVy7nzCM9VJnhWTcQ0WaCRFMCbdm%2FPkJmuXTtO5W7AV32s0VqAq6IDFah7uAmqdGANCcwcb5RtKPGu8vYcpXepgRFnZOBnht2oTfnZwqzWAMP1F0ec3dTfxbs2fIgjoqSzyUHIREIxF3PVdfVWLROBmMwARRyqIUx2nCKHVzw2VHCAwDrgSPPnkNKCHhiFGZWMoIQNnlu9uaW5WLpYOrdXJULkGXn%2FNqz8m7RIH87l3%2BjIRbUoemX7OG7MXVvtv3MxCbovHO1ii7GeWgHosxjKEfnq4EkgTd88%2Fm4%2FCm5uw7iPQcNu9bDMjWLVrSByQIzUgoNT16CcY5IyHhEsq8IQtCddhMjfq6N21aJFwTDaHOCUo9Wl2yStisuGou%2BV6G%2F5YRam6JpwQ7C%2FBkaxzy6yNDUYS0qOG%2BcqhUi5183ZEuyOPZoHaHF0wH8n2B%2FIJAMWnXD4vEleCCZBGx5vjjgutOnmU8tVsXyKmNuuWUt8iy2MLDBgL3l2mntOokkwRx9iKRYyoOck0l2rBRCWRa9qH222eZKQXvyzns0zhS1u%2BaG2cjbexM1IxeDeFDWQ2ihjxwAu9VfqAgiuQ9X2LElMw95na0gY6pgGL7jGIWzEO%2F6Zj9%2FMJ8VXgjQ7L2xGuPjTEG%2BDjohve%2F2mybnMFf17VFr9HPD63pVN7duzIkuNZ7ZZ%2BocblSPDM74Ddo28yiOw65oCC5R3JNJf2MdcOROcHZw8URasng2i9PyMKhq9sQOCQdLpLR9pOgyRY0xNUjqj84cOZNB37D%2BTrgKbea8xx%2FBXc9%2BKZfvt880AUX0QQfM0mwaewuwohy28hG5ks&X-Amz-Signature=f1fb074e5289e0add8e7925e8edba7850c9dc96e8f4851d2a2bf05bbc06b344f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

