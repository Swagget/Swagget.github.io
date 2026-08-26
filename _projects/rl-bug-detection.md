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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W54LSKWP%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T102156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD9xhsXz5WNMHfGp0DpSvb8C%2BYnApmZiZQPVqzib1atUgIhAKVdQ6VpW2J37s2Ysqy%2FRec%2FUt1mbLCL4%2FYTVoJcW5O0Kv8DCBsQABoMNjM3NDIzMTgzODA1IgzdR2IzuSg8IroYSx8q3AOM%2FR7GGyqCwDgBvEhJPH98dZj41Q1Gz8uQ8YHvc%2FpItrCReFpChqZ2z2v09gkSiVri5qhmz44p8oePDn7WrzgRcDkO%2F%2B0YTMjyAsPRVWDVLma3vYmO0MkloTNnj25HD6J5%2BeQHTlS8mcU7lq%2BaRHtpKaJvtqFAGfIv9joFcflF%2B%2FqgVVeOMRqd1RuSPZTC5JZjYb%2B8zfcAJwdD32cCPMRThmyzTf7o6NhfHnLuf40gsXDNBtJ9mvKxU9MMwRSNl%2FHSmgw8Pgb%2Bb2SCIo0ljmlme8IYKRui7L3AsuKRPIu0mCXg8ASQHD%2BFPDLM4S74ZIjTWK80tVz8KtWVR5itmDnLDY1EASF6RschzB3ogoS4JMDrALC2BqLKr9xkp0%2BlJNTiKZ1YJF7TTCGOYOkiHEP43NO%2F%2FWuAE4CWu1mHpEksCi9j6eY9SynQ9qLc5nDd%2F8Anz%2FsPdhhrC%2FOIbrE0JThCSC2CVrgnhzJfQ7OYj3v3EhXhKMVd52hX%2BcVlFB3kn2Zqm0Y0yjMaxWMkREFPoirR5wrckc67guqZL%2B58q5Df%2Ffcwm7wJ%2Bn893j7OSTR5Dv9GnZpisSX8sunWN5qzKiipktv%2F38cI9pc6NejETtsCN1BtDQ%2FQhudxEwDaUTDC7rrUBjqkAQQpXSL08OSKYgE%2F9gHvxvFjFNMFAfHdpmVIn3xtsMSLu2ymTkwwECWWuPc1Tzd8I7eLiDWuMylg9wJBb7RZUM0ZfF%2BETEMKdrD7bf6Te37emrl3mGNnFjz0a%2Fs4sPadoIkgqXcbuQt2fQsQXb8UYb8IV4VFlMvn6XEkZ7t%2BET2zCasuas07bRmPg5MPNLwr%2BuWozjC3ZoRoNcOLrCP%2BnIY2yzyA&X-Amz-Signature=5ecdd1b429524489ca78f485f6c0708c18801e4b5102f70a8b2bc1bec0d458b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

