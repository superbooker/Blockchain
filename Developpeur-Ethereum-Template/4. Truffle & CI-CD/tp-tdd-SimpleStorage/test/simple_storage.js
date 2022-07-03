const SimpleStorage = artifacts.require("SimpleStorage");
const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// On test un contrat
contract("Contrat SimpleStorage", function (accounts) {

  let simpleStorageInstance;
  const owner = accounts[0];

  // Hook qui s'execute avant chaque tests
  beforeEach(async () => {
    // Permet de créer une nouvelle instance toute fraiche avant chaque tests
    simpleStorageInstance = await SimpleStorage.new({from: owner});
  });

  // On fait un chapitre de tests
  describe("Tests d'executions", function() {

    it("should store 42", async () => {
      // On set un bignumber
      await simpleStorageInstance.set(new BN(42), { from: owner });
      // On recup la valeur
      const storedValue = await simpleStorageInstance.get()
      // On test l'égalité
      expect(storedValue).to.be.bignumber.equal(new BN(42));
    });

    it('should set a positive value', async () => {
      // On attend l'execution du require qui se trouve dans la fonction set
      await expectRevert(
        simpleStorageInstance.set(new BN(0), { from: owner }),
        // Important d'avoir le même message que dans le require
        "Veuillez entrer une valeur positive");
    });

    it('should emit the Set event', async () => {
      // On attend l'execution de la fonction avant de recup sa représentation dans un objet
      const receipt = await simpleStorageInstance.set(new BN(10), { from: owner });
      // Une fois la fonction executée, on verif si l'event qui est dedant a été émit
      expectEvent(receipt, 'Set', {_data: new BN(10), _addr: owner});
    });

  });
});
