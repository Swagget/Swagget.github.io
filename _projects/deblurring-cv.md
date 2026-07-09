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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25J4DMJ%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T184431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIyLZoNhaTrNQz568jv1fxV3n9cNTDfIXbX4dN8ePAiAiAlws402bVi4CNQOXpK58oyvnCXArORdO36FY62lwx0MiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9B%2BZbzKj0DWrsFn2KtwD7I11nQaog87OuDpyqOsBd4j5GTTXFulX9ZpjdUoNaZBxbLM6ibKpPtL1CZoJih2ntlN8EjS2lsTIhkiqQqG1O7apatd90RJIg3UBI38DdeTJ5CWXjRS3kcutHw%2BTigGy%2BYcDsHpp82XTGbqOY7vz2ej0GJNsXuhNqbJfqV9w4XRXEfdaLZIONffLDrUJ6qhDJjbk3qBPUnJkWBQ9exMaVQctKgrdWeDVHxHt0XNvu6xS%2Fd5hLoWR6Bw5o1zhi7ztY6gUbduF2TGWwfMt%2B9%2FkeH2EG7vuY0r5VHHMB6DCiNFscP%2Bk0b8h5B864cF%2FSQSLkLabyYokZrl6umGM6HrE4NjamT7faJyFEL8wDu7Hoq6ATKE5RaKH8d3PB6oIwc1xBfyCORLOaK03Mz%2F4%2FvnPE%2F%2BsVA4LRM%2FUh5owDSVEz9oimYiuyKUoevp8uKpgdvRlxShuU%2B1NsOlAL%2FCkTa04jmkaVM0uuCZW4XMjBOURcCTs4Hl%2FqM0PyVyHuxGgE7L04Gyr3LEV7E3zRzEYp2OZ%2BiW8Viayz8v9unqpLpv5edatrB8S%2FPB%2BU5%2F5gmCmGjObEqwHv2gE1yj0UiwNpsxMrZO%2FY7YK4nBZ6%2F%2BNWp%2FBwq1%2Fz5fpTJszMwE2t8Qwvda%2F0gY6pgGL31r6niG4%2FgdAVGhr83CsSwm0UpiJGuc5Liz2tJwzmbF46M9%2FsOLPEHiaxeM8IIF2tKqOtsz%2FKfNxElGwoi3vuEeBIx3ef5EvBQl8sH3u2cIJ%2BcOxKGK1uSnUu6iAG6Wo3GQdxU2ovYQC7JDwqqq%2B%2Fhw%2Bxu%2FIZdZVhnAFIEQ%2F989TpM5WTftbzHVj8MxumkdF4e%2BB91hu5wkPYpNT5ZdKMV6SmYZY&X-Amz-Signature=cb9217d42b45966afc4b07dee766e82954fa846f40e2153852b35acc5e02f88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

