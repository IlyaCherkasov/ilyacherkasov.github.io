import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  padding-top: 5rem;
`;

const Header = styled.h2`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.7rem;
`;
interface Props {
  id: string;
  header: string;
  subheader: string;
  children: JSX.Element;
}

const Section = ({
  id, header, subheader, children,
}: Props) => (
  <StyledSection id={id}>
    <h5>{subheader}</h5>
    <Header>{header}</Header>
    {children}
  </StyledSection>
);

export default Section;
