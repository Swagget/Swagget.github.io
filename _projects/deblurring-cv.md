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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BWQJKZQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T155137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3HJJmwcDJg03TZ6%2BcC4K9NNckLYC8bf%2B4fVOeHttXggIgTfqXGD22C9cXnry4SjcXe%2Fs%2BplZ45dff%2FuatDJRIwoQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqMMEkDeWXPW09FSCrcA5aj6ShWbWZHvwqwpmLt7dOIP2M8jE851kyIr4HmD%2BzwQWGZ%2FDfua3t%2F3%2B9AE2gmZEW24M2NYNK1RtUHF26bFDG58EtNwaar5RsUgUYaZRFMHyubVSKBcXedo%2B8ZCEm29wWSsoq3zfK4ECtauGLjYa4Va%2BAtzO9mp3i0Z9odGOB%2B6evv0xDUQZGU%2FRYrVjKyfG%2BWt%2F5Yvt7MQmy56Q1Z0402xPMl9LNrU31HVNyJ2pXUA7R16v33ypDsesjvNu%2Be6UbUQvUZNvqZ5VvDqxePvyKLRK5UVVPsMcC2j%2BzRzXFpQqARfjrlC64oYNcILFouO9X8GqyM2kA8Oddf05JuNRLGRAdvD5Lc5w2NnsiuxzXfnXB7GxIKYb%2BOqshAt6G5suL4pnp8xEfr2oMXLxrCfD9glxvpXNyOlxQE4n9SrCY22CaaQT1RoVLA2MAD6TYJSntuj%2F5j%2F5bnyr8%2FGQXjX00%2FuXOGSG9s9MPmumShJ1HW2LwmBVKMoXmBTyXE7PJE9Mii9Cc%2BP1QZXb9iWCoTvjMrpkWqETvzTVeDbyAZA18%2F8BqUGDJ6Q7gs5Egq0fEk9uU77aOPwFzqs4zo7yGlGPFU7hWTHi57httMdgh9lODZC5OHSoj9hEnTMfKAMMjustMGOqUBmM4xLaFzPz8xrz32F3QlLsVA8kbwOITQtL50l9Js7J26mVN%2FLte8Qj%2Bhe%2FvX%2F2PTXeX6O4e4rGevQzXl8WivGYLVUZQtbEHhz3%2Fa7%2Byy7gsWtseyTKB6CL1dHuMLv%2B1etoy5Rmk0K79D95EaM7GJ6U5O05RYbSsOoTlTAuVND4KDHGGImli2HvOa8PfBVGkBikvR7xmrt9ErWHqy1tLpxQFXmuSa&X-Amz-Signature=f3721bbc6a3a730e2098ae19850d5927795da7c0965619918989b3872180af31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

