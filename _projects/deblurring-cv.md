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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BPKC7RV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCwM9AwvBaTxdeYFacLtS%2BovGnkPYxcga966N2KF2d8NgIhAMyo2Lv0%2BfG97WWZOFgnSAHHpYbewWq9QemzL%2B%2BrgSIAKv8DCDUQABoMNjM3NDIzMTgzODA1IgxbSe%2FIW1xZ%2FMCKII0q3APvvqJPYmH4rdwODRMQhKmYETnQKCr5PGSR9Uem7yExxLnZKJnqHrTGzD0ZB3SHEwvstIr5HMDNCR58h4QC5LdslPzgkTcTKKTzFQu4QYVOQrjyrzNI97Fehs0Kr0U0Sc%2FKXtrrs%2FaCgCVcRxiaS6KwJfhrIqL4XNSEeLarVsFRO5kJxHzWXM61qXBgd7XwvInCC3dfkVToqsJld8OWDOqvuYvVlnmiROPB6T3%2FvdP8uPee%2Fi9u%2F2NGn0CVzjks8hIqA640jNfQZZ11aZHf2l00oIp1G6VJMmLmr4iPTwSh6hbaqrkmOsIhjaVvJSQplIhTO7lNTjJL4ppmcx4A5VKvbyRMU8puRQzTPyj%2FmFBAqQmJtOqSmnXCDOoTxr0rXHlu9sy35h2XaXPNwTQvla%2BZf0sm2%2FOkIMX8xrcFLoInqkb0SVMy%2Bp95USOJnlgxqotq%2F2ASjNk8fSK6Ah3ApWn9xf3RQxwnKZ%2BeKWnzSQcajH2c0CFsVPePl8V62wL4wVVlEDipX%2F0uqqUch2Qq9Hyu2ui5aFGrY4NShq1IciVzAUgMDw19l7sYdu6pNXf%2FBA7AUVXTBpqfvvYR1I5lEaGNLAt0QNFxTyiZRO0znr7ZOPKs3sc0Md7VA9EfaTDztojUBjqkAd5opkMSG1lDwIBVf8L1jT8Tb5A5SUEDsr95O1WKk6PcNUGqIMQyXg4SumoyjqX3UruY%2FayXdTyDbKnMbHDQfxAe0IPY%2B6qIza6Eiz5aEGJGT3ouZW2AiNqYaegweK5Oye1n0v%2Ffr%2FIWO5wSQyB0k7nPh3g5Ys%2Fmif%2FwEVdVXDC2Q1WfobP8xq34uQYrvO8Qpf7BcEecAGd%2Bh5IEQcI2BFu4r8uW&X-Amz-Signature=49ada1f522d10dd1f42af08bf192eed3178b6197281fd607bce72fe8b85cc337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

