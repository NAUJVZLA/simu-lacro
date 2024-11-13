export interface ILoginResponse {
    access_token: string;
    statusCode: number;
    message:    string;
    data:       Data;
}

export interface Data {
    photo: string;
    role: string;
    access_token: string;
    user:         User;
}

export interface User {
    email: string;
    sub:   number;
    role:  string;
    photo: string;
}

