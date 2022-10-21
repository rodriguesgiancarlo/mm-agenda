import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ButtonCreate from '@/components/Buttons/Create';
import Card from '@/components/Card';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import List from './List';

const TeamMembersIndex = () => {
  const breadcrumbs = useMemo(
    () => [
      {
        label: 'Cadastros',
        to: null,
      },
      {
        label: 'Membros do time',
        to: null,
      },
    ],
    []
  );

  return (
    <Container>
      <PageHeader breadcrumbs={breadcrumbs}>
        <ButtonCreate as={Link} to="/team-members/create" />
      </PageHeader>
      <Card>
        <List />
      </Card>
    </Container>
  );
};

export default TeamMembersIndex;
