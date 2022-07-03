# Continuous Distribution - TP - TDD SimpleStorage

## Etapes

1. Initialisation projet Truffle `truffle init`
2. Installation des packages `@openzeppelin/contracts @openzeppelin/test-helpers @truffle/hdwallet-provider dotenv`
3. Reprise :
   1. du contrat `SimpleStorage.sol`
   2. du script de migration `deploy.js`
   3. de la config truffle `truffle-config.js`
   4. des variables d'environements `.env` - *Seulement si on veut déployer sur Ropsten en passant par notre noeud Infura*
   5. ***GITIGNORE !!!!***
4. On adapte les scripts
5. Création fichier test `truffle create test SimpleStorage`

## Notes

Truffle utilise les librairies Mocha et Chai pour effectuer les tests.

Mocha est le framework de test et Chai est la lib d'assertions (contient les fonctions de tests).

[Ecrire les tests en JS avec Mocha](https://trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript/)

[Les options de configuration de Mocha - à faire dans le fichier `truffle-config.js`](https://mochajs.org/api/mocha)

[Une customisation indispensable](https://mochajs.org/#reporters)

[La liste des fonctions d'assertion de Chai](https://www.chaijs.com/api/assert/#method_assert)

[Le lien vers le code des tests commentés](./test/simple_storage.js)
