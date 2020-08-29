# Demonstrateur tracking Js/Python/PostgreSQL/Metabase
Ce dépôt contient des exemples d'implémentation afin de mettre en place une solution personalisée de suivi utilistateur et de statistiques de fréquentation.

:construction: En Construction :construction:

## Compostants:
### Tracker Javascript
Le tracker JS qui signale les événements à l'API Python
### API Python
API (Fastapi: pydantic et starlette.io) qui valide les données reçues, et les inscrit en base de données
### PostgreSQL
Base de données qui se charge du stockage des événements
### Metabase
Outil de visualisation des données capables d'interroger directement la base de données, de créer et de publier des visualisation et des tableaux de bords.
