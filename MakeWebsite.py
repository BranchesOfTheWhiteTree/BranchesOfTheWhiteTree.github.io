from jinja2 import Environment, FileSystemLoader
from os import system as sys
from pathlib import Path
from WebsiteData import *

# Specify the template directory and environment 
file_loader = FileSystemLoader('templates')
env = Environment(loader=file_loader)

i = 0
for page in main_pages:
	
	data = {
		'title' : titles[i],
		'BannerImage01' : BannerImages[i][0],
		'BannerImage02' : BannerImages[i][1],
		'BannerImage03' : BannerImages[i][2]
	}

	# Templating Page
	template = env.get_template('main_pages/'+page)
	output = template.render(post=data)
	
	# Create Page
	with open(page, 'w') as f:
		print(output, file=f)
	
	print(f"Created {page} page!")
	i += 1

i = 0
for page in other_pages:

    data = {
        'title': other_titles[i]
    }

    # Templating Page
    template = env.get_template('main_pages/'+page)
    output = template.render(post=data)
        
    # Create Page
    with open(page, 'w') as f:
        print(output, file=f)
    
    i += 1

try:
    sys("rm ./temp.html")
except:
    sys("del ./temp.html")