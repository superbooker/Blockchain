# Truffle

Framework de développement Solidity. Outils pour faire des tests et déployer

## Commandes utiles

https://trufflesuite.com/docs/truffle/reference/truffle-commands/

https://trufflesuite.com/docs/truffle/getting-started/running-migrations/

```bash
# Initialise un projet truffle
truffle init 

# Compile les smart contract
truffle compile

# Execute les srcipts de déploiement
truffle deploy

## Compile & déploie
# Par default, sans le paramètre --network, truffle va deployer sur le premier réseau renseigné sur le fichier de config (ici développement) 
truffle migrate

# il se peut qu'une action bloque et fait des erreurs. On peut reset pour refaire propre
truffle migrate --reset

# Permet de déployer nos smart contract sur le réseau Ropsten (définit dans truffle-config)
truffle migrate --network ropsten

# Permet de se connecter à la console pour pouvoir tester nos contrat directement onChain
truffle console --network ropsten

# Permet de lancer un ptit serveur avec un front pour demander l'autorisation de la trx de déploiement.
# Utile quand on a pas envi de déployer avec une private stockée sur le pc mais sur la ledger !
# ==> Pour la prod en mainnet!
truffle dashboard
# Pour Recevoir la confirmation de trsx sur le dashboard et les autoriser via metamask avec Ledger
truffle migrate --network dashboard 
```

## Providers

Pour pouvoir intéragir avec les réseaux (testnet ou mainnet), il faut utiliser des providers

### Infura - node provider

https://infura.io/dashboard

Service centralisé. C'est un délégateur de noeud grâce auquel on peut rejoindre le réseaux Ethereum sans avoir à lancer un noeud perso.

Un noeud est la porte d'entrée pour pouvoir intéragire avec une BC, notament déployer des contrats & faire des trsx.  
Metamask, uniswap & makerDAO passent par infura pour leurs intéractions avec la BC Ethereum.

Il faut se créer un compte, puis créer un projet et récup l'id depuis les project settings

On va utiliser cet id comme variable d'environnement pour la config de truffle.

### hdwallet-provider

https://github.com/trufflesuite/truffle/blob/develop/packages/hdwallet-provider/README.md

Maintenant qu'on a un noeaud a disposition, il nous manque plus qu'un wallet pour signer des trsx.

Le package @truffle/hdwallet-provider va nous permettre de créer un wallet à partir :

- d'une mnémonique (celle de notre métamask) afin d'importer les adresses dedans
- l'adresse vers le noeud **Infura** du reseau sur lequel on veut bosser

```bash
# Installation du package en depedencies (pas en devDepedencies)

npm install --save @truffle/hdwallet-provider
```

### Variables d'environnement

Il est important de se créer un fichier contenant nos variables d'environnements pour la config de truffle.

Ces variables sont des données ***sensibles***. C'est pour ça qu'on les met dans un fichier `.env` qu'on va **.gitignore**

```bash
# Installation du package en depedencies (pas en devDepedencies)

npm install --save dotenv
```

## Config Truffle

https://trufflesuite.com/docs/truffle/reference/configuration/

On a toutes les infos dont on a besoin pour configurer truffle. ça va nous permettre de déployer et tester nos contrats sur différents réseaux (local ganache, testnet etc)

La config se passe dans le fichier truffle-config.js

On va retrouver 3 propriétés importantes dans le module de config :

- networks => on va spécifier les différents networks avec lesquels travailler.
  - On renseigne l'id du réseau
  - On renseigne les infos des providers qui sont contenus dans `.env`
- mocha => qui est la solution de tests utilisé par défaut. Il va être possible d'en utiliser d'autre
- compiler => pour définir les settings du compiler Ethereum : sa version, etc

## Console truffle

La console truffle est un outil en cli permettant de se connecter à un réseaux et d'intéragir avec des contrats !

```bash
# Pour se connecter au réseau ropsten et ouvrir la console
truffle console --network ropsten

# Pour recup nos adresses
## Note : lorsqu'on intéragit avec des fonctions de contrats sur BC, on travail en asyncrone !
await web3.eth.getAccounts()

# Pour recup lLa balance d'une adresse 
await web3.eth.getBalance(‘une adresse’)

# On recup une instance du contrat déployé
var instance = await SimpleStorage.deployed()

# Pour pouvoir call ses fonctions
await instance.set(3)
(await instance.get()).toString()
```

## eth95

Une interface web qui permet d'intéragir avec des contrats. On lance l'outil en cli et lui spécifiant le dossier qui contient les contrats.

```bash
# Install global du package
npm install -g eth95

# Lancement du node server en recupérant les contracts du dossier
eth95 ./truffle_project/contracts/
```

On peut se connecter avec metamask, en renseignant une mnémonique ou encore sur un bc local (ganache) qui tourne sur le port 8545.  
L'avantage de se connecter avec metamask permet d'arriver sur le réseaux sélectionné avec (ropsten par exemple).

On sélectionne le contrat avec lequel intéragir et l'adresse à laquelle il se trouve sur le réseaux sélectionné (ici ropsten).  
On peut maintenant intéragir avec en utilisant ses fonctions.

## Dashborad truffle

Permet de lancer un ptit serveur avec un front pour demander l'autorisation de la trx de déploiement  
Utile quand on a pas envi de déployer avec une private stockée sur le pc mais sur la ledger !  
==> Pour la prod en mainnet!

```bash
# Lancement du node server sur le port 24012
truffle dashboard
# Pour Recevoir la confirmation de trsx sur le dashboard et les autoriser via metamask avec Ledger
truffle migrate --network dashboard 
```
