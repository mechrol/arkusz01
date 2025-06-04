import React from 'react'
import styled from 'styled-components'

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '0.75rem 1.5rem' : '0.5rem 1rem'};
  font-size: ${props => props.size === 'large' ? '1.125rem' : '1rem'};
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s;
  gap: 0.5rem;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const PrimaryButton = styled(ButtonBase)`
  background-color: var(--primary);
  color: white;
  border: none;
  
  &:hover:not(:disabled) {
    background-color: var(--primary-dark);
  }
`

const SecondaryButton = styled(ButtonBase)`
  background-color: var(--secondary);
  color: white;
  border: none;
  
  &:hover:not(:disabled) {
    background-color: var(--secondary-dark);
  }
`

const OutlineButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  
  &:hover:not(:disabled) {
    background-color: var(--primary);
    color: white;
  }
`

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  type = 'button',
  ...props 
}) => {
  switch (variant) {
    case 'secondary':
      return (
        <SecondaryButton size={size} type={type} {...props}>
          {children}
        </SecondaryButton>
      )
    case 'outline':
      return (
        <OutlineButton size={size} type={type} {...props}>
          {children}
        </OutlineButton>
      )
    default:
      return (
        <PrimaryButton size={size} type={type} {...props}>
          {children}
        </PrimaryButton>
      )
  }
}

export default Button
