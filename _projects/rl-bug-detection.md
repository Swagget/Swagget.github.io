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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCM56VP%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T001858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIB7c81h9ujj7swj1nrAZF3j92dl498aTn6JCN2s%2BXZ1hAiBZrrCyqk5tN%2F27mLpRVzDdz0O1o2HtZEij%2FQaXfT4GZir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMddRla2%2F%2FH8HvfDnPKtwDLw3F51CqzcWPQ2sUIo0Yo2MPfb7si0qB6alKw6WKa2DLGvukke4wyOPyTi4wTWPZhEumRO2bY9XqA7nr9q%2Fm48UeFi2tN8lnPJMf7CzT4fE0%2BbJWzCqg0koWv6mlLpS90tL4JmKeiZM6y2vYhDjyhNej2OfUmLTCvt82JmlmqG3YgtpkJMr8n6l4I3yMFCCNUwIgF1Vkby9BtJfhXppzW%2FciszbSGoWdMDyER4fl0FGbdMfl8Ey2UMOwlgd4VbxXyD5Vh83dkZhVBn2wMrAmJnrjAsH7SFWuzxVzQjtVPviIKgUzsro%2FYxqqC%2F%2FNOce7LaB6jmqxXoFmC%2FAvT5Pj8q8x1koroHgd9%2FbGKC953JXKFaREkYkPM7yVGEElh4lmAbkmVy1fRHVvfBgzyqRSaxKAnYTXHZLvMA2SH3ZRsTYkGVSwfHFREpykHAQ259r3En6QLbY680rRI0P8w%2F76j1OWDCzn6Ua%2BnEZZQWHPVqMBKOxZ%2FJtOWSeARlg6YFV%2BkV2nLPcA1799gY7ZVaH75OtR6O%2B%2BrNSwSQ0XcFZjgGfLubfLj7L9O7WMW24gf7IyZTtUURli7loRF7gJhJmKrggv7XJ0UheSb%2FX9X17wGymNT10SsJhwDIlVLfYw%2FtDy1AY6pgGX0vdLVDVyGeV%2FtiBTSpWmqoxRqR27e4N4DrE8525ka4LNoVJyA8JVug4ZWYJRvwWxe4WbwzdvMYMojXfp2W6dckYNHbC29dLAFEMuYDDX9Y3Abw8zneuxrTCw2hFocB%2BZhWENHbREfrEJW%2Bn%2BcRY0tiQOz06fYE9urFhOm4pZoQasluDSl%2B0BeXuTGulAQ%2F%2BDsb6NeRT8nTjrRAiqNa67wvqdglDQ&X-Amz-Signature=f4c82f608f717abb778b35359726a6a10525b29d0d58ed01de199b9085e0432a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

