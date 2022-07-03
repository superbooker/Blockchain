# Projet Truffle Voting System - Tests unitaires

Projet de fin de chapitre Truffle, CI/CD & tests unitaires.

Les tests unitaires sont a effectuer sur la correction du [projet Voting du chapitre Solidity](./contracts/Voting.sol).

Les tests sont rédigés en Javascript [dans le fichier `test/voting.js`](./test/voting.js).

**Il y a 24 tests au total.**

## Comment lancer le projet

Il faut tout d'abord installer toutes les dépendances du projet avec la commande `npm install` ou `yarn`.

2 réseaux ont été configurés :

- `development` => réseau lancé avec ganache en local écoutant sur le port 8545
- `ropsten` => testnet Ethereum accessible grâce à un **node Infura**. Si vous désirez lancer les tests sur ce réseau, utilisez le template de fichier de variables d'environnements `.env-dist` en y placant les informations attendues et en le rennommant `.env`

2 scripts npm vous sont mit à disposition :

- `npm run test:dev` => permet de lancer les tests sur le réseau `development`. *Assurez-vous d'avoir bien lancé un réseau avec Ganache*
- `npm run test:ropsten` => permet de lancer les tests sur le testnet Ethereum `ropsten`. *Assurez-vous d'avoir bien renseigné les variables d'environnement dans un fichier `.env`*

## 1 - Tests des requires

### 11 tests prévus

- Modifier onlyOwner
- Modifier onlyVoters
- Doit revert si on est pas en phase d'enregistrement de voters
- Doit revert si un voter a déjà été enregistré
- Doit revert si on est pas en phase de rajout de propositions
- Doit revert si on soumet une proposals vide / null
- Doit revert si la phase de rajout de proposals n'est pas terminée
- Doit revert si on est pas en phase de vote
- Doit revert si le voter a déjà voté
- Doit revert si on vote sur une proposals qui n'existe pas
- Doit revert si la phase de vote n'est pas terminée

## 2 - Tests des events

### 4 tests prévus

- event VoterRegistered
- event WorkflowStatusChange
- event ProposalRegistered
- event Voted

## 3 - Tests des setters & getter

### 3 tests prévus

- Doit rajouter un voter dans le mapping et renvoyer le voter en question
- Doit rajouter une proposal dans le tableau et renvoyer la proposal en question
- Doit rajouter le vote du voter sur sa struct

## 4 - Tests des WorkflowStatus

### 5 tests prévus

- Le systeme de vote doit commencer à la phase d'enregistrement de voters
- Doit passer à la phase de rajout de propositions
- Doit terminer la phase de rajout de propositions
- Doit commencer la phase de vote
- Doit terminer la phase de vote

## 5 - Tests du dépouillage de votes

### 1 test prévu

- Doit retourner la proposal gagnante
