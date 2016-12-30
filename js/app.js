var my_news= [
	{
		author : 'Keith Flint',
		text : 'Smack my bitch up',
		bigText : 'Smack my bitch up, Change my pitch up' 
	},
	{
		author : 'Kurt Cobain',
		text : 'Load up the guns',
		bigText : 'Load up the guns, bring new friends - it\'s fun to lose and to pretend'
	}
];


var Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired,
		})
	},
	getInitialState: function() {
		return {
			visible: false
		};
	},
	readmoreClick: function(e) {
		e.preventDefault();
		this.setState({visible: true});
	},
	render: function() {
		var author = this.props.data.author,
				text = this.props.data.text,
				bigText = this.props.data.bigText,
				visible = this.state.visible;

		return (
			<div className='article'>
				<p className='news__author'>{author}:</p>
				<p className='news__text'>{text}</p>
				<a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
				<p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
			</div>
		)
	}
});

var News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	getInitialState: function() {
		return {
			counter: 0
		}
	},
	render: function() {
		var data = this.props.data;
		var newsTemplate;
		if (data.length > 0) {
			newsTemplate = data.map(function(item,index) {
				return ( 
				<div key={index}>
					<Article data={item} />
				</div>

		)
	})
		} else {
			newsTemplate = <p>К сожалению новостей нет. </p>
		}

	return (
		<div className="news">
			{newsTemplate}
			<strong 
				className={'news__count ' + (data.length > 0 ? '':'none') }
				Всего новостей: {data.length}</strong>
		</div>


		);
	}
});


var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h3>Новости</h3>
				<News data={my_news}/>
			</div>
			);

	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
	);