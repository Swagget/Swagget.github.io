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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D53YWYP%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T222821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCBcXQ%2FZVt9vWK7zQZGQDX3wMlXlrptCybVU%2BpQMgWVMwIhAKq23s7%2BddnJ6Bz2H8jCiT2dNw8UwiVh9Wkvb30gxMKLKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofgethdOg4DDS8fMq3AMnMb9FbCVMbCEbRmDFOuFbskhD4S7l2St9A1EWLSW25QFJDjmxwwL7eg6lpnYtgD%2FziJlx3IWeXPlsqFpOWErVz9Ye9wIvmjqXbKBgDVUt%2F1UOtkPoUn0rl4P3h5ItJHT1WjWnshqx0J68IMexhUvZJ8BGGnc6DhQp0iAkgtsjnQU2hLJICJVYAdp2jyRDqaNItMaRa%2Bo5p5RJhdIFnmuDWya8Vb4OPaHjdx3BarpuZEoEt5j4WMDSCArt5JM4BiMowryrX583fk%2F%2FyTBU%2B%2BVoOs6DuHVx5PVPnx7dwq5GUvCLZWm0HHmFJ8YEh3xeyJfwU%2F43mNDK%2FmbYvZAvvB%2B84IXSIzFruDcgkIRs48mrYZi5QFOcU2UbdHLRU1Wiu3HDnIXnOEgab6Nlto7CdGfNDkCE6EZUwoURxCiOcZuNc7qqLE4IAGk%2FiMDpNDm7p5SktBT%2FXmbpVaUic4Ac0Z%2FZ3er%2BBSmZU5rCtikDoeEDq6WabpqlKetP8yqsDkVUBO4LhmLwjKrNJcIp0VrTstJB0YYlZ1qL7hQoN2wnbMeXUtNT2%2BOSN4KsPQjs01pqs6gu7fSspi2ojwh%2BtvEzgzX5qPWtPVdoKwRRWj19mV8uSbeUMPya3Mv4C3kW2DCT3vjTBjqkASXX1YHS78C8k45T4UzGcYA8MGibybskynfOaGgSQnwNtM4UbAVg9UpD6NYPk7KMM9YrurwI2Wfa9se9v3yVu00%2FkIpoYlScJfNoWZbTh8dUnUeYjqKzuvxFDmUVwmEobHQxHDdG0Flm2UXIl3Pt8XPccKeC1l%2B1g3XDB6EqsJTImvMyuTpUZyjpTSVbQ3bu5yXhyTTrsrjUzq76HF7Po0DUyK7s&X-Amz-Signature=5d767320a02cac2f679f159f076d9416e42032b7d3804d6c7adcb32883448615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

