import { useState } from 'react';
import { Container, VStack, Heading, Input, Button, Text } from "@chakra-ui/react";
import { useLogin } from '../integrations/supabase/index.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const login = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await login(email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                <Heading as="h1" size="xl">Login</Heading>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                />
                {error && <Text color="red.500">{error}</Text>}
                <Button type="submit" colorScheme="teal" size="lg">Login</Button>
            </VStack>
        </Container>
    );
};

export default Login;