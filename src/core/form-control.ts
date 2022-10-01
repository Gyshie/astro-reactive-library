type FormControlType =
	| 'text'
	| 'checkbox'
	| 'radio'
	| 'password'
	| 'button'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'range'
	| 'search'
	| 'submit'
	| 'tel'
	| 'time'
	| 'url'
	| 'week';

export class FormControl {
	name: string;
	type?: FormControlType = 'text';
	value?: string | number | null | string[];
	label?: string;
	labelPosition?: 'right' | 'left' = 'left';
}

/**
 * TODO: Create classes for each control type
 */

export class Checkbox extends FormControl {
	type: 'checkbox';
	checked: boolean;
}

export class Radio extends FormControl {
	type: 'checkbox';
	checked: boolean;
}
