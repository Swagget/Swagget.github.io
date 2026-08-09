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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLPT4NJM%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T201710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCko0lnAEhOiRT5%2FqYsBPn0uYlTjbfRsBEypEpnhZLmRQIgB4N15CIMoLjgJkBigRaFwU3OSSq5wgpvezw5QjPyDwIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvnd64VxbmiaCG%2BbCrcA0BxSkuoU0eHgWSLMW83KyLXKdQrgnWArBbbIkXQuT3HNLz%2BtZAcM4u%2B9iIWeICGfZmB4UQX4oeSNFzp%2FRbHgqOy85%2FkRde9P9BTCDWzQLciBGYOm2T00IXxb9iQhokgvAEXTS%2BJXv53PNclvRNt6SsbciKOU%2FKWePpiAxh%2BDwdyi5e8Zs1ATZ86YERcau9nTxRiuf0iagtnZ5VgWOvvIIJWRkl0uhA3PWsB89Rb4P7WZi%2FL4Z%2Fkeu4YKVOvpLMbR%2FNXKRd8%2FjOZXqdrPkdHp%2FEdfGUyt%2FU4fTUMpuswpbxIO4wkdNgQ4fo9iyPTutlJTH1EdRV0Pe%2BfsbFjkfA7URYyFQISt%2FOs0ULWCZpTDQ5RdULPzQZtS0MrfFKSlq95SaX8C8MgSVnppupFid1bkwhT2GR0L7mJVWnTYqR6Z916ocuQ8DRsr4bTmbCjTDcJyD7Nc%2FVEhwy9wng1ujJKTn8cxYzaUR0RqL4Imqgb9XC9jkbD7GQSZUkElZHb3eYZ%2F0T8ciKPhiA5OvbatJLKdNZOUgO9NSwmEeUAtdktGyy7z7hEe%2BjIEFlA2re9fyAvZSRqYOE8I6ZJl9UkOdEjCURrRx0p4zFRXdO0WytlmVSVGPsxkWIiveWm0p%2F2MOiY49MGOqUBJIhwnbQMrKvj7qW0WIoDmRyC1G2MdwAVs5Ud4hRsH5r1FOLzB9cm%2BjTNYsw%2BU6MGRU%2FcbKMGACxPbLniOxP55FBMawKPVPW8aIyfcT5RTHSv0dt949ywSIYfdVDMWrKnubxDQZCUPfWHiYCJQNcymo1fKW4vVqv5vrc5WnEKq8dXPbFw2LRuttSdNdB05s2F7fpl7GESspF7tzQ8%2FB%2BaqZ5EztZF&X-Amz-Signature=15c8357645f02943950d24542281cc4f4748b60854ecf59a5b307a87258851a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

