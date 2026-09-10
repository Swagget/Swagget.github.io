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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJW2O2Z%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T151944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsVc%2B877hmIEigZ5SD2QeNwR2rCXttUgXrQykkJk7nIgIhAJp%2B37Z5N6NMZUMtsdephdi0ZfkAkrh0ItSRNI%2FZwKZhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVM%2Fw%2B68n%2BhhfNlXsq3AOO4IWNvaWk4QYegFTnHTEQQxdpz5B7BAca4n3%2BfkhWYMcpGUNIcGKkK%2BhMfBA2jTU8e%2BaF9R%2B%2F6UkG9Hnworx7%2FE13YEdLKQuapLy3NcELfY9oic%2BlOZG3UW5ZPqAp%2BdCfzqwDUL83yKmR55QZwYUiOqGbfr1BXptBy3x1YbmR2JuN6gUvAJ6y%2BGT8Phk6fzTryKsdsje1i%2BZiszFusWgS8TgkkP6xntSSendpJ040TB%2FS6ITsQ5eFyTurZAACXvZHNadSrGSojGwQLd2fYjl73zM%2FpNYI5mbyC6MSkf14wfphWuQMTRh5G8ML2MpZQA0r0TOWTA0kJSKC8SFoeQ49mcHHcywAlmoAqjJp0S0yhcI6V%2B1PdxXa7Ghig4IDTeCm3yF326sJnH%2Bmk0DvRT7Als4gsSaqPRVE5ivTNX7CNp%2BilMxngu6CfZNyXqwMXdQalsFCpJ2v4mjCXW2ogRvy%2BDteLTgl8McIFZ24%2BcC%2F978cIo6JD4urcNithS%2BvIqOwtrosYWWGm8IvqF7xuXLHk0gYd9iDJWofvssoAgTzGdJM5GZCUI4WHWud8r4rCaW1z8qRgXHsEZVzQmkTjvsVK87sae1lsiEStTsrSADFHuwgjdLHCXRCgNEeejCI2YrVBjqkAcxMbFMBP6zMUiJEUilJ9JQvcjqaO%2BLrrZhQYSzADJfeIut7p6R7KYg4qI6UMV5i4HSpw86p6Y9RSUEZx2VV8oQgvUiu6TzfVkyEMkR6dhKh3w2ziq%2FrtZamHNg2U%2FJZl1fnHl%2B6yHm%2FB5WspVKEhB1NztH0IyTH2RzPVCeDyiD8I8CRmGETFIRAyzmjL0fzNS3DMeobeXkOlz3XvIOQiwIBQqLY&X-Amz-Signature=552d22707c0a0ddfb3805c51463d53b6ba96a301310de8a583240008e8ed07c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

