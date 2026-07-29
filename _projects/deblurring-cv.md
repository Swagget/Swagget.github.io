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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLNRDG27%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T011921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtdmoOwrxj6BpcadABKMRyu8evPgOPQU%2BgRIwfSt4mBAiANZyUsAZqxxOJnte1Zzw0G8dWUaFI%2BG7MSygNhnYWtLir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMV6z2CVrcH9pjCG8%2FKtwDJDltlv0FCRg1qIChw8NxvjrE2OYw323chxZvslFR%2BkFTBBJl0%2Fv45w2EU5pTBsRksp%2F9rDuNWr82DweADTTSqEScgHJ7el%2Fdb8ifCoAKP%2BZzOuntXka7TTg5QRPp58W7kuUUe8y0xZ6LFFuEA2qebJoXW9p7eNhT9fD7NeqOcLkgHDeJ3EDX1ibJdoI3T8ENzBrbkKiSZFymCQxmY0I%2BMstYWYes%2FtGs38Kn%2FRlWXw7WEAAyJ9xzZus%2FtantXBWxb5V%2BI4Z2Wu%2FHktjw%2FGxJ9DYI8pQWAv9ezTO0Tj04pB0ixElpPxOlvjTADQ%2FHj72uDz4C%2FvgDiOXXgI4h7QxqoeeWDwRY71j7WH%2FxI%2FJTBjdFIa50bVN3qfVy4gWCiTJNEYh1JuHrTOxAIcZ%2Fs0bp1vLoh7ZDQvqXeNAWbwldas4LWYL6ESwIO7dn5D1EQ%2BQ8v0hX8htXLXObyn0hWns1InwhsX%2FvLEZAWUoW0QS%2Frs%2BflAvg%2Fl9Sc3BQx72FtaOrItnuec3yJKEhqfTzcy%2Biv1ckfmcIpbBNr5ZzsmmlRylc%2BFfIQTT9Wfbga2yy5cALRcnfahvG1%2BBZtxQLLYFh7rju3%2FozVijvsl71hQHz2foRv6%2FrbuuW7t6nu1AwlqSl0wY6pgGdDgXf0ZF%2FgX6V0Ma17TNEv7qRkvWoHj%2BMJGg7uXkzxgpZENK56xIjhZxoQl8raiGU0dosjm5%2FqRN%2F6zMKuquebJlJHuDCeT0zsuY5Rrfq821zhvEbdKyYB9gJN8eJvPX6NL3GPNdWXYq%2BWhrOvcAJlWlyKC957sicFFug9oqCpNsC0ldX%2FZ0MBbO8dFj%2BRzhhEwd6O8GiTVjC86LL9E6dkg4LqSdk&X-Amz-Signature=066db7d397b1c6ebd0e88943349f5214f926f82bb08e15a131f8d5ae8eb1fe6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

