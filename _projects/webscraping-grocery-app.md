---
title: "Webscraping for Grocery App"
collection: projects
category: data-science
permalink: /projects/webscraping-grocery-app
excerpt: 'Scraped multiple grocery vendors using a distributed AWS EC2 setup with automatic IP rotation to build a unified product database.'
date: 2023-10-06
techstack: 'Python, BeautifulSoup, AWS EC2, NLP'
---

Wanted to create a grocery app that contained all the groceries from all the major online grocery vendors, allowing users to choose the groceries from each store individually.

For this, a configuration of AWS servers was created that scraped data from each vendor, matched products with slightly different descriptions, and created a unified database.

The nuance was that products differed based on the zipcode.

Several EC2 instances were created, each with a different zipcode, and set them to scrape the data of each vendor from each zipcode.

Whenever an IP address got blocked, the server would automatically delete itself and a new one would be created to continue scraping data.
