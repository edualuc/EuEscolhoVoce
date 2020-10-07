import styled from 'styled-components'

const ButtonCustom = styled.button`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  height: min-content;
  border: none;
  border-radius: 4px;
  font-weight: bold;

  :hover {
    /* background-color: ${({ theme }) => theme.colors.secondary}; */
    cursor: pointer;
  }
`

function Button({children, ...other}) {
  return (
    <ButtonCustom {...other}>
      {children}
    </ButtonCustom>
  );
}

export default Button;