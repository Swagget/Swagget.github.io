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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSQ54ZL%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T074107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHIaEjDdUScgR6XPDfUjACGIoEQ7nMkfi3ppv5vZYmz7AiEAge1FPw5YktIzbL5x5XL96sREtLEz2OMuXSeMYNB%2BqkUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNeTr%2BI5dxio1sGGNSrcA8YgFw48AMSWoFn1qGy4CPb9FEZwQaSnbmb27OVlGYbhIbv8pNdEp6LtEKKtEHIriSw66EczLEQwyDWWOgKhye1dm8TDeTRrBZwi%2B6E%2FL31lpCV%2B6HxqEDHG%2BlZTqIzN1ZtKLkO1ClEkkijrqAink3EdfMJAQmEamK0yGoClUaD1yf7yzfolmcZJ8k3mb%2BXm2p4i9McenZG4qvrLrWOW4f%2FstRQG444CPvOQEAIyrgxdnlTe2rpUCLYHJGr%2FaGo5eMEbPRlXbIkhyVJRA9GiEUuvZ0FHvbhElHAMvHzKmgPUIaV4ljyvnoDQ7gNIsG19h6SZ%2B%2FuWFypkJho9zjRhMJTZTyYmJ8IG5lmnqo72QIMblKQTkdceVdDG2GrOJ%2Bkx43sRrYNtCD6KwAack8Gw0n3HOrKsMOMUghsDAOFcvcj1aa5s011iVdNuPP%2FHHboGJQhq%2BPRD8nqnpcryrUcOVOt5Y5nku36TDNxv0xa6OcKpewTm5a8nehnBOAn%2FUrV%2BjCW6ry7PJ4JgItSVQxwAsEWxKc%2BhUFqscGhDFlSPGYHQlErCWygM1Zjkjd%2Bz6qK7N2ngbP4UKVTGTNlZQmSyQwRXeA5oTG%2FdO%2FZWLwi4SSrSES%2BQvB3q1eubVoWQMPzQitQGOqUB%2F3R2irY7eTSPhLVbLRAVxvXQYj0hEJKB%2B7Lu5O3YvDlO33aEOVDaxaRXusW26iYBdq1QBmJurRpJWMxH53lUVeKA1XzwTu2GKaBKRl%2FNW8p18wQf6RT4NdmOdsygcPhX6FZCj1RNDgWxxiK5xnIhGRxbxakVqZYEmSAxS4Y1UEKh3Mks3eaknmxkRjKtK9%2Bi5FKIbQqQuk6hutaRpzKnIhYZtrj2&X-Amz-Signature=f9ad3811c4d9c02a969c6a6e713554c288f52f930a43da581a8893a327de0fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

