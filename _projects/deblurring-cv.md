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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQYOCD2%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T221100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVRTLHI5bdar6%2Bu3Y43lQeCV8nwgqH01H3FjYYSYEt8AIgO6SfM%2B13iz3LjtLhFX7wYR29d2ensbIFAnGKJNl6pyQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh94fjL9IJFTOezByrcA5NDzFDipBLpd8ftWa1CcwPVYJ753s4HiqoIBLEiv6%2BSMghBV8h0o3u5rTeIt9kU8d4PXnIgZTWHHrANRx1O%2Bd1bRqXlnxiI33TW0qU1FYZO2%2BVYwBw48AtHMDBrOXNuvWRHnI2m7uaLXFurS%2FN7ZBJ9biwz6er22EPO%2Fdvu0TVkj%2Ba5NvAJgtztJYHXG4FLrlabsQXqGTpdLnBwCbBZy1bsKGbKTfDk5j8Z1nIcz7ONsTQusiuJxyTDSBvxVFvUAoDORImQUxXst3hYEdMNqV5WR2QCV3Gl1pOftsI8Fj2SCKf3i9DtUYzvc5karCFTUu95g3PRfXer%2FYut3YSY4vrI8NEBIZICHaXdC1ks%2FuN18zsuX8XQBQFOuA4A3eE%2FfiBjA51SebphXGMNfTOH161bPfNxi5P2fZakiGvAcpUL%2BNaBMaUmwSQfGZ55Y8fO7v20seU%2BXcVa2KlIciRb1VB7T9L6%2Bej86Jigpggf1NKCJXia0KKs1yTAXDouIRh1husZjFt%2Fcpqc0LatMCZ06thqAF9G1E6TucbCbKWLMcyF3RpSsGA92d8ByNMlK3ZRKZa0NC3OdozcLIDu4HoAHreJDKBhgTlEDaTwBAmJ%2F6oQjzJZMiW7jbPPYG41MNaMwNIGOqUBcekaxjJ5rN5CA9lJVXAk7v0myeYYIwWJBAunQDtGZPfWbVbtFJblhnmDBlAQMp7CTUmKGX9PJIFpk3PNAn3iq5egvbX1PhtKxED3c5ypg%2BqEfWE%2BO3RBYlbVfbTL5AtcVlhzpFYQ14eYuYYavTgUCed35HDtbEQTQUyK4YL13QeZqUorPpMd23Fwo4uu9k1CEikJYb264wENDfyUqYwoRPGhW3n9&X-Amz-Signature=f812636b2299a3b414eada28df75e640bb47de956b474247be4b912e58a736c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

