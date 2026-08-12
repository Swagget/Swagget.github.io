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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIGGMNR%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T123812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHj1CtthJCoZVIqN4650BHeLQN5YgfElkuZJiS71L14VAiBVYNGmngvyvhyWjXxi2uLHzi1B6i3m4fmTKdtscUJ3%2BSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMubJKrxfyRxkFAyogKtwDsWdLvhXONrMd%2FRdSQWVrHSGPxGNz0sWMin0OvK7xBd6Zm%2BqOIMthM8WOeyOcEYq0%2FASEZcbOt5wUq4t18y3icOMn3Es6S69QMypQcvp9lCelepTiOxhf0CL0wmOGhCa4RjMvEaiw0dW5ahZH2TvzJkhmmJHPJKEEhktaDlNwfmXN1i709OV1TwTG2ZDLhlvvlZvmRk52SUsUEs4Rssk8kgWjrB6Gsk6h95M35UhXqv0qkxUDGvnt8IMw1BDqDj0kfs64rpHjZgjqOAkYn0326CwtlPGizKRYF%2BkiEIyJP0zWKsqik38JgIk86ZyIctunDnu21%2F5CESpBIxoWopmyBhJsJL4qJLphEvBXdmzhiVD1HKHaPLamUKw9Y0J66SHgC0vCBv%2F%2Fyoj2UcSIxCrVi2xp%2BYr5k7ntS5mUMJXvJUeHv%2FTD%2FE7NkSLrOo9oZ0D4YGFp7tK6LMGNwVWVCBN6A0Mpc%2BqyC6vVH3S8fupslHltSEhDScwPxQHxysS9JFqiV39%2B%2Bjl0a94%2BuDWIhI0OKI0cFW4qL7o8OQC1%2BXAwIMqwq6k7mFzpHzh3qgXuEsMamAvKwDCF1TRjKQxH1Zhz3E4SsL1tyZ41M33feneVBdLDKgDB%2FiBLpDM0FfMwmJvx0wY6pgG%2Famt3MtGz6CK9usGhs46hNhPZSRBCuRdk6heKqbLQp5NJxUFovg80%2FLx9R%2BtDCgYgl3dBif8SlxOH9uLVS5xPl3zhxr%2BOkWeNLDXHpzq%2Bj7wlmPkj%2BNgEWgaJIymyolRWv%2BemrQl%2B6OamAbxIkYW8FL%2FTPusuOXKpKTXFTYV%2BwhcE0%2FrS0G2M2yz%2F1NL%2BVUZLH3ZW6%2FLgYJzdGwUd1%2F5GGzElq1oj&X-Amz-Signature=957c28a52b4041e82939bb3779c6104788a4552d65fc87b84de325134a4c348a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

