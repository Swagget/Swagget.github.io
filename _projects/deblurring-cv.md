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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CFGEDRO%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T225235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUxuSGVCpcESpBQFGcrtHqKvOa7Ebn2U77KHO15BVa4AiAtTTVxy9dtON5GxmhM%2FQRLUGpvBGQ0BVXXgPeb7pqa5iqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH4knNReeoPxcaQ0KtwDNHsCZ%2FRe7mo6YEZ9ivOlATCwOdxLK8%2B7o%2BYRyooeSoTF9DF9KadEQGjsm%2FBs2PR%2Fz5hB7xD3NxWYHItcP1lJ1s1roi6W0ggUBwl2HLLJbLDzkgWzen86H79A9fEOr5rxvUplMcPKMhHBQhnHc%2BBX7xibF5F31HT0ixa5z1nNF4G7AuU9z1eJ4wC5CLvhKvBe5JPqir5modzXTAXyBpY0EBO5UlyVEWOjbfu0HhAelyC47P9SQqEldjywpAlXV2M680MyA6albUBpR88hGtGDvQw76ErfHXdp0G3d29tOLyK0DUxmx4hjyDJGTR7LpkYok1g2NrxDbTXCuLPmvdKwoexAKMEKOXyC96S8Ddh3mjECMK7%2FXvv9409D76cgxj%2BATu96fR0u8zlbOsXFOUU308QaKTb7VvzUQyM9Tz0D%2Ft1b0rxjbG7c5n%2BziRAtDDrMcRjzuT%2F12KMCOXDXXMrEaXwKX%2FqmfS7i28vGrIL3eqE%2FGL1nRbvWrzNkP8d%2FByZXe83XfYHaxp0roO33uoTgabks1hYM4BgIC6RE9hdNLOII3YtPNAus5aUVPwcq9nQtcvPa0UobNrxCOX9gOijw5b4SjsvZ%2BbEWDznZ1nnxu0IRXbS9iH7czm376b0whbaS0QY6pgFJVIt4axXJaybjz1P3QKrdvd8wEj8qrfsuQPFfyRbPWd7LIlRIOhnoHZQylp5gWoBYcGxkwNtuv1vNfFM%2BkMLilJxXZZEFcV5Wdjn8nidFEXwdDCmj97zYaAyfN2oVtYF3zP95QjOiSbvdPzizupJjS2YMgTTuPJc%2FwS0cLOrsaSQUvTo0f8QpySj%2FQdK9wFOUuywQ8p09KU%2FKOoqnNU%2FsM7M9xCvf&X-Amz-Signature=ab07a75a381af990930179a757a57bb7bbf72da7ce759e99e02811a034bb6c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

