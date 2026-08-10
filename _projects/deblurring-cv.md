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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVVM3OB7%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T202815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUSUo0lW4Na9Aud5sKoge0Ic8UnAGkHhxDTkhgL6p%2BlAiEA8gXSHb7eY0poHGiENaTeqsTe3Tx7s%2FYR4QjUUfHinMwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0pwmMVmZGYVVL23ircA9o7L7GRtIj5mMZLXsCGM62wAOs7%2Bm7gUxqmHIsYc2F2pb4SEVD96J0LzQ6RKZe4LSB%2B9uM6QA3gsRgxfhoOwDd8z7VOsLDiW3qDK4QSP%2BKcO93vuT%2FFmlWqnYrSY1KWxEeZJxsP%2BZUVUClBTdsGIYpMy1LCnxhruyQkD2U%2BkTEjGnUx065TonrVWX8yHDhWPsrlF1L5%2BA5SYJ0UihiPjVNNLG6QAb5W6VqWUtbunIRhOVoHX4p7GBXrk5R6toIWaYIZfJO4aJCIhiIz18oi61kAg9vW4K%2BOg%2Bi70qzNTLj%2F7nuib0CzpPsRdVv8T7m0E%2BKBbxlekyOWH4Td1u9x0ee%2BhC9115iBrAFdXUyzNSlXxLV76pxTjgU9490CbVoqpHCYXYt6rtSqFnaenXFGXHsDjpiuhJtMdenro8WoSLeXS4fDUgChmkXmAJtxPknGNjhrKGOcedCjyg0cp159zYPDagerdXLqZo3OhpKFhhvO1Zg7K0PfaVKi4YPRBC2Nw5GWK4pRi5k3MsVW81axWgEHxRt8x2gY5ZlBAX07eU74P1UlemV8csfkuUUWXx0QAakq4ey41pvoLsar0fEthigA430gY6I9oF6hxmh7%2BOjO3y76z%2Fob9trJS2YmMKu46NMGOqUBP%2BAvWCqautsmQWb484fcn92gSl3xcI9pvLjifNYxaFObO67SMVGYSfAJ56B7phXEi3r6ZEvRbUMvL7ClFi0yEdGXkN4W1r%2FgBQSeH4H8ZfCoc8QsW5Ev%2FrjMKkpaoJ8MBvdlKdrcHgsovIb22r7wGTAqqBdnJ%2F%2Bv0dOK%2F4s4TfeCsRtGzvY89vOeYfxUvX0WkufvrPYncIATZ353uNDACFwMZ3N0&X-Amz-Signature=3f739673bd21f77d8d012fb329001aa396069aca5fc8ce401fc95f8b8ae345ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

