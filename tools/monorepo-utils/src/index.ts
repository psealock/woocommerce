#! /usr/bin/env node
/**
 * External dependencies
 */
import { Command } from '@commander-js/extra-typings';

/**
 * Internal dependencies
 */
import CodeFreeze from './code-freeze/commands';
export { isTodayCodeFreezeDay } from './code-freeze/utils';

const program = new Command()
	.name( 'utils' )
	.description( 'Monorepo utilities' )
	.addCommand( CodeFreeze );

program.parse( process.argv );
