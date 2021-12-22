import { Summary } from '../Summary';
import { Transactions } from '../Transactions';
import { DashboardContainer } from './styles';

function Dashboard() {
  return (
    <DashboardContainer>
      <Summary />
      <Transactions />
    </DashboardContainer>
  );
}

export { Dashboard };
