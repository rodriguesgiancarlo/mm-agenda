import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Button,
  Menu as ChakraMenu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

const Menu = () => {
  return (
    <ChakraMenu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            variant="outline"
            isActive={isOpen}
            rightIcon={isOpen ? <FiX /> : <FiMenu />}
          >
            Menu
          </MenuButton>
          <MenuList>
            <MenuGroup title="Cadastros">
              <MenuItem as={Link} to="/team-members">
                Membros do time
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </>
      )}
    </ChakraMenu>
  );
};

export default React.memo(Menu);
