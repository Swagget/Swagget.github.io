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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRS6AKZ%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T120357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcsx1GOT79CeF3CbzjFf702tIOLS0xLmDcwYqHEUXdqgIhAKIQsBH08ZrFnRSq3JIKUNxxnShnT1pahAtLE%2BPzIE6YKv8DCHsQABoMNjM3NDIzMTgzODA1IgzDTHa2wVkI6lhSZ90q3AOHPPK5NlJ6lzaqVezOC%2FHx5vPOtNtM%2Fu%2B9ggMtzfQMiZ6aNp1VTt%2BzBzGzxC3YAc8f0fKcSGVMxRyBhZWKiSuH9Ty6dPwlUOwE9pDJGSpYbev5ywOURvIywzBYXlUBVC3M7B99XBs%2FWU%2BDfzgA84CipuORQTcKlf4cwZ6tN5azytmZaHErECq3d%2BwshIy4eWZVsUXjAiNaf%2FnB19t%2BH4Zv2hCiaDqOk9zJ20nWRiTYfTFBiqaSDNY0fuoSKTnT1Nb%2BNp5JEVzPz0l%2BP4CF8QlYOO2pdvTMCD9C6NydrwWUCpRAtrBiT9hFVVrdDv8H%2Fgyr7rimKmGcroVazEAp2gfD16MqbW7nAaFuPAhXJ%2Bce4KcA51NWUK0Nj3i9%2ByOBxmzT9DB3ldV6Ik0pKPnusxp7AhmaH4J%2BmnbUdheeukQq%2FGXqebOfZtpVO8py3lokOjB47yWjU%2Fnbp9VXYQODgu4t%2FM5%2FQ78I9m8OzWg9KYm9AOO%2BAf960owYF65T2oBC%2Bz71PGYuFq5Mkvi1eZuuGrxS6o%2BiHVRVDmIbwzpvB2lZi7BezfKfYunEIr%2FhwpJWB8IMFz%2BZelWKvw3Fma0HZtJHI7SLaj%2FxgnHc4c464KSoSZ2Tmq467b4%2B7cqwsTC7sf7RBjqkAX8nSCcYjUMC%2FMHWta7nChvnGRdQR2OiUUYG16mk%2FY8dCoAn8UL4h1OMrNEpSYBxdRcE4CBvAjx4Fxded65yPEWVFO2Mk29TY2DoElF07UW5M0%2BckdP5QVCPgnGyUluXyAy3TvRvAek8rjVGZCGB8pKvw%2FxDR0x82rzt3YLGsa0mA%2BqzZhAMRB%2BGa7q6AdrcbGNqUTrl5qmuK5MUAB7o2wlMZ5X4&X-Amz-Signature=c7b866d99169b5eebc34f3644344b4ea5f514874f04d65a37ed29768b5cc583a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

