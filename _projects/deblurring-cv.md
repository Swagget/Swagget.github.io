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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIDYAG5%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T083313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBFCbxK1HFC%2BKJNlQQg3kJz9VYYHxEh3GeLV1MVSRNXEAiEAxvQk%2B2RiMRrAdWf%2Fn1F4sh6%2BZTHbczOw3zXoFrAJKeAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPPehGeGqXEyJJyqyrcA5CmdjCqlL2IbYYoubUzHdpT%2BUGm04MM0dCjfXGgVZT%2BbbN08op%2BMRBM%2FfTIZVaTyclSUqRaWLzDYIe4EdKk2KB1PBYNGOnNP%2BV7OUZ3JtrNxqIoMzkP7WN1GcA85Boc6r6RjP0XoD02y50XeNDNK90i2XMPbRI7PSZr99w1H3hUB4NSKNTNYfbp8J9OBp%2BjxASpMGEa7XPWZiUsjCLSpq4VJkDONG5%2BQkSe9TvmVrWsQFlcDQY1%2BYGoIqIUKiMxMnVr%2FLcR1UMDPy6F6gkwSBlX5vFliRq9NsPsbTkxBaHdjFtiiNoDmoU3mxfTTGISd4ufE8xKyX2hW9oyyJ2XQCg11Hh2Se%2BKUIFXnPcwXKqxwAGkIom52Q810wzI8ueiqrNH12wMxbH5Z%2FC9Xm1F7kKZvRGxD%2FZzwZf0%2BF5%2BQAcyE31Efp3%2BeeHfI5xFMYxuhr1kqesEMWGZwNpq7INQ6b%2BIopi4y3l7xsyoB10bUUSdhOefEBz5PnzLA6%2BSguzwH2aVt6NIwM47uEhRvCW6xhYxkgNg43AjvyFxC47jyVzv0Hu86Z8EQo6ShnRor6S3bbNki8uVqO12smrrILrINNDyBTsJFRqj0wPRN5BQQWb8wyPeb%2FGiz7cH%2FfY%2BMJPjr9QGOqUBCWCYtOSjmKcNVu3lroHKnPvVcjYImGf5X96EYwZuieQbWGyWDqpoHCUZVbtdsDH56GL2COplnjBRc5tzPfq9yakbDCZq6bPKPrrfW3eqzsAcXBnI297v1MiHBKD9tKaJeYCljgqFP5gBwEoDUQpqg3VkPaHxCtky0hGj1OtTkhRMFuyHns%2FO1fRrFmg3q%2B%2BbY%2FktpUp4CkJYfTSZotkXacR4a0Ag&X-Amz-Signature=bca83c324c937bfec7cd92d3e0d633238098233858bf2bf2c0f08082cede5d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

