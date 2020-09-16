var app = new Vue({
	el: '#app',
  data: {
  	sections: [
    	{
      	bgColor: '#ec407a',
        content: 'I am section 1'
      },
      {
      	bgColor: '#42a5f5',
        content: 'I am section 2'
      },
      {
      	bgColor: '#66bb6a',
        content: 'I am section 3'
      }
    ],
    options: {
    	// Your custom options here
      duration: 800,
      overlay: false
    }
  }
})
