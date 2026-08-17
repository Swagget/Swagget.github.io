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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MICO4NQ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T021128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDZXwrK6vqXDoaNhoc3M2Gn74ZzcQZthMx9scnN27iV6AiEA0P4R8zDtE617Ki%2FSmWbfw5bA0nm%2B0tfXRqMcQwBzBBoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOOxlesN2tFTt35niircAzmaUftU2tEjSPzdtGSpmwkH6X%2BTAhg1m2WuxZ%2B%2FM8LMzg2BrDsN7mAAUzsQjh1j4nEmiMJiBvP3C3nLMg5IOMTQbu%2FuVQNyZjJzT6ZNXo4JJcw8S%2BFL0gk1OqEAqzWZCLbv1beILGycHQE02lxMrqMhz6ZGZuek%2FlOOX48h13bW0MxK3ha6tyLAZTlNFThUOjLmZFLlaWP6vHkIH%2BrZtYoO0%2B9QVjHGvG%2Fewo5aqk0oCPELQg9QuGndTtyw4uLcXley5qf2jR02RC9zFGrfNq43RqZUZiQsvRI0sKz3Vb5ejDXuZS61H%2BBmlJYwJ8DYSEvIhBkEkr2WCe4Vo8ou4T2xkUJB68zifAfQY2r27yErgcnt3aYb0mjuT2FwGNtebxlMAYEfNY0Km4GEXt8ZqJQOs8D%2Bh2Dvt3TzzjY15OmjmxEzHTa5v9YgDcR9IYeKh0JIt1D70r8qLxmiu2zjD6JZjBU7JsGagVvAGGZLraEwLVj%2FVWFIebOVPh4WHKXS7ae4sCurx3QwofCu0tAGX1diszgOo1a0kJHm4btxqdAaKMayIEc2jhHpvuPMJFtGd1mhhHtayA5HODDVrwV0SA%2BuF6bFIbdtIU%2BgtE2cFwF9BcHsJaYtHMnuJDCjMPKsidQGOqUBZmqD6e0LEMQmMX8bSYBvOEpJuTtMMdgymk3QqEa3nxELZHPn9e3MS3awu5ZIGdIEyO7c1NCyQE8yAxJOYgnlPPflDIERnxcjJAQ%2ByiYYM%2BOWCqyI3cuyz4mO%2FdO3JtzwS%2FXiWUByUa7sTZxX5fcK5TWek6g8lwLkR1v%2BaoXqMiM0IEAu%2BRWSsaVmUFnCk%2Bh%2FH6UkFwNQX97%2B5hALFXL5aiKhSkt9&X-Amz-Signature=9c700790f63569fbd43e23aa6548a982e54fec431aa6a8a961d54865d3eb16c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

