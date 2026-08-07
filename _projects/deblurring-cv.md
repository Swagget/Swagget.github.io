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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WT67UF%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T212558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDokv39dtagn5PuWSYZ6RM4klKgIxVSwdV%2FraLuJyXV9AIgY68EJsAoXeQ0o53MCOoE%2FFsZt6MqHDw18ESv5W4gezEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOmK9k7frCaMxqL0mCrcA7rxvU45X1TnKrrrj2dR%2FCv2HkPfEzCegOP%2B9Z90mShTrXTwcuOgsmDxbHBuCO7QQecMuL9J68UksXebQbRHXOI2EU7t%2FXVwR6%2B%2FqqnEuyPwA1Cr1UQPPVyscgzEBf4gNAggb0A%2BNA4gSlXRZWIW7EB7gzvc9NtOTkLmCbLSxXrIi%2FtS5SihQl5ECxPDywZ8Xz25LH00o0Qr0U%2FCRAv6cxhae8mvotLmAJIqUW4doWmVJG7TF2VMk4YxzFOTbKFaKaGw56UXsK3ldIoFQG6rLLfVlF9f7F1jKiNuGmEdX7GLGldL7R1cdek1zQVym5X9jATgqgD13olasj48WcYZiEdOWQy5Qtdt5lZT41OpeukeD3rC7kSLNSs59wSG2RuL7ix1IziD9sO6%2BwXw9ZHpFFLbaFtE5I6n%2F2XpLAjBvTznyZGgFDYOybdopQ1woccUP2JtgQ7tmTcaxO4bEd8%2BnP14K1ewWqXwUYVWussOMhkq1UCuBYX4ascHCe4tcPQGrXIgTCUCTRVD0GqITd%2B8Rzdg30Bvvw0fdp%2FX6l1JEKFz4c1PR%2F9%2Fudyy2jq%2Bp5RxY7uUwhuunNQQv3FSjOQFbUEjhjifl%2FXxJEpD8TihGWxVMiMzk5MSB2Uyo0SZMNv72NMGOqUBE%2BD9ZVewT1z6VJob62zKKmYxevLRsdP7lxccwixJILFD3YymKgGU2MRJzm9EamTC9aMk6gWysswzkM3GYMGytwDi%2FPNg2VzycMtVqwjMQc5AUBV9z2ygagiuVmM6GBiDwqKE3%2BmDfsEDP8vuaeyInMaS4yiJcuIYtrez193ai0Rc5BbWFbkq6rR9cAmmgpK4Rq6ei7gzmisfQc%2F2EMJpo6SEu3BE&X-Amz-Signature=2ebdd24e73e47bb655d89829f6e000b69d86f015a6808b4d2b3670a9a9a9d505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

