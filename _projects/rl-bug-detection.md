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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQLKDSD%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQoXA95su%2BA%2BW0qO7nVFjEhyNmmUhzn4jfgmrc1S2prgIhAOvpw9F2BMygba3RfIx9Xh%2By4qMoI4msZzJ%2Fcv8s52D8Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxvQUhaYQy5tO00OIYq3AMt6sD%2FkyTbEZXUEhEz%2Bwz5Xtwe17k8pY2TJujWM5B%2FOw%2FM8KgKDkYXpfB5A4cGIn7TNnzAnJpNIWA2bK7CPJ4QBMJWUCmu0Rst6ME5M3fVnLt1Xyq7EF%2FhIvPO4wKs3pqK7027iJxfFWo2u%2F%2Fs%2BSGCdhiC2P2FGRiaJe6B3Pmb2wjX50NdTmTeEOlol4DGaKwbntCt70dVAMSMgM04bOCcyM10cgqJJgLSau7Yaf4AcL%2FixGM5nnsxAcUFwTYxdO39ND0UbdZq0v9mPtbdjV0E%2FpqNuRyByVF%2BlY%2BQ5KgqDWhlBrEyyoX2fo0UDZ0WWADnjohgj05GGPMq5wRORfryxzuWarMEFO4MSie06G0UCKe3kgewLVHFPUR%2Fvz77dCTCe%2BnEnhFH3%2FfcseR6Mmi9wDSn0WF%2FJlW4OKNweMvLeaHpWovQBhZOYwkWgpO%2FVKzxIE9t4ZJDsREljuEEZWkLCJkj5a1zQz3yr5caHE%2BLnaY9EzmD9eDGhL7G%2BfTEJ4LQXXoIq0lt9MZqzJ9oy5J41jGbeyDFy3geZbrNS9BvNm9Q6gjmlRaJUIRhQcOlG44pvVCQgVaxz1zh267S%2BKaG9JIUULtEP%2FSmc9IA1yEKRUqbB6Gdt02%2BzEJDszCJm4HUBjqkATGbkjl%2BHA6kPAGg%2BV6e9xPyjAsaByvvAaQYN%2FN14dRiNGaMlqdo%2FAclg%2BV2KWxGw1Gl4nFlUsLkE%2BAzk%2FDF1LbMwDOOe2eugbg3xHF%2BOM9HcNzElSRHz0CHbruNU%2BIqPcHkXLs4GueM3%2F%2FDZMSR7njCiUrAZaaSiXOP%2FPSVQXAdl1HgU%2FSw16QJhOjJhxgByzJmf6nsyADU%2BKDjSVBW%2F1hZr%2FDU&X-Amz-Signature=264aad659c832359992c2b3d0dfc93b2083e64626c9b93b4445fcdb9bc1be1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

