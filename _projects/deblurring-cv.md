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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN6JS3I%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXIl0D1hugJ65%2FdW8%2FMof5jRN%2Fr%2FEHHBILTCY7opYMeQIgbb9RZRONszCaDXtrxhrqtIXDO2vndplcFlr%2FBbyeLWUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDA%2B0sTraHLan5%2B3O2SrcA8nN7p%2BPWc53WbI%2FOk8iMnqc4Qqa8Mee6yLFfwV1%2FZN7JS%2Fs81rfHRgyoNkCELERkJXx%2F3fACVWjaf2yT0RhdMoQUxNE8MZzu68Jehz195OJAtgrBLE5fdyGsGBiuW%2Bu0m5nm%2ByXTiA110RJQF5H1nYN9PiPocDrAcxrLce2Cp%2FL9x0zGhBu2EypuLBgExEaLD2FCwV8pz4%2Bib8v4Q7xOlu3TDCsc3V7f2tgqBzhtyrV%2BKS0Bp00lkkgcOVKFoblg1ATl8aWIHyCDiicMnC4oYE7oR9ZGeCKUmkEDNjSuGrjqUUQGj%2BMQyt8tVUvQiRf%2FyLinPXkDOWTf67Nu%2BoR7%2BD6rZgQLCAQ1315e3%2FS2lW6%2F%2Fj1EHK7sCpjZONh2PCl%2FOammAByspc5xQe00M%2FTOZpLHM%2FvpDa5c4oBTLFtePMm4FWfE9%2F2yd3UnQZph3UINxdnMGpcujyWRv2iNR0jmdof1ydS93f%2BFNCyK21qJmNlsnBCa3MtfDF6DU0hN%2FI2SF5Y0b2D7T4Lc%2Fn8qvKJS9fquo3yTA0AMYQBI9WQ%2FWbjQ7%2B%2Bl65VgNOKmC4vLKh%2F%2Bo9C8DKybi5WX7g5CONYE47Jtt3Fn%2BHCVEWlsSrxG4x8ogC7b8Y6qCwrEY58MJC%2BktQGOqUBJLhPlrlEWvF0R4oaSgRX5Ku6h%2FjeoeproTdz0waObUkhmrbvvghNwRBnfbva14ZUoZoSUxANhxds9dJrMErngNU3ox47YCDaEzcPYGbj2AtYqFk7%2BLinHkzvhIPE0r09csXqnnxq0WHEm%2F57lqnrSPpHcP9cDCjje39un1PGuZ%2F4sFkopfaukycJMrBbS09LPN9Otc5hhOtyB6yEotTNy7NPvLrT&X-Amz-Signature=81dc25e17f19fd3eccc888ec759b0af05e2580ff508b1fbc5eb528255ebd70e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

