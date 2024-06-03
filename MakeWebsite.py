from jinja2 import Environment, FileSystemLoader
from os import system as sys
from pathlib import Path
from WebsiteData import *

def pandoc2html(title, template, fname, temp_file, output_file):

	# Removing haskell. Including Pandoc-based syntax highlights.
	result = sys(f"pandoc --from=markdown --to=html5 --mathjax --highlight-style=pygments {fname} -o {temp_file}")

	if result != 0:
		print(f"Error occurred file converting {fname}")
	else:	
		with open(temp_file, "r", encoding="utf8") as p:
		
			data = {
				'content': p.read(),
				'title': title
				}

			template = env.get_template('main_pages/'+template)
			output = template.render(post=data)

			with open(output_file, 'w', encoding="utf8") as f2:
				print(output, file=f2)

			print(f'Finished rendering {output_file}')

def md2html(title, template, fname, output_file):

    with open(fname, "r", encoding="utf8") as p:
    
        data = {
            'content': p.read(),
            'title': title
            }

        template = env.get_template('main_pages/'+template)
        output = template.render(post=data)

        with open(output_file, 'w', encoding="utf8") as f2:
            print(output, file=f2)

        print(f'Finished rendering {output_file}')

def ConvertMDs2HTML(root, folder, template):

    basePath = Path(f'{root}/{folder}/')
    files_in_basepath = basePath.iterdir()
    print(f"Listing files in '{root}/{folder}/")

    for item in files_in_basepath:
        if item.is_file():
            if item.name.endswith(".md"):
                title_words = str(item).split("\\")
                # print(f"title words = {title_words}")
                title = title_words[-1][:-3]
                for Word in reversed(title_words[:-1]):
                    title += f' | {Word}'
                fname = str(item)
                html = fname[:-3]+'.html'
                temp_file = 'temp.html'
                # print(title, item, html)
                pandoc2html(title, template, fname, temp_file, html)

def FetchMDs2HTML(root, folder, template):

    basePath = Path(f'{root}/{folder}/')
    files_in_basepath = basePath.iterdir()
    print(f"Listing files in '{root}/{folder}/")

    for item in files_in_basepath:
        if item.is_file():
            if item.name.endswith(".md"):
                title_words = str(item).split("\\")
                # print(f"title words = {title_words}")
                title = title_words[-1][:-3]
                for Word in reversed(title_words[:-1]):
                    title += f' | {Word}'
                fname = str(item)
                html = fname[:-3]+'.html'

                md2html(title, template, fname, html)
                

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

# Genshin Character Guide Pages
Folder = "GenshinCharGuides"
Template = "GenshinCharGuideTemplate.html"
print(f"inside {Folder}")
ConvertMDs2HTML(".", Folder, Template)

# Genshin Timeline Pages
Folder = "GenshinTimelines"
Template = "GenshinTimelineTemplate.html"
print(f"inside {Folder}")
FetchMDs2HTML(".", Folder, Template)

try:
    sys("rm ./temp.html")
except:
    sys("del ./temp.html")