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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RXZWJDJ%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T064345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6Ujyo8sGGbtdpXcZeZ50Vi%2FK1CJDtyxm1zsHIG75RBAiAKcvmeu17mCG7tSf%2B8XR4Bzzi4lA%2BHj4nr%2FccF43E5kSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMqD7Tvvf%2BdweECncXKtwD6I92AnPfNf82a42SSOTMWlv%2BuBDBPsZ1oJjxjVNz1hnkxx4KwbbNwYkSxmD%2FykkV3wlw207ETdNekdiNMh%2B2gn%2BHg6BtGB%2Fcy6D%2BzdlrTSatbutWpkoSVc43XMbT8nHtXqhq8qhpPkHMGwmNXJqzHnIEbXe41YSC%2FG8WjUC3NjqaQBHfKlIIE2vxYFXfLHOVwQ1dbfWtHPUiIP4plK68%2Fg2HjdHoQp9sJ0pLy25qzsHAjq%2BukRXtys3kjYd6832krZucHEA4lyUXLdzLOrss5TINyLl4LUTRdVE0zLb8zGgSFShc%2BGb9e1C%2F9qLqhSsUWiy2dMsWVYEB7W97umY8pcVo4zN05sGgJ6QINGsO11okmhNZ7CqNm6FHdfxZPrAlLYIizXg%2FQHCTCEvSQE515eMg%2FmGp8LQQCBAWIn%2FPcnTdJxc7VqE%2B5BFaWL1Bc1MXHdILdIuPKmSa0xxqACi1CiXVrn%2FclQAiTSLfzXl3iGvj1MorbH7sNj17kV0t0sJH%2FFiZ9H7sf%2F%2Fodt5AXLwo4nefDBDeTSjsksVDzUzEFTuGuUWCCB6mKgVjLA5spyMpGL6nXYTbl8n0lX%2F5Slgig2NEigOcqUkVsT7YkBQzZDDz9UYmLvEikKdHJLYwgfCI1QY6pgGJvfpDEEbGg38kzf4TLXEKpcziOXuHcp%2FRJ9EKnMK88LacOuQz7Ha5a7IfzZJhGlTQAkdDf4ogm4NekAAVSYM2wFXqOAzwal1opjuORU%2BecKaFBcwHLS3xNWrEJZGAInSHEqnI%2FnO30AbOV8yGkAmbbBU9WjGamwvoC7tVIdD1FEYt0zxAos%2FtMowpH6XTQ0AIvXMuZlMOuVbRZYFZTfeLCSMlzxDJ&X-Amz-Signature=99c041e1da5c4ce134cb9685417f09239476fd19b7697c0d89f0a523efbbe1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

