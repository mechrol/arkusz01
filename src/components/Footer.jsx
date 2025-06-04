import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: var(--card);
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid var(--border);
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterSection = styled.div`
  flex: 1;
`

const FooterHeading = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text);
`

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const FooterLink = styled.li`
  margin-bottom: 0.5rem;
  
  a {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: var(--primary);
    }
  }
`

const Copyright = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  color: var(--text-light);
  font-size: 0.875rem;
  text-align: center;
`

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterHeading>Financial Freedom</FooterHeading>
            <p>Breaking the paycheck-to-paycheck cycle with smart financial planning and budgeting.</p>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Resources</FooterHeading>
            <FooterLinks>
              <FooterLink><a href="#">Budgeting Tips</a></FooterLink>
              <FooterLink><a href="#">Debt Reduction</a></FooterLink>
              <FooterLink><a href="#">Saving Strategies</a></FooterLink>
              <FooterLink><a href="#">Investment Basics</a></FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterHeading>Contact</FooterHeading>
            <FooterLinks>
              <FooterLink><a href="mailto:info@financialfreedom.com">info@financialfreedom.com</a></FooterLink>
              <FooterLink><a href="#">Support</a></FooterLink>
              <FooterLink><a href="#">FAQ</a></FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          © {new Date().getFullYear()} Financial Freedom. All rights reserved.
        </Copyright>
      </div>
    </FooterContainer>
  )
}

export default Footer
