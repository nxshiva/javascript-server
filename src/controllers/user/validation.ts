const validation = {
    login:
    {
        email: {
            required: true,
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/,
            in: ['body'],
            errorMessage: {
                Error: {
                    error: 'Email is required',
                    message: 'Email is required',
                    timestamp: new Date(),
                    status: 500,
                },
                regexError: {
                    error: 'Regex did not match',
                    message: 'Regex did not match',
                    timestamp: new Date(),
                    status: 500,
                }
            }
        },
        password: {
            required: true,
            in: ['body'],
            errorMessage: {
                Error: {
                    error: 'Password is required',
                    message: 'Password is required',
                    timestamp: new Date(),
                    status: 500,
                }
            }
        }
    }
};

export default validation;