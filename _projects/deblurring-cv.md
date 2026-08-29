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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSEUBCWQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T201622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnbZkjF21ABXrqKE2WLzBPjzM8lUEHHUA21eX2Ul6LWAiB0Jp6nYgtZJt3q%2F4olxS%2Bv8b4vhRiY2VSYaWS%2FynkS5Sr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMxe3TSeMTlpe1UtinKtwD5UUuqo0RZsRb5RsiSwkweJkGrFbm9laFiFAPteYhRvNx2pp1GWQLbBcTQf3DzOKb0DkNBYSZTmciJDTkf5FNWlH6JkzIpwzMeVtUsO8%2BqtYKvSE%2BWFmT3Oqi2FhMvLXfVJTeDvtgKR50THFaVy9%2BeokmvdMc%2BIpcCO8fivYauCWMEPiPKsB0eQCipHOAD%2F8hxe7oRRNY18lvZO5Y5i%2BtjhjA81kIdHq1aZsd1ErX7VoUen8YJYloBYSEsHbaXJh%2B9KzUYRcKiC3wUOuuFOyMXWm8Ie%2FAqDz5ZjUchX9X2hnXDwCYX9slfNpZetkCgQ3wOfVRr8%2BjlD4P2pBQoD6mJhAnE4zWweZn9RlEElbZisLXlA63zedWhUpx3En2mVEyvGwLT%2FZ0r1XHXeWZdlbuvSncFQbFMcfGkc0njOOeyAUa9N6MG7pXFtgyDUj7FBVV5gtS8ofDuwGcl1goAhwYKnar8eWJNiUHwAVCZhPN1LZg%2BJDChVX%2BiXv8LdiFuwDXB2ViifoSPYJrS21G%2FMo0J21%2BgIoyZT3smH3AQzhmAgD6gIkgl8Rdd5HLCIgXmwJNYDuQ9yJulKH9kj7UgHLmjFo8JKMOYMipDxnq2%2FS3rVScIcB6yIn0KFqJjAEw4sfM1AY6pgHjz8kpJok03a4yCaBXr3IIQWvvIV8Xu4qj0%2FPFzyfVg3hWewwkyEZPZgA6P%2BPm%2FYDs2gki3RGXxJ%2FSy4GpDoBJ4w5ZZXexvJwRDem1suHj7jyu%2BOOuSGOwZNSAQ0X1v8icl66KPpHOxc38TDINg35zlaVTmAu8tyWQSqkxjDGpamdfuF7BgTesKVFlPFG4Nva%2FysQGcP%2Fmp5ncEOX2QmeTe8Wy9uUJ&X-Amz-Signature=5ca43199ae5a31c437110fccd1fbe2e879a7b9444d1d4490316df36841c015a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

