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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUEUCCN%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T184436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFTSDvQmEMCdziZt97E0TbS9jRanM%2BBEHgMy8ksr6LCGAiEA3%2BfzM6ZahpwOzs0xT0bhnWTQz7UqB0V5By%2Bri5Qvi%2BgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHEXNNdWVhqb0JySyrcA%2BcsC2JbY8QdkcSA1kA2dwgjbEB7mQ%2F3ztTwZKI3lVHCH%2FuK91j4q0yohN9OCOrnoiod4N1wAo8mrMvyyQM6ZK5LgZhv1O8j5UnafJrxKEZrWE%2BaFlRsVus5TAePSpEowqucyHLz4wwZL4IYs%2Fc0QaKBHZR4v4w6snGtjTrxvpzAS6b1TNtVE0sl8nAp%2B4fa8tcGf8XHX%2Ftg6DlhaUGYMUmVV%2BfsdKhCPTaScPK0fldI8%2BT8KQo1Iq3DStyIlL8iE1sVl8m7iguqGdtKaf%2FUaQPeuMMDz7pukyfKbSn7XobTF4cieKFiqm%2F83G5r%2BrPUU9Kzrapf%2FCdg9pmiyORaaG8Wqr5kEtiSFydAaky6IAQIlGQkciQrae0w6C7Qcsv7qJZEJ1qg0ZNCr8LxUjmwa0s59h5IV4FpMNf3%2Fue4TwIDQW9TaOwKRYthayEw5VKjJJpw4L8t1Uqi7ixEzArOFEmh2gBcRDAgWITzfLvl%2FexFmVXvb%2Fmiacw0s%2BstDaC95nllMLb%2BwMB1lHOhFBnmWc9aOFkNVkHU7ICBhEaU1or3JJ8yqRPAXT%2BUTnxnGxEkQLpLamlEJBTVr%2Fuz6g2pM6umRjeS7gB1ddQRM%2FArisYKrhWGvY8psvbrzKi7MKmMz9IGOqUBPwBOcHsWq7k6P7fhewMQqzYKsqvdd%2BMImcdY2kIRpnvC0Ttmrk5XY526Br5LtbEdaa39BBc%2FAL3MgkF2MWDK5JnskVPuNFghMawgylTHx2vhExVlRJHoBf7qtIcmAizHS890v8v1OPNglVtiKk9CQiLZipwagrx3h2hMYj02PiKNxdrO6ptVKlIxq0mbzUJGQQPRV09wARD590n%2FX0GB%2FTkFDH01&X-Amz-Signature=492ddc663cd488a398c04d6c6586192633cfabbd9aa0fd78b4eeb1dc94739e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

