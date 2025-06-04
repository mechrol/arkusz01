import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'

const PageContainer = styled.div`
  padding: 4rem 0;
`

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

const FormContainer = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
`

const FormTitle = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PrivacyNote = styled.p`
  font-size: 0.875rem;
  color: var(--text-light);
  margin-top: 2rem;
  text-align: center;
`

function RegistrationPage({ setUserData }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    reason: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.nickname.trim()) {
      newErrors.nickname = 'Nickname is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setUserData({
        ...formData,
        registrationDate: new Date().toISOString()
      })
      
      setIsSubmitting(false)
      navigate('/worksheet')
    }, 1000)
  }

  return (
    <PageContainer>
      <div className="container">
        <PageTitle>Register to Access the Worksheet</PageTitle>
        
        <FormContainer>
          <FormTitle>Your Information</FormTitle>
          
          <form onSubmit={handleSubmit}>
            <Input
              label="Nickname"
              id="nickname"
              placeholder="How would you like to be called?"
              value={formData.nickname}
              onChange={handleChange}
              error={errors.nickname}
              required
            />
            
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            
            <Input
              label="Why are you interested in breaking the paycheck-to-paycheck cycle? (Optional)"
              id="reason"
              type="textarea"
              placeholder="Share your motivation..."
              value={formData.reason}
              onChange={handleChange}
            />
            
            <FormActions>
              <Button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Registering...' : 'Access Worksheet'}
              </Button>
            </FormActions>
          </form>
          
          <PrivacyNote>
            Your information is secure and will never be shared with third parties.
            We'll use your email only to save your progress and provide financial tips.
          </PrivacyNote>
        </FormContainer>
      </div>
    </PageContainer>
  )
}

export default RegistrationPage
