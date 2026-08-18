const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { httpMethod, body, pathParameters } = event;
  
  const tableName = process.env.TABLE_NAME;
  
  let response;
  
  try {
    if (httpMethod === 'GET') {
      const data = await dynamo.scan({ TableName: tableName }).promise();
      response = { statusCode: 200, body: JSON.stringify(data.Items) };
    } 
    else if (httpMethod === 'POST') {
      const item = JSON.parse(body);
      item.id = Date.now().toString();
      await dynamo.put({ TableName: tableName, Item: item }).promise();
      response = { statusCode: 200, body: JSON.stringify(item) };
    }
    else if (httpMethod === 'DELETE') {
      await dynamo.delete({ 
        TableName: tableName, 
        Key: { id: pathParameters.id } 
      }).promise();
      response = { statusCode: 200, body: JSON.stringify({ message: 'Deleted' }) };
    }
    else {
      response = { statusCode: 400, body: JSON.stringify({ message: 'Method not supported' }) };
    }
  } catch (error) {
    response = { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
  
  return response;
};