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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6SZMEN%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T143912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRnjGA7us2hO0I%2Bb5eDY2hJBOAYddEVTo9Wr%2FI5XkulAiBYitEq1mLXVugC7q3gXqWU7%2FXw4wFp6T931fmrFZfmnCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPjf2pZZAks4OaR8lKtwDNLk05NUQhgs%2F8k%2B5rRHEG0Qi2iZcTFvWmhzQWkuSXD9Oj7xajppoaKFM6wYKyU7IpIpUnxutjrzwuulGMTD4KF1rm6Thz8Cq0BQUWrQiq7Sr0uOiVH%2FP841hAZwN7DE%2B4Gni4CeMazfd6iVIqRg%2FX4ldcW6iiORSjSMxW1WmVSe97bag11AnFTUX3VYC9h9wfG%2FbWzsJMX%2FNqVWnEpa1fhhnx0AQ7HtSsOKq4rWhLl3XhQSARTet7nK7U2LHDZ3HXz6MegolCq7cNzLa3YGfaDPc%2F5XKZRPwfvR%2BvVgiL9Cwipi8FFwlLkuVs%2BeKDfZi1J%2Bcqwbdmk4J7RDzn7VhpORdPczUVxUq%2F%2BQZiIN021doObvS2VELvcBf298yF%2FpnlBhULNikIIp44Alnm34uye2%2B9umol7J8PzO0BIJ4ZK5gz3zlbZwhDp36t3WajbH%2Fkb2HW3DzpRpMNnJ2vp2jc2NiRzmhvBT0MlVtul4JMZgEGWoTTMWvW7exmud72kTv3ooMkTsLyUc4pVvAjPZhdCCnudU9fYvU6GM403naPDyOFE0NfNjLqeGtH8uOmvVswBf810OYGA1mBX2Bhsq3zm7XYeP%2FLlEc6JG3s3hlIxkL0CgHbPSuFFqF1f4wj%2FbP0QY6pgHUwEXwn%2B7pZJJM6Jm3PchVfeJbkoOMfchHb0zKT%2B7vB7YWg%2Fv%2FeeqBwPhqKyr63g3DH72gVboMWQq7tEV6whk5UlEpmkOoUOSOPYYLpDR4rDgCYt3lE4gUcfEdnB6KbSb%2BM79Ybt77zw%2B3kiGj%2FP%2BjuNiVyiBor8gHVl2N%2FHPmWjiNxOEeA994Cji9KQ3%2FId1J7LBBEdKQWIlfg5heqetfSFbIkSQN&X-Amz-Signature=e1b4913954c03eb3150b91844c9076fee70211b289981ffe912ce0a832d363c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

