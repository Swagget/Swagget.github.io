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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STNZ6HA2%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T171707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8GMkATZSf3MpkNWuhKSL5VNkNPSHWfNYLjidLiXONcAiBKgc8GDuIIXpXpKoLTj8z0X7jDZOix8lUjS8EXXDEvGyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6ujib5dviviZxpNKtwDmVgwhOqvwHq6qyIW822oHhnlOapxWuht7zuTUWrV91Tr9t%2FZjteyL7JfXqj0BAiytFIm5PnJQQkbRNuf7ZYN6U2DxcBwNDWElu4YTiX7fK6EYvRgpDFIaEeDKphitN4YCfya2G2QpRG56Ypo6KSCvFMVz%2FHy%2FkHvUd2IL8TMJbqTGtyBOTxBkIclF2NJGFHRMAD2F%2FbUngvTRf3cQaXZ7TG9T8kz%2FEoBajfXqpF3DzojyJEkgyIeWagPuxlP3Nw%2F9hzouFWM4JtVBWqTHx0XCljaGAip6RBfKbjm5T4q4xU2Y%2FVZBESJa10sj4UURLYgEUCxAZsIkpgh%2FO%2BZFqq5yZoxW%2FwI5uc0FgaGsqkVISaGcxFl3hRimNgSvC8jP3bqKPLYA8s0knc32qLHLN2iZgqKzlgheFB2HeKlk05AD7LP2qsHbNHxQT9VCQOKLt0UOtt19kyLz2rwoGIw%2B6bauFeOZ7wQ7sNq7wqbHd9zuvK%2FfFC8nzl5iVYdrZYWCucpd6vEa%2BYPmpKmcuf%2BBp03i5yIR%2BNZWM2TIb%2BlxwyqWYiTiFDHoA2JLoKq5Hej51lVkGQBbdmEUU5b90mMN8wgNrKbJmF66py8I1sBpnm1dKRPus2aH6C6Ivhs8LEwlOOc1AY6pgG9oAShrYZBfM36WkX3rzk9lXGX3x0ePPtVFJOwERnWhOA7UcNNYhPKIdoivGOSK4yyNxMbgjf0dRrlnUX%2BbIMOHypNaRo3LQeHRPGMST9AqwfJVJrlldWHvAWxByWuthy8w%2FPqcc3eoY%2BEN%2FDkjLxGGKjvtLbOiYSNxdx9Ep7BWQsLqPOYcZqLsOFDzcgcnCx9YSUnhzAzouFuqNTGR9uLy9BKUUGo&X-Amz-Signature=6fa4e9fb2a1edc08c9000610a98a4dd3001ea19aa4482582a156e0597ada6e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

