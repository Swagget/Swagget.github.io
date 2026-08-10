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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBMSSKR%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T232246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh0btyORoudU70Qat1boJIbh%2Fkt3V5muFmsSVtLo8P5QIgelrkS5HBIXmofryyeSSc4pBsFr1kv3r56T6rVClgXCgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILG3nZD66Kh1Hi2gSrcA2LssnwIMFnieuARUXpZgTGPF0vNI6uQ6jSN%2F9GmZFk6ChYcMZg9Z8gZ9NJ4jLWfRVLKdsX2w4dmMBaenc592%2B2DF%2BxrciMsDHu6WXQHNrJH1TtQhu7WC4OQdA77l3ur8ZYN10Fd568Td7YWm3knz8YSDqkO1A9IO2H8ynt7ilyiuZkY1MG7jW9O8BWy22bGhdhbunwZmOhwXVjs3enfY0kJdbTxcpezcyJoh%2BsVzCHSASUoAduB91h%2BSRdeBYHbM9aj7ZVcGRPfHCkUsO2PNTDNRvw9lYipzozlVnlcWYXJo1EgoVuE7OH7DFR9DEu6P26xD2DiXK5r51%2BwPJYXEut%2FrMxSqBcGfDwWfLT3UV4PRt4Z3DbWCcon8%2BqVDy%2FpcYnDPqyr0m2NYjpxckrbP5WlVKnRQ74FXfdcG2tfjBQZ0DqyneW1Nr4sIHsmhX5KP53tTYHJxuo8I%2FLrY%2BMeo0q9JI5UI%2BDDuNV2b%2F%2BrpEUoq7%2FOby5gDpNxJtEYVvonSuDFutY2UDQfXPkS3pTBW3b4FIPfeHFiEAk5hh%2Fxdwhuc%2BJvtOfaUIrqbwSxL1hGYwLwq4qFQJ4omGbnoPIRWoyZ5uJDA0ZbIDrIy9x1adkhhoxXDatC6b5HVwYlMIG26dMGOqUBaotQBmbr5G8ykYcPkMhlQWVceN4CFc7J3NPp0OaUmI3hCW%2Fa3GHL3IScFUDOOpd1IrQkDw7lTZhL3MUJQno9qRhUtV6Fw6HDdjKvlukqy3SujF6HRW01oEQqEz%2BfB%2BKg7pYbygf1cQHNIbIufGRmo3XKcBOB48vPL2CArq4%2FZPzbqgBf%2FZmTNDEESBvYIWz3r5OYHNV%2BJbX8%2BOqzYFvG5Y1rymCG&X-Amz-Signature=6fb3adc696f431a4ed8e54fa4cca4a26da84f5e6c1772d076983aff1ef7f9524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

