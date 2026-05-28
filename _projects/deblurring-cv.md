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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX6G4PY%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T055855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfXFTwIH8WU6gWKZKj%2BO6KfQ8rYQJl9LmQNccvb6piuAiBBN%2FDjswQqn32LwOinHy7jV%2BvQzYbqbiNQV%2FRWO2FpNSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNBM%2Bo22P1HaXmwPLKtwD%2F7vW0%2FnPAK3J2BmWMkeLccsAkC5YKdAIQWDyXA4XYprv2V8TbecghWqkC7V1th%2FxC2gE1xAFP%2BN2RcrQHHIiEhyIPRb1AFZHFswNVjTAzBRTKdKTwHLNcKRnbHKPcTjqES4AKH%2FhyPPRU06Pu7x5SxQGbBBwme5qUAtZEnMZrLAvxsuKOVLq%2BX%2FboSkCh9HJkTaqX6gSWdZQzzfOYGtLFBoS0DeuWTvVJ%2FpUlzyH3%2B9lXRKLIaT4TvBZfqQ7ijYR6LWQUZFb5oHtE%2Bi9jcpofuZFXY4TWdmcYZEv97pylGmLmkiH5Vu8lj0l7OGjTW%2B6KZJHf6KyzADaLtwg5HUMCeLAVRmXt5rlxCdcM2RFcRzvgGj2twSd1SxxU%2FlZtll1LOMaZqK8chqza9jiStNPTBIqAasLjb33s3g8rO2dlX5Xv7YiNZTOcRXGYiH4t8VpxegBWbYuI7ag2eTDwPoGNzsNl4OymERQzKNeap6RETwftDOqKJcGP62ddYzxODtbIMu6yO0H%2F9hKcHfBz3rAzW88bdLJD4mR07%2BhvP1WLFjvPBg6z8LkRKC4ig%2BZHbOIzQgoXqR7fsvk7QnVMkRL4aKAbOzgn9ZVO8SGv8kB1jZEW0IgGWSWpj4IebcwpJXf0AY6pgGO5lFKO8V3l%2Fyt8XEcKoSX9%2BPHjV9wYXBBr8L9Yxg0g1NG%2BzSOONKlkA9r3mTqeq3YJEzlwBg2X1aizKf8k4mQ8wOVwcdkEXoPZsRO%2Bgk5OLVWPhNSAo5GPm%2Bij4lSK9V9LVZgbvLCQUE9fPOeqZsuRV8GeQRxfn8%2FwyJAmIYvVbBljAqcLSJLT3wOHF%2BsZQsWY3HuilsrTHvQBcdHm1T1HvxrD5%2B8&X-Amz-Signature=7b62eeb7ca1b5724de3ddcf5ea3f0df96b29db153ccbc3d02d1e896263791f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

