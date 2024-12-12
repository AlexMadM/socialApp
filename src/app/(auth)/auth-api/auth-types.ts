type UserRegisterRequest = {
	userName: string;
	email: string;
	password: string;
	baseUrl?: string;
};

type MeResponse = {
	userId: number;
	userName: string;
	email: string;
	isBlocked: boolean;
};

type UserLoginRequest = {
	email: string;
	password: string;
};

type UserLoginResponse = {
	"accessToken": "string"
};