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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7JIWYYA%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T225446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhH1nEGmZThWNl3pwCefnPPOsDwy52kopa%2FmFYN1xFMAiEAttZ8NHJkktPJUDMr%2BvfityKnD46zQzB8DnZsk1GzSBYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLv8K7gixYlLJnnckSrcA1OXYFeJZRDh%2F0SMEJ%2BNhjNdTBZP%2BRshfLPfaVyh26Z7otm0rjcUkvpHX7DNofTdQpQ5SFSKe5HB53SMS2zPhYKMaEffFWd3Bwibs%2B6MPqFVZiQpR5%2BFu3p3lziGj%2B4vjGrRKMxq8A9gU8LLE8AexBTM9FqD%2BwFntEugyNwBcjMWYSQpxwcU%2BpTDjVWt%2Fn8nA2NzyVvtIsrEn9hBae5Q0FtvwDvYofjxpUaonciCe4I0%2FVtB3xomUj9otBO2BieO%2FAc15YPA2A%2BPbT%2FhQ95rvI6qpnt2UQH8zG3RRRF23EhABmLAV%2FZn8XZYewJlF6dl%2BIqbIvbSfAgLFbWuEBrQL%2BjdZvvE%2Fl1AIm7%2Fd9sEIzrrrNvoyxfmSsVP214x48kodBqfIIk9ZAFlioyMBDvcs5IpFw1IVDbu0oD5QZlOpHKs%2F7LQ4wsBcUD4o67KIm5RjsMTHpez8GXl2wp%2BWxwOBZZSTbmlHusMrQz%2BgIPDn6JknZeO1as7YohmcSiIdV4qGZqpfkT5xPOTCfUSKQL%2FxR8mVGb4Ehb8ARsglliuPhzBD6uLJ03DDFJCyZrtMOJ2KIDRdp5V2aXpxG2HERJ0XJgKQ1OiATOBIkX9qzm20Vz9NuesaxxorsHFiSlDMOCdjdEGOqUB51XmpwQUL6zZtIgao80oLG8vrglgAheFShhzB8QY3cp0wn0SldvHjvVfTezBLoXmpWHKE%2BNJGXuq7CAuM1nA%2FV1LVSKlg7DDq3k8e%2BFe9ZJpMR9G25%2FDTZthtyyah%2F%2B5zDT%2B85t%2FXsMP4V7sPDXgUoBSuovAR44d2KFiqBre7OHx9J5lB%2FnnLhksZB%2BuPajsoL7xlXXpCsrab1vR5TQKNm2fi2oG&X-Amz-Signature=17e4bfec3496ad500b0479d695bd113e5050949955a4c1c07cd5ec9b48c4c971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

