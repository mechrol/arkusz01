import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import Card from '../components/Card'

const Hero = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  text-align: center;
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`

const SummarySection = styled.section`
  padding: 5rem 0;
  background-color: white;
`

const SummaryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const SummaryTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--text);
`

const SummaryText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
`

const ChallengeSection = styled.section`
  padding: 5rem 0;
  background-color: #f8fafc;
`

const ChallengeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ChallengeCard = styled(Card)`
  padding: 2.5rem;
  border-left: 5px solid var(--primary);
`

const ChallengeTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--text);
`

const ChallengeList = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.75rem;
  }
`

const FeaturesSection = styled.section`
  padding: 5rem 0;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled(Card)`
  text-align: center;
  padding: 2rem;
`

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(37, 99, 235, 0.1);
  border-radius: 50%;
  color: var(--primary);
`

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
`

const CtaSection = styled.section`
  padding: 5rem 0;
  background-color: #f1f5f9;
  text-align: center;
`

const CtaContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

const CtaTitle = styled.h2`
  margin-bottom: 1.5rem;
`

const CtaText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.125rem;
`

function LandingPage() {
  return (
    <main>
      <Hero>
        <div className="container">
          <HeroContent>
            <HeroTitle>Break Free from the Paycheck-to-Paycheck Cycle</HeroTitle>
            <HeroSubtitle>
              Take control of your finances and build a stable financial future with our interactive worksheet and personalized guidance.
            </HeroSubtitle>
            <Link to="/register">
              <Button size="large">
                Get Started Now
              </Button>
            </Link>
          </HeroContent>
        </div>
      </Hero>
      
      <SummarySection>
        <div className="container">
          <SummaryContent>
            <SummaryTitle>The 30-Day Financial Reset</SummaryTitle>
            <SummaryText>
              Our interactive worksheet is designed to help you break the paycheck-to-paycheck cycle in just 30 days. 
              By following our proven system, you'll identify spending leaks, build an emergency fund, and create a 
              sustainable budget that actually works for your lifestyle.
            </SummaryText>
            <SummaryText>
              This isn't just another budget template. It's a comprehensive system that addresses the psychological 
              aspects of spending, helps you identify your true financial priorities, and builds habits that lead to 
              long-term financial stability.
            </SummaryText>
          </SummaryContent>
        </div>
      </SummarySection>
      
      <ChallengeSection>
        <div className="container">
          <ChallengeContent>
            <ChallengeCard>
              <ChallengeTitle>Take the 30-Day Financial Freedom Challenge</ChallengeTitle>
              <p>Are you ready to transform your financial future? Our challenge is simple but powerful:</p>
              <ChallengeList>
                <li><strong>Week 1:</strong> Track every single expense without judgment</li>
                <li><strong>Week 2:</strong> Identify and eliminate three unnecessary recurring expenses</li>
                <li><strong>Week 3:</strong> Build a $500 emergency fund (or add $500 to your existing fund)</li>
                <li><strong>Week 4:</strong> Create a sustainable budget that includes saving at least 10% of your income</li>
              </ChallengeList>
              <p>By completing this challenge, you'll break the cycle of living paycheck to paycheck and start building real financial security.</p>
              <Link to="/register">
                <Button size="large" style={{ marginTop: '1.5rem' }}>
                  Accept the Challenge
                </Button>
              </Link>
            </ChallengeCard>
          </ChallengeContent>
        </div>
      </ChallengeSection>
      
      <FeaturesSection>
        <div className="container">
          <SectionTitle>How Our Worksheet Helps You</SectionTitle>
          <FeaturesGrid>
            <FeatureCard hoverable>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Assess Your Current Situation</FeatureTitle>
              <p>Gain clarity on your spending habits and identify areas where you can make meaningful changes to improve your financial health.</p>
            </FeatureCard>
            
            <FeatureCard hoverable>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Set Achievable Goals</FeatureTitle>
              <p>Define clear, realistic financial goals that will motivate you to stay committed to your financial freedom journey.</p>
            </FeatureCard>
            
            <FeatureCard hoverable>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Track Your Progress</FeatureTitle>
              <p>Monitor your spending and savings over time to see your improvement and stay accountable to your financial goals.</p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>
      
      <CtaSection>
        <div className="container">
          <CtaContent>
            <CtaTitle>Ready to Transform Your Financial Future?</CtaTitle>
            <CtaText>
              Join thousands of others who have used our worksheet to break free from financial stress and build lasting wealth.
            </CtaText>
            <Link to="/register">
              <Button size="large">
                Access the Worksheet
              </Button>
            </Link>
          </CtaContent>
        </div>
      </CtaSection>
    </main>
  )
}

export default LandingPage
