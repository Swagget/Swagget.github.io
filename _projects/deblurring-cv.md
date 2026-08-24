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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C6CLW2P%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T111558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD%2BAkOj5DbhkIrKQRGUt8cws5UGU7%2BHwP2%2FcxcN%2FOymmwIhANUCZ3Gz%2BfjUt4NOrGmEaTuqW%2BofcpmqOigz%2Bja7wJz0KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnBxiFPV1UjyvsetMq3AOlvoHpAkhBn3DNKNYq1Kc%2F0VfCK5P5rhXBqreLNi8frzDMscSFZA5gz%2BenMOS%2F8HF67NjyKP5VdHK%2F62y6xIEDhRyzhHf9yJb8y5nbl7SDR1s8%2BTReD52ReuxgDOUldCKJrLrz7VbPiIkAObhqSoa8AROjh2aJpQSulscWG%2BnYlIhG7OdBjf%2FOFa13bRrwwxMBloqFoZtr%2FnXuFVSvnNFImPvE5K9lDvn1LkvPq1PjKIUUjZVqT0OQqJGSQL7Md9EmF7xGw8vmLxTzenYFfQVgWFL%2BFkVfmml1c6utnnrWY2WIH4%2F%2FynNASUPEn9KIHw2nJakMVa%2FGzVGB9h52P8E6ezWZDn9z8ZfcygckFIIppsKNyP%2FKWz%2FbKAFm%2F6E%2FISx%2Fc1UVF6xH7LGKl4hfAyUkrWmZy%2FxSjXUnDz4AL6V3jWFiv4t6Bdjj6Mxv5wyhkKYhJzaHvU5FipCZG60svA1%2BJGG%2Bi%2FlGSO84mWt3ERabNpXCQ3N%2FssImt2VlLGxprrnR6K7E2PfxaJMfQBKVCHZ%2Bng6QvJUsH4XpeiY9Ne5KzWG1N7dfZVHnRh2bnlGKYdRFJac79AM36mui2728dTBc4Upudioy5x2DURIqm8muLwTyUp3pbzZ4V4uw5DDNnrDUBjqkAUonFgL8WWbs6h9ixSloPeuKJX8EZbtElyMRowTsQgdo1T%2FIRvtnrXibO3sFeIqrFFKKOvC5jwOX4HrVXSJjgLkx9SAtsEF9pRoSHyVRYexMjdhk0nxrqnsi56fvTe4EpedhLbuS4ISBi%2BLE%2Bq7u09MEk2VOLUPxymJbMjoHkTafLUR0hQTCMjH1Ag43kTFdWWSWfU1E8E3sj6%2FjQvtjsIIbsBxT&X-Amz-Signature=e58c286efdec02fc6c9e2dcc4d81ec89537f5f6dd7e9a130bb4ee8eb22c3bb40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

