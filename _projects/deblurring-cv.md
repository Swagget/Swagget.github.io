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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667URE3UUT%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICb4ZR1n4YBY6aP4tUAF1QK0C4WqCbJzGvmVlHz8K1jwAiEA8a%2B9SvvHatikmDMypiFHAKqkRY8a4V%2BpF7lC9o1AEnYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDqK9AiC%2FBhIxjk8GyrcA4ftgil43%2Fsj6Zkko07kSR29wUEcMFkHCnBFUn%2FV%2FtzRzA1D5toe8Qh%2Be%2B6w7GZWWlXTcTGgkLAnopUW9OI0cSkIsepbfEFzIU3sa5dAWSpx9wnkn79CTR8h8sLFLtErlJXtgRnD2%2BwV8Lli8qs%2BFKSIjAjoP%2FiqVtx6K0sxEW5shxypfw5s5cAjP46YmOUTKPTE%2B2leapTuIeIDbcYq0mEWUwAb65ifmqhGwKEIhB0GYNJ%2B3fgavxiO1d36A4EDBBgNKKI6ci735eA0P3qkv9ZdJeXz%2FwLEvBcJijrQJpNTAt%2BIlCDphRZErYivcAwhlW1wp8Po8c5WzGa8tZyYFopnquZu%2BH3HxIk4V8OiG4ATUgFqFbQo4M1XQy8phnoV%2FMgnrUT6JittYqyPqdiTo1nqBbTpt3NykrB48mg43zNTH3UfOZjV6sVY53iOS4Go4ElofPTRGRNDtvClHCdq2KBH%2F4nd6fegGiLS88oOSD2zU7TP5arNjjhRUE3AJch5nwQYZFf6%2FKmrc1r2DI2wDvzTTmuUAagTKXpUJ3hYf5xMW3jOgLNGGejWBUxdCJook1CjzlR6ExZ96pqZA7lrrN45mSzXEBQITIHQVfVBbzMB5OFgQl281amyT82RMO%2FziNQGOqUBjdWhXsEDD%2F9YDEmvhWZkhbt1BzXyVKazNTPjFomlU3%2BzNP6EwdkW%2FoQfPRHkvRO63S%2Fk9njBsVyeAE3GLu%2FFgNSP%2FQoFN1qbxEfRsikoEjWRNb%2F9W%2B1svTE2H4TjDc6%2FZWUEyg76RQIaKgYjVErXUhvxuRH39R%2BpZJ%2B7akhKgwUCWlfPvrB8UeH58j9Vy6ZHANMM%2BEyJANmf6nl6PpeTwwQPWqkO&X-Amz-Signature=52ab4daa4c1420a4f8a442d13c1fcadecdd6112863274650f5e035ea65060124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

