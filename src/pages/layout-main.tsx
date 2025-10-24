import { NavLink, Outlet } from 'react-router';
import Container from '../components/container/Container';
import Text from '../components/text/Text';

export default function LayoutMain() {
  return (
    <>
      <Container as="header">Olá mundo - HEADER</Container>
      <main>
        <Outlet />
      </main>
      <footer>
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">
            <Text variant="body-sm-bold" className="text-gray-300">
              Tarefas
            </Text>
          </NavLink>
          <NavLink to="/componentes">
            <Text variant="body-sm-bold" className="text-gray-300">
              Componentes
            </Text>
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
