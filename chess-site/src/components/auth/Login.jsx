import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import validator from 'validator'
import { regexPassword } from "../../utils";
import {
    Avatar, Box, Button,
    Container, Divider,
    FilledInput,
    FormControl, FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel, Link,
    Stack,
    TextField, Typography, Paper
} from "@mui/material";
import {
    Face as FaceIcon,
    Visibility,
    VisibilityOff
} from "@material-ui/icons";

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    })
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        fetchError: false,
        fetchErrorMsg: '',
    })

    const handleChange = (fieldName) => (Event) => {
        const currValue = Event.target.value;
        let isCorrectValue =
            fieldName === 'email'
                ? validator.isEmail(currValue)
                : regexPassword.test(currValue);

        isCorrectValue
            ? setErrors({ ...errors, [fieldName]:false})
            : setErrors({ ...errors, [fieldName]:true});

        setValues({ ...values, [fieldName]: Event.target.value});
    }

    const handleShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    }

    const handleSubmit = async (Event) => {
        Event.preventDefault();

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });

            if (!res.ok) {
                const error = await res.json()
                return setErrors({
                    ...errors,
                    fetchError: true,
                    fetchErrorMsg: error.msg
                });
            }

            const data = await res.json();
            console.log({ data });

            setErrors({
                ...errors,
                fetchError: true,
                fetchErrorMsg: data.msg,
            });
            setValues({
                email: '',
                password: '',
                showPassword: false,
            });
            return;
        } catch (error) {
            setErrors({
                ...errors,
                fetchError: true,
                fetchErrorMsg:
                    'There was a problem with our server, please try again later',
            });
        }
    }

    return (
        <div>
            <Container sx={{ marginTop: 'calc(100vh - 45%)' }} maxWidth='xs'>
                <Paper elevation={6}>
                    <Container
                        maxWidth='sm'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '20px',
                        }}>
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                bgcolor: 'linear-gradient(120deg, $cp1, $cpa)',
                                boxShadow: '0px 0px 8px rgba(131, 153, 167, 0.99)',
                            }}>
                            <FaceIcon sx={{ fontSize: 70 }} />
                        </Avatar>
                        <h2>Login</h2>
                    </Container>
                    <Stack
                        component='form'
                        onSubmit={handleSubmit}
                        noValidate
                        spacing={6}
                        sx={{ bgcolor: '#767B91', padding: '40px' }}>
                        <TextField
                            variant='filled'
                            type='email'
                            label='Email'
                            value={values.email}
                            onChange={handleChange('email')}
                            error={errors.email}
                            helperText={errors.email && 'Please insert a valid email address'}
                        />

                        <FormControl variant='filled'>
                            <InputLabel htmlFor='password-field'>Password</InputLabel>
                            <FilledInput
                                id='password-field'
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                error={errors.password}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={handleShowPassword}
                                            edge='end'
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                variant='contained'
                                size='large'
                                type='submit'
                                disabled={errors.email || errors.password}
                                sx={{
                                    minWidth: '70%',
                                }}>
                                Login
                            </Button>
                        </Box>
                        {errors.fetchError && (
                            <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
                        )}
                        <Divider />
                        <Typography paragraph align='center'>
                            Don't have an account yet? {' '}
                            <Link component={RouterLink} to='/signup'>
                                Sign up here
                            </Link>
                        </Typography>
                    </Stack>
                </Paper>
            </Container>
        </div>
    );
}

export default Login;