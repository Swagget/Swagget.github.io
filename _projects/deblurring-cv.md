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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYAKGKSK%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T033557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUKx9y0r6PEbAoqq%2B1oZdjFPJSPdkor9zfv3ocy8vyEQIhAME4f23DR%2B%2F8zDJWtMcYUt7qboEvBsN6cS9YdZK%2BL4ciKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCBrqj%2FxmCh8EZ9roq3AN60tuXkpJ%2Bfbuvv8Wjopd6SiYyjcC%2FjNpMzusgx2iYIFh7tKJFQBvsyQTXaCE%2ByHfbkDKALmYqf%2BnZWqnKre0yROiQ8cPjLqEJuw3J5lZ6RXw%2BGE6iPdidUKa%2F5d%2B2tzMlMbxc30HVDKulapKiDiykYjck1HOFja6VUI3oS4liUPbwjnvK7PS7nvjsDj%2BT1OJywr1dxUqEfOifTqHJxtIERxoxZ0KdIAyIKVuPIZNEdsoOr1RIRuvw0RFzgwck9ekQDhEq4KoaqFXveGWRopgJYzrghMI7KrwZznh1IFWPmqK8SKGv5u28sAeTgsR8vPnzUh9gbUx9F4RCf7M8u%2BQcZQ1Roe3PZWx8zUmB66W5Ow4gbsUFGDH6oB9h13OCdvUGCeo5Cezy%2FqN22VPy%2F8ovrtEgU9yZDSXxZbihdpFIMHLwtZHrd1ZE3k0eGtPLtKtqPO9HsyVnlF1g1ZuX%2FCddg9lGqt7wlALNYtoeB13rWmTIPri9Th7VJyTtms2m0OugjZQrLJ1qGqBu7GU1fXpyaQEyYcHXlgKT6vSS6AS7yWNkHLZGBRr95n3yYvzCNDQrLci3L8DSq2J4glOdAHrSvy8hglUxBF3E0hNQD32aypLqlERCUY0ElZYjvzCR6ZnUBjqkAdADwRFdKDtyLyeM17MmTbSdbT23gcp9tcHtWR%2BZkins7KQ1wRoZF%2F8YFpfrzjhM1flPcMUmEjFM8bmEJvNfDQISVhQnzo8kXqdkt87P0hYS6dIc%2BkPiSjm09gavbo3yBKBJ8Y6PCaMckEr09FG888aDKPSH%2BtmPCS0n3FDB1J43Ltm7YaEvwK2cVUCibWfDxxPW4vrPYmwjWGb43s0860r%2FY2C3&X-Amz-Signature=c9e3df7daf6fc0a8b03677f5f33ab30bfd5fc9d94e57eb49252656c33e34aea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

