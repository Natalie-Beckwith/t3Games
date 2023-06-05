
<h2>Trivia</h2>

<h3>Play the game in the console</h3>

<script>
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const conversation = [
    {
'role': 'system', 'content': 'You are ChatGPT, a large language model trained by OpenAI.'
}
]

async function sendChatMessage(message) {
  const messages = [...conversation, {'role': 'user', 'content': message}];
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': messages
    })
  };

  try
  {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    const reply = data.choices[0].message.content;

    conversation.push({'role': 'user', 'content': message});
    conversation.push({'role': 'assistant', 'content': reply});

    return reply;
  }
   catch (error)
   {
    console.error('Error:', error);
    return 'An error occurred while communicating with the API.';
   }
}


// Example usage:
async function main()
{
  userMessage = 'Let us play trivia quiz about state capitals. Ask me 5 questions and give me 10 points for each question I answer correctly. Do not penalize me for any incorrect spelling. Tell me my score at the end.';
    reply = await sendChatMessage(userMessage);
    console.log('ChatGPT reply:', reply);

  while(userMessage !== 'quit')
  {
    userMessage = prompt("Please enter your reply:");
    
    if (userMessage === null)
    {
        return;
    }

    reply = await sendChatMessage(userMessage);
    console.log('ChatGPT reply:', reply);

    }
}

main();

</script>
