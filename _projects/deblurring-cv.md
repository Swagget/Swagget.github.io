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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK364E4Q%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T184147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGMGbXIIbbgFOrUmyr6vbIeHEzJ2BuDeEwb7uiTGZTdDAiA19y4GzB8SuJIQAR91qHK32KVikYx%2BOXagBkFiK5g2MSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMNVJsW71jH0ZBWCpXKtwDXDEW3fhOS2V5ljX4fRMUcDAQOex8D8%2BzsfEXdBOlqybzj6QTCbb%2F0fpUIHjLWHLJRzt7xUtGg5DrDlJutQaaoOVwZhOaEfrV0KbSEuLbCvDHG1%2F0w3rZk5O%2BGkIZCugOk8%2BbQ7CIpex3PXkbpmlF577tSoQilB1HFAw6bRE8z2vgInk0bvxiqBf1V7rjhg3Ycr5E3IPBTu9AOWSoeifChh2ZatuInadTzjzaLrWXFsvdW1f4rnrcLLYdMdF6c7YBjGFXpctC4WTL9oyAmBjkuZS%2BuJWnx9bFEfCobCDMRmwr%2B%2F1XCxOVvhDQgmITjo65bPF9qEthDchSQEvqOmB7hpB6myz5F3RT3xTmjC6Q56KZT9LTKOp9HB%2FyIXt8E7ijY9yPt9uzLfRwORp9cFj7dtEycWyMNuOWVmfc1V%2Bv2MteKaFwxdoE1LRS8JW0scSTIB7OsmS2xKoQWZE7H2waZtemQgGZBLnjSw0fq%2FYKCeAs38oGIVT92%2F1%2B4JsSTO4OhHLhRE5LyIu3tCKLvcQR4FcFgh89qR2Uklu7jMfCfCmvGQnztsl5ogQW8hew8FleSb8tMlnsxETXqsEPWswNl5h7TKP38SdMZ3cO4SCQx1hhfdSJ7oA00TQgucAwxLr21AY6pgGil0q6NA9wHO5WgASoUwROpE4NQ9%2Bb3Xybp8GwtGN%2BFdnktSN803GULijItPaf%2FORu%2BIgCJCjpFjvRIfb7e3N2k9i%2FWg6oaUR0UYAMpkvk1rWByDR0S9eHPA%2FWKkr5vDu%2F8VxmjdPBctItfMaqJiwAKww%2FUnGWlLqhxy9sf%2FaGlzsdFjTEm3YLDk6VIGF981E5Wh1518%2FnYAwVcaB5AaFCIHT364l8&X-Amz-Signature=49b7229b3c18512bae2c50b8b21066aea03877ff86313985160207e61e57b48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

