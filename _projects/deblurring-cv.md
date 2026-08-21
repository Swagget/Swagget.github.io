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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQRMPWC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T152028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5fF0WfcKap%2BNtSB2SdZjB1aMOWTWbYLDu6W0M042pOAIgCTdvZFClS6XCVuKyYn1VEUQDKr1xFpBc9jxvkvDjqIYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPB91d4idYEI%2Bc0pUyrcAzFsCefS9qrzv%2Frn5K3MFM3vS5tcEIunvbXHgDsNZTqXJfcKAoiCfrV%2BEDo7r9us0qUq2hRX3H%2BxhD2YvF7hOcC1LMTJRw6Zeh7jEGPUU1QF0ccN8dq%2FTcMDZmF6TLnI6K17ESzs61XdOSs7k5Ny3B%2F2o2MkpeNIxdHdK47q1%2BF1FrlNi6mC9tio9FY1zYpotAgCwjsjq7WGyAIkpBlg1kVoLBT4Ef2p8aH808xh6iAhRFeVezZA9Lj4q3eWhHRsiXnJZKySrzgB4bKqBurL8fWS69i9C03vIVctl0HGSeLzkIEtaweVC7vNlcvc1QhimszbZMITc0WAeIo8lf%2BlmK%2Fu9buOO82SD6E856vCyVLmnGyPJfKOYTqAE8u8v91nGA9bW0YDEeDTIbaQDUPMsJKErycCM8EebtdPICoJQDz3blEO7yfGcj1zED2xb74MXImbwDXhxfhNcMU%2BvnC%2Fb%2Bz%2FhPAbU52fu1zFomRPrBK%2BYAVz6LcqiVKgp2JW8nrD5RuUnChZfqL%2B5nIsKJmGjcjOo5JoNW%2FpqE2odEbu3HDkm7E8ia68qKBrpKzzEU4%2FIz395ULf1CTCphu3hnbho1M7KmpPv3iMuKiCF9tv5dr6qZW1NyfxpcMSZRwBMJLEodQGOqUB5nm2Ii%2FK47pMFwweYFLv5rnvMGXHy%2BNrJdUJrG2x14NlwJ3mYcOCzjdb6pBtVL%2FdhXx6xxbUIq0R07rTPAwjut5zNNTEwRYFy0e%2FJgORA1s0k54e1uUFhClCcmYSoK0F7rEYVCugBIKzzfV9YADxk0Tgz%2BSod2%2BJ%2BG%2FaMwIi2Pp2MRn581ekFybdyzLv%2BeEBYPipUJmub2p55NmCKhcP%2B8eLDbzS&X-Amz-Signature=418f051f5a0246ad21931667e7456bbd952e5f6386872e21c5751d2b23027abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

