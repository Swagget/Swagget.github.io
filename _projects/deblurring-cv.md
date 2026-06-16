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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662V37DWK%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T200030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYzt3bjxox%2B0f2w1qvXVo4kVakJpDkWY6gd3Lgp16slAiBRzk3ZxTdBIqeDEDt%2Br55D1f4%2BCcsoTtMlucispOlbWSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGW66T1m8IJrNjnT%2FKtwDzG2FixkN6WQuIMo3IDgqD9%2BvHpBtwh%2BowS3mmbTHkgWN0MDLrXqKVYicnymnWI7c0sEecbW0TipbRelt4B6Y4tYI0rOwf8N2QKpz%2FkDGNeNUOQsNBPRunoFoHZ3kX1YsNkeyBgUmWhHDWd1Qw0Y3j2Ylc9d9OMS7on%2FGRaagqpQZMW7MMRAaVmHa2P1jXwdB084ZdSEvmJKahoVmzdEyYBkpZwcxhAg6kZaO0LDZimBvHD5K9PuGfo13dhG0C8%2BL3x%2BTE%2BD%2FT1k7NHkDp7kdxAo%2F85sGii1A6va5gZ37nmqZemusgX79s6Dq%2FYY5xbkrf7e5dYHuh2G%2F%2Bk7dlXlM%2BUPVcc1zGAzapoQvEWy4tOfnndzLZ3gfQ3%2BoYf6LrEsV1aSZInbxxuLxYdgGx11zwo8Eo%2BtJkXnkercEoTHFJxp02prvJvvbTVBSo0UbI%2B5Ru8qu%2BmV9EwvxwOaluCP3DJvmx4tT52G8PEAITl%2Fpf43Ajy4pYPN09gNQGFoTAlRnzgIfVxoNS4PFoOr5U4SUabpYYbkT0lAUtLFf6pxAqyu1S%2FYBHNkQVbJfNpK%2BE%2BhZuOA%2FV0GHyfLjE0UeuuONewoPUQJ3PNdwdB9YS%2BS%2Bngnl19qJxnC5%2FPe%2Fdtow%2F7TG0QY6pgE3tTgn0%2Bmba0cNEcWeSwo5KZUpDjZlxmGP1I1kLZd4bzqD3P22V95V68hGliCHV14yw4W5jrpkE5iFyqV7BjQQv9a5j2V5wA9a7nxQn96YJ5DBNNKYwcdYAEnYmQAvtDPj7vvZ%2FjfNBBizcAnH7ITLWPxUk%2BuTiJD6%2BWgu5CldeM5RSjLwN1%2FXVKNZcVNdRtz4PeBi3FhY9AuAHpmPu8K1wIq0sStJ&X-Amz-Signature=c088c57c1fa0f0048e6815950e4b69441d401951a31a82a1b0d0e5c0ffbb6f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

