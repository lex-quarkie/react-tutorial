console.log(React);
console.log(ReactDOM);

var my_news= [
	{
		author : 'Keith Flint',
		text : 'Smack my bitch up'
	},
	{
		author : 'Kurt Cobain',
		text : 'I know a dirty word'
	}
];

console.log(my_news);

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsTemplate ;
		if (data.length > 0) {
			newsTemplate = data.map(function(item,index) {
			return (
			<div key={index}>
				<p className="news__author">{item.author}:</p>
				<p className="news__text">{item.text}</p>
			</div>
		)
	})
		} else {
			newsTemplate = <p> К сожалению новостей нет. </p>
		}

	return (
		<div className="news">
			{newsTemplate}
			<strong className={data.length?'':'none'}>Всего новостей: {data.length}</strong>
		</div>


		);
	}
});


var App = React.createClass({
	render: function() {
		return (
			<div className="app">
			Всем привет, я компонент App! Я умею отображать новости
			<News data={my_news} />
			</div>
			);

	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
	);