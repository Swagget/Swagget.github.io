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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVT7S5A%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T190947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCNcVbo%2BFmDlfQDkalji70LYmbeWMwEmp2Vk62EVd323AIgGdXhecSPVRzP%2BQzA%2Fki9VKkoTPaGB0RBxTmjYoSrTcMqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMTGoLYZGdMxsBdeSrcA1zv%2FS1JV664NExE6VxcflYjxbHMGnEJwR1RzVDdxVaGXjCzPHU%2BeehgPPT5YEHxkPAXyUCFsZSGIvtGQO%2B3ddWZCbuGkq2Xj0sLwOHtkgZ6F5HHctZprWYlXQjz1SicwSyow2CfiQuKA5FSMOFk4RkgSxDXphC5oeeEumSk5gc189HhhXEkFeWZmSiAk0f2CJCxN9w8al%2FODDxeDnyUXt2LIOCFgeUjRa49eVtsYbIpajeHKp1WWGl2MZNkRBvaLxqwtyBG3Md5M1q9wt3PRumIh3hmGRpwiuGpQq0H4k%2B25eMjZwM5%2Bzw3ZrR4PtJXRgps9zx4Djt6WVSgvl0RFNI477eTI6T6elMj0hzxxFv2%2FaatV5j4qL5AmFW0aybkKA5e%2BJJTw8Qv9lucDAhlyvMKzT70%2F%2FdT7wrmqJo6Qbot0%2BCQFRSqKD5RmVQmCTnNElZzl5P9yUTumHOTY7mC0UB1v5RyAeH8neJe98EdHJaFOySkbCfPkJ3g03cP8cpRAP0LVIo76EVJKiPhPevCYJQ8ukiDv2zR%2BbXPnzi0kwSOHTw9q2YhfQLTQmMR0Akio%2FI4Jyn0Xpt0UWp%2BRHcJ4hZSf7dRll50WV10wC3FTPuCaQ46yabo0Fw4O6ujMP%2Fq4NEGOqUBYg%2BHArzm%2B29Fs1Xg9AvKLrzEMbLD2kM%2FWVpRYpqmHRIjPivEMbr074LQvv4MvDDLX7kt8z5bK2iKl5L7WgdjDzKRD9wGGsU5Xjf4ht%2FSVxPdnfHgDYmJ6UhWKaaFkOo0xpchzTo2%2Fm%2FDTJgLPOpa8aGXXZCP5oGz6ZS%2BV6lsEmuqUG1D7ItQBqtU29R%2BRIeJa02vIuKg%2Bz58sa2g30OLhehYHoi9&X-Amz-Signature=54b40dd7d11b172175be0f4caaf91e5b2ca4cf33c89257431537a952c5fbe5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

