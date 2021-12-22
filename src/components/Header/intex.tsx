import logoImg from '../../assets/logo.svg';
import { HeaderContainer, HeaderContent } from './styles';

type HeaderProps = {
  onButtonClick: () => void;
};

function Header({ onButtonClick }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onButtonClick}>
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
}

export { Header };
