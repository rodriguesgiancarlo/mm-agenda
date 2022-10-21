import TeamMemberController from '@/app/controllers/TeamMemberController';

const routes = app => {
  // app.get('/api', (req, res) => res.send(`Ciao mondo ` + new Date()));

  app.get('/api/team-members', TeamMemberController.index);
  app.get('/api/team-members/:id', TeamMemberController.show);
  app.post('/api/team-members', TeamMemberController.store);
  app.put('/api/team-members/:id', TeamMemberController.update);
  app.delete('/api/team-members/:id', TeamMemberController.delete);
};

export default routes;
