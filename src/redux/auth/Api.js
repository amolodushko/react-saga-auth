const apiInsertNewUser =  process.env.PUBLIC_URL ? process.env.PUBLIC_URL + '/sign-up' : 'http://localhost:8080/sign-up';
const apiEnterUser =  process.env.PUBLIC_URL ? process.env.PUBLIC_URL + '/sign-in' :'http://localhost:8080/sign-in';

const  insertNewUser = async user => {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user.payload.data)
        };

        const response = await fetch(apiInsertNewUser, config);

        if (response.ok) {
            return response.json()
        }

    } catch (e) {
        console.error(e)
    }
}

const loginUser = async user => {
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user.payload.data)
            };

            const response = await fetch(apiEnterUser, config);

            if (response.ok) {
                return response.json()
            }

        } catch (e) {
            console.error(e)
        }
}

export const Api = {
    insertNewUser,
    loginUser
};
