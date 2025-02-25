// Tipo para la información de la dirección
interface Geo {
	lat: string
	lng: string
}

interface Address {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

// Tipo para la información de la empresa
interface Company {
	name: string
	catchPhrase: string
	bs: string
}

// Tipo para la información del usuario
interface User {
	id: number
	name: string
	username: string
	email: string
	address: Address
	phone: string
	website: string
	company: Company
}

// Tipo para un array de usuarios
export type Users = User[]
