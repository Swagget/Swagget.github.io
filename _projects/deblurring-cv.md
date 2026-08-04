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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRZ4FJD%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T235152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCmuwwwI2c7UiAit1e6xZtdu2C4nk4CPc91A5UqrO2jQgIgALmqcivRFzkaD5kvE8xKGQnHcjHRBXuXdCDKRtWAisYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEfi8376fHZJOvWO9yrcAw4x17pBRjzO3WXkISetbuOFzO4CQtp7VUkIxZpG%2BECbM0MiUb8AQOEgeBEr2qHMmS80qODe648PAhuvG35jQ9RGLft%2Bt%2FI7835PE2OqUxbVlknfuxcn%2BL%2B7%2FasSYSXdXRj%2FuBqfUcLNLiEqIayT9SZBAhdAGZsznz%2BtVrpna8sxgAWeRF3%2F3wO8eOtYjWwOYz6koa86qIvwF3AkneAble2O7JYJAyC7Yc8aJkU2ZLYqdk9nkf6tKGKTRFOTAwgC8AXUHHkfMes2%2FeKevJOWH7%2F19sWyxID2uziagoQgwJXZTwYfJLW4LHpwxoTzxoCeJR%2Fn%2BfWOOOmgP8gL5XkfiEhnaAWwu%2Bk1GC9y5WyhS2aaZGcH136YjijXANUPbB8bwYpW5Gn2IYnL2%2Fkbo%2FKVoHAe%2BJ0N79LvA6lzGNyiiZgBuSZVWhCrfusOPoWfBoEWEvq1U2uEYC%2BC4uj7WZTXEdylAiBPz6WpT%2FzfHFwdGRvxI8QN4fb%2B9yUvSfDlEIHbkU7%2BhEWJtILfkP950iiq9jz4C54SENOMippdrUQlgAlU1CDEM%2B1jaAjlGEgl1bLzSkR2Z4XvCMxiDNomrL0qyVQsTMEtGTsnmOW1GbpEyeq2wBxuP8ehculZ%2BzzQMNLmydMGOqUBE3WKe%2FugKFfOtw6lLFdIyfw9iZaCRA%2B2CLNYaGIoUJlM6cxhVkVr6fuPQkCUGWNm9SOuXA6H9tGyejYnBTKVvJXswesTMb4kPyGw6YuXHda9IlWD5rdCbVIiotqw5qcOmwXv2HM%2BjF7lLc07xfhMt8Pep%2F1CpudqySLfjHnBM%2FIKUyEGz0gfQB68oM105VRAM2hs%2FFR3CNl4Ry7pfLwf9dbHO8%2FO&X-Amz-Signature=8ab7da867975b40352d744f889ea5ae7b487b599daefe4fff639799a1bf5a8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

