/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import useForm from '@/hooks/useForm';
import ButtonCancel from '@/components/Buttons/Cancel';
import ButtonSubmit from '@/components/Buttons/Submit';
import Card from '@/components/Card';
import Container from '@/components/Container';
import FormContainer from '@/components/FormContainer';
import FormFooter from '@/components/FormFooter';
import PageHeader from '@/components/PageHeader';
import FormInputs from '../Form';

const TeamMembersEdit = () => {
  let { id } = useParams();
  const toast = useToast();
  const navigateTo = useNavigate();

  const { data, setData, setDataValues, errors, get, put, loading } = useForm({
    name: '',
    email: '',
    phone_number: '',
  });

  const fetchData = async () => {
    if (id) {
      const response = await get('/team-members/' + id);

      if (response) {
        setDataValues(response);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const breadcrumbs = useMemo(
    () => [
      {
        label: 'Cadastros',
        to: null,
      },
      {
        label: 'Membros do time',
        to: '/team-members',
      },
      {
        label: 'Alterar',
        to: null,
      },
    ],
    []
  );

  const handleCancelOnClick = e => {
    navigateTo('/team-members');
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    if (await put('/team-members/' + id)) {
      toast({
        description: 'Membro alterado com sucesso',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      navigateTo('/team-members');
    }
  };

  useEffect(() => {
    if (errors) {
      toast({
        description: errors.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [toast, errors]);

  return (
    <Container>
      <PageHeader breadcrumbs={breadcrumbs} />
      <Card>
        <FormContainer onSubmit={handleOnSubmit}>
          <FormInputs data={data} setData={setData} />
          <FormFooter>
            <ButtonCancel isLoading={loading} onClick={handleCancelOnClick} />
            <ButtonSubmit isLoading={loading} />
          </FormFooter>
        </FormContainer>
      </Card>
    </Container>
  );
};

export default TeamMembersEdit;
