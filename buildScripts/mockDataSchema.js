export const schema = {
    // this object essentially describes the structure or scheme of a mock api
    // we use faker to generate fake data so that we may have an offline dev api
    // first you declare the data structure is an object
    "type": "object",
    "properties": {
        // has a property called users
        "users": {
            // its an array
            "type": "array",
            // it will have 3-5 items
            "minItems": 3,
            "maxItems": 5,
            "items": {
                // these are the items properties
                "type": "object",
                "properties": {
                    "id": {
                        // setting a key id value, so it must be unique,
                        // and you set the minimum value to 1 to avoid negatives
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    // here we start using faker to generate fake data
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    }
                },
                // here we require all fields or else some will be randomly omitted.

                "required": ["id", "firstName", "lastName", "email"]
            }
        }
    },
    "required": ["users"]
};
