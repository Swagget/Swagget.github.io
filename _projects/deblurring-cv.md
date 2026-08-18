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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRNO4AQ%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T072716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3e8urQy9WEZnkUg4gU8CM36St11JfGAwuqmnMOsYhAIgGdn7n%2F4d3ZeNcWp6ykEC8WoqgAh7j6Lea%2FDaBfXQq9kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKyT4VJYt7SmZ4dAUyrcAyTxLDKrwISC8zZ%2FafD%2FubHt7VKFxfYL3w62LEb9gS3aDRWVTTvbQ29VzvICzxoL4ri4%2B7mYpvHa%2F8L%2F97qAD4aaBIUM18AsYbiSWyEtTqnqlAVwlPpotZgeYBm4J9N3EKjV2nulj%2B895MZRBQv0Nb3xUEfFZQg2caGiKA%2FQzmV6XurEeMcg2ipGcEM1z1ZJC%2FtyjxTrtMXtiR5YbiUZBnICEIUiZpqiY2wb8socbkNwEytF55%2Bq2EzShWdtJ1nMbkFC0N0z6MVLuxv1G%2FG%2FTkW8lHGbPYHPREFAzXaMn5OJsk5qt%2BU8O1HSLMFbol1zyyKWxvOViCTI4saYDK49U7LyBCYyaTWHaLKEZaK18AE%2FIezYb%2BcxxIQiGVLbYpP9QOwxEulBiwqE2QYtkOhOE0ULQb64OUkCex6ZNhe3r7tLLss6YVqTZu28oiuq0B2JHrVXx0RHlETFo7L5F6qp6u4oaF6oJawfQazbpyNChZMn3K%2BJsMqWstth4MxRhzVeSi5MDpvp%2BBrYBh8IcQyVnQVIw%2BhgKhjqXoVtPoI7dl9F4VWQj8oAXdGRT8w8nNtsiNDVuDLaKIUh05Ulmeli%2BQcl0PvAaa8lRgPkRmA1DK3lrE%2FO3F%2FisRcryNTlMLT9j9QGOqUBT6dXlnlbD0jZPqpVrK68Ah%2BBsL5NrOT2Vi48Q%2B3ISkADU7%2BYpB4NkiFjtXn88iiimuXJ693kSNIEzLw4iVYE8X%2Fk7TYWJDkh0g%2BHUykLzFyTgc1lCysn5sGitNLQwy7ysBnkLoFD8yknfR5cSYe0Ydxw2PFnGj7QUwHUH2JmZOi%2FZYbrvpZlddQLaKCDXPcHFeeUNEHqsEQuDEisYAaM2UkmAkCp&X-Amz-Signature=8e12000029780c046599bbde0dcd6f464c83adfdf0ed6b16993b3d0dc5d7406d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

