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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZPH64J%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T062227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyOB%2BbnH279lMOGNBJPtA4O898S2LGQMycay3o%2FfQPKAiEAh0iugm%2FOTxto2vRE%2FscLZuIn85FyINvEIQokoA0cFjoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE0cnlNVu6UFpkVdircA88k%2BQSwIQVPWy5oaJ3J6Ek%2BRB4mRXXOXpuOH0LuD5fWAeR7xa74c3MVjYFIwgzVJnbaC1M%2FAn%2BN%2BUBeDVYLGfXvkGLewpGZnLKHDfbdA%2BHBqy%2FecohCi4OvPEtKMefZC84ESA2BUMnaHkHSe0Apvhm6Sc8cwh%2BFYaWU9LQUkN567vVMl1GqPCXbS5VfmbRr96THQwr8Zu7tHa3dgYdqGnhIt6xfxzsjLGusyaIN0aCUDHh%2FqZRbSSn2wqCHenV97DDDR8UQtHT12nkQUw0eVvvxG1G4xHhBYdi0HOTxeMcVL4JMbOCn4%2FKZVD3Qr%2FK9VGL92mmtsyPa7EncuBxiNxbbEOHEvuBFz2l4hGarnmzsB0%2FvrM3OL%2FyyizlvLatISFv4BLjhw37A3XVnlNTR3yJwuInv7bZonStsnoeI%2FMHKjgT5oUPOCPVvTzIrJKgKitNRRBnJe2pSq51fskFsQYuNZWhgqANBSU02lMugqvNIOUTFwaaQ84MCToKGl9vWX2MaWIhelR8OWtq67FEFkcuZ3igyoSiq5%2F0JABGFKoUd4RI%2BieimpuM9JniDZ%2BJwbYOIXngprZdPm7wiveTjkYWvCM93H9MtI9bvn6Ks52zCDi2ii02jKXkVZ3CCMMytmtQGOqUBChQUQN1sR3w2ljGjNP5UZo75owM9yjBvrJUSNY3r3VUkaxxEbgle5uwc6IKeS9l5O%2Bvqvb%2FF1yARhc%2BQqtUcGTq0shN2%2BffFm7lx1wE35ep1aWeUgKiIajMSi0RxI4oeLwyUxh8UWiAKVnVXQg2kvCmqyCLsIpFlZljfSHDNIdEwh1CqFtfvI7VNXMiirAzoS94LYMX2IGQ6PFY%2BKYeYkRErUmP3&X-Amz-Signature=c77e9c10c61dc3c5dc1b1123c8fa47bfdb4ef6c0c36f33179259c2c16d69afc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

