generator
=========

Mongoose Schema - Mock Data Generator


# Generating data
	
If you do not know how the command (below) works, try and install nodejs,
try to run the following code on the CLI (comand line interface) works with "Git Bash"

	 node index.js -s models/samples.js

This should output a file on the "/output" folder "mock-[xxxx].json"

#  Explaination

node = run node, 

index.js = run the index.js file (with or without arguments)

# Args

Generate some mock data.

	Options:
		-s, --schema   Use a file e.g: models/sample.js      [required]
		-o, --output   Output file,                          [default: "mocked-xxxxxxx.json"]
		-r, --records  Number of records to print!           [default: 10]
		-p, --pretty   Pretty print output                   [default: true]
		-t, --tabsize  Tab size if pretty print.             [default: 2]

# Contributions are welcomed.

This script is very minimalistic, if you like it, or wish to help and get involved suggestions are 
welcomed at the issues page (https://github.com/valtido/generator/issues)
