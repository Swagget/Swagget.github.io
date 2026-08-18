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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MJYLH2%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T211130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID71%2FTqhgLxTJfLC%2BfkrztL3ZVlZS78irZT%2FYYVAt56MAiEA2uCpcQ72wMH6oSarQnZU4iOH%2Fc62fTf0LymUm5483BMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKiC%2B49qyzAOHPNkPircA6QEiTYRnmb7egRdy39T3fzV2EVUVaHn%2BkQsoWuXzLDebUINHtBoqspYSjwQZ8GIIfScUKhZbJRROMEz9DOEGdrU3VhwB9NbtndJpujZpJOXF4nZwSCWeilglYDs6ZrdIjf1Fuek6m6B4qyFtAzcYVZ1dpqLOuqO6t3hqJWMm8wIsqLm7fkUHtAgPV1ozTOAkT40Nywq%2FrmrEoYMXAjn3CdHpak2MR5r%2F%2F79YkjjGvA5LobRuXtdJKTA%2BxuQmXasAGahO2WRuTAffEwFLIGvnuOG%2F9%2BHUaBC0aKmprlCXk0GUrVIIYLcPsIG8lmXQFzOHPfwKUNhPK1SvgKIq%2BEJ3YQxnu3fUe6GjeJBJa1o8uhgRQj1r68URe55ZdGA4Z3HYt9pFstM0N5%2FeKKHXZ%2FGYpOyL0%2FnwVvGm3pG3c%2BlmwuWMnBLNo1mtgMxvMp%2B984cpC%2BrMLuxVMDToMPsTN%2FlJIfpoZ5%2Ful8nGOSg%2Bts2iJbrUeE03DqJULYJElAN%2FoH1Ycfi3oeFqawh4ymDz%2B5%2FQAvdii7ifMvyfwHs3WoXPtyj1z%2BezBZFA3qXJ%2BaoOD6mvo9of4A1YpUAr%2BXt%2BbWR60RuOLDqDSngdzzoeHQxxDxsY%2FVAEHThEtjEEJIyMOq7ktQGOqUBkw%2BFWiDDVG8pKUao744tOzsRbRJn0PYpuv5hOPT%2FO%2F8pdz%2FOkWo%2BaiHg4ZI4RVGuOaVnHwjq1Y2KTGUDjH0kSk5bHQ%2B2Dbsff2dmeV6QgCbMNXlnCW2qDFy4rMQO76eH3MOx3DIyZ%2FfBF9GoPwyiVL2ZuV6smK5CIAfSeEf7m7fmmRYn2YxuT9LdE8fPRfinXueRz38%2FLw7GFgJeKlbn4TQkRG03&X-Amz-Signature=9e3f708bf652fa27b6bce72f70b4f0ceb020261dcb5af8f2072a1a0a47bba8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

