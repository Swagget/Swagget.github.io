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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKHTWAE%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T172303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDausUOLyaagxstiXjYTPL5MnKzWbGVHQ4rN5IJRr3lEAiEA0c7RUJbgJxzN2LnJNB0M4iB61Yb406Ka%2F64AwMvWhiAqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByPjphOazyanSYUtSrcA3p4RSXy0Y4tCBKa6GB%2BFt%2Bu8KS1cfmO%2BKIiwJmqQe09glXyONhv8qNu5oCzYGIBy81OfocOLnS9llo50ebVGcckt2%2FOblOSITHB0nq1ZZgrMu44ZAKAFWP2eB26fPQ2qsjDsaXKgH7ZugHCoqnXG%2BIsm432aXtohH5dM6osrEw%2F8klbGpR5ycO9%2B3387n%2FnQScUVhbwsMvuyfbF2cvZ6y5kOb8KTd3gl1xWX8nAt0heih8ClXxuPTWTJBRXqiHXDnUdaUANcLy6aa5bGvxjD2UyM9MTTw%2BMujokpXcT0xzuP299YX1J%2BREuWLpV%2FHbZe%2BL%2BSBrbxFadMq08QpQV2H%2Fn6tCxT3wMuO9duJ%2BCiUdlMCxizbKU1K5JX0Dn7CbFnPgOxHSl%2Fm297sznuDQGAZQMAw%2Bm%2Bu0Pjcbj1gLuuW9qRei8hEfAXukx9p9kou2QHGr5%2FMFsP2mkAB7w4q11ZoChjkb6NfqcZwwCnQESOKghjIN2gMFwDWy32XeCLh3y8svklD8FlT2Kg5jJroVDrh3%2FNHbO4n%2FtlimA8biLQqwqb9iL9%2BnjMeuS9P9TeSNlJj%2FfuXNLN%2FVhXc6hlN9sWdvwx%2BjtPuEEha2bjn1wrvKZ13N8EHnF4o0AgbncMMWWmtIGOqUB0Zz4MavEG%2FtUzJ6anPLuVC2gDH0OHuyGMtFMrr7Ad29xtnyoaaYIVD5%2FJ0%2BJrm2sBJePIUDHI1f%2BGwGE41Q91otcj3Ops7%2Fo9vsI4eYXPn%2B%2F7a4mPnoBjQo69cYH3w0kpcgdE%2BnQSFpWHua2QZJXaOuvQJiTogST35hIpND%2FHDHa87HdKzZ9xNc4aGD8jZYm3CI77QxMeM56Z3RaUGC4nhEmd6hk&X-Amz-Signature=6d85c5ec2f084c662231937813e7781d2ec2bb55299b6ee3367a74524d4ab805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

