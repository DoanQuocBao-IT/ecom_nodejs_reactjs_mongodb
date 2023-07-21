import bcrypt from 'bcryptjs'

const users=[{
        name: 'Admin User',
        email: 'admin@exemple',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@exemple',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Joan Doe',
        email: 'joan@exemple',
        password: bcrypt.hashSync('123456',10)
    }
]

export default users
