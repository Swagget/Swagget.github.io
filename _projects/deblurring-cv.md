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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXGCHNV%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T195513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97HOdRWHYT4FeVC22fFD2aP6M8nuLYb9yhhI450sRBAiEA3Y1Xc5Yzl%2BUeVu4A5BFaGiL%2BA7smYwq%2FKiPXjUWpAZoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnf3k5em%2FWYJeDv1yrcA4Du6qHOfrBalezcDqy2lnx6xvyIy0UndZMletq%2FUJv6ebTM47NECZLE1gdCtEYL3aX7t4PuEbqPiDlUt6qbiIq5v4zdohgHGNrZBN%2F85SNRP1zfHWPnks%2Bl5iQJ%2BCboGZybxt%2BctObGEJkB%2Fqks1Q4jN0iOIE5PsF7taLTuCaWQvPtpjZ9cnGc9AKgdEXgfeIZ0sGHA9RzxQivc6DvMzwhRkWzL5oat9QhId%2FOFep4O2xzkHpFrRXYW%2Bb0hr4%2BPBZ1JWqYF5rW%2FmWa4G20yoPQEWirjYgeHWk%2FubiM4bbD1QrR8S%2BPnbtYGOmA8lMfh16paA198a183bSa0K98xF%2BgaTJw5NGvD7pfEU%2F1ogiLfoklT5TEU2llnGN4yRRQdUOWrVlv8WXY%2FwFjiMRJHGtGJrU8ZZmY4gXpE17hDfRfbSuObOZ7MxDIM0papkmPRfIE2onJuiFsndlEP3vzBLzvzRznC5CoFpgbOdlo%2B7K4RDFB7FIUaGJa9JN2w3rGW0%2BhXEfm116SJt2QxgHVIEx1pyJlBWeqLda6EuLYdiZSxgqHqznQ%2BxV1Al3NvYgO6exvyJoCOlFU6ENrYapKF8Da1%2BDzi%2FTCMdqi4oez2bBk8xiH%2Fc%2BPP2%2FdJzdLKMMTpy9EGOqUBlqB1cUMwWyWOLUef7LUv5YqWo52RCEhKMLZm06V0xc4xkUEXdAGcQcKcX5m3LIDwLomIm9YrZcBTFCAcTbga%2BFYsyg3iqfKaT9kBI2CYfOPDFgYk66cooxON5LX6iDmFClPd8%2B4lQrsA52QrrHj18qxnMOl0BnGB0yWgjXsgJN1%2Fp62EJjbPP8ba%2BPCtbSTGrX583uB%2FEAJaa6Pv092Sb7MFFSJS&X-Amz-Signature=e4078124a16818187f40742839cc23d8f5579905fa5f3ed9280aba174b0de3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

