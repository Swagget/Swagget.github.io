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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDANM4Q%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T114859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBT%2FHT1BtVrHx%2B1RJInHGHmU1DeXCzmKEe0WeeIItMJxAiBpYnJSV66wh53%2FzOAxa7x2522q5gIqavZkLlBabc%2B52SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwIndn0fdkq2%2B18LUKtwD8kg%2BNnErSjX1dOPBJzgA1NwTlvEHzeLmtYbrzUbLTBceYrnDr4oK6XV%2BLHLzeBXwY13gp8RDu6vO%2B7fqdQmTL2dIohoZkkAr2%2FsWNeLzAbep%2F9%2FEJO2mPDB5aPIdTFA9kFtceDhydyZRBFERZSNkQ%2Bop%2BwdEIZnuTL9k%2FeRJjXBAnU50yVq0rESxRu2jJKAfUkHHxFHBBqbrfpz0oRzvK%2B83YIKXeSBAbUS1S6caDnFwkpgL%2Bf4cAxqWjoMuPvSe7prkqUgMbQLgJpCIjFTWsjx160%2FWDUh3nVAAzXmVDXV3WgPJ75MHBrlCUeCkPOLP3H52pyiqMuFzcAPJR%2Bxdjv7LCtdmRdEbdk2Mh5NXFyko%2FMqq6cS6s8bi%2BiQq4yeICP7aAj3L8IaDVJc9LDRPFDcH%2BKJ57mXJ9dXJztkOmwCDCKG5%2BrydO7wi5p0P2cbEa2%2Bj5OS4%2Frj37avCcFW9Mvu4jAgXNKF0o%2F%2F%2F9oY6DCl0eYz1dudUuResdHuUwOZWmk01JGMfzAkgermGdxz12sn35GlklfSV0Ot%2FbRMJMrLBWr%2BqgaWODa4uIk1eei1aQ64gSmW02IeTNnhrnbnHQize2yKbpyDcCX7J8MOtNf0hwFuj0Lx4wxKDHeEw58Hq1AY6pgHuLPinZRi9X%2BpNN8tHThGjmh0HiYeVazjs3qFZFWu0VrCgFqvRqrnQMyZcAfiqhgoj5omhkU%2FVUe4BkjIU2dt%2FyOXhxrzsD0WgD7%2BjXNFSzpGewntpoRccdLUq7ZLovYEsrqAoNTx4kULY5KmbSlCEwBQuOKwCONL5S7YkacAzMRl7uFP2Pu64cxsvWsLerrpy9YvyG%2Bm8t7c3vys0wov0vQUBqW9L&X-Amz-Signature=633b9675eccbf7d88e5d516b87f0c2f83b558dce3cc18340b2f9ecfae59ab38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

