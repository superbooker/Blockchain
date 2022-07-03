# Chapitre Solidity

## Projet test

Faire un smart contract d'un système de vote.

### 👉 Le processus de vote

Voici le déroulement de l'ensemble du processus de vote :

1. L'administrateur du vote enregistre une liste blanche d'électeurs identifiés par leur adresse Ethereum.
2. L'administrateur du vote commence la session d'enregistrement de la proposition.
3. Les électeurs inscrits sont autorisés à enregistrer leurs propositions pendant que la session d'enregistrement est active.
4. L'administrateur de vote met fin à la session d'enregistrement des propositions.
5. L'administrateur du vote commence la session de vote.
6. Les électeurs inscrits votent pour leur proposition préférée.
7. L'administrateur du vote met fin à la session de vote.
8. L'administrateur du vote comptabilise les votes.
9. Tout le monde peut vérifier les derniers détails de la proposition gagnante.

### Notes

- L'admin : owner du contract
  - Peut changer les différentes phases du processus de vote
  - Peut rajouter des électeurs dans la whitelist prévu à cet effet
- Il existe différentes phases
  - Phase d'enregistrement des électeurs
  - Phase de propositions (début & fin)
  - Phase de vote (début & fin)
  - Phase de dépouillage
- Certaines actions ne sont possibles qu'à certaines phases (ex: on ne peut voter que pendant la phase de vote)
- Les élécteurs peuvent
  - Proposer autant de proposition qu'ils souhaitent uniquement pendant la phase de propositions
  - Voter pour une seule proposition uniquement pendant la phase de vote
  - Voir la proposition votée par les autres électeurs uniquement pendant la phase de dépouillage
  - Voir la proposition gagnante uniquement pendant la phase de dépouillage

### Améliorations possibles

[x] Ressoritr le taux de vote et le taux d'absenteissme

[x] Remise à zéro du vote / Relancer une session

[ ] Gérer l'exequo

[x] Indentations de 4

[ ] Faire une librairie perso pour les modifiers
