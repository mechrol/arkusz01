import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'

const PageContainer = styled.div`
  padding: 3rem 0;
`

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const PageTitle = styled.h1`
  margin-bottom: 1rem;
`

const PageDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.125rem;
  color: var(--text-light);
`

const WorksheetContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Section = styled(Card)`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  border-bottom: 1px solid var(--border);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`

const SectionDescription = styled.p`
  margin-bottom: 1.5rem;
  color: var(--text-light);
`

const FormGroup = styled.div`
  margin-bottom: 2rem;
`

const FormGroupTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BulletList = styled.div`
  margin-bottom: 1.5rem;
`

const BulletItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const BulletPoint = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
`

const ProgressTable = styled.div`
  overflow-x: auto;
  margin-bottom: 1.5rem;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem;
    border: 1px solid var(--border);
    text-align: left;
  }
  
  th {
    background-color: #f8fafc;
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: #f8fafc;
  }
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  gap: 1rem;
`

const SaveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.saved ? 'var(--success)' : 'var(--text-light)'};
  font-size: 0.875rem;
`

function WorksheetPage({ userData, worksheetData, setWorksheetData }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    trackingMethod: '',
    clearPicture: '',
    financialStressors: '',
    spendingHabits1: '',
    spendingHabits2: '',
    spendingHabits3: '',
    spendingHabits4: '',
    financialStability: '',
    shortTermGoals: '',
    longTermGoal1: '',
    longTermGoal2: '',
    longTermGoal3: '',
    importance: '',
    budgetingMethod: '',
    expenseToReduce: '',
    savingsPercentage: '',
    incomeStream1: '',
    incomeStream2: '',
    incomeStream3: '',
    accountabilitySystem: '',
    week1Income: '',
    week1Essential: '',
    week1Discretionary: '',
    week1Savings: '',
    week1Notes: '',
    week2Income: '',
    week2Essential: '',
    week2Discretionary: '',
    week2Savings: '',
    week2Notes: '',
    week3Income: '',
    week3Essential: '',
    week3Discretionary: '',
    week3Savings: '',
    week3Notes: '',
    week4Income: '',
    week4Essential: '',
    week4Discretionary: '',
    week4Savings: '',
    week4Notes: '',
    successStrategy1: '',
    successStrategy2: '',
    successStrategy3: '',
    challenges: '',
    futureAdjustments: ''
  })
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState(null)
  
  // Redirect if no user data
  useEffect(() => {
    if (!userData) {
      navigate('/register')
    } else {
      // Load any existing worksheet data
      if (Object.keys(worksheetData).length > 0) {
        setFormData(worksheetData)
      }
    }
  }, [userData, navigate, worksheetData])
  
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }
  
  // Auto-save functionality
  useEffect(() => {
    const saveTimer = setTimeout(() => {
      if (Object.keys(formData).some(key => formData[key])) {
        setIsSaving(true)
        
        // Simulate saving to server
        setTimeout(() => {
          setWorksheetData(formData)
          setIsSaving(false)
          setLastSaved(new Date())
        }, 1000)
      }
    }, 3000)
    
    return () => clearTimeout(saveTimer)
  }, [formData, setWorksheetData])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setWorksheetData(formData)
    navigate('/thank-you')
  }
  
  return (
    <PageContainer>
      <div className="container">
        <PageHeader>
          <PageTitle>Breaking the Paycheck-to-Paycheck Cycle Worksheet</PageTitle>
          <PageDescription>
            This interactive worksheet will help you assess your financial situation, clarify your goals, 
            and take meaningful steps toward financial stability.
          </PageDescription>
        </PageHeader>
        
        <WorksheetContainer>
          <form onSubmit={handleSubmit}>
            {/* Section 1: Current Practices */}
            <Section>
              <SectionTitle>Reflect on Your Current Practices</SectionTitle>
              <SectionDescription>
                Understanding your current financial habits is the first step toward making positive changes.
              </SectionDescription>
              
              <Input
                label="How do you currently track your income and expenses?"
                id="trackingMethod"
                placeholder="e.g., Spreadsheet, budgeting app, mental tracking, etc."
                value={formData.trackingMethod}
                onChange={handleChange}
              />
              
              <Input
                label="Do you have a clear picture of where your money is going? Why or why not?"
                id="clearPicture"
                type="textarea"
                placeholder="Explain your current understanding of your spending patterns..."
                value={formData.clearPicture}
                onChange={handleChange}
              />
              
              <Input
                label="What are your biggest financial stressors?"
                id="financialStressors"
                type="textarea"
                placeholder="e.g., Credit card debt, unexpected expenses, insufficient income, etc."
                value={formData.financialStressors}
                onChange={handleChange}
              />
              
              <FormGroupTitle>Are there any spending habits you'd like to change?</FormGroupTitle>
              <TwoColumnGrid>
                <Input
                  id="spendingHabits1"
                  placeholder="Habit 1"
                  value={formData.spendingHabits1}
                  onChange={handleChange}
                />
                <Input
                  id="spendingHabits2"
                  placeholder="Habit 2"
                  value={formData.spendingHabits2}
                  onChange={handleChange}
                />
                <Input
                  id="spendingHabits3"
                  placeholder="Habit 3"
                  value={formData.spendingHabits3}
                  onChange={handleChange}
                />
                <Input
                  id="spendingHabits4"
                  placeholder="Habit 4"
                  value={formData.spendingHabits4}
                  onChange={handleChange}
                />
              </TwoColumnGrid>
            </Section>
            
            {/* Section 2: Define Goals */}
            <Section>
              <SectionTitle>Define Your Goals</SectionTitle>
              <SectionDescription>
                Clear, meaningful goals will help you stay motivated on your journey to financial freedom.
              </SectionDescription>
              
              <Input
                label="What does financial stability mean for you?"
                id="financialStability"
                type="textarea"
                placeholder="Describe what financial stability looks like in your life..."
                value={formData.financialStability}
                onChange={handleChange}
              />
              
              <Input
                label="What changes would you like to see in your finances over the next three months?"
                id="shortTermGoals"
                type="textarea"
                placeholder="List specific, achievable goals for the next 3 months..."
                value={formData.shortTermGoals}
                onChange={handleChange}
              />
              
              <FormGroupTitle>What long-term financial goals are you working toward?</FormGroupTitle>
              <SectionDescription>
                Examples: Saving three months of expenses, paying off a specific debt, building an emergency fund, etc.
              </SectionDescription>
              
              <BulletList>
                <BulletItem>
                  <BulletPoint>1</BulletPoint>
                  <Input
                    id="longTermGoal1"
                    placeholder="Long-term goal 1"
                    value={formData.longTermGoal1}
                    onChange={handleChange}
                  />
                </BulletItem>
                <BulletItem>
                  <BulletPoint>2</BulletPoint>
                  <Input
                    id="longTermGoal2"
                    placeholder="Long-term goal 2"
                    value={formData.longTermGoal2}
                    onChange={handleChange}
                  />
                </BulletItem>
                <BulletItem>
                  <BulletPoint>3</BulletPoint>
                  <Input
                    id="longTermGoal3"
                    placeholder="Long-term goal 3"
                    value={formData.longTermGoal3}
                    onChange={handleChange}
                  />
                </BulletItem>
              </BulletList>
              
              <Input
                label="Why is breaking the paycheck-to-paycheck cycle important to you?"
                id="importance"
                type="textarea"
                placeholder="Explain your personal motivation for achieving financial stability..."
                value={formData.importance}
                onChange={handleChange}
              />
            </Section>
            
            {/* Section 3: Action Plan */}
            <Section>
              <SectionTitle>Create an Action Plan</SectionTitle>
              <SectionDescription>
                Now let's create a concrete plan to help you achieve your financial goals.
              </SectionDescription>
              
              <Input
                label="Track Your Income and Expenses: Choose a budgeting method (app, spreadsheet, or notebook)."
                id="budgetingMethod"
                placeholder="e.g., YNAB, Mint, Excel spreadsheet, budget journal..."
                value={formData.budgetingMethod}
                onChange={handleChange}
              />
              
              <Input
                label="Identify Expenses to Reduce: List at least one non-essential expense you can cut this month."
                id="expenseToReduce"
                placeholder="e.g., Streaming service, dining out, subscription box..."
                value={formData.expenseToReduce}
                onChange={handleChange}
              />
              
              <Input
                label="Commit to Saving: Decide what percentage of your paycheck you will set aside for savings."
                id="savingsPercentage"
                placeholder="e.g., 5%, 10%, 15%..."
                value={formData.savingsPercentage}
                onChange={handleChange}
              />
              
              <FormGroupTitle>Explore Additional Income Streams</FormGroupTitle>
              <SectionDescription>
                Identify ways to boost income (side gigs, freelancing, selling unused items, etc.).
              </SectionDescription>
              
              <BulletList>
                <BulletItem>
                  <BulletPoint>1</BulletPoint>
                  <Input
                    id="incomeStream1"
                    placeholder="Potential income stream 1"
                    value={formData.incomeStream1}
                    onChange={handleChange}
                  />
                </BulletItem>
                <BulletItem>
                  <BulletPoint>2</BulletPoint>
                  <Input
                    id="incomeStream2"
                    placeholder="Potential income stream 2"
                    value={formData.incomeStream2}
                    onChange={handleChange}
                  />
                </BulletItem>
                <BulletItem>
                  <BulletPoint>3</BulletPoint>
                  <Input
                    id="incomeStream3"
                    placeholder="Potential income stream 3"
                    value={formData.incomeStream3}
                    onChange={handleChange}
                  />
                </BulletItem>
              </BulletList>
              
              <Input
                label="Hold Yourself Accountable: Set up a system for tracking progress. What will you use and how often will you check your progress?"
                id="accountabilitySystem"
                type="textarea"
                placeholder="e.g., Weekly budget review every Sunday, monthly check-in with a friend..."
                value={formData.accountabilitySystem}
                onChange={handleChange}
              />
            </Section>
            
            {/* Section 4: Track Progress */}
            <Section>
              <SectionTitle>Track Your Progress</SectionTitle>
              <SectionDescription>
                Use the table below to track spending and savings progress over four weeks.
              </SectionDescription>
              
              <ProgressTable>
                <Table>
                  <thead>
                    <tr>
                      <th>Week</th>
                      <th>Income Earned</th>
                      <th>Essential Expenses</th>
                      <th>Discretionary Spending</th>
                      <th>Savings Deposited</th>
                      <th>Notes/Adjustments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Input
                          id="week1Income"
                          placeholder="$"
                          value={formData.week1Income}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week1Essential"
                          placeholder="$"
                          value={formData.week1Essential}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week1Discretionary"
                          placeholder="$"
                          value={formData.week1Discretionary}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week1Savings"
                          placeholder="$"
                          value={formData.week1Savings}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week1Notes"
                          placeholder="Notes"
                          value={formData.week1Notes}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Input
                          id="week2Income"
                          placeholder="$"
                          value={formData.week2Income}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week2Essential"
                          placeholder="$"
                          value={formData.week2Essential}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week2Discretionary"
                          placeholder="$"
                          value={formData.week2Discretionary}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week2Savings"
                          placeholder="$"
                          value={formData.week2Savings}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week2Notes"
                          placeholder="Notes"
                          value={formData.week2Notes}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Input
                          id="week3Income"
                          placeholder="$"
                          value={formData.week3Income}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week3Essential"
                          placeholder="$"
                          value={formData.week3Essential}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week3Discretionary"
                          placeholder="$"
                          value={formData.week3Discretionary}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week3Savings"
                          placeholder="$"
                          value={formData.week3Savings}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week3Notes"
                          placeholder="Notes"
                          value={formData.week3Notes}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Input
                          id="week4Income"
                          placeholder="$"
                          value={formData.week4Income}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week4Essential"
                          placeholder="$"
                          value={formData.week4Essential}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week4Discretionary"
                          placeholder="$"
                          value={formData.week4Discretionary}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week4Savings"
                          placeholder="$"
                          value={formData.week4Savings}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Input
                          id="week4Notes"
                          placeholder="Notes"
                          value={formData.week4Notes}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </ProgressTable>
            </Section>
            
            {/* Section 5: Reflect on Progress */}
            <Section>
              <SectionTitle>Reflect on Your Progress</SectionTitle>
              <SectionDescription>
                Taking time to reflect on your journey helps reinforce positive habits and identify areas for improvement.
              </SectionDescription>
              
              <FormGroupTitle>What strategies worked well in helping you manage your budget?</FormGroupTitle>
              
              <BulletList>
                <BulletItem>
                  <BulletPoint>1</BulletPoint>
                  <Input
                    id="successStrategy1"
                    placeholder="Successful strategy 1"
                    value={formData.successStrategy1}
                    onChange={handleChange}
                  />
                </BulletItem>
                <BulletItem>
                  <BulletPoint>2</BulletPoint>
                  <Input
                    id="successStrategy2"
                    placeholder="Successful strategy 2"
                    value={formData.successStrategy2}
                    onChange={handleChange}
                  />
                </BulletItem>
                <BulletItem>
                  <BulletPoint>3</BulletPoint>
                  <Input
                    id="successStrategy3"
                    placeholder="Successful strategy 3"
                    value={formData.successStrategy3}
                    onChange={handleChange}
                  />
                </BulletItem>
              </BulletList>
              
              <Input
                label="What challenges did you face, and how did you handle them?"
                id="challenges"
                type="textarea"
                placeholder="Describe any obstacles and your response to them..."
                value={formData.challenges}
                onChange={handleChange}
              />
              
              <Input
                label="What adjustments can you make to improve your financial habits next month?"
                id="futureAdjustments"
                type="textarea"
                placeholder="List specific changes you plan to implement..."
                value={formData.futureAdjustments}
                onChange={handleChange}
              />
            </Section>
            
            <FormActions>
              <SaveIndicator saved={lastSaved}>
                {isSaving ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                    </svg>
                    Saving...
                  </>
                ) : lastSaved ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    Saved at {lastSaved.toLocaleTimeString()}
                  </>
                ) : null}
              </SaveIndicator>
              
              <Button type="submit">
                Complete Worksheet
              </Button>
            </FormActions>
          </form>
        </WorksheetContainer>
      </div>
    </PageContainer>
  )
}

export default WorksheetPage
