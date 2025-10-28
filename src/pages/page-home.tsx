import Container from '../components/container/Container';
import TasksList from '../core-components/TasksList';
import TasksSummary from '../core-components/TasksSummary';

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>

      <TasksList />
    </Container>
  );
}
