import json

def lambda_handler(event, context):
    # Put your visitor counter logic here
    # For now using placeholder. Replace with DynamoDB increment later
    count = 43
    
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "message": "Hello from Lambda!",
            "visitor_count": count
        })
    }