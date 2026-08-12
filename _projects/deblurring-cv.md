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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIU633K%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T213147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCZ309qZrf2RIgvAg9NygpLkR37wlLhHK1ZTtyq%2F%2FShBQIhAIxLfgtBM7Yk5Uj7bfKTlHi0DxLkwx%2BqtsZmVQJS043ZKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU04sTL7A57MI8jXAq3AOTltppcFAe%2Bh8gFyK3QugbziBPCobm7FW16rxjrr%2BdfKxsZU9%2B91fw1%2FEmsIusp2BiHDu3eJYvm2xpJmUNdOCciB6%2BnqFgKuUTwhGfAXXzrg1fyK8ZuMyPQRRWnOHt%2B92pwmtlTShQHe4lMeso9OihI5HnGQUT3ZIY5Y8TyZgIJ3qeaNwqvm2PHrWdAt7ZocY1Xgk6GqIX2tBw20L7SLMT8Ut6cACgPdrOtfIUjE6avpRxfXDTI5jy0N4zJ8sWE94hHTFblJii4x8NA%2BXpjH1bUuCKlDdhkJg9uvOXJpmxg70bB4VBqZHJ8oGTy5OMJPif3y3d7Bcz0Mff4csanG2FK9NGoEo%2FlUkBZpzpaUO44RH9tSOlQOY0U1NdknJTt9VGSdW%2BuLux4%2BLUTFaL0GQGLLAadEX7JSxqWTwdGR3SJN1QkQVRWrG76VHxjUfWC4%2BGVInfk7dBSLeGVS5iDehxoYxUQj6pFYE4NBwuMw7RpaCG4bxlxv%2BXXMWhbJesXr4YZv%2BUi5nMh6U9NDv5K%2Fi8vJ21IgjGYNJhWhZBmjWYrPWgHUcKnDyyNgiNSTJfM%2BsFP8Q9bamPpePySBdh9UQkX0lwiQI1PetpLnWXBdcC8HLBf%2FC0KNqrboj%2BjjCZivPTBjqkAVrw84z8M4KUd%2BlCc2wUzuTCSyJ%2B4sfoB%2F9KYUZREXpX72A%2FGH%2BSlBPjNoIWY9JhPdIwZbWfYlAVO%2FOaZwCJnLndcNhCQYZtEAn1bVfkz%2Bef3SkL4OSOTWWEmUZcvKsnX9ipGOomXizP1GB%2FyDCII4b%2FO81teBPaCkt9VXPHPdRHCUSytP2Ty3R4P%2BLqW4u%2FnWKQa8hYLQjHA89RYI2oaRfvXHJm&X-Amz-Signature=a9acb8a54867da99abbda8b8d896f38fd45e21726b73e79726d8003670b9b6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

