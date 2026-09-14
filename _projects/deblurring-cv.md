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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWGINSP%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T142937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDIceGtGKJx%2FJhUeAJ4qNCioHbK0h5Uh6jy7tfS%2F1oE%2FQIhANYkOgugdZD%2BHTY9xVyNzxz65BIG2aJkTf5Y9zU83%2BAAKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrhQIVYnNZknnr09gq3AOKEBWknYcrXZ0esN3xmDjL5jrA1j9HWMU4rLbCqfdQLG2YDO80iYe%2FaOg7ruYjsdGQs1x0Zv4QR3c16bqn4%2BhK1voccAdoR%2Bz%2Fk%2BTQZjgQYLjn%2BQAVIm%2F4jQqwY9puEk4LwMEYiXTZWHhqe%2FghaloSFAkBMprxqMW27YitUfL8PmO%2BSeAX3Zq3yS2jYMc5q5YLwsWhtFPoyvC%2FgMzAsDlMyAKX0ga0Un0aSP%2BKQQ0bUZlpXKnZDRXPwVCM9BPRPwaddJMcozOykahhOmKi%2Fv2gjLQkxUCwKU8k2kL%2FqBb6ej4FO7NUYfrVdRR5Rr5Qv1ImS2vykE%2BWATpLAsWQZnh9LtVtRDimh01TNvSKkmzTEVGxdAbQ%2Fke%2BCoLXcp7HDzzKmRtPyMXW3kpVqI6gHLTKXsghdV2L3fq0pNfJHY%2FeujY6Q0rl7ealuewBZMkC9FWamqt19%2FYwOhA134eC0WH20Hsmb1wJuUeaIgj3UZIQjTB%2BE2aVxdUmL%2Fl8b9GL2%2FjOmP7LFZ0fD3cZm9ZmC%2BMtSgb1Dywokslr8RC9FoAckH3LiULNNWyzAeL%2BHOT5n4eT1yZdXisEjchGBVPjYJX7mS76J6uKtMsQ01qEccR%2BSTW76PJtQETSK4Qq9TCm2p%2FVBjqkAfJfdznsMxQfrZe47xA7%2FjSDG%2BRaedYKNyog%2BdPhsgDZXwmJHJfT5h4M%2BCXSCnlkOcF8WY7RgkZUfTHj9gCp1EyjMAWvBMTf8m9K7Nd%2BLbS6VWJBGd9J7p32LRI0w2Mr3IoP%2F9XG6FzsbmL5GHA0%2Bn4WUnkXxe6Qu9CdNFMAI%2FOTCvLUDZerfkStFf2%2B%2BWg4pzSWlu7rV6ML9OAzB4PGQ1Y%2BKT3%2F&X-Amz-Signature=64300ba7449556f2d894963997b5808e0c472a17d2dca45d09ef563ef5d542d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

