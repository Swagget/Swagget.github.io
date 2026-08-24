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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ4I74L%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T093313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDQd%2Fyix6GmopFM0e5qGUesPd4LegtqxM65xoAUTu%2BN%2FAIgF96bQ86mjcwkrfXUnDxCcwyDT4S4NCGg28NUrSysMokqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkKBiMzhdhze77N9SrcA9mOyrZo1xSFNkpmk8FiMwguSoXwLJv%2Fl5s2%2B%2BotWnkjrIk83kb%2Bd4CVVidCtM837kDFez0k1n0o17TAShnVqPBCAQlDmnVmK7AT92H%2FwMYU%2Fm%2FArMFAzfMdN8J8LCt6KC4Qpk9OgYA4ORUBgAFllVCKulRgb2g7hCd%2BZFFr2ziSIj5HZYtg17bUGRexKO6QUzEWMsZOOoEb2Aj1whu0PbmwezqCeRUl0d9YDU3AnZFXT8qIMCfrpw2WFrw9zL2T5J0EWrCLKcfrPi%2Fx8DnfnVxwwH7DDSY9lVm8lyc5FKNzHnF0KvyV6YgxsCIzQ%2BXKIg59QwBAMBaMHPcPiUiuRtUC2PvGWdrt5l%2Bfz29QjtTE6iVA6xlAl6oVZbuJZuctb0tqxE8BurEpBkkKa7Vj%2FGAoBhsRL5qqlOExVvnMun4g%2FuM4%2FrkKK6icpw7wwcGENJbTK%2Brg4jOd7g1PQD%2Ft5JDQ%2BA1D4T%2BglT%2FvmOBLjGLE7UKapB8QSUtBaRFXCOON9Rvsp0kUW6RRA1pIe2l9DtHB8i5NqHzSRC9ZQuG%2B5a9ukVq0V%2Bw%2BaNkd51ss%2BDofVKiMhWBRmLhCPmZrvm4pD%2Fw6n5vZTiKLVi%2Bem69FMr74AdKBIJZ9nD7Ji%2FiCMJnlr9QGOqUB3CZDzqF41RZcEGwpDVq6L%2BfTthyo1CL7pD7ULE4QVCW9XK%2Ba0JwMOrQDlCV92shByRlkZCQJNiiSvZZ6PIwZnmWJ8JAo6ex1%2F%2BeO%2BdL70fHrX4INGEJMHcPZ0EvMf55scsftDNjGzID%2F%2FZLSD4wPAhO5jlAvBj%2BnA%2FocD%2FZwn1oeelsgEKeBaAB1DJ68ErFpq4QhCuK7d9%2FNUC2Bpyr5ZVq3theK&X-Amz-Signature=16c767991035818f75c39a904bf8f4113afe8e02d385569003ddb030ba0f63b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

