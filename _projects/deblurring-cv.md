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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UIRQS7%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T095217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIH56%2FIlC0xCe7qm5karVXrFrny9NRPWxvoSYg0%2B4HFz6AiAA5tLoXchIjKF%2Bvc0FBIYsgUQuoC9bV714QI7syIalYSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMIobkjY3XI3QcvMe2KtwDZjc%2FL667t6UL%2B8AOwe8YassyxxpsA%2FqVgLs5m0jAHyKOl%2BvJSVAy6pvf4%2Bw%2FJzuHAnlT3at2qQ8rLRl4Hr4Njce%2BGtpDHY4YqmpMnq1S9oKD4C1oBXuE5dzrC%2B95GtgPjO0yRe7CS5UXQTrNexxPg0cI1wPo3AAwAob4Kdf5kBApVMSn30bmkXjWPAlrbkDbA5uic8fUa56HoXWeMCHEeSWH%2F8QoACOTA0jWHldDW6oLvKpuChp8nEqgTcy5rFXud6nntn0qTUJNJw2ENy9Jzdnwx6rTgybxowQbfUK7rKm%2FkUoP9DTnqR9naP%2Bf8GPBnmd%2BP1RXAK4nX1gdTL9Mn0cKtqhrVcyxTY0o%2FPIc1wyACtymkXKQBrRqvIVIj9d%2Bfhlbg%2FQARV0sd8wOrA9dbm%2Bg%2FxV0r1rshKuMmMk0ArMuh7lw%2FxxRLaWNuQ9CdiGQqDWMMrhQcdSBtpC%2Behs1lphduZz99nD11sRwoqme4rnozxrkFyuemRA%2FXNbqrduhQCtA%2B7QtkkSL0zlOC9Jfnd5OoTpgk0vTv0dpEA0wyOoaoyNrHqTx4iEtEbtVNDAaxSnf7TvbqNPH6dUQjA3LMg6TdMtqnCzBOptMAI%2B3t4vMdIU7KSRLgeCjYWww1oGv0QY6pgFD%2BjZXOThFQrQ6TXMJ%2FU0yygHLKsq8JuEPghlQIi%2BC0UA9oTUP%2FtientaKPnRi5ddEo56EQySZB8FR%2BrSOC%2BeK56DE%2BsAsIxCnFyt%2BI7YbZn0m5430AJ2%2BqplK1nU5sREacCktUSBBcKHnERQoOctQy4u%2BB0HD6IsfmuulBfo6g%2FF9x7QaUnT331ZlbwITgY95y0B5VNTbrUXkeZ3apzD%2B8jfcEqN3&X-Amz-Signature=74b27f6e123c578c24e9040f45d0f7b34912eb217d8eac77207e831565d24930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

