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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WICSCBCQ%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T222235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ECWW5Wp4YMXrpaa8kVNNrBDOZ2hdiwNJL%2B6q25Vq8wIgJnbY36vsbawCLIYHnz%2FD9WW%2BA1FkGPgW5wHbS25ffLoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFkGc6HPg1HAer8mwircA9aD4QPBn5s%2BObgUxwM7h98Hv%2BC7oI9aZLI1KhXpzl%2Fp18yGiSC%2FktTkP2vRofGTWCQi6u6MoHN7a5%2FEHkB5ckiM%2BB9aLt2knhHSE35yf%2FcfAAMltWgeTZiPcVyN9wM0VTReFpGggEx%2BqCvqydJRjxp%2FUJQnJZJOZ7sQx%2Br2swhu%2FeXqbuX4%2BGStMdznhX6CLVcIle6La9XfOrUaWIsLCra1GG%2BARx0L42dy3ADdLwEUMIr9%2BaRRLX7OPH7OgS%2FBKcIxZB%2Fr1yb6arXY7%2F%2BnNru37BG%2BwvZ4l23CFjC%2B7FhlqPO2IfH4ShfVKUWp9iyNwkZeMxxLN%2FKL7Ug3eREgVXuznzHKJx4St2PxMTub0Ohv7UhGKTbSkSBH7BzAncKxZM46WCn1UVEmVRa6mjO4yAAjqSP5SIJpLFTb9Laxlwl5x10XgACpuAeNZ2sBkQ4WpM3MO48AIZeFxtCiBiACsJjTwVEfZ4HgWpmF4SE3ufSzOX0h9Rz3hcAgjsj8crBHVZ00BswPtMuJ4kgC0sn0wuzMf79LKBkfrf6BCYHO6ujSLXHyjWbfAnjwk3KSkHHZsrqdSmoOA%2FVCoIw%2BFgYFQOvLiMPu6SrYo%2BZMkAlp4JnFGEVitM%2BNCth7sNOvMI2z2dMGOqUB64ffkS83KUek7di7MncvDUWyYGVmpZk8phpG8o2WKNo%2BPw0rEgAHx58AsIHL0kBFCoamDurgRMSHQfakmvZU1QJGfdFug2JkCx7%2F72x%2Fp0GwBWh87AFYWbFBrFjLSs%2B%2BfMvrlV5jXeEwqQoHaJM%2BH1glyIQUueMhyeKcKHp%2BxHTDN6yZ2TCCGYJHqIC258KrCE3Bj4fpndnqmqDENXDyiHAU%2B6a7&X-Amz-Signature=822aaeeb5afc36db50d6dd190e2464e96b2c05ed0dd6fb81c54f6ec6e879f009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

