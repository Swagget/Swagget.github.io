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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLJWU3Q%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T213255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSgqFaTSoyb5yVg9Lxw1%2FY6vgnunVYdvIxgK9USmIvYAiEAvJxDJJr2m%2FazWFrQJOArOZMdjDai57hLedSnqbUty0AqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD34pQvVtRNppMdG8ircA8fjFqNdrQVaLSkjYllo%2FBBz6yglMyEjQ58UzooIuJWmSerCRMPWz3cZMNmTK6p08KQ0QfqWyxtXYoYJ%2FuYcTHjO4rKgTgdPB5KmvuhW1UgMw5xALWo0DrUdJ%2FF6%2BN6FdHpsawpHR1FgIEke9EXWDcpJs4pJkT3mFsq6qtfhXIVtdIlW9UiEEiFeqX03n2C9K%2Fi%2Fq%2F79M6VdJKmJEshoxewVQfMm5%2BniyN3X23km9bY3wNDpaM%2FxFIHnqIjOX%2FXcOmwUXxatArqBvQTq4NjTyb%2BZsfWQe0fUF8iY%2FUVn80fGLy94AQDPxpL7PbeCiYK7KNvzXU9sKJTUfYWNiyN1GsyVvBCz4PgzTRsvHxSGUND%2BbKm%2F3uD1lcnKc7zbU%2Fp9qk5IGlfGe4Q3KBBU7%2BAPyMODlMzN4OGrpNPMmXWhfgtUgjevvzSyUG8sp5tH9MFVjYSXjxor2yJPGnoZ3%2F2XQsLWSTvARO9rTfWFeq5hQ%2BFJgt29jdcxyNsNqWG%2Frp4hOMn6%2BLE%2FyEmIyKHfJyAa8GIB3faFOwb7YqY7Or6d3e90MsXy7TQz47ojA6wES5NGrtQOOmvOkYep9vHPD7ZjKMN4bR55PwUwgH%2FvSxZIC13swxSRHEtbkE6N3r0RMPbg7dMGOqUBvCPwQPlQOCAZn7V9%2FPqi7BiHq5t4XquMif7kGZdwe3ejG42O%2FOlwitRHF9%2Bgc785FgSkmPaD8p5Z073qaJub7RsLaAoCWEXjigUSOxQExdjGPmQpNwonMEf8E8YA5POSNvR%2Ftdsy%2F1WYhKBtpi9iAMIBd4lk7s2SHxL3qeQNFvRLcUfumt9Pqo5i0ckVrTxJeXlhH6RROUKowmmMMwbtONk%2FiPIZ&X-Amz-Signature=7fc0377aa7582347d6bed45be429ea9588b9f85691477b868cfdc60d7bdd81ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

