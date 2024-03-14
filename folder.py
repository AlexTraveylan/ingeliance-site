
from pathlib import Path

nav_main ={
    "groupe" : [
        "aPropos",
        "equipeDirigeante",
        "stategie",
        "demarcheRse",
        "engagementsClients"
    ],
    "secteur" : [
        "aeronautiqueSpatial",
        "defense",
        "naval",
        "energie",
        "transportBiensEquipement",
        "industrieDesProcedes"
    ],
    "metiers" : [
        "RDetTechnologiesInnovantes",
        "conceptionProduitEtSystemes",
        "simulationNumerique",
        "industrialisationOutillage",
        "maintenanceSliMcoMro"
    ],
    "carriere" : [
        "rejoindre",
        "experienceCandidat",
        "nosCollaborateursTemoignent",
        "nosOffres",
        "candidatureSpontanee"],
    "actualites" : [],
    "contact" : []
}

def display_page_tsx(nom):
    return """
export default function $$$FUNCTIONNAME$$$() {
    return (
        <div>
            <h1>$$$NAME$$$</h1>
        </div>
    )
}
    """.replace("$$$FUNCTIONNAME$$$", nom.capitalize()).replace("$$$NAME$$$", nom)

FOLDER = Path(__file__).parent / "app"

for key, values in nav_main.items():
    new_folder = FOLDER / key
    new_folder.mkdir(exist_ok=True)

    if not values:
        new_file = new_folder / "page.tsx"
        new_file.write_text(display_page_tsx(key))
        continue

    for value in values:
        sub_folder = new_folder / value
        sub_folder.mkdir(exist_ok=True)
        new_file = sub_folder / "page.tsx"
        new_file.write_text(display_page_tsx(value))
    
