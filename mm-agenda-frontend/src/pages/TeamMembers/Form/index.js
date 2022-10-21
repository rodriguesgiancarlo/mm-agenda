import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import ReactInputMask from 'react-input-mask';

const TeamMembersForm = props => {
  const { data, setData } = props;

  return (
    <>
      <FormControl isRequired>
        <FormLabel>Nome completo</FormLabel>
        <Input
          value={data.name}
          onChange={e => setData('name', e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Endereço de e-mail</FormLabel>
        <Input
          type="email"
          value={data.email}
          onChange={e => setData('email', e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Telefone</FormLabel>
        <Input
          type="phone"
          value={data.phone_number}
          onChange={e => setData('phone_number', e.target.value)}
          as={ReactInputMask}
          mask={'\\+\\5\\5 (99) 9 9999-9999'}
        />
      </FormControl>
    </>
  );
};

export default TeamMembersForm;
