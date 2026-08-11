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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OS7KYSA%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T164259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhbwstd6025IQKyNS%2FKBlmPAXF1lL2qvoDkmAUJjhpGgIhAMGG5%2BKq8awg6xN1q2FpKvaoz5Qoh4GYe9KhlKNsaXsBKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIY0bvviNmAQ8inYgq3ANd%2BDSwkXMQOhgQcmlZGFrMSR68UBgXDt2dZZp%2BO%2F7k6iaZuLesjg1fxtX6mmJ2YlTzETn77QqgAkPfV65rPAmJLTFwXMaTWbJ5KWkaVFug%2B83kD5D8YnSWJw8VG%2FLTihLILGdXodfQLjxrBnIlxE4br6acQ5B81Uw7%2BBxleUVwEcHuiZGOoIDGZKDW227IcMymRzP99Q0OUdBHeAatCQWgcNitYJN3dtSB%2BbsNeB1lZzMcdaYA5UdOhELbBvYAhpWpPQ46WyrQq9OB6ZM%2F64UOg8gDnXc1Ix24Im1v8DmxZSsdB67hLnSS83Zgw7qP65q0bbMvF7CKqsnmAJhj4U1Zo9%2FoE9K1MD3IPzpQC%2F%2B%2B9gwh8MfMDSvFY9Q7FF0YMmxyNz%2FRqDYhiOHspT0n9%2BUG%2BNYlVRtJRmUvDRLsY39%2BMJo2N20qhJYq4e9p0W5w1wNZAwxG6HAntjSsBT%2FmQzKj55%2BaR9Wfp4mWXuQg2TsRKJf1b2hEhOhdDX%2FrMuWMLYVG0XyNKi4zwHuIwz3Q2YQyRIchgnXVWcukCCg0qRVH6yuhE8OG%2BAQuB67vffzpo90HMsqPodVqulk52GpGwuJS3egHYvrF1tgXKxKXdwI4xO9NaUcKgmSHeMPJJDC4hO3TBjqkAf9lUBSQ6fSJn6YMkR5ZHDtYEcNlMZtQGXk4bnPzxlPYzTzDayDYukMJU2cWVS0YZtnjcSD9p6J%2FY3MJ3ipPw6qobSd1yv3KklesaBdztcvDKJYM9a7TsoLHEKEmbESWtnjny2HILNN48bYkTqKCmTCeMsqmENkE4unrjdYv9DNK0EDFnm6q%2BIo2CbP6fi0HSa3MCRq%2FsLDxPci%2FmbgqaVrXp1tO&X-Amz-Signature=b07b8ffeb769ba6cf312aaeac6d127902d4ab228494dd7738c9e2355964fad82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

