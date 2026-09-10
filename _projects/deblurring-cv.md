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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZHOMJX%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T014332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4kS3nFuRUhCi89dm0txmRsd8UY5cOXEyjtlDM6NaNRAiBopDEmo26PQgtIPVxd9MtZSFAiAyvGrGXMfdR0Bj3m1Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMVse6EOrNTlmUFBPhKtwDhgqyJDl6Iq69jREfy9Xwr89pKbgl0SqG5%2BqrTBUBzu0MBpZ2LxuJ%2B6UhDh%2B0CvhMNmetI%2ByWct92iLAuBNMp0AkgoiHv6%2BM9HKsmbirw4QPwjZ7vb55DfepiPRzX5J%2BO0Byt5KSqbawBhfgmNXAosz8PhvebzdxrzW21zWc%2B%2FcQFzNjYVBEtKMn%2F1FERoHBwfWejoIJ5dCrPwPNTsZRIydCX4jlQp2Nvh0kSTzo7NT5qQ4Z0aJznHtoEJKZpVmxka8Bfpd9dYWF3yMWdPrsvoedQqTpJ9CvBxSKiN10C5iAB8DVO9avtOBO678mqGxZg3e5oQNFyw2KC6T3636RR4N8OB33DV0SdUouOGub%2BAFcK55iuaqdLieklbxxk42Sj2git%2FlzjyeHpGGz1CwLHjmqM7tupQ1ByfpNVxQFgk2pNemp5TkJbvPqeHetzR%2FGIjREd6r3t%2FvbaOUc%2FiFKK5%2BVqVbKz9e3sqz11kw1n%2B1s3bERgSzWI6SwphqoJB08sNagr5QCXREvjkLbtoclpcG%2FSBypSxWnoFbdXhFqHZe%2BJiNRxAGxMSMWKvZP%2BD4FpTZYKH6%2BGl6ZLqG5JaL0OalB6CR2H%2BYQWKtplnoGJDX4miZbYvbug4tbMwjEw6euH1QY6pgFYiv1wKrq%2Fa1C4VWDheQKiGapzAshWgBSHlTpgrO79wSqEBaxZ%2FzzXb205B2wIxxeIMTVBTDgdrXoDJ8TBNeejM5YLd5YC%2BcDhM2F8wWg5MnrTOXfvH%2BeHal%2BpwWI5MHNByIx8txxbogelUGCwJAJYti75qa2ttn2KG4WvGaGNa8MubKd%2BQEHHsfaORfczF3nbjcupM3cM9p0WfjR66mrCl3oy%2FGn3&X-Amz-Signature=331d22a918920930d63b45d39454bdf8f0c621583d38a9564a80d48f9f22805a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

