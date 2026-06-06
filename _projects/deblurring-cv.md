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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6Q72FS%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T130209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkF4iHtN0vssfwGPzVyXc3VKPqPIzW17b8UinmdIlxVAiBtiL0e3EBmIjnUWANlvhbHiW1cCXYi8K0xPvvVtBKLhSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR611CzzyNQlRgLBoKtwD0Kff8vnByRvYuj8nL41msHjb4i1v09GdAz9FYYZWbmU7%2FYPPtcy%2FcIZyn4GJB%2FqAYCfP6fl6BC0xznAbpiuBim0lv9CJcAxUL4UPhP%2FxWiQajVzneykNtI84Fq5UykRvazouHFUVu4ZsS4fd1TyCSlPzfl2%2BZayn4f%2FUKVBNG773QZVL2cmRw3dozotit9uYwXF8ZKj%2B4B1oIURC2EVvOQRK%2Bk5OXJRjJVWsG%2BFRTDAIz8UWiXDYBtuYCalgTbKllSqBHXW%2BMLIqBxcA61AYlvaIcih3d6WT2fAyGVrGTQjGWw7z6dEsrZSMlEgiNr%2FGE31Os5HPBnTCF2C82nWmcb2kYeVQOwb8CNT69oWBs3Mv4evsG%2Btc8RS7ZzVuPIsAiHcQGScSvhugLk5bRQAN9Nw2jdKKfc7yrEjaOFg68iXcdEXz6ofncUlRj6vaYKjTj%2FLafk3GibxU1%2B5JjKq3l96y%2FvkbwT5t2QH4pAk7zsWRHJipnNmiR8AW%2BKNlSOhExSqUegJZ7dv5ifD0o0fkHBZYPPVlCiGCa4sQlPhZD4kDFufii5lHiuFSSYGcMzdO3o%2FTkqkwjTw1C4WDBfB9E5K3cbjlvscF9JNuqUjETbn67jnb14Y5pYlXD%2Bcw6e2P0QY6pgEeBf2NycAk%2BEFsQ9hly%2FLJ3vJB23OEXXtw0VUtPAA72fjNqgt24ZhlYWr3eHzZFK%2B78eBls5o%2BmLK9aqCsCTxtahR4gxXnZy%2BA%2F0lL1KMIsRy63WjOz8lnvDFrxXqaU5JDXhygwL1ghN9w1M48EMdq0FpCvXsb3Rcfv8Mg1smeKHaGCFMtl5kxmb6v%2BSV4DPLEMT8z3IDLhidWyZYkEAQ2fpOvPlVy&X-Amz-Signature=76eb58c3b37e9b0cef3f0f774a18e1524db723e07c5d4b5f5540b91b21af1248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

