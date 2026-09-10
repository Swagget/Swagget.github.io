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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRPS4C7%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T184500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwSMrdNs%2F%2FNJ0ZBB4t0tMsaWGoUutjYaEXBIBWNGbYrAiEA9RSrBMfbh9nP7PQLLRQds5Ap39zbQ6opgka4lElYugsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm9RRbdMEWeRy0s2CrcA0YjF9D0zz%2Fkb6SpEzFgz%2BemEYBhiN57%2FY1luo38gFva8Ge4N8kO%2F2xP25eBbzQTY3TT0bshK7R32vJRsTJxBQ8C2EmNH8cukWqFAoSiLJS%2BPlFXi3%2B96h%2FXMt6QnRHsx4ij0JSw%2FzS9CV78cQbcpYJ5Ae9SAGVb30w6k5gXggvrJBsaAeF9VtwXsAPSKrbKN4wk9qpVf%2BQqV0STiuOuB9fW8lv2OM8wVol8BtM%2BJa1sp1yQ602ujqlMM1nvdF0YWYlEybs2Ch%2B6OcJAxZ%2F1VWrkzmAbGA8aiZlDEHfhH7z9y0hTPGS3erZplBLGLExkW3%2Bf7MGbcTZYS55MWoiUEUjOCH82eQkm6FxM9C7RZC3s9%2B7QHHE7LfLrrHBEs3ymsoFEn6LIub2WVDWsst%2BKDMZHNPaKVyEFEPVbBVdhNTQhEDVg3ZM%2BR5XN%2Fby54D60zxnKVqmxi%2FfXqXpbKWYCXIcft76fGYz6F%2Bl5nWLDhqatX9Mkm%2Fg8lkzzydlv4bUJu6fH7D1pXNTyb87XBLOUx9uSaj%2FBDSrUSp7l3QmRU57ZWH3MOt%2BR%2BShyCL1ActuMBU9BaSRlds%2F71VaXgEXU%2FeGSg4NShU8k4P1fp%2FeM6%2BqpCIPwYFFMUjq5uj1lMIeoi9UGOqUBSeuayuki9RRfIXAW6Tm%2BRS47ClGOznexhHNJ4kPDNF1DssuFWS4I4%2Ft5eYRRRR2uGV15kjnfLw7d28Cl%2BARsec%2FRvYvYgCPEcqR3z5QRl8ELQZUY7pAbVrGX0h4IHuRx0UGKFDim968kHIWe9dwA25KyNY2aakN5KZ7CdPA6yk0kZgkUk97hFykacg83Hkd0C6yFuUGttc4lLULS2Q%2Fa0nD4M71Z&X-Amz-Signature=2ad0459d8988f32492dee57208e150087516a954473bbaecb79ef0033c09f453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

