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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHSBXVZN%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T111940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygJ0YR1Pt0Hj0LRb8AUIRynVsYNSmPb5nFqsQkh17IQIgTgtzzhFmzTbGP%2BjtHyIMuvwGeX3jwDFenNu8fczfj7kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIAbFAmsQM4RiS%2BM0ircA699K6VjNiP%2B6cLE0Ba%2B0JNLlHTiO0UIs9X9JVEs0ffii6nKKtkMHlpvaZSLRdtFgGRYG3kLGHnaqP7x94RBnV4HAi2lyGCMpL%2Bw4mJcfi3MzKuqFuqkRIrBi%2BjomfWAMeG8bfueM7MXZKt6bzHw05oo9n8Dx7SaRPm0b0PONmiu8UDmgqRJSEA7fKsnfvwBLKnM%2BNW2gXzz%2BEflafMS02v1iMYm4kJU3jmv36jNtqENt1pVfypfWEc8hygkuafuknzOn%2BQ4RSfdRPFSHr7bZQyH0qD2211aTNdwkv45bh6NB6puHJEcoA5lemaT%2BRxs57aOlzB1XWJ4jiDA3e74OKoQkB5muzJD7KUduB5cC7arlPFv0cO%2BFazVHGX%2FCrW6hjiOW0UHugaTUQkCl5%2FE8bP8zaNf0a%2BYBaXHKFKWL3wONtsmM6zM%2BHDPU77uxHKTbTgd9Tm2pe0x2O8fOm%2B1iL2DkKLuHJEY%2F2IztS1%2BCfhUQd2h97cyOSSV1zlW86ATPM4bYtwQjJICHMtthuwi89OSnIgxCZQ4VYtyptXHC1rKal0EzKZNh5%2F%2F1uMo1r88h3IBzSflJwa2SuJWp%2B4ArAoVMMRpz0goSyWeqSVVb81BTqHAlsTKO4fo%2BRVJMN2xz9QGOqUBbfNFFLwZfmgUTGIAk6265EP8GlplnltBFcAXFn1BTsjZxFbVtwBYu4gkycPwynyUsU%2B02QAG8JVySK0vlXuPWCkCUBaeJVuUZAa5CcKR7gxF3%2FrmyjDahKyThf1RG%2BoFNL5qwqfWpOcDMh8Y8bP%2B52ftYlYK4EA38yd2A%2Ff7mzN6FZJrA%2FgWgFCMJwkhhxA4mXgLnIqfYnqbB8WOiuQGl0chOiAQ&X-Amz-Signature=b560861f9fa681995a0d71e7ba6f982946a7724662a6a32d3fae6fec3ead59ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

