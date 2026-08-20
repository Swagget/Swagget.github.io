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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN46N2R7%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T073053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2F368qwvB7Syr3B%2FX%2BwjzAyIbj6UHVnDoQahi14FJtwIhAMZBl0MgBku17jRqICrDDK2qpet2enxTp6yoIK2OXEfrKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQCR4pOmaNCRdZqqIq3APLtjgdUwquOKn66GJ1HV1wQRntKVvdPbdUnBAIInCkfmGwxXOz3Q1s3LCqXzKpO3%2F0GmrL6N6NwefxD6nbhC3TRhJq%2F%2F3XSmp6%2B0CTAAm0SStSyeStUlLyncPP7lhuamS4Z%2BeRiuSnTfO1sg4m4SxWLIN0ji7Q1YynWrOsoa00xSo0Wvh3GC3CbPFcI4Vp1t7YdRbDQc1l967%2BNAP8qGcaWvjWZK7L5jwgny3mNXLyT8BOd4CkYBNR6%2Bv2lKPktqHf%2BSewfyqBoh8J9Y6c4cWYFVVxMahR3aQG3WfnNs0UPkntZ2oqvYFy4gXf%2FHNAac6bv%2BpHaFN2sl%2FZadYZzNA3M6RKhAlL7VFcHX7colmZwJdrI7RiKSg9YHPA0ZFToPS3Sqyr%2FGcQt1rhT8dGlcNc%2FeeQUsRlChQawVRpTWjdfIHkU6q8m8z%2Fv4u%2FZt%2B4noFnktJashaGbnRxGzbzPIvt4OFPa8%2BrK40ZmEW%2BWhZP4zqei7T8c%2Bt3fu6l0E6%2BzoaBnJKKihBF9dwlT15uBm59DdSmZ6tCI14ZWTpYEAZHxyAS6x4neagz8bT4vwqqUcDj9BzQXn9khGBrxMIeXNrvDp243oK5SHttoG70v%2FaKJsvWliO60GB2LiejzTC%2Bq5rUBjqkAbFMEzgqubMjaPys4K%2FHCd%2BXmjk%2B8DqbO94ulXzGISXFmy3WcG6uOkEBsIu1KFVflhQIwcDBdmeqeJswsNLByeMcG%2F3P2%2Bk9oB37cD%2FI2Q9Pq0WylC5BUcTX8NE4VyNMhB82DaV38B9VopnBVQM0MWcgIjkcZl%2Bgk8dAwj80dXRrXlmNFDM3X5kcBqCYOqLba5A5DGL672dgYXtF%2F4OOR%2B%2FixiiU&X-Amz-Signature=7442c6d4fc3f07832677e3c803fe1583b85d6a2d5a61987b8a88c3034c829e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

