


const API_BASE_URL = 'https://house-price-backend-lzi6.onrender.com'; 

export const signupUser = async (fullName, email, password) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({ 
      full_name: fullName, 
      email: email, 
      password: password 
    }), 
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.detail || 'Signup failed');
  }
  
  return data;
};