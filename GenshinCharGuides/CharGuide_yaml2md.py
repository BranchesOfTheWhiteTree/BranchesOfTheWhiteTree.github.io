import yaml
import json
import numpy as np

FNames = ["yoimiya.yaml"]

def WriteSections2File(Desc):

    for Section in Desc:
        SectionHeading = list(Section.keys())[0]
        MarkdownFP.writelines("\n\n### " + SectionHeading + ":")

        SectionContents = Section[SectionHeading]
        SectionData = ""

        for line in SectionContents:
            SectionData += "\n* " + line

        MarkdownFP.writelines(SectionData)
    
    MarkdownFP.writelines("\n\n")


for fname in FNames:

    MarkdownFName = fname[:-5] + ".md"
    JSONFName = fname[:-5] + ".json"
    HTMLFName = fname[:-5] + ".html"
    # print(MarkdownFName)

    with open(fname, 'r', encoding="utf8") as fp:
        YamlData = yaml.safe_load(fp)
    
    with open(JSONFName, 'r') as fp:
        JSONData = json.load(fp)
    
    # print(JSONData)
    
    MarkdownFP = open(MarkdownFName, "w")

    # Element Colour
    Colour = YamlData["char-element-colour"]

    # Page title
    Title = YamlData["char-name"]
    Description = YamlData["char-title-name"]

    # TitleMarkdown = "# " + Title + " - " + Description + "\n\n"
    TitleMarkdown = f'<div class="pt-2 pb-2" style="background-color:{Colour}"> <h1 align="center"> {Title} - {Description} </h2> </div>'
    MarkdownFP.writelines(TitleMarkdown)

    # Banner Image
    BannerImg = JSONData["BannerImg"]
    BannerIMGLine = f'<br><img src={BannerImg} class="d-block w-100" alt="...">'
    MarkdownFP.writelines(BannerIMGLine)
    
    # CharImg = YamlData["char-img-url"]

    # Kit Overview
    Heading = "\n\n## " + "Kit Introduction" + "\n"
    MarkdownFP.writelines(Heading)
    Desc = YamlData["char-kit-points"]

    WriteSections2File(Desc)

    Colour = YamlData["char-element-colour"]
    MarkdownFP.writelines(f'<br>')
    MarkdownFP.writelines(f'<div class="pt-2 pb-2" style="background-color:{Colour}"> <h2 align="center"> Talents </h2> </div>')
    MarkdownFP.writelines(f'<br>')
    
    # Create tabs using another Navbar section
    MarkdownFP.writelines('<ul class="nav nav-pills nav-fill">')

    # Normal Attack
    MarkdownFP.writelines('<li class="nav-item">')
    MarkdownFP.writelines('<a class="nav-link active" data-bs-toggle="tab" href="#NormalATK">Normal Attack</a> ')
    MarkdownFP.writelines('</li>')

    # Skill
    MarkdownFP.writelines('<li class="nav-item">')
    MarkdownFP.writelines('<a class="nav-link" data-bs-toggle="tab" href="#Skill">Elemental Skill</a> ')
    MarkdownFP.writelines('</li>')

    # Burst
    MarkdownFP.writelines('<li class="nav-item">')
    MarkdownFP.writelines('<a class="nav-link" data-bs-toggle="tab" href="#Burst">Elemental Burst</a> ')
    MarkdownFP.writelines('</li>')

    # A1
    MarkdownFP.writelines('<li class="nav-item">')
    MarkdownFP.writelines('<a class="nav-link" data-bs-toggle="tab" href="#A1">Ascension 1 Passive</a>')
    MarkdownFP.writelines('</li>')

    # A4
    MarkdownFP.writelines('<li class="nav-item">')
    MarkdownFP.writelines('<a class="nav-link" data-bs-toggle="tab" href="#A4">Ascension 4 Passive</a>')
    MarkdownFP.writelines('</li>')

    # A0
    MarkdownFP.writelines('<li class="nav-item">')
    MarkdownFP.writelines('<a class="nav-link" data-bs-toggle="tab" href="#A0">Ascension 0 Passive</a>')
    MarkdownFP.writelines('</li>')

    # Close the talent tabs
    MarkdownFP.writelines('</ul>')

    # Div tag for the tab content
    MarkdownFP.writelines(f'<div class="p-2 border border-primary">')

    # Write the tab contents - Normal Attack
    MarkdownFP.writelines('<div class="tab-content">')
    MarkdownFP.writelines('<div class="tab-pane active" id="NormalATK">')

    Heading = f'<br><h2> <img width="50" src={JSONData["NormalATK"]} /> {YamlData["char-normal"]} | {YamlData["char-normal-name"]} </h2>'
    MarkdownFP.writelines(Heading)
    Desc = YamlData["char-normal-desc"]

    WriteSections2File(Desc)

    MarkdownFP.writelines('</div>')
    MarkdownFP.writelines('</div>')

    # Write the tab contents - Skill
    MarkdownFP.writelines('<div class="tab-content">')
    MarkdownFP.writelines('<div class="tab-pane" id="Skill">')

    Heading = f'<br><h2> <img width="50" src={JSONData["Skill"]} /> {YamlData["char-skill"]} | {YamlData["char-skill-name"]} </h2>'
    MarkdownFP.writelines(Heading)
    Desc = YamlData["char-skill-desc"]

    WriteSections2File(Desc)

    MarkdownFP.writelines('</div>')
    MarkdownFP.writelines('</div>')

    # Write the tab contents - Burst
    MarkdownFP.writelines('<div class="tab-content">')
    MarkdownFP.writelines('<div class="tab-pane" id="Burst">')

    Heading = f'<br><h2> <img width="50" src={JSONData["Burst"]} /> {YamlData["char-burst"]} | {YamlData["char-burst-name"]} </h2>'
    MarkdownFP.writelines(Heading)
    Desc = YamlData["char-burst-desc"]

    WriteSections2File(Desc)

    MarkdownFP.writelines('</div>')
    MarkdownFP.writelines('</div>')
    
    # Write the tab contents - A1
    MarkdownFP.writelines('<div class="tab-content">')
    MarkdownFP.writelines('<div class="tab-pane" id="A1">')

    # Heading = "\n\n## " + YamlData["char-a1-name"] + "\n"
    Heading = f'<br><h2> <img width="50" src={JSONData["A1"]} /> {YamlData["char-a1-name"]} </h2>'
    MarkdownFP.writelines(Heading)
    Desc = YamlData["char-a1-desc"]

    SectionData = ""

    for line in Desc:
        SectionData += "\n* " + line
    
    MarkdownFP.writelines(SectionData)
    MarkdownFP.writelines("\n\n")

    MarkdownFP.writelines('</div>')
    MarkdownFP.writelines('</div>')

    # Write the tab contents - A4
    MarkdownFP.writelines('<div class="tab-content">')
    MarkdownFP.writelines('<div class="tab-pane" id="A4">')

    Heading = f'<br><h2> <img width="50" src={JSONData["A4"]} /> {YamlData["char-a4-name"]} </h2>'
    MarkdownFP.writelines(Heading)
    Desc = YamlData["char-a4-desc"]

    SectionData = ""

    for line in Desc:
        SectionData += "\n* " + line
    
    MarkdownFP.writelines(SectionData)
    MarkdownFP.writelines("\n\n")

    MarkdownFP.writelines('</div>')
    MarkdownFP.writelines('</div>')

   # Write the tab contents - A0
    MarkdownFP.writelines('<div class="tab-content">')
    MarkdownFP.writelines('<div class="tab-pane" id="A0">')

    Heading = f'<br><h2> <img width="50" src={JSONData["A0"]} /> {YamlData["char-a0-name"]} </h2>'
    MarkdownFP.writelines(Heading)
    Desc = YamlData["char-a0-desc"]

    SectionData = ""

    for line in Desc:
        SectionData += "\n* " + line
    
    MarkdownFP.writelines(SectionData)
    MarkdownFP.writelines("\n\n")

    MarkdownFP.writelines('</div>')
    MarkdownFP.writelines('</div>')

    # Close the Div tag for the tab content
    MarkdownFP.writelines('</div>')

    # # Character Weapons
    # Heading = "\n\n## " + YamlData["char-weapons"] + "\n"
    # MarkdownFP.writelines(Heading)
    # Desc = YamlData["char-weapons-list"]

    # WriteSections2File(Desc)
    
    # # Weapon notes
    # Heading = "\n\n## " + "Weapon Notes" + "\n"
    # MarkdownFP.writelines(Heading)
    # Desc = YamlData["char-weapons-notes"]

    # WriteSections2File(Desc)

    # # Constellations
    # Heading = "\n\n## " + YamlData["char-constellations"] + "\n"
    # MarkdownFP.writelines(Heading)
    # Desc = YamlData["char-constellations-list"]

    # WriteSections2File(Desc)
    
    # # Constellation notes
    # Heading = "\n\n## " + "Constellation Notes" + "\n"
    # MarkdownFP.writelines(Heading)
    # Desc = YamlData["char-constellations-notes"]

    # WriteSections2File(Desc)
    
    # Close the file
    MarkdownFP.close()

        


    


