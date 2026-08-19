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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z2GFXKA%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T231147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEevlqHGS9QwsFkm9UsB3rnHGNVt%2B6%2BAN1DbBYj0FmkRAiBAlCmeX8MgL5K%2FFkTdL5TBF79l7OCmQCngcVS09enZ3CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMi0Q8rWv9RpaWc4QKtwD%2F2b%2BEHtgRvtJWiDecJ238NpxW4j2DRM8rbb7twi8laIXhLRVRob%2BsfmvmNX88MQk9Ps98r3pF%2BF9%2BapZhCc2rDDERXDpeUvXkJFDxtV0%2FylHC9e9fsCnxFhL11AGI9%2FaedxUENeDOKzrv6vZG%2BTfQ03dPnrHSaI0IgUeIkrfejF%2Bf2TFwIKzRBaGz4fXeLF5vfjz%2BRvKuDAwY1FSa9d4r9mQxOyOrwnJzK7UAPSlKkQptO3SW4OaUspiLCbMv86xb%2Fsc20TrypRAC9OlxsS2PwsL38v1j%2FJFBvziul6dRBcOGGWzdIx%2B3DJqt4GDzC0fCFPrE4j33aHCIXECXLUuo2JTsCBQ4s%2B9CA41iD3hRrfR9R%2F%2BfJR5WThUzfxFvEmj%2BE3S%2FvtycpR01xFjxCcvNAeRlNDdaKZYZTkr4oMOOwdOb%2B45bWvTRAndpHKptWDAVzuaA35nR1r4eLHQXGCjpxSOr%2BVa44%2FWEqq4WDL5VagMtDQ29nrHoeOrKieD0%2BNp%2F81cYx%2Fc87nohsNQ76fzTfCFey8EKqC21leAVRY5YIhLIr10pUwHvAW8q4EcGmfa5k%2F%2BTJcty5RzRN8FTISF%2BDug9sbr%2FTAYU0nX7J6Aub%2BTQaZ%2BgSeJGnUNwwIwse6Y1AY6pgGQPhT4GgO3crJsTxaTLoi8LNAdywCsXFGcjC21kK4nNKdGbqgpSSlnUgQFP42xpYR5DZrXBz9FL1%2BuojvOhkzMRHfZf2SUhlRKTQY96aDHFgZPxYmm7g1pdLjqO0ADUyYh4rh6EABEnF4bjsNxhyzKi0xgAUlx0IgK%2FdNcx%2FAswz2bAd%2FxYKxirqZ8GLm5D6Sq93vBfaxOaKySLdDuIcxDs26iSiD%2B&X-Amz-Signature=6be6e362bf9f72fe51333fd7a62663650b9b80ac3c16930111bf8190314ef697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

