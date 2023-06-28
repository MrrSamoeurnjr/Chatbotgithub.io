async function chatBot(){
    const send = document.getElementById('send_message');
    const res = document.getElementById('response');
    const url = 'https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'a841fc87eemshb69738416d1b337p11a759jsn71c7b04fba49',
		'X-RapidAPI-Host': 'chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com'
	},
	body:JSON.stringify({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'user',
				content:send.value,
			}
		],
		temperature: 0.8,
		stream: false
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    res.value = result.choices[0].message.content;
	console.log(result);
} catch (error) {
	console.error(error);
}
}





