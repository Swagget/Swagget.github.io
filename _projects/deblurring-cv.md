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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQNG5EFZ%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T224920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvU%2B9P4YhSS7EYehno3r5IF73iIPko3PHOqxeUMNq6%2BAIhAMcxIb02H93aj89j%2Bzb7sCe4rA4U5%2BdA2a52eFn0FgY0KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ6o1lwwJjl1oadvQq3AOwbvYf5a0ezh%2BRop5GQHd4Ob9AYhMBHxSsi%2Bt%2FRKbLfNfmt9AXSNiqA60mNKX0um7L4Ebq3dzvihiO7Hah2iNrrarnmxtxubSsT%2BDt2b4zXeZZuLecFpkEwaiwnXDBx2ti6kVFOglTb12IP9naeQrkFpMLTW3T7Qe3dYD1WfpgpCcwtz5FArF7B%2BhbPmAFeTGxZ6WPGmNaXMpULWNo8VAjvnJNbwVp4WjWsTylc35SOJJxysNwkKEJB2t9NVFWbLJVgEwes%2Fb2LpO8F%2Fj%2FZfQ3gyPJTmJ%2BZAALNsXktf8OCUvO67v%2Bx8bGjrP2%2BJg7kqMw%2BDZFQVf0ds6ZMVvI%2Fsl5l1ieyfRcOAWktKhdOlGLOXfRBuY%2Fhil8gc6F0HZcmbfEHlZX5aIPicjF2i30BiVF7H%2BIlT5eJnwaU0FSUkcx6pcW1rWvv7vIn9ezYgyRN5aLB58bFW7MaLeEaO4lCgU6e92KOOjbwaBUQUER6Vzr%2BFVTESWfX8hWklL7Q1R6BBSnJtzi9r6s2sCL7RFhgqzJy3pk7ClbdMv7gpF7tBMLHNlcn%2B9D1CD9DnGsKFRWF4v8c4OhtYDa1dwcBMh9QOuIOY36kQV3C5jHQ8FxpAfStYA5DVTkteA4tuXnfTCmv%2FrSBjqkAcJG%2FCcgK0o3%2Fli6OqnJ5DPPYX0dvlNXcG88bY6DfOsN0RqKkip%2B%2B0QnoHX5XsbEjczqrLweLMCjPcxRpIKujRy3oXlvpwiQmgR0I740MC4KcLPbjyQQXxswngI5WOJVNrQfl3UXxvTHKC4kLOmsKz1TB53qZjnSDIoqOWtIDqvfut8mlgMhleuVJPx%2B%2Bvmo%2Bz%2Bhf6mbARNfVNNNsi2gs5kWK5HJ&X-Amz-Signature=8404fd7b109eb922ca8e263c723f1e046b8073865e29510eb08de6b36c9f990e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

