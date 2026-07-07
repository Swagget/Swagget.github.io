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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DZPTA67%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T224902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdn9jKJscgfBL4%2FCpTOUVsGRNQ2qdTV9UqWS%2FHJdM%2F6AiEAxFPqp1qlWVEHRcnL5q1jGmO4nkVZY6mpLh%2BiRNynQB8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCDaDADxOAMG6YL6oSrcA9totjXPia%2BW4ngskwzu8whSHtqr6Ef43WHGzAiPychTf8fe4Yi88llLcAfLfbruPmLz1v7Kr6KYF4K5I2dytYY%2F7j23UgubuWKOeqJmZj5HOwmVdKnulT4odV2hL0TeqaSXVHawePfnqbuJAFJBTYgxMAQZ2v7CzYZzik%2FGrOcjQfc9563ZWQcoYD%2BhFHHyZsY4rc9eM86feVnx0LrbLg9MBSrw3wjMh01sej9ni8p0GSFcOEEVGTY4wuQpOdNEr0eVx4m21o11o5tk2DrTZE%2Bzt0wg59Qox%2Fj3c7ounMG06q8H17XZfrAKYaIypQfKm5xnmoJ4U4scGhg%2FZvu9oklgMgvtx8rDuYGW5Ob75UydLdrl0b0vYYtJd8c6LMMwxcAyrnTHD0I7%2BkotG46wEki5CQYS1C%2B9dTUkBVGcTbiQRLz%2BQ93eWkZDOM%2FwAuiuQ7zveaMY%2BrNdHPMtNbMFbSfZeHMPBZa%2FleIbo0cRyywfd3ZpYu7%2F8HnVg6e4GZDLiQYJTJINmBQd%2Bfszqw3b%2F6rZPK%2FNEsf%2Bv8VR89pm7FXfZHtoryxyZXlVwU%2FVGw%2FWukErafB4S6QKnfo7MZkYjlz0OTH396MwDxDhXUcKdaeJvUilLfQUTKUMdthaMLrQtdIGOqUBIbkq79h3WUkuH%2Bfy9vIFMz6LIG%2FYUoIfsnZ8tVjmNXNWXN1FYO83SgQUU3S6twJa8if1KnQ2Dp7T%2FAoPovpkiTmCjD40lN4P%2FwQtPvayGn1uLY8bXZPl34BVl5QrON7ilxLpeL4G3r1fBYVD2hAQEjGcbKAe97Kg9N4Mjszu24jCZfMqd%2BIuxvc6DxI5JFUplYVi5ZSHuPCEIbLkNT3rGiM2Tk69&X-Amz-Signature=7021fa1ba6ea8cca053ec92811675d30ec6ea8ab7e5a12857e4f899879a37286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

