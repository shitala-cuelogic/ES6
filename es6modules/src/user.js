import slug from 'slug';
import { aliseUrl } from './config';
import base64 from 'base-64';

export default function User(name, email, url) {
	return {name, email, url}
}

export function createURL(name) {
	return `${aliseUrl}/users/${slug(name)}`;
}

export function gravavtar(email) {
	const hash = base64.encode(email);
	const photoURL = `https://www.gravavtar.com/avatar/${hash}`;
	return photoURL;
}