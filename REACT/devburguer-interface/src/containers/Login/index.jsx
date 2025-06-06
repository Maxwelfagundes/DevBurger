import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useUser } from '../../hooks/UserContext';

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

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatorio'),
      password: yup
        .string()
        .min(6, ' A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
            }, 2000);
            return 'Seja bem vindo(a) 👌';
          },
        },
        error: 'Email ou senha incorretos 🤯',
      },
    );
    putUserData(userData);
  };

  return (
    <Container>
      <LeftConteiner>
        <img src={Logo} alt="logo-devburguer" />
      </LeftConteiner>
      <RightConteiner>
        <Title>
          Olá, seja bem vindo ao
          <span> Dev Burguer!</span>
          <br />
          Acesse com seu<span> Login e senha.</span>
        </Title>

        <From onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit">Entrar</Button>
        </From>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightConteiner>
    </Container>
  );
}
