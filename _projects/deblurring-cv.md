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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH54IIB3%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T234442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5nw6%2BU7Wbf7oVKAmVeSteeDw%2BL4QGYw6BWHt4Yi8FeAiBSnIW3RxGUNgwPvMKrUwmOz6ek6gzTQkA4zXkxTmqAtyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjvfkV1ePL8Q%2BlZchKtwDEKeNeehIDzWsNnczSg5L0H%2F7Zh%2Frfn0N7SWRpYby6KB7xrQyncspkObYiQmS7uEwwpkkD3bEF3ekAqBlfESNYGt0lOHIiylHUyF8OA82Si8VwsmYnJAr6x8lzJVZT3z%2BcSmxflWOmeF%2BECBKCi1Rrk1VFEABJumJT3OyJu1bb0sB5bKNgvCuaz%2B6Kgg%2BheMcgDdvstigF2f3u9juWn7vlHOLQUzJKBFQgEcMa%2F2k7VRtmqPhfd0D4aZ19Bswsz9aifSyWCArbTZp%2BPtXUp8EZmq6%2BLCEsUM0AUTknQQuItcCrE7lKhd%2FtHYlaVyOvb81nB2R%2Fjibx%2B4Nyt7jdNfsnsrrzZoa8g2G3xMlnD5m%2FyBMJxfxEIVfAgki9XRFvol%2By%2F53Mz%2BTUekm7Eu4yP%2FCB3gqrrAs2gMyZOxe4GGcwlNwPK%2B0MFTty3Di2T4RA9wLsr8L1m5mZQomXqDfQUCpA8YTRd%2BrahhiR0B6s6%2FuvrmobTGVVZ9q%2BA6vqWaX7MOmGmPVuTJ2YmBJohDZMIVRExUHyG74%2BbHOFhi4vKckM42MNE%2BeVR3WkfjPfCHPE0VrSuYCDl9WhpK7W4QOACM9198wc1P7Z%2BiitmiObFJLg2%2ByfOatOF0IirEflnsw%2Fc7F0gY6pgHwlbpo3zYABZtXVfE1n5M%2FiVo7ITmS87w0tg7YLfIubelbRZ48ZHKAPB0FuhAm0CJ%2BanWOCwqM1MJa9hgBJixeiABMnmA6o23mbfGs0BU9Ga4QNkOFq93M45nyYMHadsW3bQILBzDKapHsanjax4S6nUib08f9KqrxssQtaDt6Qnys9mxv%2FXLnfGV%2BbStIcsuIs%2Fox45acYnl4TBYwo4a0jJVXyqYH&X-Amz-Signature=9c265a6f7aa6b28cebd0c58020a2231c241af696289cd44884c85621ee7cd39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

