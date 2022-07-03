const Student = artifacts.require("Student");
const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

contract("Student", function (accounts) {

  let StudentInstance;
  const owner = accounts[0];

  describe("tests des fonctions", () => {

    context("Tests des setter", () => {
      // Hook pour executer du code avant de lancer ce chapitre de tests
      // Permet de créer une seule fois une nouvelle instance du contrat et d'appler qu'une seule fois la fonction setEtud
      // Une seul fois avant la batterie de tests de ce chapitre
      // => L'execution des tests est plu rapide car optimisé
      before(async function() {
        StudentInstance = await Student.new({from: owner});
        await StudentInstance.setEtud(owner, "Remi", "42");
      });

      it("should set the name in mapping", async () => {
        // await StudentInstance.setEtud(owner, "Remi", "42");
        const newStudent = await StudentInstance.etudiantsMapping(owner);
        expect(newStudent.name).to.be.equal('Remi');
      });

      it("should set the note in mapping", async () => {
        // await StudentInstance.setEtud(owner, "Remi", "42");
        const newStudent = await StudentInstance.etudiantsMapping(owner);
        expect(newStudent.note).to.be.bignumber.equal(new BN(42));
      });

      it("should set the name in array", async () => {
        // await StudentInstance.setEtud(owner, "Remi", "42");
        const newStudent = await StudentInstance.etudiantsArray(0);
        expect(newStudent.name).to.be.equal('Remi');
      });

      it("should set the note in array", async () => {
        // await StudentInstance.setEtud(owner, "Remi", "42");
        const newStudent = await StudentInstance.etudiantsArray(0);
        expect(newStudent.note).to.be.bignumber.equal(new BN(42));
      });
    });

    context("Tests des getter", () => {
      before(async function() {
        StudentInstance = await Student.new({from: owner});
        await StudentInstance.setEtud(owner, "Remi", "42");
      });

      it("should get the name from the mapping", async () => {
        const newStudent = await StudentInstance.getEtudByAddr(owner);
        expect(newStudent.name).to.be.equal('Remi');
      });

      it("should get the note from the mapping", async () => {
        const newStudent = await StudentInstance.getEtudByAddr(owner);
        expect(newStudent.note).to.be.bignumber.equal(new BN(42));
      });

      it("should get the name from the array", async () => {
        const newStudent = await StudentInstance.getEtudById(0);
        expect(newStudent.name).to.be.equal('Remi');
      });

      it("should get the note from the array", async () => {
        const newStudent = await StudentInstance.getEtudById(0);
        expect(newStudent.note).to.be.bignumber.equal(new BN(42));
      });
    });

    context("Tests des deleter", () => {
      beforeEach(async function() {
        StudentInstance = await Student.new({from: owner});
        await StudentInstance.setEtud(owner, "Remi", "42");
      });

      it('should remove student\'s name from the mapping', async () => {
        await StudentInstance.removeEtudMap(owner);
        const removedStudent = await StudentInstance.etudiantsMapping(owner);
        expect(removedStudent.name).to.be.equal("");
      });

      it('should remove student\'s note from the mapping', async () => {
        await StudentInstance.removeEtudMap(owner);
        const removedStudent = await StudentInstance.etudiantsMapping(owner);
        expect(removedStudent.note).to.be.bignumber.equal(new BN(0));
      });

      it('should remove student\'s name from the array', async () => {
        await StudentInstance.removeEtudArr(0);
        const removedStudent = await StudentInstance.etudiantsArray(0);
        expect(removedStudent.name).to.be.equal("");
      });

      it('should remove student\'s note from the mapping', async () => {
        await StudentInstance.removeEtudArr(0);
        const removedStudent = await StudentInstance.etudiantsArray(0);
        expect(removedStudent.note).to.be.bignumber.equal(new BN(0));
      });
    });

    context.only("Tests des classes", () => {
      before(async function() {
        StudentInstance = await Student.new({from: owner});
      });

      it("should change the class", async () => {
        await StudentInstance.setClasse(1);
        const changedClasse = await StudentInstance.classe.call();
        expect(changedClasse).to.be.bignumber.equal(new BN(1));
      });
    });
  });
});
