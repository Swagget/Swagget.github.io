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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBB2D5MO%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T235149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDciLNlWzVJZFP5nlkczJTkWlW3J0gyXoLDWnhuVxXarwIhANfB7Ow3N0bHilEsxlAK7pCUHnJeFBvClXL5HuKzQs08KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2F7jlnyDo3b06u90q3ANsaRylFTa0Hv%2BMoXjktvB2u1RIu9RYOPKjW%2F2FazVMLePgjmok4oK1rzDcQYJQ4GiFyzS3cpcj%2BMnw9zry860V1oiIJhaKAkl5JdH3xHqQbtgBeYtNx6qny01CiJb0CfCUkw3E78DOT9fTekYi4QtkHJQ3ME4wHqf6oBOMAxPqG2fCwNRq4UGGzki9Z7bS0POdSGC2%2FbHNI1sv60uOiq8omx4zuGP84c13oJEHAYx%2FqqggQNVDcVO1M5AC6ztWGshbs3CJvziBbmkBAnUpqzpRU4SkstmZ0mRfYj%2BEMhs9MGDkc9TnnAj9huCpdD219AeRx0r1D3WK1oYwNq3tSTe3%2BD5TnKCzuJnuZQDWzqL6HfVbAfDP2LxpWB6zbt77kBJLbrCyoW%2FKMUf9hTI%2FOhYzZ3hYMRM6Y26dvEUnZ%2Bwtw%2B5lzzcBoSn26y%2BhRbBpYMiRC6%2BzWYrTsAxQ77L9%2BzqBbuOQIF7K3S1BRB%2FS4YOa9PBmd1evs2ygtQYdjmkbnmDcovsq7X1fZ2wsMFRO0a1L7zjDiz2lGaTelU3mCNkrifQ53RAC%2BHKlq44d2maB4rX%2FuucrWS53mS1%2BmzWhv0wjFGRzJ6DsmQXCSvY9d1mwXQPObB%2ByJdnfFwbRLjDQvoTTBjqkAcdkGjitC0UpD5qAq0MujoBLppSkGgLS0EE2EUN0PkADJxx02P563WfTHKfujoah7BIlLAfyAx5BiTUFxvSYpieoXuj8X3AWIg9Y3Dq0rgdBy61CZ%2Bf9hAq0gDm5D5ua0w6TuasKtHMKIiV5ZbyCR3fg2s%2B%2BiX5ajLfTqjVg6cpESJPbAlrSyHfyLA8Yn8OtfuS92QL8LPsFKblAQqoJW7lGLyqO&X-Amz-Signature=76bc24a4900a38095eab3df17306a919d5513e862c1164e442a844e2a24314ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

