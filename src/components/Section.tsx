import styled from 'styled-components';

const StyledSection = styled.section`
  width: calc(100% - 2rem);
  padding: 5rem 1rem 0;
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
