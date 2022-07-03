// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract Student {

  address owner;
  struct Etudiant {
    string name;
    uint note;
  }
  mapping(address => Etudiant) public etudiantsMapping;
  Etudiant[] public etudiantsArray;
  enum Classe { Classe6e, Classe5e, Classe4e }
  Classe public classe;

  function getEtudByAddr(address _addr) external view returns (Etudiant memory) {
    return etudiantsMapping[_addr];
  }

  function getEtudById(uint _id) external view returns (Etudiant memory) {
    return etudiantsArray[_id];
  }

  function setEtud(address _addr, string calldata _name, uint _note) external {
    etudiantsMapping[_addr] = Etudiant(_name, _note);
    etudiantsArray.push(Etudiant(_name, _note));
  }

  function removeEtudMap(address _addr) external {
    delete etudiantsMapping[_addr];
  }

  function removeEtudArr(uint _id) external {
    delete etudiantsArray[_id];
  }

  function setClasse(uint _id) external {
    classe = Classe(_id);
  }
}
