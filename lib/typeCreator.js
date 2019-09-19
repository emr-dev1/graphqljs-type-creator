'use strict';

const graphql = require('graphql');

/**
 * Creates a GraphQLInt field with a description.
 * @param {String} description The description for the field.
 * @returns {Object} The GraphQLInt with a possible description.
 */
function int(description) {
	const intObject = { type: graphql.GraphQLInt };
	if (description) {
		intObject.description = description;
	}
	return intObject;
}

/**
 * Creates a GraphQLString field with a description.
 * @param {String} description The description for the field.
 * @returns {Object} The GraphQLString with a possible description.
 */
function string(description) {
	const stringObject = { type: graphql.GraphQLString };
	if (description) {
		stringObject.description = description;
	}
	return stringObject;
}

/**
 * Creates a GraphQLBoolean field with a description.
 * @param {String} description The description for the field.
 * @returns {Object} The GraphQLBoolean with a possible description.
 */
function bool(description) {
	const boolObject = { type: graphql.GraphQLBoolean };
	if (description) {
		boolObject.description = description;
	}
	return boolObject;
}

/**
 * Creates a GraphQLID field with a description.
 * @param {String} description The description for the field.
 * @returns {Object} The GraphQLID with a possible description.
 */
function id(description) {
	const idObject = { type: graphql.GraphQLID };
	if (description) {
		idObject.description = description;
	}
	return idObject;
}

/**
 * Creates a GraphQLID field with a description.
 * @param {String} description The description for the field.
 * @returns {Object} The GraphQLID with a possible description.
 */
function float(description) {
	const floatObject = { type: graphql.GraphQLFloat };
	if (description) {
		floatObject.description = description;
	}
	return floatObject;
}

/**
 * Creates a GraphQLList with different options.
 * @param {GraphQLType} ofType The type in the array.
 * @param {String} description The description for the field.
 * @param {Function} resolve The callback resolve function.
 * @return {Object} The GraphQLList with a possible description and resolve function.
 */
function array(ofType, description, resolve = null) {
	const arrayObject = { type: new graphql.GraphQLList(ofType) };
	if (description) {
		arrayObject.description = description;
	}
	if (resolve) {
		arrayObject.resolve = resolve();
	}
	return arrayObject;
}

module.exports = {
	int,
	string,
	bool,
	id,
	float,
	array
};
