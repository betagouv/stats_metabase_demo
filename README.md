# Demonstrateur tracking Metabase
Ce dépôt contient des exemples d'implémentation afin de mettre en place une solution personalisée de suivi utilistateur et de statistiques de fréquentation.

La solution exposée utilise un _stack_ technologique courant: Python, Javascript et PostgreSQL, qui devrait pouvoir s'intégrer facilement dans n'importe quel interface ou application web (à l'exception éventuelle de l'API Python, qui peut aisément être implémenté dans d'autres langages: n'hésitez pas à en fournir un exemple !).

:construction: En Construction :construction:

## Composants:
### Tracker Javascript
Le tracker JS qui signale les événements à l'API Python
### API Python
API (Fastapi: pydantic et starlette.io) qui valide les données reçues, et les inscrit en base de données
### PostgreSQL
Base de données qui se charge du stockage des événements
### Metabase
Outil de visualisation des données capables d'interroger directement la base de données, de créer et de publier des visualisation et des tableaux de bords.
