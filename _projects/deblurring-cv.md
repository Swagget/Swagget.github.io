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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4V44PH%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T145825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCICTz24tT5RcaWURa%2Bo8zRuKSUI%2FPncyNwmjSA%2FH1VkbmAiEA4QC2ptdTAD3qfMsGKGlGFEXpq7HOu7PnHSiN5emFVMIqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcUwD6%2FNbY7lWnvwSrcAwQgbfFvtZ3BDjnbMZJBo0w9PKdyAf8LjAKtMq%2FiFnJ6q52oyOHKD2Nznrsq0C76qHhox%2FreY3tdq3Yqj6v76lV4D%2F76%2BwgTuxkK%2FIG4oJzp7Ttg6Bjbjmj0zdiND%2BZ2Id3VH0WGJOidJMXXQVHAEAhP%2FslQ6qIfd0CcTtqhwDwq624ALttGFi4MteH0kwu8snvIrVPd6RV%2Fehz3ymeeagbMYJdP7yrDF5QI9l0b%2FFtYAXsyZ1%2FrRcAdYxdrjuBgQ0%2BuiZNHUp8GsGrfbwsHiRPtxHIk%2FZnqQpPKXIjWhb1MVRaaYqUEPT7sFU48tfYxJ0ic3K3HGaMGorjvptMKq0kcDCA2DbEHnBpYiFEClSt8agAquospiKI24r69rldQuKPpQUuHfuX1QxobpX2LEMhbdGbgpZrUkfQD3w4zT7DSBtTT24q2VOFjpVeoCy%2BLDKl0p1SFMhWOEj8Qby0g3jX2cSEVkCwEoaZqyf%2F%2FtbsTHRSYtwCAtsdgeBxrR5ZA%2BMwThH%2FXQTXGyCX19mQGcNkpaoWKSOivymm1Wg4copY5TPfDir5s7OMIPKuwmxd%2FedcNbi0pdyE0puLBSwpxoLsMMaMjihbxzqDAoRYAKuLkJ0sihxUU9B0COB%2FbMKvWiNMGOqUB46illLvlg43Arw2jWGm7m1j37coYpexLdq2Uq5uMF7OP7sPY2TIExF9V8rCrI6xMI9grgjQWOZ9iuuM4yZLhqQDLvZS%2Fckjg3NJcy%2B%2BtHTARW2i32TbAi%2FWekc%2BSXNeaL3uqtQP23DNCdT6gYF%2BddjHC%2BX1OXOTEs1pJCp7FcRWiSXutmdOl7cWlW9XKZ1yeP%2Bl0xErBRPj4JnKRjFKQHPGh5aP%2F&X-Amz-Signature=b71224c65e53c20930a67f0ec38073968d30b0d879cac42c1b5797615c6a9a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

