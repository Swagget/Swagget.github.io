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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URK5LGYZ%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T122829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1XMzKr1NvZ4JpzlelV%2B%2FXr06E%2FHNT8q0LPJUNwhtGuAiEAn15f3HhJAKw9uqcJlqZwnsKv3Dy%2BK31EYap6Aj3M%2FMQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP%2F8xUPlKXTcx%2B0QSCrcA9Ah811%2FR%2FBnYX6RRAkfQ9k2lNZJivrcwliN%2Bs%2FhTsg6lf%2BhwL49DCRWHZ2E%2Bz4rtQgMudViVnETkg%2BbiYUsxDqnkSZbkyLApxqLmuJyeGiWo8FzlB4KYXgbObY3hNivlfFjmClt67nWuS6QD5rPCaObsOY0dVxbCSw12dkxid7H8ufPkFelYnE%2F%2B8Lpwks4%2BZKpmMfO5HvKIbJRktsocfjhaAk3bPYVb6YwdJq6Cv6Z7a3Djo1H%2FgfB7VPQVgmnqUmHDXDcB86h4DQGfDecd1XwnCpV4fYrDUYza6G4lGlu1GZ872bb0sTFHQeac%2FN3YxGf4aoA1WUJYcoUBk3IbYpiiJhs%2FuuAhP1DfTMWSe3nYxaLd9Tv3QYueLF7p%2BNypXGhAvwROf0HO6QnDPWNz5YASHxdeh3wf7%2FSTip2dG0kMHIinfqYYbrXg4o8G4FsSFZjnjFHyLBU0zTkILL1hClvsAjW6qIu6HUH0VtNOsWuzlW6qYkqX48mVp9HNDmWDOqmemfGiwx%2F2vUIFl39yGK3syXZ6Gp2QWPXyTAOg8MPWFqwzeI4B9aK6%2FFQGxhnGimGLqB3pvrZNsnze8KEcwkjTmyhXUWWusItz%2FhMgPK1lZD5vkOuoYo0g0zPMJW1otMGOqUB%2FdeagdxFKIoqO41%2BQ9JhkTCJzlj0eefoFv2aOG1TEhNiM1dzwxsSiC9KVnjISPc3%2B%2BSKVgV4PKnsiZJMETIj9nfXKnsd0ifEXM%2BzPpswREKK9LMXMjOJkngcom15TVOU7EVodgAffldRGRszlDwLUi6ivUIgvo1%2FMKuUHFf8Rhu00FB%2BLSTqnQ4DSKxiJorgecirs%2FISQNDVUk0OC4wZn%2BTefWe1&X-Amz-Signature=724d3beec2a39c93080493d49ceba4384be779c28d8c24eb37e275593a8c1816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

