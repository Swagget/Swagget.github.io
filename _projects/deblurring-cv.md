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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6W47RX%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIBndhBYaKCUvsqLOlUXFCzREaq4bwF%2FIPPnBhpF5BJ69AiEArpjHOKDcPDpYIfVjGWr0Vh77mSOqS6MJWDsn4MzQuj0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT90L6m5TCIfoW2VircA%2BJSsdDqCNoZdIrLdGjYWaHi%2FU74H3vDMQMmCj4RoWCLpMGRurFD6ChZVuVMgvbU7VsCSRv9tSjNqMnj5XRmxBRZn%2BAiMly5snG5h4qq%2BpyYki89OVVyHvVwP4pZrkg8%2FQRPArhaJw1uoIBwXc3dyym90WjlvXFYdY3%2F%2FJD37gnvS5IQtdl4oxOf4jpu%2BZ9VJPhkKZm3%2FsuQilDLoNQMZP3Sxmm3V41ij4gdQOwePShgsDv0cWAyg%2FeAZKdIqNbNJgnfVy20Wm6cVKlWBnCQDlogust2zL087sPgnhGJEsr1vurJauTSNrA6LYLmxEZeYejM67rrEEnZgz6zr4%2BEBq%2BkTcX5C%2FCiqDI5I3eeHIWAxC7yEgM51e9tlNMhsjouRyqoTFUZjoQkN1ET3innJubQtWrVJgA4hDKZ2ed8aZsDTJ8mLafe6abdJxvC8ACOn78JzT9cYDSAyR51iWn%2FwNLCpOL2T4FhMDGQS37fHmFAXx90tbQrg%2FQ42wiZgbsX6PiUalrczXkhZNz4MIQUJuzqxPXAv400bD85PHThkzZhkHvANUIrpWMQVnFEvPsoRnAEqFfJTkXs1Qjg4t0AS%2F6cjz%2FeM7w%2FdjxeSc3WAaSACMKUmpp288wYynFAMLaV8dAGOqUBDj%2FWViKRfkJs%2F62MSUQihxPB9O2qGF2XR5pYU2oTjZ%2F4dLrNq9Fyz%2FV5TXkPhn2JIiot04zOM8oVFY8cIfiRb%2F4rL3eV2NqgrIQrYLQwf9LMJWpk0LH1vjTBIk8ZX5YyFoCwwaHK5Y4eGXaCY7xxIclW9lh5HBHon%2FMTZfi8il2H02uexB9%2Blb8%2F%2B30ePKpZ4YegHH7rRHihgc3tlJbh5J5vftsY&X-Amz-Signature=0bfd0c698f0e3f7e6b27f375ecebe546972a5485dabd0f785f6b3786596d6127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

