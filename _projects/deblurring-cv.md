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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5CS2N3%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T120852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD8%2FSRJFIP%2Byu5b0cBGU7SAqEf3j%2BXXVXI9TKHty7rsOwIhAOa2oimUQDDkdJ%2FFeAyeuXTeP1Ezhz8Pa%2FGyC%2Fw6dBKCKv8DCDwQABoMNjM3NDIzMTgzODA1IgyN1xja%2F9LAAT5MmeUq3AODCI5udYVdtWBhgCFfSOTM4hbsQDswayI7IQxj4vKqdafKEv3q3E7hauFkmDSurj1owXeDoPyfI%2FSzCdC2xWIfLc8qY2YwqlDGPxwMRVe7WGHhxJkizDB4Ptw5cfr3%2BY3yzsx8LNOPkrx6RZTJyhd%2BfNoQpfdyDnAZMUXP4wbcHohCvZTAhacgE8aITzgcUKwsHnVe2NjXqupV%2Bl9z7R8cDwOv8AXTpDE6mq1N57HWbDHJzlZAmSd26df7J0O%2BdBheRKNDFdT3ZQVO6eOW%2BSqm6NRIBNCcN%2BgajXgcBP7zhGDl6gfI0zplru%2BqPRdcL5hxQ1Da5echbuZqzhCgC98X%2BYAM89E3UZzjhVi%2F59I377GFu5WUkDqlCcqyen5VmQnlZ3UKHmZH97yN9BcEfaFSdPo6BJOJkxxa4iIge5Hml6AwJjaphftHkNqLj4YvJv%2Fyjx5XQYQGx9W1YWfMEN9exEAJ3Tun7EbxmT45LP7ZVCfRc%2BNNYZ%2FGD4g2WjnMlIoQLAf9ij7StJudjCOlCACz%2B6GJOdqBAmRjKb4GtrLtq7uQdCuf%2Fd401MphdZSXbvBBRx7xMKmpEy03roV%2B9t6TTGZHDtZgM87o5bB3dtUcw7SFJas3InlLPWXLozCz%2BajSBjqkAT819WKvNsJj69Y2LgdrlOHL0QvL9hXQahpLlK1hJe9e2LuoSWyZ5V9zRIrZW3TM8qhfQNlJOWnAwCiTAgBOpalceInGeWI8bNHU%2BIZFHHeJBVyyhmmSJnZHOVUlEkf5kBsbbkSa%2B%2B5ahn73oAx311IXsSeO3nerdNkwsRE7Ei%2FBOBTtfxay%2FG%2F%2BGK%2FRgh9Sspurk4lrpFFXMUAD5YhsvYVmXVJq&X-Amz-Signature=ccbb5be2bf7dfc57a975bbcb4dee1bfe773743480718d3eeb83eb651d0d8c91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

