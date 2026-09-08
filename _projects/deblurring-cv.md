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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPRN7XVA%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T063738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzpDWhjh6KUg4WIUk4N086suMCjTtfP9M0e9pqdXjKDAiEAsHkrzuHVYOIJCSBfxHbPvNe9oJWlQymZ0aVYY3Am48wq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJOoQT8vMH5C2W4%2BLSrcAyMYkMYFC5YKXxLCP44lGt%2Fu9fNpzm9bxEde%2F0LP2zjnsBt8pvP%2BgBMC%2BF%2BXiuV4n2PqhgPsa3oGQL2pd2q1xljM3wAaoqE8wjNPVns7%2FqgC%2FlD1iqiKMJ%2FCxjlAC16TFJKdOvYVfSV0gHKnTo69unT0p3kIYN8ge4FSFwghecNgjpAXxIhFNgSGYHmlLM8pdHLz3akdcs9l5ETe5hOPUJPEMnCR25MvklGk1MCHZZG0JIa6%2BDZDmHzbtdcNobtjN1miSfSvOEO%2FL4DZJ3x0HWMxT5QkV9jQR%2BzULp1MnHKI2q6C71yr7LrllKeJ5KxxIAWYVHc6GDReFlK74sR2bC70TrHNOhIYUkRMAeygHfzCVCho49lln8RnfebDHTU19vCDcAoypKZK8FcxDKIQW64WPPV1pfwMtATGTSeUDM0j2Foswbqm5sLd6bkVUhYKK6oGbQpVl5edeFdtS7KMBqEKBQ68XZaNa3kPd4BCjZSrnIY3%2FHbbJofUuk8fowb3eDz2PJ0LqVmynPg4MPxeymm8pOoCEPcQZuchzssWlmFaOtkR%2FwwmuHC8A%2B2uLAqye%2BO%2BC5ApoTFUOBOHkevuZGXcU4x5UnqzWM6pQf0sy%2BnPs04YCj63rwzMX4JMMMXS%2FtQGOqUBaZCxK3fFyPVabEaFYbYpipc3h%2Bhpn7qUeo2RhbWapzCWDfzCCoT%2FOCknm83Q6eMOABvYRq00qThuAxn3%2Bp3BU6c4pamu%2BSxRkxkOLerTLvlcxFNh5F7QHYZf3T0McLyrWJXwv%2Bu3mW3zhrv%2BrD4M206syK9FZ0D5jMio6DfZRyzv2Ht9%2FIA%2Fe34VLthnCpPgdhkPcN44aSLxx23U53Ko%2FiPQHC9O&X-Amz-Signature=0f5e777bbf515f82a7e55448705ec51c2ad80d97e1b9a64d627d2bb39c657a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

