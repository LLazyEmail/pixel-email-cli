#!/usr/bin/env node
import meow from 'meow';
import isUrl from 'is-url-superb';
import filenamify from 'filenamify';
import filenamifyUrl from 'filenamify-url';

const cli = meow(`
	Usage
	  $ parse 

	Options
      --contentOnly Content Only option [Default: !]
	  --noAdv  Generating template without advertising block
      --full   Full Template
      --react  React DOM version 
      --reactFull Full template for React template

	Example
	  $ parse --full
	  
	  $ parse --react
	  

`, {
	importMeta: import.meta,
	flags: {
		replacement: {
			type: 'string',
		},
	},
});

const [text] = cli.input;
const method = isUrl(text) ? filenamifyUrl : filenamify;

console.log(method(text, cli.flags));