#!/usr/bin/env node
import meow from 'meow';
import isUrl from 'is-url-superb';

// import filenamify from 'filenamify';
// import filenamifyUrl from 'filenamify-url';

// https://www.npmjs.com/package/meow

const cli = meow(`
	Usage
      $ parse 
	  $ parse html

	Options
      --contentOnly Content Only option [Default: !]
	  --noAdv  Generating template without advertising block
      --full   Full Template


      --react  React DOM version 
      --reactFull Full template for React template

	Example

      $ parse html  
      $ parse react

	  $ parse --full
	  
	  $ parse --react
	  

`, {
	importMeta: import.meta,
	flags: {
		contentOnly: {
			type: 'boolean',
		},
        noAdv: {
			type: 'boolean',
		},
        full: {
			type: 'boolean',
		},
        react: {
			type: 'boolean',
		},
        reactFull: {
			type: 'boolean',
		},
	},

    //

    // flags: {
    //     parseParse: {
    //         type: 'string',
    //         default: ['html', 'react'],
    //         isMultiple: false,
    //         isRequired: (flags, input) => {
    //             if (flags.otherFlag) {
    //                 return true;
    //             }
    
    //             return false;
    //         }
    //     }
    // }


});

const [text] = cli.input;

const method = isUrl(text) ? filenamifyUrl : filenamify;


console.log(method(text, cli.flags));