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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX23EKSN%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T215940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl9ysNtbDsDXOluvjIlwWxzQQk1UBfmPXBPjSQSgUEyAiBErXt7vrkM0IFRqxfH7TKXh3beFxs94s1LFwU1roL5JSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMyzKKoAvyCQJJNyVBKtwDABJr%2Fm6dnbkUtMF8RH%2FADXwFEqTaBBr3B4r3SvxykuuEUqPV50tdNCpwZs9zhQPbhVRBYcRcoB8dZsHlN%2BnGJbKI1aNXx%2FNEih8Dtom4i1fXSyDThLMzN%2BXC8KH%2BcLXDgrNio7e7CFFveA4lqsWAmCdhYWBxDUjwYjRTtwg9Cgvti9vuCYbv%2Fv49To9DEZcQN7UTq7EU0eSuQG2j3G6gBKU71bQcgs1%2FN07PodU30Uq%2FEDFGMSNbpV9%2BmjlC5DQYcsfBoIyLSRA%2BRe1g2w7Ty%2BFQ0VTq0uX0SoquNwxjEhhP%2BQtIX06dhiICrCYWxicexC8lgxKxwTZluwvCQmGOMbIQqF%2Fb%2FgT5FlTpI9osOllvfa0K6soHos%2B%2Fy9ulqENwoE2u8g73ZXc4wvl16iXNypiY6HiH9XIaUfGyBMK%2BAZxkca5o3SAejCCBaaE4DqLCrAeGj5Cd52doX5KBmbhz90yRSv%2BuR6wWfDNlo1fMEneislIIsBaVrdbx6xCin7Chh0uaq8CTBFwXeoxyutH88ZZUUEv%2F8QkWlpUQolTy0TSVXwDovbbv4hLX4WLiEmvvThU8SShBK0LtlrJKAD4SM9sPGN58zSt1JpwRl3PRrqyDespE2gUv6GL9m9sw9s370QY6pgEOL4%2F%2Bf0EznFFUvxjr2Q9A5fr20Gby9u%2Fqr2zS%2BS2%2FaK4Np4hWXd8CwyZtl9NZrxg2%2FgluxM%2FyUSM8fy0RQs4G3eTtGPUcXpR2wslixQQlRRfINIZAqePPXhJqYyRHbE%2BGkCjKNM%2B3RNpYvpx%2F7RlIkoHDMsLEqqSJdATedfFJsrjVDu3rUrzt3Rx9c2TeZarN9ohl3Nfwz0hrw0V6KMxNFDAyzoin&X-Amz-Signature=6466dea7175a258dd277ac5f128d58fcb6653d9c253b2834191046e775413dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

