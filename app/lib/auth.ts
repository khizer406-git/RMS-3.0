export async function authenticateUser(username: string, password: string) {
    // Replace this with your actual authentication logic
    // For example, you might check a database or an external API
    if (username === 'admin@gmail.com' && password === 'password') {
      return { id: 1, name: 'Admin User', email: 'admin@example.com' };
    }
    return null;
  }