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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWDWAKU%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T182031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvGTwgsi1E1KKcBcbQGa8Vta1Y0w8Q%2BlLZuoVjBYug6gIgE%2FjrWCK5%2B7K%2Bd%2BUBXwQWkPtLg%2BM5WBbHr52T0i%2BIpN0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDE23VW%2BkohjCZsQ%2BhircAw86inFAKPTG863MqHHi%2Fr9DI2LiKEy5BkYr6IODGIAfj0up8t5a45Vm5u522U3YJ9Wf7fNiU8xaWDrHjWZW2GKWkMnmagGAowcV1fUkXVmKpe7fr8txujxPLMrtcF98RLaTC%2FjwdIBBqhgV7yzYhUq4C5NtZulgSOzo0GelUzAB1o0yqMt2kdLPenPArT0mGCPbJGSORJ%2FCBZAtQSvXuxjhN8105ODhem%2BTkGq82%2BRqN3TmwAx9SouQqG%2FxBgoTav2DQxdGd73pj9RMo%2F%2BWc7qB3rwNqgVYtDcKbgDjV%2FSnmJvoQUQgA%2B93hM6Paty5O4s%2Fq7bTT4OH928r433bKQYSxQ8Rq9S1F8gnSGuxJZwkb5nyO32In0hdQ0ucBqNwpSA9EQCdgqqILOuRfws0bj0f4P16hO%2BMrpve0GI8exmkgOnCrJ5%2FbNpmmdlx1O0Ecyum7rpUeGRvWgWyM1ifSz1SbuIs%2ByzOrIsYKJW%2Fy4%2FPtLx8j8YBPpjNbEA2sOkUwv6ls7KaA514QxojPXycxJFFPGS8vQQztTrApCNAM6l3kkptJ%2Bamfio%2BOsJBj6xbvErDR%2BsElTaGAKLknTh%2Fft2FB%2BmKI3h3lL0%2Ba%2FaO68yi6bGVpiAUJyPrxWbJMPbl%2BtEGOqUB3G8e8LSL36R5%2FOQRQtoomTnYdLcxYvMj%2FxicIVGgQIUIgakZrdNjzlBahxyemdfoP4ONQg5ZIBcmp3WuCiMBRbfzf9As0eIyTCOj6G8VKJcluS40Wh5WyOnrYIIsCmXgwlJt2qEx2cYSbqNjwIo9Kx5beQcZNN53S2l2oYTBMjofbWItkjmzEveWbBO4NFtgE5m%2FzT5h66uyeVq5Y3AHMq8Ku7yf&X-Amz-Signature=212c72102d1d8a064d2f998b5ac97101bde51362b22e106a2ae196be1c5e5e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

