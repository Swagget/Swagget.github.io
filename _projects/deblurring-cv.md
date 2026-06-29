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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCTX6UV%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T204558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoJoVkUYihf%2FZd%2BnUUQLHC4HzJtD7dt1LtJl6Ooyo5jAiBBkbUDES3fTNAJOzjoreK76IrPfpnouX0hj2%2BlQWcHTiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKqSCXdlbBPm19f4VKtwD8iEWoaiBgkVMzGhqhBBG6RaHii5HxNqdnayoeCJrkCIeO1YtYAf%2FvkmGHuWclwElKG1AVVcNxoTTCvDlAfpp6SYENbjZrP1p084zri844AlQn1QwISFXZyV3V6yPMxToaNBVk43oyC%2FoC2IWVSsU6wqdMP8aLLylz65vqOPIBO9xxJqixifeUlHs4aNYIaJ%2FkYw4KLoSe7InAGgD%2Baoq7F0xjDEaQ%2F6xTIiuyAqcvfyqWHtgP6oUZcgfBfwXRkoS9xY%2FFC5%2FQNJuM2VnM4dQCvAhnNfUn%2BJMSpeV8sG8FqoOIZTUWnGhJWHkkUlDVD9SSXeDOttJlRvth8QcG06hh1qY30DpdbDfhbrIciXzpdqS3tkwJbTc75JvLzzoyxVWmignwj6o1SDoOx4JvcEzqS3brl3DMgmgeKiFgtLkmi0LI7U4mbmFvnq%2F3olWWuTdZ8eRFjJ069WUDkO0PkZTpJ4F35xnGOZc%2BOuDOprf5iwcJnlMtQsAhgTW%2BZg3V%2Btud%2F%2FmAh4WIy8AAZiz3jZl3qEwlYQ9rYuuevWaE3JceNrWncsYUaJ1MK2qQUMCw61q7sFdQTEbjrYvuEZKf3B9aHKATgFwNOX%2F2x5VuLdbKGG9WC%2Ffe9O0Lxo5FCsw%2FZSL0gY6pgEwv7tncYL%2FVKbCWOUB1iG3pIJ5%2F4zmC9ilomjmPR%2FQdHr1RJxeTTRWoF72uAynTVZFSkyTfYF6QHKVTJroGuYbz8cL1nS9s6pm0vh47A0pOaLQkTRJx5jSq5P7XyMU2espzRkhXCUyowA%2BW0cOQD9TMbPaOxb7on7AqC5eClqzQH6cPoDjqYbWDBI4LWSq3OfDEWMpo8U3HRH8hvhW0Enh3APMO8%2BQ&X-Amz-Signature=f3af0d176fcecba7b5772f10f7ace5bc25ea539b64b625581db13e7803cc70eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

