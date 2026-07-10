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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHFD4R%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22MTpPY5FQnZE9Av9UBLi5p0dZJnwByLmUj1FwSbJ4AIgSopoe0UVxvDWlkWg2lc3m3SmjXDRvgmzr0J2lp9XBQ8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAc%2F2McphCB3SZVOircAyfdbh6S4tdtc75%2Fotknvpy363NFxDJXja4p%2B%2Fqm%2B7qf5SxnD4qVMiouzzw%2BwjFplgqzWkUhsjoEAB8TvFHi0W69BXMaAYOvavTJpvjKb5rZkO9%2Fce%2BF5%2BuyLkVbtCFg3RKAVMYdNBmBPJX8F6OPU3%2FZ8WRxymuEcTDXCg2NRll6iNeakipA0pUNl0gn15d8IHmwnj%2FdYWukrf9qoXb58NmEnu86wol1aZa8XiRBDLbWrVcMFWagyxG%2B1OnlpZAwVHn5ABnD6fFZV%2FOfYwU7zyQcj%2FhA14f2FxgTFgYv%2Fl%2BJMfmvYOL1hiiyDBpK%2BrZ0O50MTnAacvM10PubgSjZjE0RFyI9MA9Yyh1DLIaH8BmCIufZz38rM9SLvNYv5bBFzF6XVvS6GPsUcuM%2FlTVDVNWAIbZKnbIknn%2BB0I8MvSiBe3fBWMRY%2FgeR3MgAL28dNM4pjZOSwGZnDHoxPM6eR0tvb6eS1G7tPDSC4KK9ft%2BsJH5rrRhsoPK7vvB81YylvassOjP59V%2Buw5KVvnqn8wnWVyS3UpicOfVeOl8bDLWoYBdQoDv87rsAYTHOwfTLlXBbpjgiPDrnoulH8aaZjHBXidg3hyjoU14okCS8g9vsEeJlJHtFZQARtUktMLClw9IGOqUBWNJnGBpBxmIcuSgD5A%2FhteWHTFyH9eeo1IqT%2FygyeJGyUFcxVDXSD1dTQ7V1lcuHnxxGrh8Z58AOXhVynPnONvJSTa9KMbp%2FFCi4lMdke2g%2FJid5H7AsMnxypven5Nfef8teVeofOix%2BddLefN7SUgkn9GfayrgsYR%2BR6hHjkCaW3mX474lhrP3Fz4ksGszfQfjxTbmWQCtuUlUDtxsBQG1DRCUw&X-Amz-Signature=3eaf03c01a6e99a6e5150b2ba7f88881bbd470cbf3b4be4ace4f52b501172bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

