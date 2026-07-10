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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CAPIBT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T234442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3B%2FOZ9OdafiLdxPodTTHPcfJHX7S4YJUE8WdCvcsEbgIhAK1FJhaheAdAtUFBH086BKTKkQPmHPTEZ36OcTNb3nB%2BKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1HgwLRPmdPxvt9Ukq3AOPzoDb9IDzt%2FVPizOe0DMuxhqxMS6F%2BMdEFIYHY3xmnzX%2BssJVMvLw7Zx4e%2BykYe4CwTHqYENMAn54JKpBnEBSoiwHYtGuxlbGlucA6YQmqzoQb%2BKqOK9rml16NG5txGSdifGOD6kXFNDTVKgWlHwJz04Kug1cUY6uscKkvz%2FKxWHwhIm5DLjrAOWIoYACr7u23HnUJCxkqEtYirN5%2FdD0cEOjNY4p%2BftE8Ec7OdmoLdPWdLceSahBlWUWhaMcxRJoU718DH%2BiCQ7%2BQGGMcHrrIeF%2Fd%2BzItQJ4imCV7uP3fImNvk%2FP7d7%2BsEDByfV0XGNA5h8mvdXuDayZsXYCuUrT238LVgewj5vkG9oia1PsAvsyl5lbtQWhl7VuWqu66GLp%2FASqIq8%2BwtXfM7Zl3EGYuFZhZsVEYmHl%2F9nTNVwAd%2BEEcI4oW3PIbi6xUzotaFIT8A5jO5YXOvtXwy54EVCiM1PHEdVQyVF3OBPAf05eDdhZgAGpJByoBe%2BXzIoDliWFPXzotCyJGifnzpZMm4T8mMH91SR8IjRKyPZzcsPX9qauAmhD1fOfYoEv1n5C1x3LTzVX8QWOPOqcCo%2BshBMfn373Mr73IYZRWudXnlM%2FI7gvCq%2BKTs1bk2Jf%2FTDqz8XSBjqkAVOsID8%2B%2FdtwU1NzouTF4tjPL68pvbLVWgVNIFnw4Thu5slbfbSjvzQyyAk73dEDr4suY%2BWxyxNLq5M%2BnZbo9MHbwuMIfYFkn7FhwO5F8ri0Rfcb3uqElPNBcTg%2FhXN2adSrIja31L473AcsMC8pFzD0si7ViXxR5GYAS5ZNdK6Vs6EjwkMBFO0OgP2OMQ2yfD5yfuaMZT0WrrmlbVlUnoF8Orv2&X-Amz-Signature=9b440d05c533b8e46ecf4b507ca9b408122854fed9c9f79f216f8124b50f73b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

