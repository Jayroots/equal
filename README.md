Sujet Pratique : Qualité de l’eau

L’objectif de cet exercice est de créer un site web statique depuis une open API.
L’url de la documentation de l’API est la suivante : https://hubeau.eaufrance.fr/page/api-qualite-eau-potable#/qualite_eau_potable/communes

Pour générer le site de manière statique, nous t’invitons à utiliser Next.js et pour l’hébergement, nous te proposons de le déployer via Vercel, comme tu as pu déjà l’expérimenter.

Afin de ne pas trop perdre de temps sur l’implémentation des composants, nous ton proposons d’utiliser la librairie de composant Ant Design.

On a pris un peu de temps pour comprendre la documentation de l’API. On te propose une suggestion d’indicateur, mais nous t’invitons à parcourir la documentation pour voir si des indicateurs te paraissent pertinents.

On sera attentif au visuel, balisage HTML (SEO friendly), performance, l’architecture du projet, ainsi que les évolutions que tu auras apportées de manière spontanée. 
L’exercice est là pour évaluer ta vision du développement et correspond à ce qu’on attend d’un développeur chez EP.
Lors de notre prochaine rencontre, nous te laisserons nous présenter ta réalisation, le cheminement lors de tes développements de features, les points de blocages que tu as rencontrés et ton organisation.





 Ce site sera composé de : 



Une page d’accueil
Autocomplete centrale bien visible 
Service Geoloc pour retrouver la commune
https://geoservices.ign.fr/documentation/services/api-et-services-ogc/geocodage-20/doc-technique-api-geocodage




À la sélection d’une commune, l’utilisateur sera dirigé vers la page de la commune
Cover sympa avec un gif lié à l’eau en fond
Faire un top sur les communes où la qualité est N partout (https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?conformite_limites_bact_prelevement=N&conformite_limites_pc_prelevement=N), sur l’année 2022.
Top département + top commune des endroits



Des pages générées statiquement pour chaque commune.
L’url correspondra au code_commune (attention au code postal qui n’est pas unique entre chaque commune)
Pour la génération des pages, utilisation du fichier statique avec les code_commune : https://unpkg.com/codes-postaux@4.0.0/codes-postaux.json
Afficher le nom de la commune
Voir si tu trouves une illustration par commune
Qualité de l’eau du dernier prélèvement : conformite_limites_bact_prelevement, conformite_limites_pc_prelevement + description
Enumérer les paramètres les plus représentatifs de la qualité de l’eau à prendre par commune, limites-toi à 5 paramètres.

Mettre 5 card avec la dernière valeur
Une section par polluant, utilisation d’une tab (les 5) 
line chart par polluant, utiliser D3 (https://d3js.org/)
mettre un seuil de limite, voir si tu le récupère facilement, sinon tu peux en mettre un arbitraire par polluant)
Champs info à mettre en full texte
Lister les réseaux de la commune : https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/communes_udi?code_commune=45234 
Passer par un tableau

