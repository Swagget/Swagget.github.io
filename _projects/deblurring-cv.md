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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIZW5DY%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T152031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFTp9qU9s5nL5IjoWiaifHwW1lYfDYatIHWWceM3s4p6AiAeuQZqj7SzC%2Fiu9KX%2FYnq8X7zZMGPlW22wwpL9MXpO6yqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7nTuGt8BzzlLrL2eKtwDAWQQiHrZFJVXILJCqlaALVighYmiF4JbMka1HA1uCmOts9l3ZbT36lnnvjYmiQ1CgWxdkS4c2IfI4X%2BOtUd5A9HW%2BWQxWWArqHzrslOK1%2F2oBXeP8SNQx6Kw6m15v19RxB%2FizDsUXAkEhXLfP7uYT4Y7g5IMxSUYMWGu4SsRJTHZfXVP0mKIfar794Jo86BGr31F4LQF66bMA9sQqxNxEc1620jQQ379noJkqE3wH7PdcgPABFpZNBy%2BaSsKCyhFtnTKZreqZ7eHswfZUSDphdB%2BxmHaqllbGlBGxdG2SMfSk2MSnNRosQfp5ttBCEGKDAmH8sdMoNZrzAEJafy6VyIi8AdYSgA%2FLMyxLki5dmCdv2u1zL7ysIK6YPHhr2gO%2FaxXfM2HWaPYPWO4BtqK%2BrbwXb%2BcWwJCtiSGhphT%2BbmWvuZlbUItyoV37SLrIzJNfqE%2BMC%2FaVCKdbIpDWgcPONDcxRwODJ39hMX9Hf8%2F1asrvqDu4eCGmb3jlPJOFcNNyz6xjm18cROcGPsUxEUQAPx14JVGCX%2BxEaWpPILwjcJO%2BPjLCFvreH6OFAXeGJtigzkcNZA13fcodUXg1Izi6LMAAR%2BQw7LuFX2xkka7IrhxsklYnGzcax4yGx4wkePl1AY6pgHNlTBqOfQ%2FqpXa76C%2BLBRJuLeYpYKksMoCiadrrkvaW%2Fb%2FH3e%2FGren14V6qClUyAiQFvhcWZ3iLE7wFD36xm88ElitfEVd1SqAzhs9%2BJZw4BBS7whWfTxf8Mi0V1alt1LFEydm3vDrJMmzqAIzxNEi%2BAB5dqFxaEIxi5SUibp0LeWwoqIM1td1Oo5W4HdZiljxRVoBmLUs4owghD3AzxvAV5jWzKm8&X-Amz-Signature=b1a258289c163af10bf680925e57c8a9ba7138833994db67afba01ba7976cf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

