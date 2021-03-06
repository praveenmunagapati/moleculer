/*
 * moleculer
 * Copyright (c) 2017 Ice Services (https://github.com/ice-services/moleculer)
 * MIT Licensed
 */

"use strict";

const {
	CIRCUIT_CLOSE,
	CIRCUIT_HALF_OPEN,
	CIRCUIT_OPEN
} = require("./src/constants");

module.exports = {
	Context: require("./src/context"),
	Service: require("./src/service"),
	ServiceBroker: require("./src/service-broker"),
	Logger: require("./src/logger"),

	Transporters: require("./src/transporters"),
	Cachers: require("./src/cachers"),
	Serializers: require("./src/serializers"),

	Validator: require("./src/validator"),

	Errors: require("./src/errors"),

	Strategies: require("./src/strategies"),

	CIRCUIT_CLOSE,
	CIRCUIT_HALF_OPEN,
	CIRCUIT_OPEN,

	MOLECULER_VERSION: require("./src/service-broker").MOLECULER_VERSION
};
