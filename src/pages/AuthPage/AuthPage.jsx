import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm />
        </main>
    );
  }