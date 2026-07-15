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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SPM5YLT%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T094622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDn7fS5%2BLBITIUjZgkzch4pelR7guxO2V2JPhMdaxep0AIhAOwbPowLzx8R%2B0kFvCA4vYkm49%2BHyzWiEjpby5L5b4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgwtK2Crnxx33a8Piqcq3APc5%2Bux4qYFhj1kVKemr4nZq577VkdgLAp%2BCPyk%2BNBF58OZZuR31o4gJJrNWS2%2BlhAH8gDGUehnKm18A%2FC3DzeRn25YhrSvM0qSSesOHrezcixc1hHTGoptEgmBjRaUhCru7T203zoJ7DF8QN4rb%2F7yRFFtGEkabgoOqIkTYkA6zCX8eR7%2F7%2Bgs4KqoXxazE1w13HMsDfsNVBvFjbucFdMb%2BDwFr3C3aUrJfDcBtT4QzrkImAoKjIA9iRp59fnBvOpSo0q3z5jNKhkyAdSK96WlC19UbQay63%2FQX5Q8VvmxzgrgdthuD979YLKTJYihX7g5d9I9gS78wZyQzlu%2FzMfZragDDcTsBah7DcwG4q2PnNwPOzeybFCshrp%2FnGjsLSR936%2F5Zd26fmt4RjgA5NKXvO9QQDOEJ5dKwB%2FhMvPiZRBMDwRJkPZMeaUpHwsEO93mgraW4VQrO4YU4GAtLt4sXM8BBAe72HQ3HATca43mBtbWgVAEv2nooZyCHV%2BwuBFBykxMhXDHv5kOx2%2BZry5Sm0MEeQjJFerGlDQKnfghln8SnA3qLRZPGHd%2F4v%2BaUC%2BCRJrJMx2MDF%2B7mrNzx%2FS%2BY8bea%2BV6ZL2gi0s2P%2FV90knbTNf6eSJUlMIEdDDwjt3SBjqkAVTZQH5RYRL5x1ZUeyVSTPXwQ8OlVmMauomYvGrs53JvhJcaZElo4U11RW0FwFIn9QYU2mv7I9o8lEbLn8VVnUbjrNzbkAwQ7M0dEWKFvHGrvzADJ3VxEeOWvat%2B0IjAAVAzAGhX391UY1TiGaUu0nQkX1vXMTY7jkf1j4T01%2FQab0UnqvPXkAwfKqnAyFuW%2BH%2FOHvRORroJ0UiWdjAPUd2ytfLO&X-Amz-Signature=8923ffa4de1e9efc9fae6fa4895b288685c6db599fba8265c2d6dade333d0dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

