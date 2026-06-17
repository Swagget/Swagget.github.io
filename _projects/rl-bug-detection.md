---
title: "Reinforcement learning research paper"
collection: projects
category: research
permalink: /projects/rl-bug-detection
excerpt: "Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs."
date: 2022-01-01
techstack: "Reinforcement Learning, Deep Learning, Fun!"
source: notion
---

Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs.


The idea was that reinforcement learning could also be used to understand game environments and detect when they were behaving erratically.


For this I tracked the gradients of the last layer of the neural network and observed them when bugs were thrown into the system.


It was observed that when a bug was in the system the gradients shot up massively, and this could be used to help with video game testing by flagging situations where bugs are detectable.


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVAY2KI%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T102612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvGQUDgsaayWfUH9WmgwyTMcktD9pGxmEqnY6viJ%2BO3AiEAm8r9ywjIAKGGEyrrOvY3HsdzWks7zkIVYHW%2B8hBI8zkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfHai3veg8I3wYIjircA1kmYGw37UDL2kkrZQ%2F02f7JUdxJc14WTsDPNFel92O9s2Ngvm%2BgBwhJH2kxkbBge%2FAxq8QBk76mBojniy%2FyxYgsYazSCHGnHOY75yeqkWeWhlfQCCMAt6GYOaUb8qnztHj%2Br%2B8Mq8ZJoFcH79IUU%2BeA1GGvMctuppT29v2YsFCagY5Ttu963i%2BA3bhN9hP4tWUEniyAKztxknYxVgAZGWqCHYUpPz10EmHz%2FiIZ0M%2BbPxQawwHgXRGlHjAYj3KDPXoQGTwJf2ErK4ORMJcwv92OIzAZDgg1%2F4r8UaXsq0BUsCB0jJdk%2Fh8S3AtPL5LFmbqZs6jvnTEDTCjy0kgmcMfCr3SNnwetl2FCi2Aa4OmRMh5CBLRxsqbf0Ftrt7uj5MpoVaQi6%2BvunbUmknP4NDr%2B0tECE2c1Ove67XhFKEmOupnJWB%2BgAzuUM7W%2FbIlJaA1C4EKQEGLUXpvzL4w6bwSHKeMlEPjj%2FQQQTpKuKXLAQGy5e2xBBXk6tb%2BU4VINZTz6ksKv%2B8X5XUr%2BE1EhEKynaqGptLt70JlNF8xR62smJRC2HgmrCez0H%2FNMm2qV6XhC8Zv6XfyfQ8yi3COtk3A2%2F08jfOGjwHR%2FxYR50Bz2iNF92mg%2BEYOyrDFMMJLCydEGOqUBBIAFInJlEju9I3eTeS%2FQ1utV1LEUtWGFQiebb4E53EHTcnvx9UERTFQzmzOx9qzMFLUbZFiXzu3gGPahFAMUzNmAaX%2FHdBY7locqPD4v8p2pALzfT7Oy%2FS7zk7PFiScgq0yn9Dv4fIfjGEdCg3u9E9ZyJfGySNNYNPRoospJSRVsIb1Ekm4jPugUAIz7kEsLN7VH6jaOIFLUcgBMSxBmPgtndfhr&X-Amz-Signature=d7e9546fb8f82b81759d8b908637e95389d86c7949d881917bc979212c3d9f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

