import { fileName } from './setName/encrypt.ts';
 

class kandoo {

	// path for saving data
	path: string;
	constructor(path: string = './kandoo/') {

		this.path = path;
	}

	// setter
	set(key: string, value: string): string {

		try {
			Deno.mkdirSync(this.path, { recursive: true });
			Deno.writeTextFileSync(this.path + '/' + fileName(key), value);
		}
		catch (err) {
			return 'ERROR: ' + err.name;
			console.log(err);
		}
		return 'OK';
	}


	// getter
	get(key: string): string {

		try {
			var value = Deno.readTextFileSync(this.path + '/' + fileName(key));
		}
		catch (err) {
			return 'ERROR: ' + err.name;
			console.log(err);
		}
		return value;
	}


	// deleterious
	del(key: string): string {

		try {
			Deno.removeSync(this.path + '/' + fileName(key));
		}
		catch (err) {
			return 'ERROR: ' + err.name;
			console.log(err);
		}
		return 'OK';
	}
}


export { kandoo };
