import { DynamoDBClient, ListTablesCommand, QueryCommand  } from "@aws-sdk/client-dynamodb";

// a client can be shared by different commands.
const client = new DynamoDBClient({
    region: 'local',
    credentials: {
        accessKeyId: '6vhwr',
        secretAccessKey: 'pgs2zm'
    }
});

const params = {
    /** input parameters */
};

// async/await.
try {
    const input = { // ListTablesInput
        TableName: 'table',
        ExpressionAttributeNames: {
            ":pk": "customer"
        },
        KeyConditionExpression: "pk=:pk",
        ExpressionAttributeValues: {
            ":pk": {
                S: 'u#1'
            }
        },


    };
    const command = new QueryCommand(input);
    const response = await client.send(command);
    // process data.
    console.log({ responseItems: JSON.stringify(response.Items, 4) });
} catch (error) {
    console.log('error', error);
    // error handling.
} finally {
    // finally.

}