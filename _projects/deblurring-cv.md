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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRMNJYW%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T001857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAzAJqnJmgFifhUQHrmt3S2xAdy7Nf4kjPcBYCe8HxoSAiAKcoSi8zGTYIh7PP%2FsnZYyLz2oVK6rVwA71nwZ95YH3ir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMBCjV7B02r4OYI4n7KtwD4jNiz13GNcisKMuRRDl%2FD9E%2Bd27NqiBLZ4Z%2F605rohcDV2EFbuSASHbIsjCJRHDwrIgQS4db4STZDvNg3P44XRQ1322ACD3KfiePch4yb2u75MK6PV%2BNPi0A7y7yJzDDUx2DnVYQ1RomRRMDfT8J8uwXUWpyOcek%2BSm0pDyP2c5f5h65mGArwR%2B%2Fs2jTPYR6UvwIjW4%2FmAUIPHT5CXr7RZpQdVn3U98OaJ%2F7cLitKwd0YmEmZRnySyxqCcuCUlDnOY56Ma3gYgq3uhaSUf6JtVUH0etAkCymKr0LGqpKx%2Fx9m%2BxUrDwA03iD%2F2HdKl42WN104A0lsh03AavXIDEI4Yk%2B2Pa7boVvef3cQVROlYnRnTBlyNPBGoJVqxKwYB00j1BY63tZ9d53%2FbieZMMxaKHnMBMORDeJuPpWUK7PrWhv4CvTYXzYloZHR6LaTEB3diPF%2Ba6lUsxHVqwZWrcqhfx2A35rprW8Ni5ou8iYW0SLz51iFBopwsBRT0r71XANjKG053JSH7d6YltlEcLr1nuSpjUPVCkEbej5Q0xqrE7%2BT8Y8jAg9jjZfQn1HjysfIj%2BUi3%2BnI8%2FMUelGaZdv5lqxbu8hBWSZkEph3GYhwG%2FEOGG8s9v4NjzctVIwlNHy1AY6pgH1ASz%2FfFEV1ZBoua3drhEjcG3eo5L10W0XPSfFMH4Oex0%2FRf24UdSW7dv7Ll8EMv2AZTBfGdXnZUA6M1m%2FCdO9KnCBJ%2BoqCDIbairPNT1QDW3IlbMhzSKB276yBZ4L7s76uFoVb15X7dpLY8CFOxlUxdE14bie0FV7HL64as1KnWpuHZt5s3lEFFs8wGcXKuqkUzWpePx1oQdJGf%2FHyM%2B5aSDc7WbV&X-Amz-Signature=4e9e193227ca32c1b71a939853cea230e3e99bdc59e3bd25a619568c7927b94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

