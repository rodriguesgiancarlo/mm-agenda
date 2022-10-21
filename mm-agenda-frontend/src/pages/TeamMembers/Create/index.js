import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
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

const TeamMembersCreate = () => {
  const navigateTo = useNavigate();
  const toast = useToast();

  const { data, setData, errors, post, loading } = useForm({
    name: '',
    email: '',
    phone_number: '',
  });

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
        label: 'Adicionar',
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
    if (await post('/team-members')) {
      toast({
        description: 'Membro adicionado com sucesso',
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

export default TeamMembersCreate;
