---
title: "Webscraping for Grocery App"
collection: projects
category: data-science
permalink: /projects/webscraping-grocery-app
excerpt: "Wanted to create a grocery app that contained all the groceries from all the major online grocery vendors. Allowing users to choose the groceries from each store individually."
date: 2021-03-01
techstack: "Machine Learning, Data Science, Natural Language Processing"
source: notion
---

Wanted to create a grocery app that contained all the groceries from all the major online grocery vendors. Allowing users to choose the groceries from each store individually.


For this I created a configuration of AWS servers that scraped data from each vendor, matched products with slightly different descriptions. And created a unified database.


The nuance was that products differed based on the zipcode. 


So I created several EC2 instances each with a different zipcode and set them to scrape the data of each vendor from each zipcode.


Whenever an IP address got blocked, the server would automatically delete itself and a new one would be created to continue scraping data.

