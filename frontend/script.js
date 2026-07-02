async function callAPI() {
    const responseElement = document.getElementById('response');
    responseElement.innerText = 'Loading...';
    
    try {
        const res = await fetch('https://aumu8ue198.execute-api.eu-north-1.amazonaws.com/hello');
        const data = await res.json();
        responseElement.innerText = `${data.message} Visitor count: ${data.visitor_count}`;
    } catch (error) {
        responseElement.innerText = 'Error calling API: ' + error;
    }
}