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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMZUABA%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T151630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYfKK6iXbtsLziLa0rfbAAqa5YqXznZIp5AHxmIwD1qgIhAI9aM7Rx3XRi1jLnYB8m0A0gplqS634raGXL2Kw3Sc7xKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2ROLsEe81F7bCjB0q3ANPHS%2BYFro5H8rPQ8XxwfeEsLDZGyNjvaADmVnAZZwoK7QVqZtshKtBzCzdD7EKnGL7QhkeT9Kw9L2nek5QP2%2Fg6PVSkX3fy4j%2BnDDIDH7qzVF3cYa42kvzp08UNwg%2Be%2Fz9JfCur3OB2MvjINxbaVrPjyIApARlEvWdWCWNpcKVDvSFcNwE13ShVy03iO8XkT7FN3FBeDjYsW6v7BJ1eZRUC9QRnbANd2fAH%2BnhBDhelfdkrjb6%2FChepJctBTf04dvENmm55DPpjvAOCNL%2BdTy4XTN6MzBm9NXwExfkVFxHnJcv8LMRqfxJgGREPdbEL4G3bYcGD8vxXcdQezbGfltd5YJ8aRhNBT3ZK1kWinZhCaa%2FZl1pcLckjN9I7q7zSjrufz7Vj8F9BYFRje8U7DGIKMHZn0ot82uMB97p69EkfUgn7%2F8dV6XGzU3eeYZ3Ohmjr7xsU5e9vyl7oBC%2BbBwyA4761DJDhc8tva7HCK2IxqfTmU%2BqvwloqNumtXuVDAlPMGEKnfZyJC6PT0lrn8zKgA%2Bn1sPnq9fdOrLkuYhvVmOeKYPhpr6vkhHZY5Q4gLkFow9jwaqvyXxu8kZ5joKCGlxuL0%2FmE1eqGTcD9Yj8YezFa7GHBSL6qnWjxTDKj5XRBjqkARYhgHJYbMe9SDm91pBOf1S1I8inwZ7HgqGQlszNtNIasGgiW3MWl%2FaOhs0tYoXlsG4qScE1SyOimoGlI1JDVRKec34ddLKsa%2FyMu3C0aEvxIAKdfH7RBue3j6FopfejlvVuApzCmkxQK9vwMONHc9PRpKqsdkwXdgMv%2BpxYS06V6hDBKm3Kg1ZLHgk8HU0rnuIB691Z1u%2Fk1AMPIQ7MPkj4R%2B8b&X-Amz-Signature=f94e103dc15855a540470cb88bde01b7b29b2fee6261164adced02e73693f287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

