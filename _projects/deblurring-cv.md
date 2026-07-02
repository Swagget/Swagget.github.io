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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZEREAM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T095758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEV4TLEz50%2FIDIUrVrNQMHOCihXMf9hrY1nNS%2BQynt8sAiBF4Tuf7%2Bot3BJXOeV9dtPUIXaz%2FB6TlcUNA036f1we1SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEIzlguk1sgEVMTgKtwDZ7abynN4Qyc33TnxKiZrkrsR8RVY7sI825cy7UOCsMtmmHuoyt7Ug2OnOYKPuCjNNVwdDccMKgO5DDMXctSfkXyMUYeGuXMfcjgiYZjCnRAMqIJiM3nMVDCInoc07Y9qHtGK3fxgF7W3i6yy79xDJRoHrTjZz3kBefGwIqbnsXysJssKs8UIAZA3nmzvpvCipNKcxxcUrN92botoV0o%2FHcUaAZEc3Dc1ZP7ltPXhVkb4biGoExt0N8JGhBkXM%2Fy%2FZZBUq1P9T0OPSqKuIWDoEn7z9%2FuhzQk9QoA3KmUGwQyL5OS%2Bxb37GWSWeaxK0w7DHIPzDpfBHyyxzVSrRY1YVlS7sYQD54431Bg0Mim%2Fk%2BqnZHVqb%2F8Q1Zjw5MAQlrlOuFAEu%2B52MvlfbP2kqE5dtJzcCdgEXhDO%2F62YxFxQmxWt9X22yfT%2B7i3GXGINBDGrMqDpAlGOXZVdsD7pY9TTE8U4wdSknfjzHadUJ0rtxhFXvinw4PXWGBafcQ5xsMwjNUiOmmIksZ6mk%2FoDj1iAthxf8bXFGLNqzlsRLwIN8UMtax4c%2BlfS8pOY7VHY8r847v5%2Bn%2BLaIq4rj0oJTm72WhIoTT3m%2BbfOByUmf1R0i918fVz%2FmGj3%2FRIOYaIwu86Y0gY6pgG%2FlSoWoY6pi%2FTjWQ2MOa67okNlQcPrlCDKwykfzQEVlHdWufoujy7IWIPaP%2BpN4RSQ7svhMYjDGQ%2Fh%2FyV4%2Bjpx0Ux7VWClpTS6xdZ0SHaMh7WbQK13gLYTW4Qe8Z%2BCEqETlN9Yi9trAXNMBJHRtWkpr1uuQxuaUj79L4Tb8CS1iidbY987P6N9nUvxMJ%2Fw5T7TgRTZ%2Bay192zeCcCdaRHtVo%2FXw5oA&X-Amz-Signature=922efb2d1a820c6f7e0d2e7a535cebc5f8853d1f80fe5a26c3681c0be23d3ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

