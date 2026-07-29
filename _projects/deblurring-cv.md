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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYMB2GNS%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T184850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECJjgyRmJupHsQDHa8%2BwfBpsSQqpl3Y%2FUdNkb9G%2BN6QIhAO%2B8%2BPzomJdcLB2UKe7tjkzKG%2BSbvUrKmkqt7HxXlPXjKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRxJhgK0LhaYmnXA0q3AMsKpoJ5P%2Bpg%2FhZf3Q3Y%2FEOX%2BCwEQL9PWEuf%2BMfQzKY%2BBDg4G0Z48%2Br%2FEOP4BATK3doGtCmXN4PHkpdf9YJsb4Qatl7OWAi%2FCJYO7R3x%2B35X8ZeYHgfthBtIY%2Bkp7zmPhuj%2B%2B2PjhY1iRwXQ6Lm9m%2FFbbW91GuCM0uYnd%2Fm%2BkkWswfIyXTLH6SSk%2BV2Vzgj9VFkGelI7OvtZeSWLCFz0twawxhrMe%2F3Zd5jurxIYvsaEVJ4uJoeJbRDKfG%2FyKsCei0MbS9FxH%2FeB1TQSirFuo3K5PpLPps9tWGis%2Bct7KSXtg9p2avYCJrMZasnr8tJPoJ1YpXMLj1arFksmO6kWtWSdB1BtWRL%2Fuu85sPjkzO6HztinivcR9ejTH%2FAe8Afo6mK7TyMvmy0aKRSTXjfnyfI2jtRIgwimvE02s7onuuNFXK2JihKTdqYcNqdKWqlgg%2Bm5QIAmBdKZojPjfR4HAhJ8tkhZ0B6oqpbqBHbCLfbvvwzi4N0YfUEP5OOm2KZnOyUEj9vwJLYdVdHcyljhQkmn%2FfJET51ccI3c98MD%2B2Vv%2FGhq6F98YQCxMN4vxDDeeY8a6iQBYk8%2BsjJ%2FHDeHujO27lck%2B900fQbC9hu0qbJFIbxqEce3Ttt933dmzDJjKnTBjqkAR2NLxOuCiRhx6A1wK5kBO0L73ejms7KSNpVEQDwEpJo0Qg7Ph9NfSJMhMFeRAyyDsYe59m%2BVOQVqs862z49UdZfbb2KaMyGaZe7vwHqO5TaL%2FE0Td2%2F%2BqZL%2FpHLHlXDlDwYvVsE0Cq%2FiApUI3srtkSEkYC%2FdQOvRn8qo1Hm7zlgMEcA2VXZjzlEE0D9CBWbwA7GRiHRz%2F7A%2BvGA%2FriGwyPMBuk%2B&X-Amz-Signature=74515a639752a50a034aa93b6019ce06183085fe684f4dfb948bcbf67a62c596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

