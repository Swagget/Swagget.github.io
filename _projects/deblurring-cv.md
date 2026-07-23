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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTN2CSO%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T162310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQC%2FECfY%2B1efeBS1z9NNko%2FP29MxSrlp5SywjG2ZhXTr3AIgIPrBkAnzhWCAbdJ7%2Bose5iTjTZ0nsdQguXf8u8vfW0kqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmbbV0L6gR8PTRIfircA%2FPKrr%2Fi4OtkylkM2cUoVfgX%2FPy2GoxTr78p1FXpjCPjF3lYozs0dn6xtpMTrn%2Bbuf72VK7BUTngufNpyf9CRfqW%2Ba%2Fm9gpUBrHMuCdJr7IPlG8hm3TRYzJh%2F80O9B4pSsCqG7w1dtZznEIkWUQnH3YhdyS9fWqwC1t2u1w%2FyDb2%2FC44ajd%2BSQY1QKqShErN3067xWpUC3%2BatcHpy1MkqQTtEP%2FFvdBOiAEwBgCgT1r2AGOnzQm0knB8yZoZVgYSpHgEzOR5R8gTBy7wjBbmvzeo5rcKQjv8qnlwiQXQoIZWG3dx3ZEHAZV2cfFC0h4A1bA%2F%2FZjfjlnCLgKQp9jZV78bjxgoNhpUXeReLrPXhg9C5%2BYYx8M6xldxZIm4awICAsJXEv9nQZVLiiBA21lu5UbzwRhMDeohXEvF0DA7noi6nlqEUk%2FQL2Mh%2BueIfdP2kr66etmzcF9gk4d31M2pjRImTINBgrUikrnt5IeW21%2BwvjRGZPjwvti49j%2Blnusa4CZv0OTbsaNXNMGI%2BrJuXU5mzwv1o96zTdz1Gg5r7wb3ALO6PPuR1bc1ER7I%2Bw3oVxo8aEbyhDfBjU3Qk84qpdYns3GjUOaZGkXgcjUNMqSLO7T5KxFcSMTmCSnnMIzWiNMGOqUBVWYrIQGuiDg41WN9O6Dqnu6rwoMDjw9cL2owyXrlUmzRmmIFfGxlTbnAm2itKHUhyLjI999YAzAtQZK4ShVH2WfyqHUjAchFlGUuGow2gGfbzU0jhycoSQiEmXhvuDverBHTmTqWOnf1rZk%2BdpstsTqcEWwNoroTpCr6ZIRbqvRCDDQz6G5rccwWAJAwDpMzSPVVn0cnu73at%2BYv%2B%2FQl0bKlIH1%2B&X-Amz-Signature=4be6814d1593afc52bf0111852d080f007c4f02198f8b2bf4a862c2306bf6811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

