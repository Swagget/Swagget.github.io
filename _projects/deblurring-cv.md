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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHUNAFFP%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T161855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE1QgckZ1%2BDpmYFP%2BPjsEuTN%2BkrIy%2FkXg4iivN8jS4CAiEA7QI4BeV9TB9LlK8zbwO%2FmwYDwK%2Fpxa%2Bu2CzCbrdIWVgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGY0To2RYO76WUPBPyrcA7FjZLylYHnKBPmRYG%2BIZq13Y8ShmQizg%2B%2BL1id%2FS1ba0UJMFQDv%2BTg5Twh%2B9GPinEqnSoZvBPsnyfvmkAKQX60Kg0ZkUqNsjjGtQO0mCC1x8arPx89pykXl33JFORb7QdN5EMSqBSM86FUTHcVsx1tXu4yUs%2FwdcQLkBpmWQpDx9ChHviTWny4jwFQvSthGfpqgtKP4B%2BniWz3ewsb2IJQD%2BzpLXNQyGnRlZPVAx0tnasivdjqjchz30Z%2BGFQ9%2F6rn1YgIDcHO5DlcKaW2K2ZRdQZ55Jv5MzukyLuDHpLtQnLH5J1Wf26su8i0BRe3AUoUxEO3AA9yGw5ghnYP4iWnZDnoDEwYIgGRO275aBsmwcduJt%2BkGZE3geE%2B39pS%2FIQCBVNGh3UPo869lWW65rpQoWvwpMsQJKgnvlWS91GdI5qoBj6V4gdnUn2mm74cFba5ZIaxhantKHMMiAcHbcUfSGll5hISewHpF%2BYdkTotGwodbAmNnUhzuOeWe8qNKbY7dXz4635UQGcKWazpfM6ltEBR1yPkNW82mOcYppDyC2L%2BXUUaJb4jpdgIgsCGuSxusq4cJoW3ydOBntzSGPnqg5SwvwE6wob2Hb8HSZVVHzr%2Bvs%2Fr69Bad7x%2BoMNSpnNQGOqUBOPYJ2q1n9u70xlGaOIQ%2FQNe6%2F8WzKHb3MnPn0t0RlGGEtQZDzTP0mbf3BQGnroNztJ1fp%2FzvCPCwThV7lqARscYVFx3vB9GmPd%2FxvAEZDoORdTnNI%2Fy%2FjYrMqwXH8WcCSyf8f7oTp6Cb%2FY9MBIIBZBDxxcp5AmYkyjLO%2F170HtCGG4E39M2eEUa2KWjz2Ze%2BRnBujcpNBrjWQ%2FwP%2BZ%2Ftsppb3ogB&X-Amz-Signature=185ed67b1d9cef5a8920cef68f5fed372b9871564c48b0b93629b65dd14e3ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

