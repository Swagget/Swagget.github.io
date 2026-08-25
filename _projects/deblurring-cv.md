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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YRQ7OTN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T162141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDBhRjh1GV7syKLm2XFFzREbb0jFRkeWcDF1WxGd1SFzgIhAOxOCQVkdbgSNIKkVjO7Fr0ST2v%2F1fs1IkT8S6nnCMRpKv8DCAgQABoMNjM3NDIzMTgzODA1IgxvPrmkDF38JFeAE%2F4q3APy6O1FbGTL9DqRBK87MT4eo8unbJ%2BFj3r7yMNs7fX5LxPS8Lua4nPfzJiuy6CKujhIGf7sp1VsTljsUPqmO0nhh6%2F0jjKLrwtrgsA%2F5OFrAlRaTJTy6VdeQcomwxkKON%2Bf5WsExrov80H9YjUsscVIYQcJzKcPHad1y3WhInWwJpv1uBaPRsHeN8RhAjXU64zBllqnCdPpDFK6gP%2BK%2FSix0sAV66hQhdCv4AgEM6ovcvlvfgY5vQL2Raw7oNnzyyAbtP80Hd3hoovxti%2BkGyvh53OWGr%2BnajAzvQ34CPSffc5AOac4r%2BI9anf1gd7Kl5sEh7Suh6E4XQsC6fObRyH26x0SOjIQCYQGiQuncpIAJ%2BtDrh2SypDmu%2FyCzGvtZZfN9c2N1AlqDOrG1D2byOXJPuR%2Bh%2BbWRtSuCG8Qq9ezZ0bC0xQEyRVFH6L9wQ677E%2BYDoDmoeufHOHA%2BNY1LQ1sYJ%2F5OEoBrnNJuRmy8oqDQSjFrjOd%2FJiRq3m0QwkjxSBwi%2BT5SSxVjLNBnH%2BPm89BeOGPPh8VAbsJAWQN4OEePzXFzw60n9ZaiC%2FJ7bq9qCMnEWkMkc3sr8nQJi%2BnksZfSvagO3ArVIpcAv3mrPZV3%2F8SljkI%2BX8tL%2FiQXTCU0LbUBjqkAaI%2Ft2TyGXj2ap1nj5EUJX5TKow7tAvdX4xoR8B9HsT0C1s0xXafn93UdPPjr5qsKRdwxrQ5usPphhUBi0vtu%2F1JVa5AYsFtB4eDnpUPoQLKg9kn0hQ9UW%2FSpTOaE%2Fy3A7JlhnxhUQADAfuL4dGLCzcZZxyo8xUNPHtRW1RwEC4fpdmrkf86B31Lfnaptct4TjDRqtSevRcwHX0QJ0IFJM%2FPbY6v&X-Amz-Signature=6f04ef28104e4141c07fe180e60cb95b76511718e2f9c1e7c063b0595a513ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

