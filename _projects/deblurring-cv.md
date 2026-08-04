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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGEEQH6%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T125121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCGcbClm5Btr8BQkCZN6dSXvqKsOr88dnvEC6ObZ0UILgIhAPYFaYeTswnUFnYOg2KQcQTuDHasJl8YToPyT4s47O%2FWKv8DCA0QABoMNjM3NDIzMTgzODA1Igxh0PjBCjaYgi%2F4MF0q3AP5ZOIEkNUsEFruZCw4TfuTr9eCE5H8ROpDrqp7CNLf0%2BxF3iYabB4v6XvESLbRmD8ZUhmz0bhPT0RzHcMCvVb0%2BMgn3EOU0lwSXEVTzeCoBCjEMKO%2BMC844vYKWBRsHW%2BJeiZmspEq%2F0w4nD%2BUpLrnYSeWw5zoyy%2Fe759H%2BIEGPBprasndeD9%2Blhgk0ixMLMSOV2ULJ4hFbhS10tw68G6FqAEwhjZPt5I9xmshsSn%2BQccsNkekRrQxyIG1hmsQanibeV62mUYpnD2fKVeleLiWVgyO%2Bs23carPbPLXuLzptnNVgNYR%2F8aqxO2DnaY5h4H0bgWtZ2L9cVBzg3wIHcpeBZITytRcd52s46KLRvADOFOWQHoQCeyVE3HvB1NeuG1LZHqNQIWMqCISPAoAAmWrPKCyBNW6UV6HISuTL5QYMBThkYMmQ0MSxgit%2FYHSbkbugIDVfOXZDileH3RBsrrQtBuTZ9eQPt7ARR3TLMpReJsspNXyA4WX1GCCdTOc1ZOn76on%2BX8lo6VnNqnBeFtRQOZ17A1g9b0k%2FBUwua72qMZkWaIf8uMwXhVRiKxoMTd3O07R7gzJ%2BkVZA0O0mTV28AMTsFwA8ypsRLIjzbrofdJDcHZyPMQwGs3V%2BjCpnMfTBjqkAZXj7qdtt5ch8ttHZZIfBOQb0R4ZwOVEYDGs54vpVdAaSo6OrKCxF%2Ft9Bgl2MjePqsmXWU%2F4aHos2dwTBxx%2FPovy6dAooh8Hi4HfntkXq4vdh0JNU%2B1B6i2lj4DBUURR5HWETVFPxLr7W7iANycpVURhF36KQQSrGv5mJX%2BiVeENeuctWIRlGVzwVMj3PUg0pa%2FDoWsLEGU5fsebf5OVUuW%2B7xdp&X-Amz-Signature=104cdd2a5f4e4b593dbd8c1df2156b5916fb09dfdabf600695248a8b2f0031fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

