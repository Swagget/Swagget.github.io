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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUS6M3MZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T072456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBv8LgIIe1neJ4q2STfOYCsOBh93LknzNmAwDS%2B03i%2BAiAMKBhG8vb4%2BMWE1CAUVv7YEdzyRs6JDLoIqlpw4D5svSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxekFqQLtoGA%2FKCh%2FKtwDV%2FUsQrBPQBKLdL%2Bz5p94xGOrK%2BwXoNAXqUXhZv8ly64DbHgXA%2FLDXMRhkmv64%2BoejqVJ8s9X4q%2BQO6NQgcE%2BXCHP%2Bqfuzgxrvba4Gy09FydBR8Nq7SxDF1JeLi6DyG5sCkYUx2c9i71oktfXKOmKrwjPoDQSJR3dPI2Ls7PRu%2FbLlixzLAuokyhuVYsb3eLSCil%2BO0v5UZNTabzUEr8dnTOlUqEUhT3tcGiKS1ST4J5oMGcjGlkyd9ZaFcpWMS5NF9SYHlaD1CWrKuyex5aP5Uy8h389JeSQmO56tEDImlKi%2B7b0RsXJRvjFg3LzWcfCqrutjs0oqWS8gCEzP1Xoz%2FKnofQ7K7wjF5iM9bso6YbCFzLKkKX7QK2g2iGejShnqBtBEwJmtd6MOTwY4stAb9fywZmHJsU00uhcDe9NLb5CQptSQcClBSTrj1fum6hpYf3JctAtLvKYWcpoMygbYIL35q82Dk4VaQDDDwZj2Z0DSVNv7znZBNVQ%2FRQ8spa05PY8ivEiGrnFSOC98eLxov%2F1FPCW%2FPiBKYtbTq9NbjJTjfE6wzWKbuKI6d%2BRIGO0bDoLrkIl3q5rSxa7%2BpFaO%2F2LvH7HlSYgdKC6b8MQ6741hnOcHR1Ov%2FzRHusw9cKr0wY6pgG9c1e7GhDkkQqTHgBPaKQbZeoL83UBPddiayqgwUTLIuzrmdSu3HmXB5Et2%2Bz8Ojn9mOG4U9Elz433FWNmuAE47kDWZDOjy8QQz3AQjl8MjGZjCqweWpoW%2F2KprIwphUtonkjSmNpqFEUY2mrBLsLZQn1G9hRV3z7JEbe2Ur9NHc67BggR0nWnoBkpirauM7c5OvduUNPaIEX1bJjMZdITf2tANFgV&X-Amz-Signature=d704696c32cc7907eb23faa16fc874d6d948f901fdb7aafe48bb79b92e384342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

