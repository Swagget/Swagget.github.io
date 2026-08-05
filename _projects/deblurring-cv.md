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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HDBP3E%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T045135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDst7Wg5D%2FfK%2FyE2aYeWcR%2BU%2B021Yoq3Q4yAX2q0kEzdwIhAK0Fp42urQWpzyxojZruHFVThRUvmEKY%2BtTZurQcaDgGKv8DCB0QABoMNjM3NDIzMTgzODA1IgwQy46BcktdR9gJZHsq3AOyFl4ADDUquIot6Saqg59mlGt9NC5RVxu3Yj0roqBDUMbXzgefqcq5M0vfalSA6iw8b6vdafqAv10h9C%2Fe3SkSBqnGdBz2sk9IqzVmRCmTH3Xllbx%2BgmoBd7F69BFt0m%2Ba%2FFd%2FZsoB%2BQA1lvl4jdk7ehht2DaKUOYsr9xQMcRRJ1C1XDZ56s3SbJHnvwgX1wYTo81o6flookRyEvEYC3sCE%2BOv2M1ZtX784x56r20cwFDzpsIbXGyqXxJmLYhch%2F19uKyo01EWk8DwzHT2mXCtuisPOBtVZx75A%2BmVkvHNezEExTRNYSUrKG0JVjFzBe6yhe5vSAkKkbfbSsw9edStZCZksx32Rm52RnKIs6vgFYYyGVF37EXFDWaQT7c5fL0S2g0AYhK%2Bw%2BY%2BzCCsm1NXlLkNoAKVnRkiFcqJF92e5IBqY2%2FxusijTEhwJ%2BjiHB11xOhrRD2RsFHKtkimA5UiWbSNS3sgZm0yhDPoS%2FfPnEYNIbiQde2ypDMSvQ5QJ1Nip9r7A2jlj83oSnNuQ4pT3zmzKLNsmF3Sm58GY6G%2FsJKWRvcbJdXOZCLIGElr2KQWiwXuflkSEw%2BSK2BlScTPZjI8U7M6MzklrvfxfMkduCEuMUL1mJYJznfA7TCG7srTBjqkAcGiwx66s4U%2BTOomCoU8UXPT76wN2QU2WX7C6ULUojiRom4AMBo1tg7GoqQ%2B8hf9qYBo%2BohuiWquLog5MT9WvKrEBn0ZCPcGHhym2OxsIBycth9LUvdp%2Fjy1gyqJd3O7s0t3ZBWsL309WAwzsIDBhqUOnggq%2FP9bbQIQE6HwW1W6kogm7BI5f%2BtLkHS8uWZoFb%2BzQ1KUGHctaFZ%2Fm1yr4BcXXWHF&X-Amz-Signature=9aefbe36ee40c3a67ba368725566dbd4c8aa35dffe5c8006017600fd87c7321d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

