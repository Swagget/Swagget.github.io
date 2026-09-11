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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RTLNY5%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T184809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDManMyN%2FPhQj15y%2FB18NhKZQsKYM9l5z%2BI%2F4ZZPz4wxAiEAyULO3d%2Bd082XVvc9Axv1Xr%2FUcyVBrwDy9ViEy5nBto0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyJnIt7lvwqhSJ3FSrcA2t6laVGqb1jk1Vx6u16zudKndoewgOoGyS3A03hBEuPaoTjIy6bHdGahMDMVKd4zSRUF%2BRZmzciN5DuX4sp9%2Brl%2FgIQAfqJZpHga0x6hCvIIQU5Y7%2FZHGirm2PUe29wm3hbX9xpe59qrztWUPIs1bdxaZITY2qXMJUS1w%2BqPdVT1yYDr5ldBcoMo7bA7WCbQVbT4q2QwZJKA%2FukdNgF5v%2FL5Z8PC3Vfoul8dAocH4sgkbXr51g8GaiD%2BWY7zXyjyrY2tuJA4TIVF4ELSX1SHcW2izvb%2B0ZXwRa9q5UZ7VKRwcn6C5lKoDaL0HxztWDjDbGZR01u4YO70bX1fXm%2BGktwX1EwKOrHAqCPOVKYl7kwmiZE9vYVoiw7mp7BPSZCa8%2BTTHo7lCV4wQkleokKazxYdw3nznl0Y02BfR%2Bh99%2B5%2BUt6m0UnOeyeE%2BcQZL2y1vSpBLiX7gDwYd%2FRjxhAuWIbpXKxaFwnuFgNMx9k4rYM6HvcJvXOihKtMHCkyOQjzh1G5u3266Emz733JRMk5M74v%2BEFQTYg7qXDUWWFia6HJr7RLij4%2FwaNiy4BoQLHr7bDX7wp%2BuTgDZJ6NNkbQZvOn9Ix%2FZG9kHCpkskI7vc2dXaugJctfBafBcWzMKbfkNUGOqUBTIb%2Bad7GxrgM%2BJyXRLgqzOrlTI3vI9IXPRyyuQkwK2cMoBEop1%2F0lRXTippdYb1uw6DIWiDnIWHAK%2BTv7O57AIk2lSKsXgUQd5aNIdW1%2F3eC0DAVjebNXkmTV%2BJLrfmiffJG90TVq2rHIpX05MYh9kFcXE%2FwNTyhSmdE1ky2dR3UgCnzaGjVf8DqecGZdc2hHD44kO%2FNNjWr6NvfLNUX%2Fqy0am6H&X-Amz-Signature=a95b5ee35dff086ed9bb40e1215fdc521c24e593a1b782132f02e49670d313db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

