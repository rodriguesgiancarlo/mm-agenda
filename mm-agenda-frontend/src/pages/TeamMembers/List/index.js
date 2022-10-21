/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useToast,
  Stack,
  Text,
} from '@chakra-ui/react';
import useApi from '@/hooks/useApi';
import { sortBy } from '@/utils/sort';
import { HandleSearch } from '@/utils/search';
import CircularProgress from '@/components/CircularProgress';
import IconButtonEdit from '@/components/IconButtons/Edit';
import IconButtonDelete from '@/components/IconButtons/Delete';
import IconButtonRefresh from '@/components/IconButtons/Refresh';
import SearchInput from './SearchInput';

const TeamMembersList = props => {
  const [filterTerm, setFilterTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { get, destroy, loading, setLoading } = useApi();
  const toast = useToast();

  async function fetchData() {
    const newData = await get('/team-members');
    const sorted = newData ? sortBy(newData, 'name') : [];
    setData(sorted);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let newData = filterTerm
      ? HandleSearch(data, filterTerm, ['name', 'email', 'phone_number'])
      : data;

    setFilteredData(newData);
  }, [data, filterTerm]);

  const handleOnDelete = (item, idx) => async () => {
    try {
      await destroy('/team-members/' + item._id);
      setData(data.filter((_, index) => index !== idx));
      toast({
        id: 'success-toast',
        description: 'Membro removido com sucesso',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      setLoading(false);
      toast({
        id: 'error-toast',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return data.length === 0 ? (
    <Text>Nenhum registro encontrado. Clique no botão "Adicionar"</Text>
  ) : (
    <>
      <Stack
        direction={['column', null, 'row']}
        justify="right"
        spacing={2}
        mb={4}
      >
        <SearchInput
          value={filterTerm}
          onChange={value => setFilterTerm(value)}
        />
        <IconButtonRefresh onClick={fetchData} isLoading={loading} size="sm" />
      </Stack>
      {loading && <CircularProgress />}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Endereço de e-mail</Th>
              <Th>Telefone</Th>
              <Th isNumeric>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((item, idx) => (
              <Tr key={item._id}>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone_number}</Td>
                <Td isNumeric>
                  <IconButtonEdit
                    isLoading={loading}
                    as={Link}
                    to={`/team-members/${item._id}/edit`}
                  />
                  <IconButtonDelete
                    onClick={handleOnDelete(item, idx)}
                    isLoading={loading}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

TeamMembersList.propTypes = {
  items: PropTypes.array,
};

TeamMembersList.defaultProps = {
  items: [],
};

export default React.memo(TeamMembersList);
