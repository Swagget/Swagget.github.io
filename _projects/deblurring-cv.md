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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SA4N46V%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T231015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiA1g1oHx%2FM3Vaor5fQH8eu4nrDDrDn8XnQ9nz6wnK9AiA7dffu3HedmcqcUkrkL8UHp%2BkbwzEADL48ycCP7jfSYir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2BOKaazR6ORJQ8q74KtwDpkv8khfFDnkcOAnXT4hWQm7oYnLjF7d2GRu2datvW9pAIBwyjvrBA4Eh9595qGtjNBC4kIoK9qSU4TAz8Im%2BqQqQSjCLvcrPExaWOJZud4VMbVMclysXmCOtxn25%2FfVXAXc3yDZMaa7UvtsOb3bHewyalloiDsCi5nIBJ63Wpzh9pWJFk5ha2SFPlIYB4fxjfpXn8lyabRV6y2WDffGBRWgd%2B%2FRa3ITMZQq7BPq%2FSTLihE5Y0XYjDgrEuG%2FGgT8C779Z4YMJsSQkvtyTUoclJ56wdXr0EOVQpvACCVx%2BF%2B6frkckDSBO%2BN5%2FpkBUc2SY81zDss6lK%2Br3TMpkASRYgiQ9SUlXZI2ToTchjZy9daGhvotBCwEVxXfaE19smBgpw8xyDVeMWg8HncvbSgHA24v1MrIsE%2FFuzlkiUFwKKxivkLFZM9a9%2FbnT2DXq%2BiMpki6obEEFZAe4KeWkQRhpr1ti1lKMPha69XmtwcUUwuUngoB%2BkgVT0mBry2HjdlaAhsstCFo3w2XOiQxiDn8TBgDFmU6TV1mzWdyfBt8t4eLSVK4woO36uFoEktBPpjICkW0ABJRgGTdYC1W45hHchPfdswCYwCeOk0rAyZ0LQnSNkoBmNEhURRN03Nowpp2O1AY6pgGmgdrwS2Ko2cTsmW2zFaR9apJjWvZnONAMWbzucdP540rhT9%2BGTpOBDSIammK12RRwLFzUIt3iuMyvrWU%2BHuGhspchhu23kf4kSileOWDyMgwJ7tGaN1faRrZH7yOLGPYhK8F7PerqetGdb1NthY9ihnjASuSpILyXWo7uaNgIt3tfjXQhCmHk7H9v%2B%2Bcn%2FrTSOJJ51JdCuBwBF5mt8kKbQIjIvrLT&X-Amz-Signature=c8460cb1da502139f8ae545538a6b7f692e4bf9405b01610e083965fca160fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

