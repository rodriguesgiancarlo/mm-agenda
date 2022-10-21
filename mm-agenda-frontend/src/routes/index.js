import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useBreakpointValue } from '@chakra-ui/react';
import AuthenticatedLayout from '@/layouts/Authenticated';
import Home from '@/pages/Home';
import TeamMembersCreate from '@/pages/TeamMembers/Create';
import TeamMembersEdit from '@/pages/TeamMembers/Edit';
import TeamMembersIndex from '@/pages/TeamMembers';
import Error404 from '@/pages/Errors/Error404';

const RoutesComponent = () => {
  window.IS_MOBILE = useBreakpointValue({ base: true, md: false });

  return (
    <BrowserRouter>
      <AuthenticatedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team-members" element={<TeamMembersIndex />} />
          <Route path="/team-members/create" element={<TeamMembersCreate />} />
          <Route path="/team-members/:id/edit" element={<TeamMembersEdit />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthenticatedLayout>
    </BrowserRouter>
  );
};

export default RoutesComponent;
