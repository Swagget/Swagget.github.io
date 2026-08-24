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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGQ3Q57%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T043302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHYkCm7S4V%2BVNTVmm7p2hVnnMqW2CcoLhsGso42Ll82lAiEAuM75A%2FZtgNhwJ8PxR9CNf%2Bh%2FRYC0feJvAvsF4v18BUcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTmLqLR5yeq0cWHTyrcAwIPLjOUaFofd2MufNZs37xAYS61jQlgC%2FaB6q5aq19I%2Fjhy5qH6U7Hj1s%2BUwsmLCs%2FlTJ6Zvfnw2Ji%2FpW6gb%2Br4tFzRVl2MJCndB%2BMkNeFQUs0gzoxbXXjQnaiHOoAFhxgjxfa%2Fzz5AelwhbK4EHuJvtuQTllPbk5L8NjivKd%2B2kvlo%2F5W0R0HAJGdjhu9BrleK6s8LArX6PDRkHZKZfVsFouIAIG9yKwmSuq2IvnZM%2FwcLsOmdSwJcw34Ad0kotp82gnjVxmhWKcsKZgCaJ%2BFK3vj3CeQZ%2BSSM%2Ba0txoY91OMOwkpgjXr%2FtKSXyqYFlw2Jol9sEj2xwrQxWOyxihSRIPdJF4OFmUb90vrXwFAevXUmK8vysojpwHyCQpwGP2Sb%2FLofET8a%2FRuHWkXbF2Ke5PZK6w5riL2cy8g%2FX5qYTqGs4YtAEaIjvBcs8O5x369oodKy73cL1frV8178mQM2tN94lPhsfapby%2F7lNRmlSAejMmItOuS%2BpzXxXp4twBMI867Cm2k1wBAWV8rNvD%2Fx%2BRI%2Bq4ZpzB%2BwakR%2FsnkZv5jUXkYBzn6Go1JvJXOdeIiufeU%2BRQ%2FOotaNEaO5ZTIGRrBZa2UqbfjbjrxrPnAUCGoNC2KK7DKM2Sh%2BMITurtQGOqUBRbyW2VNmLWreImz6kUaJz3c5kgzLUu%2Bdu6rWgUrwZ15JA%2F8m8xgizC%2FDUI1Bm2lwyOLGujMXpUnXGdbwobjwwfKDMoZ8JW5i7i9irA0wIjWXFJr1bWsynqAKHvKVQo1VtPWlqjj3RdMFSxh%2BFdEQmz2cXShG94LaAYAQ17HRW4Jnn5vQinfEfK8%2BDC1CjJBK9a0eFkxnwjF7h5LOMUyfVpegR6sg&X-Amz-Signature=42d8933eeae1ec4530674aa8003b1af3871d4cc83fddaa733cda9b49d662de4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

