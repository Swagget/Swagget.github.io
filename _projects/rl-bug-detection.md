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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPGFFIA%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T094653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F5qDlp6A1JAepRC9klr55lKK%2BoG1ImmYgb6CbM6hSAiAcHjFjRaEF32dcmqamd%2F%2Fp%2Bfco3StXZiNXHMu81WgLuir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMW8%2Bc9fJc8S3Mhk2mKtwDrcDgzrRBFf6BZYEiVYqrpjVrGjq1oYr3MumTtPq7LCFt34oR1%2Bknm5JIWMtRPHC5e5%2FzcmJsfeQ3CV15Ur5Pwc5h%2Bh5a4RpClHReINpUXwIavetUS7JTZaYii%2BaHjNmzsbegb5JfLl2nCFXOe933IgitTvalHc5a3oBW%2FFp9aAKzORWap8Fs43Bb2T4eckufWLoVvO9d%2B1B6mr1VSnpbda2MtHnzK4ha7hJXTJmlAegGC6WiiksX7PyTRlFbSZqV%2B1yxl90hs9IaD0Jau3y5%2FN%2FcMzg1YexhKwb3mzp%2BFPww8o%2Fu7sCRnWlREztDEhDmiPErvaGb8y3TcOPUKq43kVfzP1uy%2B5sGtZSzfNruLP%2F5KQ%2BB5EBRjtTXLy88c7v8LcUeokDSTKlPbznFDD9TmxrGPPz%2FedHQf9QrYuKH1F5PTQc2Szoi0b9EcguDB7386jP1ABIJMnL0XwCbQ4Sce0%2BxQIuu4Tfze1xt0ANLKFOM5R9v2fvXAnU44Re6RMR2Lp1Mo9%2Fdc7TXtwRks3TOI78tLhNzQpkLK%2BPcAapcwPdNAYNgpMv02VE%2BtgyN9JTgF3%2FXAxzKWfGxW9xbtlc8muUCVIuCVQUxK7G67OxZb8750%2FaJfPUSs9XzPnswksfW0wY6pgH%2BjGMJtnkBGOzKp02nGWoB8mCHGpEesk9xxuqZPkKIiy0NzkmYGWRre5XSXlGmY82k64WAb4riVrhBfOCA1%2FH51oLvEa7HxcdWbUADrIylb2y973KDNwqEVZ3hTCT7JTNT4TJcJ3Smbm%2BVa2AXC4UJT%2Fk%2FWGJvEhDyV8771xvg4uJ8nhnM9nGVAb11shYT4n%2B5rMRrztlDofkwIwWQoLIfNLLnnGgz&X-Amz-Signature=bed5c72eb2f0112debf986ebeb1961515be8a57300c76ee3d33a5ae2806d9b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

