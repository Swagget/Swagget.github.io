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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y62MUSV%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T234851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICtvPVWHh%2FA%2FoigZ0k6%2FhidnsvOZrt%2FK6Zjf2DfqEWqqAiBEKjYg7fRudjw0So18nMXFckfL%2FFHV25jOqK6Z0edbPCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMwFYisyZ4M7tUV7xjKtwDkCNBdkC0UVAkqMtA6miSYFrhDTeR135R6rOMlMUBE2O1D%2B7bY%2FVgQM5OvJHlw%2Ff1CcsCHYBYFl9mWu3DqkjRBm4ihPcK5BVmHAYEdELCMEpjtzqYXQKtAOFXq2ZcMboU5mbfzNUoszMrgysl%2FnOmqDL5g2GENDoJQjgEo5r%2FEvBhpR1wo7pDmbG4kaa1j9bKO1Y7Dd5WQMNNO4nGHVHc7GuAifnryXCtsjv2Zf9uJ9r4QepJl03Di4YcyrUJov9zvJ33yu1hr%2F7yXgLIh7IqXb3hI35mvs8SDCQYPOFsDjusx2VtnUUY6XE4glEMklV6zdyxy%2BPrZwrGMfChlagPDKh%2BMoEoSBzwUSScmTOWH8P654ZqtO3tGj600dEzx0ehMoyRge3IUNe5fASujm9JNQeRjx1Bud8Uq6OpfTbuu6M1Vc3x5w4mPBKUxVuf0YKC%2BMfdqTmLmZhoYT3wNa2ZYMAwzx7rkFIktznJK7v%2B%2Fe8iju7Yh3SuUkHGltu1CcXMRjopL%2FYBblHchoT%2B7E1Cqyd1FcLbTftvv3qm8CvWNHaRuFGl48tPtZ5VRYZNOsQuXKGZ31KXp%2Fqzpvule1ahzw8AbeWXUNoiXV1e6aIAPM3lOIXQKTsSe%2B37Z6AwxqWa0wY6pgGAOVhIqdqeixlJU8IlKUQwJTErVnhjEZZpytM%2FKPi3ferMXLYQcrnP59PYhP72mq6eOTCAoXLmf3cns8I6R5ByCmkP6U69WUA0ARsOwLmGqcxuHG%2BrH2iJO9v8FG7vB5kfQlfsthdkreqvOeJXN%2F64BKrQVfuIXWdMhN8ZmOhUHMfcRuqsf0A5jaNkivCcz7wzvk5Bja%2Bqn1wLxYgiOJMgozM%2Fy46t&X-Amz-Signature=9df78407c531a4f72b4723db3ce30d2ff03902832a505a9c89117647bf69e6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

