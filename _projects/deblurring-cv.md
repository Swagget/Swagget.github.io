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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4RH672%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T014952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAJS4PIUdMtQUaKv%2BdZdQqtoelWAj1YD7VB%2Fw4j4M114AiASOuXrAqxIC9lBhu%2FwK19sLWrQGnVD1snAgxNieK63DSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMXNhR2cBxDHjGUqqgKtwDQNMBj2%2FcZKTtzWhjTSxj2dHT68UyxkOGcObYSF93cB0XmUQvv7M2V%2Fsr00iTxo%2BXgmNu3nHOuKR2wVpBwkqVY42Q44KeF%2FEKfz0NeBx13h2wqYMAHKHU8Ti%2Fu3TtlnVnh%2F55OETkzUfwsJmYPwgkiyDgHQeJQxdGyM97Bu4sHJN7z5S9vclft%2BpI3gEZGs3lbSJAwTV5abDz7CZsYNvMuoFQNKFT36%2Fo5SkatOYrg59BYt%2BN6rU%2BAE34gq70%2BY%2BFT%2Bk5gAEnmDrQU6hnDX7UPg6pqPyYeIY7PZxGhcLGS4u4UNb0qAm2Kg599VLEYYuQ7n9Z0ApAXxll8XJw8B8DgKBRN%2F5vS3ljPg17oePTHqGkEFKLVsDngTS%2BRS4rfu4X5689rHMxPugMp83L2sKNTjuWuL0XCN3nBu0pQU5b6kBSy10W%2BTn5Y%2BsJTtCCcgUQjlu3XLWGz%2BkPLVV8lpyJgKIp5Xj79plg4pqsitN%2FtFZlRdKvN16gieuCoc27AODwOuy7aEgqbA703F8u3Mwrycj7y%2F188iVGXzljIu6MERGVH%2B01dzWNN5hP%2FzAD%2BWEiWG5KWwwHWX3W9I7aVOjQyzMu638%2B6db%2BHY%2BssHJEca0JTkMxZK3MEwbzs1gwx%2BbE0wY6pgHdWsyaXU7lIac7NvcgsAUmlmhTU3p%2FgYKI3G5dRivS9ajL35yBDOsMbT1B6YWZX7lVOCwKm0nunwAgdzmHwfE%2F%2FnT%2BwfPLSM7I1QmbbCTrsjHG%2BT7jstixKti3WDe5gcIShBWVT1Zk%2B90cp9gUioyZ4mA8YP11pjKR4kFCoFiyJmeSo39FrgpoHLKp7MlqOIPFemRXxB5DnaPB4RMBV%2BDUjZewNNjY&X-Amz-Signature=b0c4c464493c9632410b579433de0a74fa84b5a39a2945a24b623d741a9fe581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

