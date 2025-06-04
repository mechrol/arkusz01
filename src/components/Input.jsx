import styled from 'styled-components'

const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  ${props => props.error && `
    border-color: var(--error);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  ${props => props.error && `
    border-color: var(--error);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`

const Input = ({ 
  label, 
  id, 
  type = 'text', 
  error, 
  ...props 
}) => {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      {type === 'textarea' ? (
        <StyledTextarea id={id} error={error} {...props} />
      ) : (
        <StyledInput id={id} type={type} error={error} {...props} />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input
