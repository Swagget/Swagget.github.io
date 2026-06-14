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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SW3VQ4S%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T205659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4UyJM6CzxrLf2PGd5IWY%2BH4K4L%2FJSmxoczwWHeVSFOQIhAPPCTDC0x%2BDW1bv2GGkPzNKVWg8qWjqBrSHFHUd8%2BoqIKv8DCEwQABoMNjM3NDIzMTgzODA1IgzewMdEmbtHgJU5uiEq3AN9v3RHmg6qOG2RtSFExAoiiB%2BlGUPd5xpP0FKGmIO8YmvXT2CzXvC9vKa%2Fl9lVhf1OlO26eZczCn144wmeVEAzG29sp1JfwBfNCnul9WK%2BKuo6EcrwtAoOHvj2Wi7uV7G8MOW9yYB%2F5IF3wJUcxaus4buRhY6JxIAOE9hVDaHyf28IPegAu2n939qmIdWNkieDXH7sYEaKVRWzvoYDboz1N%2Ffi%2F4t9OZmJmr19fpMMMuARScTNS0vw%2BQgegVNcKjWTuGB2GvYA%2FAA%2BROcKe0s1OMLen4kOq2wDfd8TKuaFqfTQHNjsbcfgvzbQEZcT5Aa3lYeGaoSEh5plEMHs%2BrPDOhP39DM1LIYSk5ne1doHy3OZQHV0Esgmg9gnhnoV%2BE6gWnp1ZixWO6K0bR6oqPNjCACztg8CP%2FTZVl4Uyf08n2N3LMTjJrqwBeRr0XZ8nsnqn%2FhZldo5EAF%2BsY9qI3lvi938R01UVoyrF1d79Ushvd45SvJC8wvR%2FIGEa2zcjzpS0tpQuWQpS2bFoomJNB3m17Bcn3oU%2B34rvkdaaQ6S5U7ijXb3o0a3FkB0DT3i7eqAZ561RIwx63EHj%2F%2BlywJ0CdVoh5y670x6um8If8ySRxckFhimy2kLWqUAzjCs%2FrvRBjqkAT0dMDos8Qxy4My8oPmmVg8I9EDH6HZ5VQ%2BRwN29UNx1iH0aVE3S%2BQ%2F1J8teEceVP9GW5CRFR07FgKVYEC%2FXN5VmLdhcBO3%2Fi%2B%2FdP6a0ouX34Vixl9L3is06oICzNuWSTJUeg2a6a%2BAshk15oLJPPodq%2FXAyHyMQp3G6U%2BpyPTVk0jhO7vh4HFF8VctDW7%2BGH3bnwDSKrV4f6XYIK8GQTiwGN1MQ&X-Amz-Signature=1c4c6ec03816e411d3d76a3f68995e336b694c4bf99c9bb5657599458d2fda42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

