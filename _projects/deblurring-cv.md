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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JAY4WA%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T174543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDHMF7jH%2BeR6YKxKpwaou9ZjXtDrkoRPR%2Fu20%2FOu7P48QIgeA6RScGmwHHIQCTAbfS%2F8EF0E%2BWuf6CYz2A625%2BnIcAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAL79Z6KKQqTEovpxyrcA9TjamW21Aya3cWDIG1Qg7KUENdJTmOX9ocfvpLbRatFlxsHJc6WC5oIG6XOEnbn7kCtZ2JNf2bVZW3YuoxqkBgPnDBFetHFpi57sLz8D8WErGdBkvPGb%2BId46RNtHyDVWoZuWesKQDRgHtLfBZorC2HJRq3nLFTTlk0wGHdz%2BiIXD33RQyIvODXWbomoHDrzce2NHrqzI8ITD6bSnSnZKLqv6V13SesMZ6HAv5dmkfUKGU0POPAaxLJaVLTW06azoB1A4YFhakm5zSmprnkfQGx5bu3Ddyr8MNS9%2BL7CrLzBgINdBVy9GEZbmzHaFqVJWpy6W6kQHohfZMmTrzGX51w73gcbn50LnV4A9qnsixIA79Lc7fmcUZM4QUiyvLvNHqcVIY%2FeBYzGhBWDnQQLIIIYQiKOd4KKIgMl6j9C5Lf2MX98TZ5FbdgJoQg9ISBMuG6mm7MoLVMXpCV8woYhkXEkwXL%2FUvClEzyXwYcAryuwWTL3kFBQclRDmPtaEutHDZ6mF04FzlfROS3OTbHiW50%2BwBc0dOE2kG3Cwe0u9Op1SwB%2FohtteE9x5mB8j%2FGQcgl%2ByZ2OYpAdmgJIskgUyfK4vSYFJXu4dxhXKzg9Tj3THIsWrWWBDAiZa64MKv479EGOqUBe%2BFPoLRPcp0Dv29cTyETmsDxQ2Jzf6s9JzVUQwOmuns15Z5K91TUHL7WDZP%2FSrzS4%2FwjQHZeu3RUgucas3TEc6gtBQBf8PEwCou%2BcSBvt9GQSdJiKA1pnkqeJ5YkugG5DolLHevikzrsYDWJynmWQZWQ6tck6QCezYCoh0USyCMIWjEJrk7NZ6d4x5xYCe4n8M%2B%2BzdcvCg23kklb1HWVQSSG0uwM&X-Amz-Signature=459d19af48752674b33283b088d539c9a9063c5c1c6fb111e2ab8b902defb3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

