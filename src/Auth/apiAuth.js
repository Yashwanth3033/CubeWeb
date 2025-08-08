import supabase from "./supabase";

export async function register({email, password, name, surname, heardFrom, description, phone}) {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                surname,
                heardFrom,
                description,
                phone
            }
        }
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}


export async function login({email, password}) {

    let {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        throw new Error(error.message);
    }
    console.log(data);
    return data;
}

export async function getCurrentUser() {
    const {data: session} = await supabase.auth.getSession();

    if (!session.session) {
        return null;
    }
    const {data, error} = await supabase.auth.getUser();
    
    if (error) throw new Error(error.meessage);
    return data?.user;
}

export async function logoutUser() {
    const {error} = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
}


