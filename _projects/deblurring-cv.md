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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMCSJOB%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T225608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDeTacIA3xZqPEO07ZvEPBxJnZgMF7IA8twjbJz4opmNAiEAnnxFKNQ3GT%2Bb7lpNevialquLBMWGidrwMsSHzrmj%2Bswq%2FwMIABAAGgw2Mzc0MjMxODM4MDUiDPRlu%2FmXeicEAgl5oyrcA4vCGZ4fT8c%2BnE%2FdWlowwTCuID4en1WpHtUk5ljVn7%2BIozajIomFPvHJ3R3ECVwgfGdLqUU6ForGZBziLtYNTcEONiT8B7fc3XwLocaDyTf4IBBzZdqw%2B87EhvB7S3iDS%2BJFAfouZu6N9cmF3T5MG9MHOhFQ6exDDUI3c%2BGx7ns6MazJ2Y%2F15jhqqlybamNXBrARXWtvfQHLAt6ABe9WQppLBhT8OOPizgDuAg4%2BloEEXPluVMuyzfQaxnpbUFvisWYJIMMaT76vSeBeF3O45k3JAmR0UNqiindOAMRBCFpTeSHRdY9nzI27PSycP1rpNUNUywAPwwraNrdpKSpaVZ1Xa01imQ%2BIzwvIou%2Fyl09%2BDgJWjlnC0jFG%2FNz2XK2zRFbXNZmiXmMsuETPH4iNmP9fxT4uugyvabKigrU3594yL4n6yOkZ8nN5jWAQ5mVPCD%2Fhe%2FeeGpNJq8UzRIySCxu2g733pPev%2FScidwMPvOyv4FYZP5H%2BmPA3RDCzV0FHScUWq9uaHC4u1pxo0ljF6eof8O7fINoJ9DSovi%2BgzmLK2%2FRUzajOfkVvModqzzDdq5X99qQ6BfH%2BoSodzKJ9UXcRLvR4o3lKV14ByO4%2BO5xzA4LJBJtyH%2BTY4%2BcnMPLQm9IGOqUBJAAon%2BhEc19GkjDjCX2Gf1KXHsoB3kF9WPZTMnbZckN7uqO1ul4d97gmuSw%2FJRZRINovbiSbm8Que2%2BJnCnWIFHXkanCacai%2BIR6TyGK0HCiLRgy5R3i%2B3NEVQJUFf2nBzHwqYhAVRnZg1%2BZH1CvvkE0yxY%2F4WyH%2BqaSUJhItLUZcLfGQ%2FhjbviKZbieY3%2Ba81Dd8vQGwmrMgdsUuLCvMo6HyVEo&X-Amz-Signature=4ce142c4be12205dc7c485241760e932373f4ef96b927c73b5c62e8129e0d68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

