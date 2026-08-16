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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJ5SK7A%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDavhUXA%2FED2LrlLrKTsPEmkqlYPXmNt1BbWjp8hz6vOQIgdlUCdyiuChQJ62ywGm3Xwv5ODsOAdCRgod%2Fl8FX0dNAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDBMuBqz8KW%2BaxPi8tircAxBbMQZxpC%2BZOsqBVZitMIuAe420R%2Brrtn20xa6FS9qZWdX9WZk5%2BAW9I6Sqyg1HvzoNFQN4qtoktkLmD5cN%2FXYmsUqRYIZHhYyGzcDr23OxmumDOJLBhfEJvLGKtTsMZR4vKGpw9q4F%2Fy47rMFaAmEdrJdRhNydqlUsNNiW7VUIutKq4JBUwZTGZINdktiqMaDVdeVTRgSfsZTqJ8E7%2Ba74XZeeJmwW8OdT%2F7QTKLJ2jR9wDEQyOiu53wTYhmWfCONHQ5LzBqveuK4aD17h1jSUU1r%2BmMhLZ8GWQW8n%2BPq0URFE7PQQwuNmuqrIhNbdOdw64ecD1%2BrhMCyUakHoxXYilflIZZuG2lTNJMB3TJhq7S%2Fnw%2BK0UEmBJDJHpLk9OIVWmvSFZUNfI%2FNFtOYqlNnUXshKFjpsThQApCA6jKDdPcnisCWdDj%2FqiPjx2CM9XXFzgHjp%2Bhe0DKRdH3cDxluT1UoRAJ%2BTDfgYu6HYxAMLRYeLbS8GGJ2HZtjRZcRrIZcbcFjBjPNctqHRdmzNvdRTMWssVfbpa5Nw1PCTmLAu2tlUArzffk05q8bpXXY74HZa6szY0ZTtndGPCYP7W%2FWmJbiQ8FHqX6ct2oxF78oOlLfqIk8XHn5bLbFMMOidh9QGOqUB5a7HkdEV9Sp06tSA1qK4rk0lmEOGUqLdIM2LGhPoiOaxcYaKsY3PY8di5kCvKpiq4iPz9rZuBnUaf1IIgOBAwfOuOW6rjWsYSFwVKkeFIVz5K4oC8JBQdwxK8c07fdyU0JBz%2BF3G3RHx6d2buBs%2B9Ikruz2Zsfgy0jdofDHCS4ttA%2F%2FWdJuYueQGMHMw%2BE%2Ff2MKoqyNFhLSW3a%2FpM62n9QftNLiT&X-Amz-Signature=8a75580cd9fb0a404ea18cd921808d3314757b4b4516642c4f398756f978ad2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

