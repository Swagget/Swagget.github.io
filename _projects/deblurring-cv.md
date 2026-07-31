---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: "Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving."
date: 2021-10-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving.


We then used optical flow with a threshold, when the threshold was crossed we used the prior method, however when the optical threshold wasn’t crossed, we used the frames from the input image itself.


We then wrote the methods in the form of a research paper.


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGRWDDM%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T111500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDnTPOWIcpe%2FCE0D3v6nYk2rQwZVlOigyzvzbeNhEcVgIhAIfE0Mkjjl3jfDZCBrlJyvWWc57%2BqcFGlMyv4HnfmUFlKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn%2FJQWxAeyUPM1fSYq3APLI8zZWTUteWhGY06tpiAj%2FN%2BJbRm2K074vdQFufzTf9D4iOsbm5gzf5Z3%2BiI1LNEVNXwpBuZOTHanPDig0hGLfJWDTP6K9z4zdx7GRgg5NNKlHiZdb2ioZ8LCYO4SyFYbHEekaLGb1LlJuC2ZEJF1L8vHobmOPChbu8DKJcwmeqQpwd5qaPIEzyqvib0Te37rt2bBZjDPr2rwS7kbY6emWjWJWRXHYuG%2F5NgYJjO5RYzF4GKZGnGDLNw%2BzGenvgig5m8kwFjw8fVUw6J17ckksNUvP%2F0BuaUmxGzPLKcFeYAqT0wZG9hgUHbY6nPMmQPruF44mM%2BFqNCX5U3v1hzaSZbUUcfoBx8cisi5yuHF35fTO27eTzpnNx5CRfb8OatBvWGuu9uwXJZwzy8Mefb4IXt4lAiZGaLe3WbTbUrTxsHxyB6qBYyzFYYzDaf2QQaszSn4Sx%2Bhd9dJDQ%2FzoDDhQd0pm2s8s963fEL5hnC1i67kCCpAWFwy3aSB7skkDlBKxpxkrMZZlw%2BsmX65CmhgflCyFNM3l1gk8oMjfK%2BjLz3P%2BmFmbihYA2NQA57Y51vWvFC3WGzYetiKm41POTf0MN6bj3erin7db%2BePgRW4j1Jlv0bbse9hGmO6pjD8grLTBjqkAUiX%2F9xXd97m081Mk6kWGzkTjZ0KwyOsaI%2FC%2FeuRhYaG4%2Bjp%2FXLyp223NdVPScFZ59lG2V6X8HEoJN2WjP50V%2F1%2BhYDQ%2BvVjgOUP2P5GIiCZMlqXiI871BJ3FdF0rKKEb5eL8RYxqIhhOrtsDSNK9pKttmrCJB4wGflhdsGaxYdLDSSp%2FaRe0Vo3gKTtDDHl8LcVlM5KuVoud9UNt1JIP6Bk%2F58F&X-Amz-Signature=4bafd703aa1bad2db66cf77995bce53cc42dd28b7590f3b29a17601c376d4834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

