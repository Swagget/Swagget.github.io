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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7PH7R7%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T235705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEcZVi7ZjSj996FTwkvrc4zZw6qXpAzUQWd4vrZA3eiwAiAPab7VB%2BtOqDIVKjGcTQGhrRdhaQnWtfziNOeHhS6bNiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtnpes6ECCtYysbHVKtwDsDoLfoZhBmqXHIeeyICoBFTsogx4P4dmdWAmy1FjoQ4Pd2XERIU3SAmTQacneWrmRmtDBCZkVWcZHvHWe%2B5BzC1x0S%2BdSRD0VlCkgIQrSbnWbl6WpFzftqtzm%2FvATqBL%2BXd5i56gFfC%2BZlQ1zX0d4u3jeeMl4SsjJgz1UOXa4oHtdQ%2B5ZXb3QA%2FRxX9LmdOPiIiaIjFaiZ%2Fx013vW3rHzMwQAASUvXrn%2FDQzS9I0abca0YXcOm1xxOmibb2bPLmbO2WqkUTWbT1SmhSq211CtsWwQ6y9vKc8S9ukIxV2FxboqcHXWIhBnGg7yYX9jj1F99VyD0ugeWnq8Ut5wBzXuTEZCWg1J0ZXEQcr3IWnSX6%2Bk1NWgBkcgys3XHmthCzDTF1JGy%2BhM2f1eacsi%2B33nLlsxo3ckN2yeHSnq7UDSLrAdvnHY1exo%2FCAMrl7ffoEB6SDDAMmWSDoDFA%2B%2FywQtMWJrugeTrJXD13%2FUO%2FYQKLbPlxiH%2BPWLhJEoiCZ4Xv4DA6oMDDECYggV125%2FmeA5SdGQXxVGRKB7oJg2L%2BeNcL%2FNW0DTsCBuXkmQqmgNy0Y7nE3TXc%2Bqnl%2Fmbz1CCmOGHwpo1HNfrxw%2FLPABwgueTb19QOAz%2B%2FbMYd46i4w94vE0wY6pgEIQ7fZOAGN7mQp5oV49OBjp5CZYf52oE7KBCXZp3QHkdI%2BH7F7pS96gu3GKvZTIIpp5wURnzrcSagx6B86JVOTaAoS8YdokvS0cfzbibqh%2FSUy3DBDzOtNEgODGEwI%2BXV3SsUED%2F82dFBDd64cOMUEwM%2FrpRCE837Aw666%2BjS0l4D6BEa%2FEBFGnllqBTI4qfK7avqFxi3UwyNeLUzpCK%2B43sSjOUBR&X-Amz-Signature=42c2eeec1156dcd15ce2c867aa7fdcbf1825071783919829027ca112be397383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

