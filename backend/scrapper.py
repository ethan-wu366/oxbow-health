import csv
import requests
import pandas as pd
from jobspy import scrape_jobs


#Job title
#Company name
#Location
#Pay rate
#Job description

jobs = scrape_jobs(
    site_name=["indeed"],
    search_term="caregiver",
    location="Dallas, TX",
    results_wanted=50,
    hours_old=72, # (only Linkedin/Indeed is hour specific, others round up to days old)
    country_indeed='USA',  # only needed for indeed / glassdoor
    
    # linkedin_fetch_description=True # get full description and direct job url for linkedin (slower)
    # proxies=["208.195.175.46:65095", "208.195.175.45:65095", "localhost"],
    
)

filter_jobs = jobs[['title', 'company', 'location', 'interval', 'min_amount', 'max_amount', 'currency', 'description']]

json_data = filter_jobs.to_json(orient='records')

url = 'http://localhost:5001/scrape'  # URL of your Express.js endpoint

# Send POST request with JSON data
#headers = {'Content-Type': 'application/json'}
#response = requests.post(url, data=json_data, headers=headers)

#print(response.text)
#print(f"Found {len(jobs)} jobs")
print(json_data)
#jobs.to_csv("jobs.csv", quoting=csv.QUOTE_NONNUMERIC, escapechar="\\", index=False) # to_excel