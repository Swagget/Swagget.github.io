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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KDTSEM%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T062652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCDmrntrP%2BDAPHlyJ%2B5FxPqIRudkOW%2FkuxsmS9JaEoCDgIgaPx4HF9kpuvDCIx%2FH7owQDToqMPG8zgO0%2FuxJfjG%2FiEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEq8tO3PUa6pfKKmvyrcAzrAq8AGMDOHOWYEAhYWqjwU2ob8v%2FlrYu%2Fp7lOdJZmdI4CgmuWmxXb1SZnf9h2Y9vC2y6Zb8t6ZPdEIhRlshOoImrENkyd81SM1TdCNklZqG9sYPjawcFc7CYsYj3gPgG2zft5UYks%2Fugp4%2B%2B64VZJMpCHJIQc%2FKf1U%2FYzRJpTRMnX79kvI1pNHGuC0iR95TxeljLrA4z%2BZZczj0vdYLQIFBgzZhIQ54xw7oQsLVfrP0Uskg6aKQg6E1WVUBKHZWNF4UKjZ0JxDAq48PeKZRHwNnDlcQIiMn4h%2FjGlOgfKkZVGxYJ%2BDCWZ3aLRSoijcN9Ms2I%2Fabf5Z6SeELREWmxdZU8gi7Wgo4YDvQzeODG6qHXlcGQf1b0M2GWYSPRdKsj%2BrqYZMApqtMzMM1YTCEiqMuKJ3KQa4IcsMnxc%2F8%2FZfLuK4wGRgDqjcsqtFdpj4RgM6gFvIOyfpUn1UVUdzRRcUJjQY0kYrEA1Y%2FRIUnGqaqS643L5mANLPohWkpQDRSptLAACqL1yXqIMXHaS8iXTzIckWKpsFWM5r8vFQftCqyXQsBfBxB0vI5umY0PUlYcYFiW6ZaoelNkL9Ctd8TE2tRk0rHmK0PP70i3ZKbTkKHE%2Fr8vV%2BblwEwtmxMMjNitQGOqUBKdbf%2B1ICj9FQPwn%2BuCvshJO9J8227JUhHKskbqOs3xI307EJsNFwV2n2lJbIg2v6cfJQya5QMp9O%2Fndaac1FK3HsJlC2AN6rHtOwXIyWV%2FxK0JTCGh%2BbtfPK1Gg2czjHeQhJDVL6o5zG%2BxXY5TQxg68VPxVu1%2BJTtv%2B5OwEL0NzASCHvgigqvdiR3bNHW3zoVTWkbXm031CZogBQr2hNAFJdpOoV&X-Amz-Signature=cfeacf43b87b79b57b3e235c0b34e7bdd878c833e61f0a405e5a95de6f93b3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

