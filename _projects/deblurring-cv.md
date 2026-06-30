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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCJYU4P%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T204852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIERHom2BvDWrc6WPHaZ%2BLVgRJC%2Bik5CYFHUhvaBjZpVOAiEAmkEyUjIr2sx6s1FKb3i2hk9j%2BhB9YxmG17MVFsx5hkYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpMUU5Jd49omlPCJSrcAyfOPyLjI9C%2BsaUPMSZABhXa3Oua5UPopCDp%2FWyDNUZoPYGUUArlS9fLIcJRu0IiuuvMH4u07wkdvbGrqUdQxdN6REBTDMwdGhCLQzGq%2Fk96AMXCqcYpsb2u%2FwcrpNJGyIhOl2TJLYlskPssDG2KCclrvek0EH2mO0rJ%2B18%2FBghceEAZHeHJ2B7ltIq%2FMQELje7L17ZFoBcKGTyx%2FX1Wq1hA5euwr6my9EUPeJimmmiDVW%2FJFlaT%2Fhm7z2zGCp3m7bF%2FrfJ7G67%2FjH6LPXSAUqXoHaSqauDNbDrhMM97RoczmxnpO3vqcuyAbSI5LlGROoXRnGHOZgWugkW9lEnTq43PlTbu%2FDcYDRXmwD4skFTxZV5Ez74qa2nlGWlIxoDHePKLkgu%2BzV3UCeu7A0SuR32U91aF8IhYyBL0OaCAIPVCINU4eBNviFVhOj9Lm1fm09vlzaK88BqW1QOVB17R82AgmkR3xWtGlseONC2xpsR%2FB95oyB9iZZAi2p8flG3lC9C%2Ft477RDLLz%2BjJeNfQHJzp0mrV0iNjPVyRQb0xAaSuYRJtKcR%2BV2xTCMQgTwYBJ6ZpfNeklAuTXvIzDSRdKeJlr1k2MJzj%2Bg%2B1nbsdWNlutcqPdpcKv2p9hpmaMLq5kNIGOqUBSyOWwPjpHN6VWRxxA2CPgazAjcxTsKZf9z9NI82tAxvx8QX%2Bt3lB1gVkcDaPOPFpaiEIdueqAgFpq6S9pyddafw3z9MtqOABQyrT4AoL1S6Y2o%2BqPJ4QvUrKrhdAaBtQiqmquWnySgwEj7NX553zxHVzf2mN%2Bez9UbVPidkE%2BVay696OqBwTWE%2FiVYXXr5rRAPkt%2FCnlKEkFhIHw9dRtN5aJPvkb&X-Amz-Signature=765ea732e987892e79ae269172e468bd65829013569917530ed369e52b46c101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

