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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UHYJGF%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T193356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpPTw9XneZWiSci65i1BJ4pmKkfV0yi6OmlL%2BtsNxhtAiEAhYNr2%2Bl3HE13oIGvtJDE%2BtxDpePY9xy%2B0X5ty5JN3LEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAR0rKaM%2Fj7lh2UOjircA8SVJZ%2Bx5Td4vgoqa8Oj3%2FbjvvQoMF2wA8HVxIhpYDKqzEATFcyQ1aSHJ4D9hNTio%2B9BfVn6B%2FhMVWnl3j5JGc2oHCa2%2Fi0%2BxaGonAwZXvzSeMmTx%2BlZgUTAKfuQNLxT49PSSdFKDl8Evo02XiRV0g3LgU%2BF0A4wWwpULUTKzoP4Yn6iPA24C0zfJBaH0UHPuaj3x39%2FMkxWsv7ifaWhKd8hNYGg4YBKEumLQ4SRZtTOP6aoosFH%2F18%2BJzymj5Ot76A1d4qa2KndB8VOXH2%2FrkAvFfN1OknWRX9VVS4PmtACjTwHYuYKUZDnvSKtx1BYk2seP7I4iSnuy7XPS1hqVW7JuWzcb2ld9sGOm%2FF%2BDaPQcWps8GsgM6kRbA2ft%2BuwcQMTQ6JZhzZaMCEvcaCh2Ic3ADdyyhh4vS9JQOFoBHAGE%2FUUiMuvC%2B9kRAeDDPm1czPq0KRgZQ2YH0TJIP0m284tZIk%2FoWq0X93VCjMhnI6lm2KQf4EcgSI9XoDD8O5ywEr%2BXa8X4FQLPdIw8unVcwusF7w4kxMS%2BlCMHtQiw7AIBIoFFKVYRQEpwJBL5AxqtsfP68HORdUtZaCYXXhuHMrIBrCeymRiTi29%2Bhh7r8WUwKZZZSnE3voo9TDbMIHxr9IGOqUBCu2uC57TamymUYynNsryO7aow15BhKFfyouUdH2MfCIdULi28zenGTmLStEbjmAXsVZooJ47HL8R0Wj3vn86t2DETLK2PRofdrklnET%2BxVqjHd0GKx6aM%2BvxTtezlyQ3aEnDLbzbP%2Fcn0ioUEygSjQChJOFCINSQ%2FpiJFp2HqJtlUbl0MtQxfyRLYZXtVO2oAe%2FpPL%2BQ1vf1tc95PGKqESnhOzSK&X-Amz-Signature=cbb9334e1dd0c810922f0027291121ecd42065d0d0def6b4d52e67d74d0c22f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

