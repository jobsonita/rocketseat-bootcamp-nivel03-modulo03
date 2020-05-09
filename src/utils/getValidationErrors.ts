import { ValidationError as YupValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string
}

const getValidationErrors = (error: YupValidationError): ValidationErrors => {
  const validationErrors: ValidationErrors = {}

  error.inner.forEach((err) => (validationErrors[err.path] = err.message))

  return validationErrors
}

export default getValidationErrors
