#!/usr/bin/env node
import meow from 'meow';
// import isUrl from 'is-url-superb';

// import methods from 'generator or parser to run this thing'
// import { generateFullTemplate2 } from 'atherdon-newsletter-html-replace';
// import { generateReactFullTemplate } from 'atherdon-newsletter-react-replacer';


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
      --empty  

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
        empty: {
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

// const method = text == 'html' ? filenamifyUrl : filenamify;
const method = (text == 'html') ? 'PARSE=full node ./src/parser' : 'PARSE=reactContentOnly node ./src/parser';


console.log(method(text, cli.flags));