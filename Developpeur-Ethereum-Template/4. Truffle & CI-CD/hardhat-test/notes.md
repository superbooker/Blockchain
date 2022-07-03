mkdir hardtest 

cd hardtest 

npm init -y 

npm install -D hardhat 

npx hardhat 

create a sample project 

root yes 

gitignore yes 

reports no 

dependencies yes  (on a installé le moteur de test, d'appels avec ethers...)

waiting ... project created !

# console harhat

const Greet= await ethers.getContractFactory('Greeter'); (return undefined)

const greet= await Greet.attach('adresse retournée par le déploiement')

await greet.setGreeting("salut") - await greet.greet()
