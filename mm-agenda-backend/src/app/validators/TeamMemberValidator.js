import * as yup from 'yup';

const TeamMemberSchema = yup.object({
  name: yup.string().max(255, 'O máximo de caracteres permitidos é 255').required('O campo NOME é obrigatório'),
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .max(255, 'O máximo de caracteres permitidos é 255')
    .required('O campo E-MAIL é obrigatório'),
  phone_number: yup
    .string()
    .max(20)
    .required('O campo TELEFONE é obrigatório')
    .test('test-phone-number', 'Telefone inválido', value => {
      const onlyNumbers = value.replace(/\D/g, '');
      return onlyNumbers.length === 13 || onlyNumbers.length === 12;
    }),
});

export default TeamMemberSchema;
