/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  From,
  InputConteiner,
  LeftConteiner,
  Link,
  RightConteiner,
  Title,
} from './styles';

export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required('O nome e obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatorio'),
      password: yup
        .string()
        .min(6, ' A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('confirma sua senha '),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com Sucesso!');
      } else if (status === 409) {
        toast.error('Email já Cadastrado! Faça login para continuar.');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no Sistema! Tente Novamente.');
    }
  };

  return (
    <Container>
      <LeftConteiner>
        <img src={Logo} alt="logo-devburguer" />
      </LeftConteiner>
      <RightConteiner>
        <Title>Criar conta</Title>
        <From onSubmit={handleSubmit(onSubmit)}>
          <InputConteiner>
            <label>
              Nome
              <input type="text" {...register('name')} />
            </label>
            <p>{errors?.name?.menssage}</p>
          </InputConteiner>

          <InputConteiner>
            <label>
              Email
              <input type="email" {...register('email')} />
            </label>
            <p>{errors?.email?.menssage}</p>
          </InputConteiner>

          <InputConteiner>
            <label>
              Senha
              <input type="password" {...register('password')} />
            </label>
            <p>{errors?.email?.menssage}</p>
          </InputConteiner>

          <InputConteiner>
            <label>
              Confirmar Senha
              <input type="password" {...register('confirmPassword')} />
            </label>
            <p>{errors?.confirmPassword?.menssage}</p>
          </InputConteiner>

          <Button type="submit">Criar Conta</Button>
        </From>
        <p>
          Já possui conta ? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightConteiner>
    </Container>
  );
}
