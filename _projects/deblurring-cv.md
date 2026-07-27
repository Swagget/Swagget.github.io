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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESFPBDR%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T153400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNOjHCwvpHpyX0brPWUJP5VzLQZg1j9DolUDOZldNy2QIhAP%2BPUjD8xlqTuV9CE8688qQ0T%2F2ouu0H5WLxyv8TOePdKv8DCFAQABoMNjM3NDIzMTgzODA1IgzOgQKduR9OZ5OFASgq3AMom9fn0%2F1EAQ7IQAU6J7ixVQmAiWY3zCQ8BE8shLqCBxCaTta8IdnWf3v9D5%2Bz3qkyPwLUdMvLpZ0adL3dKITY1ZbqlUKFxJo56lwXzUKE9s9s2amiBbvigddSHTM%2BnxOzLYmN%2BaH8u4jo%2F2Jm0X9sJ%2Bbhi1p%2B7tlurMUU0TFWIxLe1lnVxDdYG9DrefjuNGxSBg4c%2F0urtKacVN1HjEqQ5i7hf%2FJPInSXsEzn5qNk1Z0SyoIGk84RH1x0ScCJ3ZJtwsKPjuddj5NFgE3E7ESaz5moK6iJ7KXMt20qjNdevw3rsDhX8tDSMV0Z7Sh7B%2BMjJP1XoSZYa0%2FT5Onqy1qlRtwo3WNQKDpzwpgCWHhWd0KE9rIFRz2YCJkjzlSqDu8C3IwD4bRN3yiXoYnViLK4xE0%2Fxi7MbZvxfQn%2BLQfzbuBQhAzMV0pLA53rLK%2B%2F6oKaicIGopyMfMLULhYB89UQzjdmTdAA8KjRVxXwRCJmrSAfqmGyUQdR0crLV5%2BWvlIS2v9OgZ2ikh7%2B4JoH1So3f31R%2Bl2%2FrJRjYOIyuDE%2FH4U5ONrg7PPSbaKmvLX%2BIi3AOXPnjy8E%2FDJX71p0y504lOrtQDrFCwYaitOHoQDGpQS5CMVt3inWNUb4aTDs353TBjqkAVQauI3Xquw5y26AM%2FDG3S8Nx1GXprvCnyz2BuQur0B%2FgZ8n509hoCLpXY57FcPDnwMpiBq9aNqA73vw64TDHzKXImvmqX3bNWp41ee8GeFrjNP21yEG4ibvj5XwxQETxN3g4XgD7cqKC1EljRSv2LZ8nOiblkV6Mqea5DqusAqsKZOVb%2FnkJ%2B6RaTWh4FPZHHPfq%2BENmx7PCM8s3HETwoC%2FCFqw&X-Amz-Signature=872ba74fb54a8dabf5ed5559e11acfdcd698318299533fab2aa1228bc8141cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

