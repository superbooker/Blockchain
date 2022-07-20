// == Import
import PropTypesLib from 'prop-types';

// == Composant
function Address({ addr }) {
  if(!addr) return;

  return (
    <div>
        <p>Voici l'adress que vous utilisez: {addr}</p>
    </div>
  );
};
 
// Vérification du type des props
Address.propTypes = {
    addr: PropTypesLib.string.isRequired,
};

// == Export
export default Address;
