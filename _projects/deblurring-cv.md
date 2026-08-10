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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZVZTQT%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T070347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9NL2ETlBIk%2BxMRyHkXeCd9hegcdrbMd33ndWdfwCatAiA4ZnfTq%2BC1hp2oTNsXzUMMeZ1gdkCu9YJWgjJXJXmThiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgy2yzhqQfvCHAx0KtwDu0D4A74fCc13FUV6Q0CjLHSwoKKjV4LGImvJF8k4cs0O6duefyS1GBx8q6ccTWv1nTFQmiOSixUrC6s2pDz50NL509ZcIedpfrSSay4LdI1GeW9%2B2S05ZRNejAaen0%2FEQNWlZUX3RGhBtvqiLyDCsWQokQOA9Zh3EG3UN5PieoD3zQvMX1fG3Dneh9DaEg%2BQSM20BlXS1pF8J96r5PciRTuEBJp5GqzzqR2C%2BEGeXUXl2GqpgyfsSpQT8S8450UwVndAa0B8XwOqCAN%2FU3iuOWCviCFH4u3XihiLpQMWjK90wJbfWzhASnInXkRDNtjFaizMvoHoCLZogL7BDI3HG%2B%2FqZhXsyUV3UD2oZ98VHCJdm8R%2FY7fjnaelpSSNibw%2BH4mjm2e1nGNqytUFm07jRuVSQ4aZIHX%2BDn8jxRcma6H0GhPhTanH6NhKW257xlnnKaNMW3unSCtVN%2FbQAwRcJb9keJy64BHckhK9DP2b%2BFqX4E1RlpUD2oul3KvkQOR3KyHcX1EJ59SIIZa9TNa3cgYFZuIErl4ofd%2BJAxzXo9jJf9YpYuu0ccTZ1OfKT%2F51rVWH1%2FE3iPXD%2Baj3n4xYclPNuKTuHBc5fa55%2F2Z2LUYsrgsFkRyJzmrvr0Awl8nl0wY6pgFcyM84JMFEpCOb0DQHee3ef8oCU1Ykw0EwaiQaYk3NE3CUOm1kQVa%2B2moi2e%2F4x3ejzABeLTDeODzp4%2BM0uf9LcuyqIGp1CYd%2F%2FmsROneioajEo0gz1QtTw7kiFNcweb%2FsrfF5FgqLRUQd0Dgara6gEoUM%2Bc%2FNAdKBCSuAxztQjjGy1k8jRWL3FJ%2Fle%2FSz4PqynS8%2BKjcDWVthdSODDPzQkCNcBjf8&X-Amz-Signature=1d553c2398a99d5c1d8e64c528796d5f23a8d0790ae66eb6496adbae30fcd61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

