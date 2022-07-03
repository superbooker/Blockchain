# Continuous Distribution - TP - TDD ERC20

## Etapes

1. Initialisation projet Truffle `truffle init`
2. Installation des packages `@openzeppelin/contracts @openzeppelin/test-helpers`
3. Création du contract, fichiers de test & déploiement `truffle create all Erc20Token`
4. Mise en place code du contrat `Erc20Token`
5. Mise en place des premiers tests

## Notes sur le fonctionnement du contrat ERC20

### fonction `allowance()`

Une adresse peut allouer / autoriser un certain montant à une autre adresse, afin d'être utiliser  
On a un mapping : (ownerAddr => (spenderAddr => balanceAutorized))  
Une fonction allowance() permet de retrouver le uint(montant) alloué par l'owner au spender  

### fonction `approve()`

Une fonction approve() permet à l'owner de définir un montant autorisé au sender  
Chaque call de cette fonction écrase le montant précédement définit (0 initialement)

### fonction `transferFrom()`

La fonction tranferFrom() permet au spender d'envoyer des tokens depuis l'adresse de l'owner vers une nouvelle adresse  
Pour ça il faut que le spender soit autorisé à bouger un certain montant de l'addr de l'owner => mapping (owner => (spender => amount))  
Si allowance(owner, spender) nous renvoie autre que 0 => C'est qu'il y a un motant autorisé par l'owner a être bougé de son addr par une action du spender

Un fois cette autorisation faite (execution de ``approve()``), le spender peut executer `transferFrom()` afin de transférer un montant de l'adresse de l'owner vers une autre adresse  
Le montant que va pouvoir bouger le spender ne peut excéder le montant définit avec la fonction `approve()`

## Notes sur les tests

La libraire `@openzeppelin/test-helpers` fournit des fonctions utilitaires pour les tests de smart contracts

[Mocha nous fournit des hooks](https://mochajs.org/#hooks) pour executer des instructions à certains moment des tests.  
Ici on les utilise pour créer une nouvelle instance du contrat à chaque test. Ce qui permet de bosser avec une instance clean et vide.

Il ne vaut mieux pas utiliser les fonctions fléchée dans les tests car on n'aurait pas accès au context Mocha.  
[Lien vers la doc](https://mochajs.org/#arrow-functions)

La suite Truffle installe par défaut des librairies qui permettent de manipuler les big numbers plus facilement dans nos tests  
[Un plugin de chai qui nous permet de manipuler les bignumber](https://www.chaijs.com/plugins/chai-bignumber/)  
[package bn.js nous fournit certaines méthodes](https://www.npmjs.com/package/bn.js?activeTab=readme)

```js
expect(ownersBalanceAfterTransfer).to.be.bignumber.equal(ownersBalanceBeforeTransfer.sub(amount));
expect(recipientsBalanceAfterTransfer).to.be.bignumber.equal(recipientsBalanceBeforeTransfer.add(amount));
```
