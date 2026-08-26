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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRJDKNA%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCczTO%2Fk%2Bvse%2BuT5h3fJgVmjH8aVeAWwI64TNEambpWlwIgd45qOvzTCXKymPkIbZ9qB%2BNVNQXufPyLEKSm7iM7w4Aq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFQGINNJqlPN%2B233JircA%2FCC6Hw9dEzTMFPRMQjMlgDmY6%2B3AXgC8CMPgMASeNK%2BzpRmC8Mf60WZugxPsrcgqUnYAfggfl%2B9DrPkrEDm8KM78R2KEiaeoQglZiQ3b6AXcFByG1oSIh9f8j9zgQQ0MVTEHH7prRKUWLjRQDPfZyCSuvVIibIJQQhHOqJ%2BxA0CYNYJ2sUsFOPv8JHjGi%2FwGthf%2BZX2wFyQhga5Dz5rsOoS5yauDXhHyNULy6tM73QJ%2BYH3OkA8IMZmLYKCu7LXM4jX0gQkcJfpqum8UQsycnWsEH83aoDMl09wlqN1Agn11wcfVmHraXXCqxft5iCW2mxtOEtSSRX9zby3pVgk%2FieNFCNj6cirzPqKyG6%2B9ztd3PLweJkm3q3aajJJJKeotdBwk1YEvcB7tafQSSh7Enbpl7lEZm%2FAKxctCVgM5sdFG%2FcQ2JFe97OWtnBYe0su9pfcnj7tZOX21u74%2BBkU06mnqe5rflz7%2Ba%2FcU2MhmcD74qA7EBBS%2BInY1NeUu%2FGBe3dHivwNT%2BiOPBGQhKGzaLREqOlpezEKb1Qj91nhvhmYZoyOghivEq6LCE9j0Fs7NRlY5r5%2B4jaQR12tD8EIa0ygiwHdUdrTT5Hl2H3Z8XGKpRRuSU4MrJdUX4FxMNeUudQGOqUBH2U%2FjAtbjKG%2FdDmHgff9tf9LrK2CPbjflKkXwNNKCWeujEiF6mTlEwPHaEZMRILPgdFkq2xKsaVRLamW4qYBJTLRevBZxaNL8j8of2J719mHWBD2PQI%2B5HdhO0y1THcjMtRjiuD29plz3vlcSxTYfZDJRnZa0V3ApsQzFQAZLCB0%2BbaLn01jLbCVmB22uUhLuSaLO%2FD%2FJEjs5z%2BVSk0yMcdYgyTB&X-Amz-Signature=05108648c6f75d6ca02a276b9b3a401b1d381a48f0ae54f4b4958ed939b5cc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

