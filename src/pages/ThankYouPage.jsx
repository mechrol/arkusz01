import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../components/Card'
import Button from '../components/Button'

const PageContainer = styled.div`
  padding: 5rem 0;
  text-align: center;
`

const ThankYouCard = styled(Card)`
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem;
`

const ThankYouIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: var(--success);
`

const ThankYouTitle = styled.h1`
  margin-bottom: 1.5rem;
`

const ThankYouMessage = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--text-light);
`

const NextStepsTitle = styled.h2`
  margin: 2rem 0 1.5rem;
`

const NextStepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto 2rem;
  text-align: left;
`

const NextStep = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`

const StepDescription = styled.p`
  color: var(--text-light);
  font-size: 0.9375rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`

function ThankYouPage({ userData }) {
  const navigate = useNavigate()
  
  // Redirect if no user data
  useEffect(() => {
    if (!userData) {
      navigate('/register')
    }
  }, [userData, navigate])
  
  if (!userData) {
    return null
  }
  
  return (
    <PageContainer>
      <div className="container">
        <ThankYouCard>
          <ThankYouIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </ThankYouIcon>
          
          <ThankYouTitle>Thank You, {userData.nickname}!</ThankYouTitle>
          
          <ThankYouMessage>
            You've taken an important step toward breaking the paycheck-to-paycheck cycle and achieving financial freedom. Your worksheet has been saved successfully.
          </ThankYouMessage>
          
          <NextStepsTitle>Your Next Steps</NextStepsTitle>
          
          <NextStepsList>
            <NextStep>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Review Your Worksheet Weekly</StepTitle>
                <StepDescription>
                  Set aside time each week to review your progress and make adjustments to your budget as needed.
                </StepDescription>
              </StepContent>
            </NextStep>
            
            <NextStep>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>Implement Your Action Plan</StepTitle>
                <StepDescription>
                  Start putting your identified strategies into practice, focusing on both reducing expenses and increasing savings.
                </StepDescription>
              </StepContent>
            </NextStep>
            
            <NextStep>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>Track Your Progress</StepTitle>
                <StepDescription>
                  Use the tracking table to monitor your income, expenses, and savings over the next four weeks.
                </StepDescription>
              </StepContent>
            </NextStep>
            
            <NextStep>
              <StepNumber>4</StepNumber>
              <StepContent>
                <StepTitle>Celebrate Small Wins</StepTitle>
                <StepDescription>
                  Acknowledge and celebrate your progress, no matter how small. Each step brings you closer to financial freedom.
                </StepDescription>
              </StepContent>
            </NextStep>
          </NextStepsList>
          
          <p>
            We've sent a copy of your worksheet to <strong>{userData.email}</strong>. You can access it anytime to continue your financial journey.
          </p>
          
          <ButtonGroup>
            <Link to="/worksheet">
              <Button variant="outline">
                Return to Worksheet
              </Button>
            </Link>
            
            <Link to="/">
              <Button>
                Back to Home
              </Button>
            </Link>
          </ButtonGroup>
        </ThankYouCard>
      </div>
    </PageContainer>
  )
}

export default ThankYouPage
