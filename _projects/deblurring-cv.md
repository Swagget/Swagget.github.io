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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REV3HXAG%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T111503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG441kn8rcF4pVt5AwNUWAX%2Fk9cIwzPYGYqK9TGEb2V7AiA9%2Fl%2BwhWuhM4yKnHKsyggaWJR6WcTX81N4KiwgY%2B1GgiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUj8ho55VDiyivYUeKtwDtV%2FzTq5S8OiYwGBsj062iyTtHwuEdFvuS9P4y9qK362kCWSFpMwiAyW%2BNW6CUxmxO4iixMuFHR3ySre5yQpBGy%2F%2FM8qUILHJN8bFzxsj4a4PKD7zMzJQewOGlc7g7ajP5d5AXjMdFHstwU5x8CC16NjvpO%2Fz5I5l51ljKhS92Ntig5cw42plAJwHLaO6dEqp0xguY5cooI2gZp1D5qTfJIydeUxWlJ8LQi7GUEL9R1Cdo8hCeSmf9vaeamFSWuEV%2Ff6ALiCuJ%2FNJS0mCNdKrUbU2twUtU5%2FuuxbmPNhYfT20A%2FwP%2FAH7kT4d%2F6WpvkTlOXgYqjEZX0PKRXSEntlZ5QUynJldjm64rsWJUBnX%2BYvH1OFANYqe%2BW8ZawZ9cyZ0JkNJxdyyb%2FesVFSYVFXl9fK%2FMYAqSIy%2FgqGjT%2BbpMvM%2BLOAQosafnfDdRlG%2BpGJWGTG%2FVmjfVxrf7aK1M6ivTF8lOsoA8PqO%2Fy%2BNwQHNL16bBnti%2BhI9VDE2O4ZY7xCpXqirLFoduhlI0yA%2FHWPbZ7E8%2BCirdA7hix%2BwiPPtmI%2BBmIjqORHZDfUEDsTZxqYSKIYunDuqAzvOPrSBMfupe88eZKWWH7qgMklRf4U8%2Fn62wwDlGVYgCSE0rjkw4q2b1AY6pgGUOi%2BE%2BmbLPwN%2FZMgft68K%2BAD6Sk0Zrznb2fL2LJaf%2BGCkvCdJpA1grhmIbN3hhT93HOxr%2BBx2a1HRZtSpvmupQHSp8wlhT0T1m2NEmIikMUeNpb6RcmSMYTKb9ztqGNQvLv8n6690Di4usMm6P6oY9Q%2BSekHKPQFsCipg1q4KjK6TO%2BTiPOR5yerzm8OE0XflKLRhCvFujTEcvP%2FSeNU2y2RI3i%2BX&X-Amz-Signature=154f83246c0917e3bd4bbdb54ef79dd18bb16ed4399e25e5438c158f6fec52b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

